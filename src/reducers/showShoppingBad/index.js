import { ACTION_TYPES } from "../../actions/showShoppingBad";

export default (state = false, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_BAG:
      return true;
    case ACTION_TYPES.HIDE_BAG:
      return false;
    default:
      return state;
  }
};
