import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/test';
import authReducer from './slices/authSlice'
import alertReducer from './slices/alertSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        alert: alertReducer
    }
})