import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import components from './slice/componentSlice';

export default configureStore({
  reducer: {
    components,
  },
  middleware: [thunk],
});
