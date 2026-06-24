import { cartStore } from "../store/cartStore";

export interface Action {
  type: string;
  payload?: Record<
    string,
    any
  >;
}

export const handleAction = (
  action?: Action
) => {
  if (!action) return;

  switch (action.type) {
    case "ADD_TO_CART":
      cartStore
        .getState()
        .addItem(
          action.payload?.id
        );

      break;

    case "DEEP_LINK":
      console.log(
        "Navigate To:",
        action.payload?.url
      );

      break;

    case "APPLY_MYSTERY_GIFT_COUPON":
      console.log(
        "Coupon Applied"
      );

      break;

    default:
      console.warn(
        "Unsupported Action:",
        action.type
      );
  }
};