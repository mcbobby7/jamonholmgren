import Link from "next/link";

// Nav component receives `current` as current router path
// in order to add aria-current attributes to nav links.
// @see https://tink.uk/using-the-aria-current-attribute/

const Item = ({ href, current, children }) => {
  return (
  <li>
    <Link href={href}>
      <a aria-current={current ? 'page' : 'false'}>{children}</a>
    </Link>

    <style jsx>{`
      li {
        flex: 1;
      }
      a {
        display: block;
        padding: 10px 8px;
        font-size: 18px;
        text-decoration: underline;
        transition: 0.2s;
      }
      a:hover {
        transition: 0.2s;
        /*
         * This color is a placeholder value to contrast with the global a tag
         * color of firebrick (see meta.js).
         */
        color: green;
        font-weight: bold;
      }

      [aria-current="page"] {
        color: inherit;
        font-weight: bold;
      }
    `}</style>
  </li>
  );
};

export default function Nav({ current }) {
  // Use this ordered list for creating the ul Items dynamically, in order to
  // set the aria-current attribute on each one  correctly.
  const pages = [
    'beginnings',
    'now',
    'tech',
    'talks',
    'connect'
  ];

  return (
    <ul>
      {pages.map((page, i) => {
        let href = '/' + page;
        return (
          <Item key={i} href={href} current={href == current}>{page}</Item>
        )
      })}

      <style jsx>{`
        ul {
          list-style-type: none;

          /*
             Have to remove user agent margin and padding when removing list
             markers.
          */
          margin: 0;
          padding: 0;

          display: flex;
          flex: 1;

          /* Handle narrow viewport by wrapping without media queries */
          flex-flow: row wrap;

          text-align: center;
        }
      `}</style>
    </ul>
  );
}
