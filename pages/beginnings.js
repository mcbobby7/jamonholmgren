import React from 'react'
import Link from 'next/link'
import Page from '../components/page'

export default () => {
  return (
    <Page>
      <h1>Beginnings</h1>
      <img src='/static/jamonholmgren.jpg' alt='Portrait photo of Jamon Holmgren, quite handsome, or so my wife tells me' id='jamon' />
      <p>
        I grew up in a small town in northwest Oregon. In the early 90s, my dad bought his first computer, and I started programming in QBasic shortly afterward. From age twelve through my teenage years, I built hundreds of games, some small and some larger. I also played varsity basketball in high school and read a lot.
      </p>
      <p>
        I went to a single semester of community college and then quit. I moved to Vancouver, WA, and still live in that area today.
      </p>
      <p>
        I was working for a home builder (the same one that built both of my homes, <Link href='http://www.newtraditionhomes.com'>New Tradition Homes</Link> and was put in charge of their website. Eventually, I decided to start my own business, <Link href='https://clearsightstudio.com'>ClearSight</Link>, doing small business websites myself, in August of 2005. Fast-forward a few years and I started hiring developers to work with me, and eventually built the business to around a dozen.
      </p>
      <p>
        In late 2015, I merged my company with another and created the design and development agency <Link href='https://infinite.red'>Infinite Red</Link>. My role there is Chief Operating Officer as well as co-CTO.
      </p>
      <p>
        <em>
          <Link href='/now' prefetch>Read more about what I'm doing now</Link>
        </em>
      </p>
      <p>
        <em>
          <Link href='/archive' prefetch>Archive of old blog posts I've kept around</Link>
        </em>
      </p>
      <style jsx>{`
        img {
          display: block;
          float: right;
          margin-left: 10px;
        }
      `}</style>
    </Page>
  )
}

// I grew up in a small town in northwest Oregon. In the early 90s, my dad got a computer, and I started programming in QBasic shortly afterward. From age twelve through my teenage years, I built hundreds of games, some small and some larger. I also played varsity basketball in high school and read a lot.

// I went to a single semester of community college and then quit. I moved to Vancouver, WA with my parents and siblings and still live in that area today.

// I was working for a home builder (the same one that built both of my houses, New Tradition Homes) and in charge of their website. Eventually, I decided to start my own business (ClearSight) doing small business websites myself, in August of 2005. Fast-forward a few years and I started hiring developers to work with me, and eventually built the business to around a dozen.
