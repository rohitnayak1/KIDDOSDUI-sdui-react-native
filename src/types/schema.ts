export interface Action {
  type:
    | "ADD_TO_CART"
    | "DEEP_LINK"
    | "APPLY_MYSTERY_GIFT_COUPON";

  payload?: Record<string, any>;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface ThemeConfig {
  primary: string;
  background: string;
}

export interface BaseComponent {
  id: string;
  type: string;
}

export interface BannerHeroComponent extends BaseComponent {
  type: "BANNER_HERO";
  image: string;
  title: string;
  action?: Action;
}

export interface ProductGridComponent extends BaseComponent {
  type: "PRODUCT_GRID_2X2";
  products: Product[];
}

export interface DynamicCollectionComponent extends BaseComponent {
  type: "DYNAMIC_COLLECTION";
  title: string;
  products: Product[];
}

export interface OverlayComponent extends BaseComponent {
  type: "FULL_SCREEN_OVERLAY";
  animation_url: string;
}

export type ScreenComponent =
  | BannerHeroComponent
  | ProductGridComponent
  | DynamicCollectionComponent
  | OverlayComponent;

export interface HomePageResponse {
  theme: ThemeConfig;
  components: ScreenComponent[];
}