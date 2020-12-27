import { createReducer, createAction } from '@reduxjs/toolkit';

const TEST = 'main/TEST';
const CHANGE_PRODUCT_IMAGE = 'main/CHANGE_PRODUCT_IMAGE';

const test = createAction(TEST);
const chnage_produce_image = createAction(CHANGE_PRODUCT_IMAGE);

const testAction = (props) => (dispatch, getstate, { history }) => {
  alert(props);
  dispatch(test());
};

const changeProductImageAction = (props) => (
  dispatch,
  getstate,
  { history },
) => {
  const { images } = getstate().main.currentProduct;
  dispatch(chnage_produce_image(images[props]));
};

//유저가 사용할 액션을 export 시킨다.
export const actionCreaters = {
  testAction,
  changeProductImageAction,
};

export default createReducer(
  {
    currentProduct: {
      category: 'Men Running Shoe',
      name: 'Nike Joyride Run FlyKint',
      price: 180,
      images: [
        'statics/Image_ej.png',
        'statics/Image_en.png',
        'statics/image_el.png',
      ],
      defaultImage: 'statics/Image_en.png',
    },
  },
  {
    [TEST]: (state, action) => {
      console.log(state);
      return {
        ...state,
        test: true,
      };
    },
    [CHANGE_PRODUCT_IMAGE]: (state, action) => {
      state.currentProduct.defaultImage = action.payload;
    },
  },
);
