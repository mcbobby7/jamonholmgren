import Header from './header'
import Meta from './meta'

export default ({ children }) => (
  <div className='main'>
    <Meta />
    <Header />

    <div className='page'>
      {children}
    </div>

    <style jsx>{`
      .main {
        margin: auto;
        padding: 40px;
        height: 100vh;
        max-width: 1000px;
      }

      .page {
        color: #000;
        padding: 3px 0px;
      }

      @media (max-width: 750px) {
        .main {
          padding: 10px;
          width: auto;
        }
      }
    `}</style>
  </div>
)
