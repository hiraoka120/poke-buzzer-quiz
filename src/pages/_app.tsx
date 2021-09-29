import { AppProps } from 'next/app';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from "redux";
import store from '../stores'
import '../styles/globals.css';

// TODO store設定
// const store = createStore(combineReducers({}))

const App = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {

  return (
    <>
      <Provider store={store}>
        <Component
          {...pageProps}
        />
      </Provider>
    </>
  );
};

export default App;