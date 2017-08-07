import Link from 'next/link'

const Item = ({ href, children }) => (
  <li>
    <Link prefetch href={href}>
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
      }
      a:hover {
        color: #fbc74c;
      }
    `}</style>
  </li>
)

export default () => (
  <ul>
    <Item href='/beginnings'>beginnings</Item>
    <Item href='/now'>now</Item>
    <Item href='/tech'>tech</Item>
    <Item href='/talks'>talks</Item>
    <Item href='/connect'>connect</Item>

    <style jsx>{`
      ul {
        list-style-type: none;
        display: flex;
      }
    `}</style>
  </ul>
)
