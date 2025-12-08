import {configureStore} from '@reduxjs/toolkit'
import pageReducer from '../features/pageslicer'
export default configureStore({
    reducer:{
        page : pageReducer
    }
})