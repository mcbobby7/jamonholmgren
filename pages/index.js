import React from 'react'
import Link from 'next/link'
import Page from '../components/page'

export default () => {
  return (
    <Page>
      <img src='/static/jamonholmgren.jpg' alt='Portrait photo of Jamon Holmgren, quite handsome, or so my wife tells me' id='jamon' />

      <p>
        I’m Jamon Holmgren, a software developer, business owner, husband, and father of four, located near Portland, Oregon, in SW Washington state.
      </p>
      <p>
        I am one of the co-founders of <a href='https://infinite.red'>Infinite Red, Inc.</a>, a web & mobile app design and development studio based out of Portland and San Francisco.
      </p>
      <p>
        Feel free to shoot me an email at <a href='mailto:jamonholmgren@gmail.com'>jamonholmgren@gmail.com</a>. If it's work-related, use <a href='mailto:jamon@infinite.red'>jamon@infinite.red</a>.
      </p>

      <p>
        If you want to see what I'm up to these days, check out my <Link prefetch href='/now'>Now page</Link>. If you're interested in my background, check out <Link prefetch href='/beginnings'>Beginnings</Link>.
      </p>

      <div className='social-icons'>
        <a href='https://twitter.com/jamonholmgren'><img src='/static/twitter.png' /></a>
        <a href='https://github.com/jamonholmgren'><img src='/static/github.png' /></a>
        <a href='https://facebook.com/jamon.holmgren'><img src='/static/facebook.png' /></a>
      </div>

      <style jsx>{`
        img#jamon {
          display: block;
          margin: 30px auto;
        }

        .social-icons {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icons img {
          flex: 1;
        }
      `}</style>
    </Page>
  )
}
