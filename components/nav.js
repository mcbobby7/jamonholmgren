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
        padding: 0 0.5rem;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 1rem;
      }
      a:hover {
        transition: 0.2s;
        /*
         * This color is a placeholder value to contrast with the global a tag
         * color of firebrick (see meta.js).
         */
        color: #1890FF;
        font-weight: bold;
      }

      [aria-current="page"] {
        color: #1890FF;
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
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;

          /*
             Have to remove user agent margin and padding when removing list
             markers.
          */
          margin: 0;
          padding: 0;

          display: flex;
          flex: 1;
        }
      `}</style>
    </ul>
  );
}
