declare namespace Type {
  interface LayoutProps {
    preview: boolean;
    composition: RootComponentInstance;
  }

  interface IconProps {
    width?: number;
    height?: number;
    className?: string;
    fill?: string;
  }

  interface Context {
    preview?: boolean;
  }

  interface Category {
    id: string;
    name: string;
    url: string;
    parentId: string;
  }

  interface ProductImage {
    id: string;
    url: string;
  }

  interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    categories: string[];
    thumbnailId: string;
    images: ProductImage[];
  }

  type ProductsHashCache = Record<string, Product>;

  type Cart = Record<string, CartItem>;

  type SortFields = 'price';

  interface SearchParams {
    limit?: number;
    categoryId?: string;
    keyword?: string;
    sortField?: SortFields;
    sortDirection?: string;
  }

  interface CartItem {
    product: Type.Product;
    quantity: number;
  }

  interface Image {
    src: string;
    alt?: string;
    width: number;
    height: number;
  }
}
