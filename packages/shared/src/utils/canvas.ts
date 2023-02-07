import getConfig from 'next/config';
import {
  CanvasClient,
  CANVAS_PUBLISHED_STATE,
  CANVAS_DRAFT_STATE,
  RootComponentInstance,
  enhance,
  EnhancerBuilder,
} from '@uniformdev/canvas';
import { ProjectMapClient, ProjectMapNodeGetRequest } from '@uniformdev/project-map';
import { getAllPaths } from './index';
import { Errors } from '../constants';

interface GetPathsOptions extends Omit<ProjectMapNodeGetRequest, 'projectId' | 'projectMapId'> {
  skipPath?: string;
}

const { uniformApiKey, uniformProjectId, uniformCliBaseUrl } = getConfig().serverRuntimeConfig;

const createUniformClients = () => {
  if (!uniformApiKey || !uniformProjectId || !uniformCliBaseUrl) throw Error(Errors.UniformCredentialsNotSpecified);
  const clientOptions = {
    apiKey: uniformApiKey,
    apiHost: uniformCliBaseUrl,
    projectId: uniformProjectId,
  };
  return { canvasClient: new CanvasClient(clientOptions), projectMapClient: new ProjectMapClient(clientOptions) };
};

const { canvasClient, projectMapClient } = createUniformClients();

export const getCompositionBySlug = async (
  slug: string,
  context: Type.Context,
  enhancers?: EnhancerBuilder
): Promise<RootComponentInstance> => {
  if (!slug) throw new Error(Errors.CompositionSlugNotProvided);
  if (!canvasClient) throw new Error(Errors.CanvasClientNotConfigured);

  const { preview } = context || {};
  const slugHasLeadingSlash = slug.startsWith('/');

  const { composition } = await canvasClient
    .getCompositionBySlug({
      slug,
      state: getState(preview),
    })
    .catch(e => {
      if (e.statusCode !== 404) throw e;
      return canvasClient.getCompositionBySlug({
        slug: slugHasLeadingSlash ? slug.replace('/', '') : `/${slug}`,
        state: getState(preview),
      });
    });

  if (enhancers) {
    await enhance({ composition, enhancers, context: { preview } });
  }

  return composition;
};

/* Official documentation https://docs.uniform.app/reference/packages/uniformdev-project-map#projectmapclient */
export const getPathsFromProjectMap = async (options?: GetPathsOptions): Promise<string[]> => {
  if (!projectMapClient) throw new Error(Errors.ProjectMapClientNotConfigured);
  const { projectMaps } = await projectMapClient.getProjectMapDefinitions().catch(() => ({ projectMaps: [] }));
  const { id: projectMapId } = projectMaps[0] || {};
  const { skipPath, ...restOptions } = options || {};

  if (!projectMapId) return [];

  const paths = await projectMapClient
    .getSubtree({ projectMapId, ...(restOptions || {}) })
    .then(getAllPaths)
    .catch(() => []);

  return skipPath ? paths.filter(path => !path.includes(skipPath)) : paths;
};

export const getState = (preview: boolean | undefined) =>
  preview || process.env.NODE_ENV === 'development' ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE;
