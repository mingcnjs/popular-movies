import React, {PropsWithChildren} from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {rootReducer} from '../redux/store';
import {configureStore} from '@reduxjs/toolkit';

export function renderWithProviders(
  ui: React.ReactElement,
  {
    store = configureStore({
      reducer: rootReducer,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
