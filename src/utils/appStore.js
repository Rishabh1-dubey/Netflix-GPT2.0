import {configureStore} from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import movieReducer  from"./movieSlice" ; 

// userSlice.reducer;  isko ko useReducer ki trh import kiya gya haiii
const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies:movieReducer,
        //bhai tune idhr movie likha tha iske liye tera mainconatainer render nhi ho rha tha  idhr movies rheaga tbhi redux store re render ho tera movie

    },
});
export default appStore;