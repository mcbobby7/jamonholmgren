import Nav from './nav'
import Link from 'next/link'

export default () => (
  <header>
    <div>
      <Link prefetch href='/'>
        <a>
          <span className='title'>Jamon Holmgren</span>
        </a>
      </Link>
      <div className='nav'>
        <Nav />
      </div>
    </div>

    <style jsx>{`
      header {
        display: flex;
        font-size: 18px;
        font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
      }
      .title {
        display: inline-block;
        font-size: 46px;
        text-decoration: none;
        padding: 10px 0; 
        color: #000;
        vertical-align: middle; 
      }
      .nav {
        display: inline-block;
        vertical-align: middle;
      }
      @media (max-width: 750px) {
        .title {
          font-size: 16px;
          padding-bottom: 0;
        }
        .nav {
          display: block;
        }
      }
    `}</style>
  </header>
)
