import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reduxSlice/user'
const appStore=configureStore({
    reducer:{
        user:userReducer,
    }
});
export default appStore;