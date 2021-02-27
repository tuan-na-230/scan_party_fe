import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/test';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})