import BannerHero from "../components/BannerHero";
import ProductGrid2x2 from "../components/ProductGrid2x2";
import DynamicCollection from "../components/DynamicCollection";
import FullScreenOverlay from "../components/FullScreenOverlay";
import UnknownComponent from "../components/UnknownComponent";

const registry: Record<
  string,
  React.ComponentType<any>
> = {
  BANNER_HERO: BannerHero,

  PRODUCT_GRID_2X2:
    ProductGrid2x2,

  DYNAMIC_COLLECTION:
    DynamicCollection,

  FULL_SCREEN_OVERLAY:
    FullScreenOverlay,
};

export const getComponent = (
  type: string
) => {
  return (
    registry[type] ||
    UnknownComponent
  );
};