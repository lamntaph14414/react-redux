import { combineReducers } from "redux";
import productSlice from "./product/productSlice";
import cateProSlice from "./categoryPro/cateProSlice";
import userSlice from "./user/userSlice";
import proInCateSlice from "./categoryPro/proInCateSlice";
import productSearchSlice from "./product/productSearchSlice";
import { reducer as toastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
    toastr: toastrReducer,
    product: productSlice,
    category: cateProSlice,
    user: userSlice,
    proInCate: proInCateSlice,
    productSearch: productSearchSlice,

})

export default rootReducer;