import { Errors, ProductPagesPrefixes } from '../constants';
import { buildUrl } from '.';

export const buildSubCategoryUrl = (firstParam: string, secondParam: string) => {
  return buildUrl([ProductPagesPrefixes.ProductListPage, firstParam, secondParam]);
};

export const getProductSearchResult = (products: Type.Product[], params: Type.SearchParams): Type.Product[] => {
  let searchResult = products;
  const { categoryId, keyword, sortField, sortDirection } = params;

  if (categoryId) {
    searchResult = products.filter(item => item.categories.includes(categoryId));
  }

  if (keyword) {
    searchResult = searchResult.filter(item => {
      return item.name.toLowerCase().includes(keyword.toString().toLowerCase());
    });
  }

  if (sortField) {
    searchResult = searchResult.sort((a, b) => {
      return sortDirection === 'asc' ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
    });
  }

  return searchResult;
};

export const getProductsByIds = (productsHashCache: Type.ProductsHashCache, ids: string[]) => {
  return ids.map(id => productsHashCache[id]);
};

export const getProductIdByProductSlug = (slug: string) => {
  const [productId] = slug.split('-').reverse();

  if (!productId) {
    throw new Error(Errors.UnableToFindProductId);
  }

  return productId;
};

export const getProductListingParamsFromSlug = ([firstParam, secondParam]: string[]) => {
  return {
    category: firstParam,
    subCategory: secondParam,
  };
};

export const getRelatedProducts = (productsHashCache: Type.ProductsHashCache, productId: string) => {
  const product = productsHashCache[productId];
  const productCategories = product?.categories || [];
  return Object.values(productsHashCache).filter(
    item => item.categories.some(category => productCategories.includes(category)) && item.id !== product?.id
  );
};

export const getAvailableSubCategoriesPaths = (parentCategoriesPaths: string[], categories: Type.Category[]) => {
  return parentCategoriesPaths.reduce<string[]>((acc, parentCategoryPath) => {
    const currentCategory = categories.find(category => parentCategoryPath.includes(category.url));

    if (currentCategory) {
      const subCategories = categories.filter(subCategory => subCategory.parentId === currentCategory.id);

      const categoryWithSubCategory = subCategories.map(subCategory => buildUrl([parentCategoryPath, subCategory.url]));

      return [...acc, ...categoryWithSubCategory];
    }

    return acc;
  }, []);
};
