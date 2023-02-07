import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import { enhance, generateHash } from '@uniformdev/canvas';
import { Errors } from 'shared/src/constants';
import { RestMethods } from '@/constants';
import getEnhancers from '@/utils/enhancers';

const {
  serverRuntimeConfig: { previewSecret: secret },
} = getConfig();

const enhancer = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  if (method !== RestMethods.Post) {
    return res.status(405).json({ message: Errors.MethodNotImplemented });
  }

  if (!body?.composition) {
    return res.status(400).json({ message: Errors.CanvasCompositionIsNotProvided });
  }

  const { composition } = body;

  const hasProvidedHash = Boolean(body.hash);

  if (hasProvidedHash && Boolean(secret)) {
    const calculatedHash = generateHash({ composition, secret });

    if (calculatedHash !== body.hash) {
      return res.status(401).json({ message: Errors.NotAuthorized });
    }
  } else if (Boolean(secret)) {
    return res.status(401).json({ message: Errors.NotAuthorized });
  }

  await enhance({
    composition,
    enhancers: getEnhancers('en-US'),
    context: { preview: true },
  });

  return res.status(200).json({ composition });
};

export default enhancer;
