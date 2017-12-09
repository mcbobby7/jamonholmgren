import Nav from "./nav";
import Link from "next/link";

export default () => (
  <header>
    <div>
      <Link prefetch href="/">
        <a>
          <span className="title">Jamon Holmgren</span>
        </a>
      </Link>
      <div className="nav">
        <Nav />
      </div>
    </div>

    <style jsx>{`
      header {
        display: flex;
        font-size: 18px;
         {
          /* font-family: Georgia, Cambria, 'Times New Roman', Times, serif; */
        }
        font-family: "Playfair Display", Helvetica, Arial, sans-serif;
        font-weight: 400;
      }
      .title {
        display: inline-block;
        font-size: 46px;
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
      .nav {
        display: inline-block;
        vertical-align: middle;
        position: relative;
        top: 10px;
      }
      @media (max-width: 750px) {
        .title {
          font-size: 36px;
        }
        .nav {
          display: block;
        }
      }
    `}</style>
  </header>
);
