import Header from "./header";
import Meta from "./meta";
import Footer from "./footer";

export default props => {
  return (
    <div className="page">
      <Meta title={props.title} description={props.description} />
      
      <Header />

      <main role='main' className="main">{props.children}</main>

      <Footer />

      <style jsx>{`
        .page {
          margin: auto;
          max-width: 950px;
        }

        .main {
          color: #000;
          padding: 3px 0px;
        }
      `}</style>
    </div>
  );
};
