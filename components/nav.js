import Link from "next/link";

const Item = ({ href, children }) => (
  <li>
    <Link href={href}>
      <a>{children}</a>
    </Link>

    <style jsx>{`
      li {
        flex: 1;
      }
      a {
        display: block;
        padding: 10px 8px;
        font-size: 18px;
        text-decoration: none;
        color: #000;
        transition: 0.2s;
      }
      a:hover {
        transition: 0.2s;
        color: #dadada;
        font-weight: bold;
      }
    `}</style>
  </li>
);

export default () => (
  <ul>
    <Item href="/beginnings">beginnings</Item>
    <Item href="/now">now</Item>
    <Item href="/tech">tech</Item>
    <Item href="/talks">talks</Item>
    <Item href="/connect">connect</Item>

    <style jsx>{`
      ul {
        list-style-type: none;
        display: flex;
      }
      @media (max-width: 750px) {
        ul {
          display: block;
          padding-left: 0;
        }
      }
    `}</style>
  </ul>
);
