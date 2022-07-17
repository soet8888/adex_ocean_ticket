import * as React from 'react';
import Navs from './routes';
import { Provider } from "react-redux";
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Navs />
    </Provider >
  );
}
