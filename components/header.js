import { useState } from "react";
import Nav from "./nav";
import Link from "next/link";

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div id="head">
        <Link href="/">
          <a>
            <span className="title">Jamon Holmgren</span>
          </a>
        </Link>
        <a
          href="javascript:void(0);"
          id="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          MENU
        </a>
        <div id="nav" className={menuOpen ? "menu-open" : "menu-closed"}>
          <Nav />
        </div>
      </div>

      <style jsx>{`
        header {
          display: flex;
          font-size: 18px;
          font-family: "Roboto Mono", monospace;
          font-weight: 400;
        }
        #head {
          flex: 1;
          align-items: center;
        }
        :global(#head a) {
          color: #000000;
        }
        .title {
          display: inline-block;
          font-size: 36px;
          text-decoration: none;
          padding: 0 0;
          margin: 10px 0;
          color: #000;
          vertical-align: middle;
          line-height: 1.4;
          border-width: 0 0 3px;
          border-color: #dadada;
          border-style: solid;
        }
        :global(#nav) {
          display: block;
          float: right;
          vertical-align: middle;
          position: relative;
          top: 10px;
          height: auto;
          overflow: hidden;
          flex: 1;
        }
        :global(#menu-toggle) {
          font-family: "Roboto Mono", monospace;
          font-size: 12px;
          display: none;
          float: right;
          padding: 10px;
          text-decoration: none;
          text-align: right;
          position: relative;
          top: 20px;
        }
        :global(#menu-toggle img) {
          width: 25px;
          height: 25px;
        }
        @media (max-width: 760px) {
          .title {
            font-size: 26px;
          }
          :global(#nav) {
            display: flex;
            height: 0;
            transition: height 0.5s, opacity 0.5s;
            float: none;
          }
          :global(#nav.menu-open) {
            height: auto;
            transition: height 0.5s, opacity 0.5s;
          }
          :global(#nav.menu-closed) {
            height: 0;
            opacity: 0;
            transition: height 0.5s, opacity 0.5s;
          }
          :global(#menu-toggle) {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};
