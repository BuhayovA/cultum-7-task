export interface ProductVariant {
  id: string;
  active: boolean;
  externalId: string;
  typeDescriptor: string;
  typeValue: string;
  subtypeDescriptor: string;
  subtypeValue: string;
  image: string;
  retailPrice: number;
  externalPrice: number;
  dealPrice: number;
  sku: string;
  stock: number;
  dealPriceSavingsPercent: number;
  sellWithoutStock: boolean;
}

export interface Product {
  id: string;
  externalId: string;
  name: string;
  description: string;
  variants: ProductVariant[];
  image: string;
  additionalImages: string[];
  videos: string[];
  active: boolean;
  createdAt: number;
  averageRating: number;
  totalReviews: number;
  totalLikes: number;
  totalDislikes: number;
  externalSavingsPercent: number;
  discount: number;
  fulfillmentUrl: string;
}

export const swipeTypes = {
  DISLIKE: 'DISLIKE',
  LIKE: 'LIKE'
};

export type SwipeType = keyof typeof swipeTypes;

export interface SwipeProduct {
  productId: string;
  productImage: string;
  swipeType: SwipeType;
  userId: string;
  userImage: string;
}
