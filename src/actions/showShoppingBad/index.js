export const ACTION_TYPES = {
  SHOW_BAG: "SHOW_BAG",
  HIDE_BAG: "HIDE_BAG",
};

export const showBag = () => ({ type: ACTION_TYPES.SHOW_BAG });
export const hideBag = () => ({ type: ACTION_TYPES.HIDE_BAG });
