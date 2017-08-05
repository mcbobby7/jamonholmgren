import React from 'react'
import Link from 'next/link'
import Page from '../components/page'

export default () => {
  return (
    <Page>
      <div class='photo-wall'>
        <img src='/static/family.jpg' alt='My family' />
        <img src='/static/basketball.jpg' alt='Playing some pick up basketball' />
        <img src='/static/stage.jpg' alt='At Chain React 2017' />
      </div>

      <p className='opening'>
        I've loved software for a very long time.
      </p>

      <p>
        When my dad brought home a 286 in 1991, I was enthralled. I watched as he painstakingly typed and simultaneously repeated `cd backslash games enter` and saw the screen scroll and change. It was mind-blowing to a ten year old.
      </p>

      <p>
        A couple years later, a middle school math teacher gave me a book on BASIC programming, and said she had noticed I liked computers. At home, I discovered that our new 486DX computer had QBasic. I was in heaven.
      </p>

      <p>
        That has led to a life-long obsession with coding. The journey has taken me from running large excavation equipment to framing houses to 3D CAD design, until I eventually landed on a career in software.
      </p>

      <p>
        Read more about it in <Link prefetch href='/beginnings'>Beginnings</Link>.
      </p>

      <hr />

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
        .opening {
          font-weight: normal;
          font-style: italic;
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
