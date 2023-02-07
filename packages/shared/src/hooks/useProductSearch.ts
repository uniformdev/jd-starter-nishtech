import { useCallback, useState, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { DefaultSortField } from '../constants';
import { getProductSearchResult } from '../utils/products';

const useProductSearch = (prefetchedSearchResult: Type.Product[], categoryId: string) => {
  const [keyword, setKeyword] = useState('');
  const [sortDirection, setSortDirection] = useState<string | undefined>(undefined);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Type.Product[]>(prefetchedSearchResult);

  const getProducts = useCallback(
    (searchParams: Type.SearchParams) => {
      setIsLoading(true);

      const newSearchResult = getProductSearchResult(prefetchedSearchResult, searchParams);

      setProducts(newSearchResult);
      setIsLoading(false);
    },
    [prefetchedSearchResult]
  );

  const getProductsDebounce = useMemo(() => debounce(getProducts, 700), [getProducts]);

  const triggerSearch = useCallback(
    (changedField: string, newValue: unknown) => {
      const dynamicSearchParams = {
        keyword,
        sortDirection,
        [changedField]: newValue,
      };

      getProductsDebounce({
        categoryId,
        sortField: dynamicSearchParams.sortDirection ? DefaultSortField : undefined,
        keyword: dynamicSearchParams.keyword,
        sortDirection: dynamicSearchParams.sortDirection,
      });
    },
    [keyword, sortDirection, categoryId, getProductsDebounce]
  );

  return { isLoading, products, triggerSearch, keyword, setKeyword, sortDirection, setSortDirection };
};

export default useProductSearch;
