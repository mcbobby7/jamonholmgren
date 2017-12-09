import Header from "./header";
import Meta from "./meta";

export default props => (
  <div className="main">
    <Meta title={props.title} description={props.description} />
    <Header />

    <div className="page">{props.children}</div>

    <div className="social-icons">
      <a href="https://twitter.com/jamonholmgren">
        <img src="/static/twitter.png" />
      </a>
      <a href="https://github.com/jamonholmgren">
        <img src="/static/github.png" />
      </a>
      <a href="https://facebook.com/jamon.holmgren">
        <img src="/static/facebook.png" />
      </a>
    </div>

    <style jsx>{`
      .main {
        margin: auto;
        height: 100vh;
        max-width: 950px;
      }

      .page {
        color: #000;
        padding: 3px 0px;
      }

      .social-icons {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .social-icons img {
        flex: 1;
      }

      @media (max-width: 750px) {
        .main {
          padding: 5px;
          width: auto;
        }
      }
    `}</style>
  </div>
);
