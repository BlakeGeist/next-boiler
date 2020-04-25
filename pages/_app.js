import React from "react";
import withReduxStore from "../lib/reducers";
import { Provider } from "react-redux";
import setUserState from "../helpers/_setUserState";
import redirectIfNoLanguage from "../helpers/redirectIfNoLanguage";
import getPageStrings from "../helpers/_getPageStrings";
import getGlobalStrings from "../helpers/_getGlobalStrings";
import Head from 'next/head'

const MyApp = ({ Component, pageProps, reduxStore }) => {
    return (
        <>
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      return { pageProps };
};

export default withReduxStore(MyApp);
