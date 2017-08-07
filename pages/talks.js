import React from 'react'
import Link from 'next/link'
import Page from '../components/page'

export default () => {
  return (
    <Page title='Talks -- recent and upcoming' description='Talks I have given recently as well as upcoming talks and meetups'>
      <h1>Talks -- Recent and Upcoming</h1>

      <p>
        I sometimes give talks at conferences (when I'm not <a href='https://infinite.red/ChainReactConf'>helping organize one</a>) and meetups. I've added links to a few here and will try to keep it up to date.
      </p>

      <h3>Upcoming</h3>

      <ul>
        <li><a href='https://elixirconf.com'>ElixirConf 2017</a> September 7-8, 2017 - Bellevue, Washington - I may submit a lightning talk, although I'm not decided yet. Either way, if you're going, say hi!</li>
        <li><a href='https://www.meetup.com/Portland-Functional-Programming-Study-Group/events/241862154'>PDX Func Meetup</a> on Monday, August 14, 2017 - Portland, Oregon - I'll be presenting on my <a href='https://github.com/jamonholmgren/path'>A* Pathfinding implementation</a> in <a href='http://elm-lang.org'>Elm</a>.</li>
      </ul>

      <h3>Recent</h3>

      <ul>
        <li><a href='http://gwtw.co/80'>Getting Work to Work Podcast</a> on July 28, 2017 - I was the guest on Chris Martin's excellent podcast and talked about remote work, our conference, and more.</li>
        <li><a href='https://infinite.red/ChainReactConf'>Chain React</a> on July 10-11, 2017 - Portland, Oregon - Gave the welcome and goodbye for our first conference ever, which was focused on React Native.</li>
        <li><a href='https://www.meetup.com/Portland-Erlang-Elixir-User-Group/events/240039660/'>Portland Erlang and Elixir User Group</a> on June 21 - Portland, Oregon - Gave a talk about <a href='https://github.com/infinitered/thesis-phoenix'>Thesis</a>, a CMS for Elixir/Phoenix that I built.</li>
        <li><a href='https://www.meetup.com/React-Native-Portland/events/240582291/'>React Native Portland</a> on June 15, 2017 - Portland, Oregon - I gave a presentation on <a href='https://infinite.red/ignite'>Ignite CLI</a>, a starter kit for React Native.</li>
        <li>Clark College on June 1, 2017 - Vancouver, Washington - I was a guest speaker</li>
      </ul>
    </Page>
  )
}
