import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <title>{props.title || "Personal website"} - Jamon Holmgren</title>
      <meta name="description" content={props.description} />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"
        rel="stylesheet"
      />
      <link
        data-fontset-id="ce-fontset"
        href="https://fonts.googleapis.com/css?family=Playfair+Display"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      body {
        font-family: "Source Sans Pro", "Open Sans", sans-serif;
        /* font-family: "Playfair Display", Helvetica, Arial, sans-serif; */

        font-size: 1rem;
        padding: 1em 0.5em;
        margin: 0;
        line-height: 1.5;
        background-color: white;
      }
      
      * {
        box-sizing: border-box;
      }

      h1,
      h2 {
        font-size: 2rem;
        font-weight: normal;
        line-height: 1.25;
        font-family: "Roboto Mono", monospace;
      }

      a {
        color: firebrick;
      }

      p {
        margin: 0.5em 0;
      }

      /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: #000000;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #000000, 0 0 5px #000000;
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </div>
);
