import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {api} from '../services/service';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import videosSlice from './videosSlice';

export const rootReducer = combineReducers({
  workOrder: videosSlice,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
