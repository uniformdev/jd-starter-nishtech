import React, { FC, ChangeEvent, useCallback } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import { useRouter } from 'next/router';
import Container, { PaddingSize } from '../Container';
import ProductCatalogFilterList from '../ProductCatalogFilterList';
import ProductCatalogSearchResult from '../ProductCatalogSearchResult';
import Dropdown from '../atoms/Dropdown';
import IconSearch from '../icons/IconSearch';
import { buildSubCategoryUrl } from '../../utils/products';
import useProductSearch from '../../hooks/useProductSearch';
import { CanvasComponents, DefaultSortOption, SortOptions } from '../../constants';

type Props = ComponentProps<{
  categories: Type.Category[];
  prefetchedSearchResult: Type.Product[];
  activeCategory: Type.Category;
  title?: string;
}>;

const ProductCatalog: FC<Props> = ({ categories, activeCategory, prefetchedSearchResult, title = '' }) => {
  const router = useRouter();

  const { isLoading, products, triggerSearch, keyword, setKeyword, sortDirection, setSortDirection } = useProductSearch(
    prefetchedSearchResult,
    activeCategory?.id
  );

  // This function  handles the click on the sub-category, if the sub-category is already selected it will remove the it from the url
  const onSubCategoryClick = useCallback(
    (subCategoryUrl: string) => {
      const { category: queryCategory, subcategory: querySubCategory } = router.query || {};

      const category = String(queryCategory);
      const subCategory = String(querySubCategory);

      let urlToRedirect = buildSubCategoryUrl(category, subCategoryUrl);

      if (subCategory === subCategoryUrl) {
        urlToRedirect = buildSubCategoryUrl(category, '');
      }

      router.push(urlToRedirect, undefined, { scroll: false });
    },
    [router]
  );

  const handleSearchKeywordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const searchKeyword = e.target.value;
      setKeyword(searchKeyword);
      triggerSearch('keyword', searchKeyword);
    },
    [triggerSearch, setKeyword]
  );

  const handleSortChange = useCallback(
    (value?: string) => {
      setSortDirection(value);
      triggerSearch('sortDirection', value);
    },
    [triggerSearch, setSortDirection]
  );

  if (!categories || !activeCategory || !prefetchedSearchResult) return null;

  return (
    <Container paddingBottom={PaddingSize.None}>
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <p className="text-2xl lg:text-3xl font-bold mb-4 pl-3 sm:mb-0 min-w-[18%]">{title}</p>
        <div className="flex flex-1 flex-col items-center md:flex-row justify-between">
          <div className="lg:w-[70%] w-full flex justify-start md:pl-2 pb-8 md:pb-0">
            <div className="relative bg-gray-50 flex lg:ml-4 w-full md:w-[70%] h-[50px] direction-row border-gray-300 index-1">
              <input
                type="text"
                value={keyword}
                onChange={handleSearchKeywordChange}
                placeholder="Search by keyword or product"
                className="w-[90%] h-full block px-3 py-2 bg-gray-50 border-none outline-none placeholder:text-black"
              />
              <div className="absolute top-4 right-3">
                <IconSearch />
              </div>
            </div>
          </div>
          <div className="min-w-[193px]">
            <Dropdown
              title="Sort By"
              defaultOption={DefaultSortOption}
              options={SortOptions}
              value={sortDirection as string}
              onChange={handleSortChange}
            />
          </div>
        </div>
      </div>
      <div className="sm:pt-12 pt-10 flex flex-col pb-24 lg:flex-row">
        <div className="xl:pr-16 xl:mr-3 flex flex-row lg:flex-col justify-evenly lg:justify-start lg:w-1/5">
          <ProductCatalogFilterList
            title="Categories"
            list={categories}
            activeItem={activeCategory}
            onClick={onSubCategoryClick}
          />
        </div>
        <div className="flex flex-row flex-wrap w-full lg:w-4/5">
          <div className="lg:flex flex-row flex-wrap lg:justify-start justify-center z-0 w-full">
            <ProductCatalogSearchResult isLoading={isLoading} products={products} searchValue={keyword} />
          </div>
        </div>
      </div>
    </Container>
  );
};

registerUniformComponent({
  type: CanvasComponents.ProductCatalog,
  component: ProductCatalog,
});

export default ProductCatalog;
