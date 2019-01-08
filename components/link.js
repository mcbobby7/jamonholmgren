import Link from "next/link";

export default ({ spaces, children, ...props }) => (
  <span>
    {spaces ? " " : ""}
    <Link {...props}>{children}</Link>
    {spaces ? " " : ""}
  </span>
);
