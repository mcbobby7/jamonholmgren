import Link from 'next/link'

const Item = ({ href, children }) => (
  <li>
    <Link prefetch href={href}>
      <a>{children}</a>
    </Link>

    <style jsx>{`
      li {
        display: inline-block;
      }
      a {
        display: inline-block;
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
    <Item href='https://infinite.red'>infinite.red</Item>
    <Item href='https://github.com/jamonholmgren'>github</Item>
    <Item href='https://twitter.com/jamonholmgren'>twitter</Item>
    <Item href='https://facebook.com/jamon.holmgren'>facebook</Item>

    <style jsx>{`
      ul {
        list-style-type: none;
      }
    `}</style>
  </ul>
)
