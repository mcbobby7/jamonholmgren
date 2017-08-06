import Header from './header'
import Meta from './meta'

export default (props) => (
  <div className='main'>
    <Meta title={props.title} description={props.description} />
    <Header />

    <div className='page'>
      {props.children}
    </div>

    <style jsx>{`
      .main {
        margin: auto;
        height: 100vh;
        max-width: 1150px;
      }

      .page {
        color: #000;
        padding: 3px 0px;
      }

      @media (max-width: 750px) {
        .main {
          padding: 5px;
          width: auto;
        }
        img {
          width: 320px;
          display: block;
          margin 0 auto;
        }
      }
    `}</style>
  </div>
)
