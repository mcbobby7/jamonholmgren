import React from "react";
import Link from "next/link";
import Page from "../components/page";
import YouTube from "react-youtube";

export default () => {
  return (
    <Page
      title="Talks -- recent and upcoming"
      description="Talks I have given recently as well as upcoming talks and meetups"
    >
      <h1>Talks -- Recent and Upcoming</h1>

      <p>
        I sometimes give talks at conferences (when I'm not{" "}
        <Link href="https://infinite.red/ChainReactConf">helping organize one</Link>)
        and meetups. I've added links to a few here and will try to keep it up
        to date. In the upcoming section, I've also added some other meetups and
        conferences I plan to attend even if I'm not speaking, in case you want
        to connect there.
      </p>

      <h3>Upcoming</h3>

      <ul>
        <li>
          I'll be giving a talk at React Native Portland meetup soon (TBD).
        </li>
      </ul>

      <h3>Recent</h3>

      <ul>
        <li>
          <Link href="https://discoverblockchains.com/">Discover Blockchains</Link> - March 24, 2018 - Portland, Oregon
        </li>
        <li>
          <Link href="http://cre8con.com/">Portland Creative Conference (cr8con)</Link> - September 29, 2017 - Portland, Oregon
        </li>
        <li>
          <Link href="https://elixirconf.com">ElixirConf 2017</Link> September 7-8,
          2017 - Bellevue, Washington - I gave a lightning talk titled "Demoing
          Thesis - a Phoenix CMS". Watch video:
          <Link href="https://twitter.com/jamonholmgren/status/907650335824519168">
            here
          </Link>.<br />
          <YouTube
            videoId="DOgT_K5tLxU"
          />
        </li>
        <li>
          <Link href="https://www.meetup.com/Portland-Functional-Programming-Study-Group/events/241862154">
            PDX Func Meetup
          </Link>{" "}
          on Monday, August 14, 2017 - Portland, Oregon - I presented on my{" "}
          <Link href="https://github.com/jamonholmgren/path">
            A* Pathfinding implementation
          </Link>{" "}
          in <Link href="http://elm-lang.org">Elm</Link>.{" "}
          <Link href="https://github.com/jamonholmgren/path/tree/pdxfunc-meetup-2017">
            Source
          </Link>{" "}
          and <Link href="/static/path.html">demo</Link> links.
        </li>
        <li>
          <Link href="http://gwtw.co/80">Getting Work to Work Podcast</Link> on July
          28, 2017 - I was the guest on Chris Martin's excellent podcast and
          talked about remote work, our conference, and more.
        </li>
        <li>
          <Link href="https://infinite.red/ChainReactConf">Chain React</Link> on July
          10-11, 2017 - Portland, Oregon - Gave the welcome and goodbye for our
          first conference ever, which was focused on React Native.
        </li>
        <li>
          <Link href="https://www.meetup.com/Portland-Erlang-Elixir-User-Group/events/240039660/">
            Portland Erlang and Elixir User Group
          </Link>{" "}
          on June 21 - Portland, Oregon - Gave a talk about{" "}
          <Link href="https://github.com/infinitered/thesis-phoenix">Thesis</Link>, a
          CMS for Elixir/Phoenix that I built.
        </li>
        <li>
          <Link href="https://www.meetup.com/React-Native-Portland/events/240582291/">
            React Native Portland
          </Link>{" "}
          on June 15, 2017 - Portland, Oregon - I gave a presentation on{" "}
          <Link href="https://infinite.red/ignite">Ignite CLI</Link>, a starter kit
          for React Native.
        </li>
        <li>
          Clark College on June 1, 2017 - Vancouver, Washington - I was a guest
          speaker
        </li>
      </ul>
    </Page>
  );
};
