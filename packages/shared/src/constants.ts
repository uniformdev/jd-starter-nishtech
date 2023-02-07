export const AppPages = {
  Home: '/',
};

export enum ProductPagesPrefixes {
  ProductListPage = '/shop',
  ProductDetailsPage = '/products',
}

export const MaxCarouselImagesCountToDisplay = 5;

export const DefaultSortField = 'price';

export enum Errors {
  UniformCredentialsNotSpecified = 'Uniform credentials must be specified',
  CanvasClientNotConfigured = 'Canvas client is not configured',
  ProjectMapClientNotConfigured = 'ProjectMapClient client is not configured',
  CompositionSlugNotProvided = 'Composition slug is not provided',
  CanvasCompositionIsNotProvided = 'Canvas composition is not provided',
  MethodNotImplemented = 'Method not implemented',
  InvalidPreviewToken = 'Invalid preview token',
  NotAuthorized = 'Not authorized',
  UnableToFindProductId = 'Unable to find product id in slug',
}

export enum CanvasComponents {
  Hero = 'hero',
  FeaturedCallout = 'featuredCallout',
  ProductInfo = 'productInfo',
  AddToCart = 'addToCart',
  ProductImageGallery = 'productImageGallery',
  ProductDescription = 'productDescription',
  ProductCatalog = 'productCatalog',
  RelatedProducts = 'relatedProducts',
  FeaturedProducts = 'featuredProducts',
  Divider = 'divider',
  Container = 'container',
  SectionTwoColumns = 'sectionTwoColumns',
  ContactForm = 'contactForm',
}

export enum ApiEndpoints {
  GetProducts = '/api/products/get',
}

export const VisualCanvasDefaultParams = {
  productId: '80',
  category: 'coffee-makers',
};

export enum SortFields {
  PRICE = 'price',
}

export const DefaultSortOption = {
  label: 'Sort By',
  value: undefined,
};

export const SortOptions = [
  {
    label: 'Price: Low to High',
    value: 'asc',
  },
  {
    label: 'Price: High to Low',
    value: 'desc',
  },
];
