import Nav from "./nav";
import Link from "next/link";

import { withRouter } from 'next/router';
// Use withRouter to wrap the Header component, so we can pass the current
// pathname to the Nav component.
function Header({ router }) {
  return (
    <header>
      <div id="links">
        <Link href="/">
          <h1>
            <a className="title" role="link">Jamon Holmgren</a>
          </h1>
        </Link>

        <nav role="nav">
          {/* Pass current path here.  */}
          <Nav current={router.pathname}/>
        </nav>
      </div>

      <style jsx>{`
        header {
          display: flex;
          font-size: 18px;
          font-family: "Roboto Mono", monospace;
          font-weight: 400;
        }
        #links {
          flex: 1;
          align-items: center;
        }

        .title {
          display: inline-block;
          font-size: 2rem;
          cursor: pointer;
          text-decoration: none;
          padding: 0 0;
          margin: 10px 0;
          vertical-align: middle;
          line-height: 1.4;
          border-width: 0 0 3px;
          border-color: #dadada;
          border-style: solid;
        }

        nav {
          display: flex;
          transition: height 0.5s, opacity 0.5s;
        }
      `}</style>
    </header>
  );
};

export default withRouter(Header);
