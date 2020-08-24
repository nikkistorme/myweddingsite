import '../styles/globals.css'
import Page from '../components/Page.js';

/**
 * Determines if we are running on server or in client.
 * @return {boolean} true if running on server
 */
function getIsServerRendered() {
  return typeof window === 'undefined';
}

/**
* Accessibility tool - outputs to devtools console on dev only and client-side only.
* @see https://github.com/dequelabs/react-axe
*/
if (process.env.NODE_ENV !== 'production' && !getIsServerRendered()) {
  const ReactDOM = require('react-dom');
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }) {
  return(
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;