export const RENDER_NEW_ITEMS = "RENDER_NEW_ITEMS";
export const DELETE_ITEM = "DELETE_ITEM";

export const reducers = (state, { type, payload }) => {
  switch (type) {
    case RENDER_NEW_ITEMS:
      return { ...state };

    default:
      return state;
  }
};
