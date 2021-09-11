import { AppProps } from 'next/app';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from "redux";

// TODO store設定
const store = createStore(combineReducers({}))

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