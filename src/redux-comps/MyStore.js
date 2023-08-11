import { configureStore} from '@reduxjs/toolkit';

import NameReducer from './NameReducer';
import RatingReducer from './RatingReducer';
  
  
const store = configureStore({
    reducer: {
        names: NameReducer,
        reviews: RatingReducer,
      },
     });


export default store;
