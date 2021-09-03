import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import components from './slice/componentSlice';
import rockets from './slice/rocketsSlice';
import loader from './slice/loaderSlice';

export default configureStore({
  reducer: {
    components,
    rockets,
    loader,
  },
  middleware: [thunk],
});
