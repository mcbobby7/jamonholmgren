import React from 'react'
import Link from 'next/link'
import Page from '../components/page'
import YouTube from 'react-youtube'

export default () => {
  return (
    <Page title='Talks -- recent and upcoming' description='Talks I have given recently as well as upcoming talks and meetups'>
      <h1>Talks -- Recent and Upcoming</h1>

      <p>
        I sometimes give talks at conferences (when I'm not <a href='https://infinite.red/ChainReactConf'>helping organize one</a>) and meetups. I've added links to a few here and will try to keep it up to date. In the upcoming section, I've also added some other meetups and conferences I plan to attend even if I'm not speaking, in case you want to connect there.
      </p>

      <h3>Upcoming</h3>

      <ul>
        <li>I'm taking a break from meetups and conferences for a few months, but I'll be back soon.</li>
      </ul>

      <h3>Recent</h3>

      <ul>
        <li><a href='http://cre8con.com/'>Portland Creative Conference (cr8con)</a> September 29, 2017 - Portland, Oregon - I didn't give a talk here, but I did attend.</li>
        <li><a href='https://elixirconf.com'>ElixirConf 2017</a> September 7-8, 2017 - Bellevue, Washington - I gave a lightning talk titled "Demoing Thesis - a Phoenix CMS". Watch video <a href='https://twitter.com/jamonholmgren/status/907650335824519168'>here</a>.<br />

        <YouTube 
          videoId="YqOwzXNkOyg"
          opts={{ playerVars: { start: 2653 } }}
        />

        </li>
        <li><a href='https://www.meetup.com/Portland-Functional-Programming-Study-Group/events/241862154'>PDX Func Meetup</a> on Monday, August 14, 2017 - Portland, Oregon - I presented on my <a href='https://github.com/jamonholmgren/path'>A* Pathfinding implementation</a> in <a href='http://elm-lang.org'>Elm</a>. <a href='https://github.com/jamonholmgren/path/tree/pdxfunc-meetup-2017'>Source</a> and <a href='/static/path.html'>demo</a> links.</li>
        <li><a href='http://gwtw.co/80'>Getting Work to Work Podcast</a> on July 28, 2017 - I was the guest on Chris Martin's excellent podcast and talked about remote work, our conference, and more.</li>
        <li><a href='https://infinite.red/ChainReactConf'>Chain React</a> on July 10-11, 2017 - Portland, Oregon - Gave the welcome and goodbye for our first conference ever, which was focused on React Native.</li>
        <li><a href='https://www.meetup.com/Portland-Erlang-Elixir-User-Group/events/240039660/'>Portland Erlang and Elixir User Group</a> on June 21 - Portland, Oregon - Gave a talk about <a href='https://github.com/infinitered/thesis-phoenix'>Thesis</a>, a CMS for Elixir/Phoenix that I built.</li>
        <li><a href='https://www.meetup.com/React-Native-Portland/events/240582291/'>React Native Portland</a> on June 15, 2017 - Portland, Oregon - I gave a presentation on <a href='https://infinite.red/ignite'>Ignite CLI</a>, a starter kit for React Native.</li>
        <li>Clark College on June 1, 2017 - Vancouver, Washington - I was a guest speaker</li>
      </ul>
    </Page>
  )
}
