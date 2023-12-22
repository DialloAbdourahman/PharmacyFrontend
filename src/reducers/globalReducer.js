import {
  CALCULATE_CART_TOTAL,
  SET_CATEGORIES,
  START_LOADING,
  STOP_LOADING,
  ADD_TO_CART,
  OPEN_ADMIN_SIDEBAR,
  CLOSE_ADMIN_SIDEBAR,
  OPEN_ADDITIONAL_ADMIN_SIDEBAR,
  CLOSE_ADDITIONAL_ADMIN_SIDEBAR,
  BLUR_BG,
  UNBLUR_BG,
  SHOW_UPDATE_PROFILE,
  HIDE_UPDATE_PROFILE,
} from '../utils/actions';

const globalReducer = (state, action) => {
  if (action.type === START_LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === STOP_LOADING) {
    return { ...state, loading: false };
  }

  if (action.type === ADD_TO_CART) {
    return { ...state, cart: [...state.cart, action.payload] };
  }

  if (action.type === CALCULATE_CART_TOTAL) {
    const cartAmount = state.cart.reduce((total, item) => {
      total += item.amount;
      return total;
    }, 0);

    const cartTotalPrice = state.cart.reduce((total, item) => {
      total += item.price * item.productamount;
      return total;
    }, 0);

    return { ...state, cartAmount, cartTotalPrice };
  }

  if (action.type === SET_CATEGORIES) {
    return { ...state, categories: action.payload };
  }

  if (action.type === OPEN_ADMIN_SIDEBAR) {
    return {
      ...state,
      adminSidebar: {
        ...state.adminSidebar,
        sidebar: true,
      },
    };
  }

  if (action.type === CLOSE_ADMIN_SIDEBAR) {
    return {
      ...state,
      adminSidebar: {
        ...state.adminSidebar,
        sidebar: false,
      },
    };
  }

  if (action.type === OPEN_ADDITIONAL_ADMIN_SIDEBAR) {
    return {
      ...state,
      adminSidebar: {
        ...state.adminSidebar,
        additionalSidebar: true,
      },
    };
  }

  if (action.type === CLOSE_ADDITIONAL_ADMIN_SIDEBAR) {
    return {
      ...state,
      adminSidebar: {
        ...state.adminSidebar,
        additionalSidebar: false,
      },
    };
  }

  if (action.type === BLUR_BG) {
    return {
      ...state,
      blurBg: true,
    };
  }

  if (action.type === UNBLUR_BG) {
    return {
      ...state,
      blurBg: false,
    };
  }

  if (action.type === SHOW_UPDATE_PROFILE) {
    return {
      ...state,
      showUpdateProfile: true,
    };
  }

  if (action.type === HIDE_UPDATE_PROFILE) {
    return {
      ...state,
      showUpdateProfile: false,
    };
  }

  return new Error(`No matching "${action.type}" - action type`);
};

export default globalReducer;
