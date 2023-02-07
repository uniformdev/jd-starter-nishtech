import { EnhancerBuilder, ComponentParameter, ChildEnhancerBuilder } from '@uniformdev/canvas';
import {
  FAKE_COMMERCE_PARAMETER_TYPES,
  parameterIsProductSelector,
  isParameterProductSelectorDefined,
  parameterIsProductQuery,
  isParameterProductQueryDefined,
  MeshEditorProductSelectorParams,
  MeshEditorProductQueryParams,
} from '@uniformdev/canvas-fake-commerce';
import { getProductSearchResult, getRelatedProducts } from '../utils/products';
import { CanvasComponents, VisualCanvasDefaultParams } from '../constants';

//TODO: use type from @uniformdev/canvas-fake-commerce when it will be updated
interface EnhanceParameter {
  parameter: ComponentParameter<MeshEditorProductQueryParams & MeshEditorProductSelectorParams & Type.SearchParams>;
}

interface GetFakeCommerceEnhancersParams {
  productId?: string;
  category?: string;
  subCategory?: string;
  categories?: Type.Category[];
}

interface ProductComponentParameterEnhancerParams {
  productId: string;
}

interface ProductListComponentParameterEnhancerParams {
  category: string;
  subCategory?: string;
  categories: Type.Category[];
}

const getComponentParameterEnhancer = (productsHashCache: Type.ProductsHashCache) => ({
  enhanceOne: async function Enhancer({ parameter }: EnhanceParameter) {
    if (parameterIsProductSelector(parameter)) {
      if (!isParameterProductSelectorDefined(parameter.value)) {
        return null;
      }
      return Object.values<Type.Product>(productsHashCache).filter(item =>
        parameter.value.productIds?.includes(item.id)
      );
    }
    if (parameterIsProductQuery(parameter)) {
      if (!isParameterProductQueryDefined(parameter.value)) {
        return null;
      }
      return getProductSearchResult(Object.values(productsHashCache), parameter.value);
    }
  },
});

const getProductComponentParameterEnhancer =
  (productsHashCache: Type.ProductsHashCache, options: ProductComponentParameterEnhancerParams) =>
  (builder: ChildEnhancerBuilder) => {
    builder.data('product', () => productsHashCache[options.productId]);
  };

const getRelatedProductComponentParameterEnhancer =
  (productsHashCache: Type.ProductsHashCache, options: ProductComponentParameterEnhancerParams) =>
  (builder: ChildEnhancerBuilder) => {
    builder.data('relatedProducts', () => getRelatedProducts(productsHashCache, options?.productId));
  };

const getProductListComponentParameterEnhancer =
  (productsHashCache: Type.ProductsHashCache, options: ProductListComponentParameterEnhancerParams) =>
  (builder: ChildEnhancerBuilder) => {
    const { category, subCategory, categories } = options;

    const products = Object.values(productsHashCache);
    const currentMainCategory = categories.find(item => item.url === category);
    const currentCategory = categories.find(item => item.url === (subCategory || category));

    builder.data('categories', () => {
      const currentSubCategories = categories?.filter(item => item.parentId === currentMainCategory?.id);
      return currentSubCategories;
    });
    builder.data('prefetchedSearchResult', () => {
      return getProductSearchResult(products, {
        categoryId: currentCategory?.id,
      });
    });
    builder.data('activeCategory', () => currentCategory);
  };

export const getFakeCommerceEnhancers = (
  productsHashCache: Type.ProductsHashCache,
  options?: GetFakeCommerceEnhancersParams
): EnhancerBuilder => {
  // We should set default value to this enhancer to make it works with visual canvas
  const {
    productId = VisualCanvasDefaultParams.productId,
    category = VisualCanvasDefaultParams.category,
    subCategory,
    categories = [],
  } = options || {};
  return new EnhancerBuilder()
    .parameterType(FAKE_COMMERCE_PARAMETER_TYPES, getComponentParameterEnhancer(productsHashCache))
    .component(
      [
        CanvasComponents.ProductInfo,
        CanvasComponents.ProductImageGallery,
        CanvasComponents.ProductDescription,
        CanvasComponents.AddToCart,
      ],
      getProductComponentParameterEnhancer(productsHashCache, { productId })
    )
    .component(
      [CanvasComponents.RelatedProducts],
      getRelatedProductComponentParameterEnhancer(productsHashCache, { productId })
    )
    .component(
      [CanvasComponents.ProductCatalog],
      getProductListComponentParameterEnhancer(productsHashCache, {
        category,
        subCategory,
        categories,
      })
    );
};
