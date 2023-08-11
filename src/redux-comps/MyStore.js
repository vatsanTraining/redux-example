import { configureStore,createSlice } from '@reduxjs/toolkit';

import NameReducer from './NameReducer';
import RatingReducer from './RatingReducer';

  
  
const store = configureStore({
    reducer:RatingReducer
});

export default store;
