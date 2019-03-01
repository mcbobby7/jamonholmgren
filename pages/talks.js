import React from "react";
// import Link from "next/link";
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
        <a href="https://infinite.red/ChainReactConf">helping organize one</a>)
        and meetups. I've added links to a few here and will try to keep it up
        to date. In the upcoming section, I've also added some other meetups and
        conferences I plan to attend even if I'm not speaking, in case you want
        to connect there.
      </p>

      <h3>Upcoming</h3>

      <ul>
        <li>
          I've been invited to speak at{" "}
          <a href="https://react-finland.fi">React Finland</a> on April 24-26
          and will be speaking about{" "}
          <a href="https://infinite.red/ignite">Ignite</a>! Let me know{" "}
          <a href="https://twitter.com/jamonholmgren">on Twitter</a> if you'll
          be there.
        </li>
        <li>
          I'm planning to go to{" "}
          <a href="https://runningremote.com">RunningRemote</a> in June!
        </li>
        <li>
          I will be speaking at{" "}
          <a href="https://infinite.red/ChainReactConf">Chain React 2019</a>!
          Topic TBD. Let me know{" "}
          <a href="https://twitter.com/jamonholmgren">on Twitter</a> if you'll
          be there.
        </li>
      </ul>

      <h3>Recent</h3>

      <ul>
        <li>
          I gave a talk at Portland State University about React Native on
          February 29.
        </li>
        <li>
          I was the first speaker at the new meetup in Vancouver, Washington,
          called{" "}
          <a href="https://www.meetup.com/Vancouver-Full-Stack/events/258023247/">
            Vancouver Full Stack
          </a>
          , ! I spoke about Modern JavaScript.
          <br />
          <p>
            <em>Youtube video coming soon!</em>
          </p>
        </li>
        <li>
          I spoke at the{" "}
          <a href="https://www.meetup.com/React-Native-Portland/">
            React Native Portland Meetup
          </a>{" "}
          on Thursday, December 20 about writing React Native modules in
          Objective-C and Java.
        </li>
        <li>
          I spoke at{" "}
          <a href="https://byteconf.com/react-native-2018">
            ByteConf React Native
          </a>{" "}
          on Friday, December 14, 2018. I spoke about{" "}
          <a href="https://infinite.red/ignite">
            Making React Native Development better with Ignite
          </a>
          <br />
          <YouTube videoId="RY2TMZCO9Wo" />
        </li>
        <li>
          I was on the{" "}
          <a href="https://www.virtualnotdistant.com/podcasts/remote-teams-conversation">
            21st Century Work Life
          </a>{" "}
          podcast recently with Pilar Orti. I really enjoyed my chat with her
          about remote work. Check it out!
        </li>
        <li>
          <a href="https://building.infinite.red">Building Infinite Red</a>{" "}
          Season 1 is out! In this new podcast, my cofounders and I talk about
          the challenges and our philosophy for running a digital agency. Season
          2 coming soon!
        </li>
        <li>
          <a href="https://discoverblockchains.com/">Discover Blockchains</a>-
          March 24, 2018 - Portland, Oregon
        </li>
        <li>
          <a href="http://cre8con.com/">
            Portland Creative Conference (cr8con)
          </a>
          - September 29, 2017 - Portland, Oregon
        </li>
        <li>
          <a href="https://elixirconf.com">ElixirConf 2017</a> September 7-8,
          2017 - Bellevue, Washington - I gave a lightning talk titled "Demoing
          Thesis - a Phoenix CMS".
          <br />
          <YouTube videoId="DOgT_K5tLxU" />
        </li>
        <li>
          <a href="https://www.meetup.com/Portland-Functional-Programming-Study-Group/events/241862154">
            PDX Func Meetup
          </a>
          on Monday, August 14, 2017 - Portland, Oregon - I presented on my
          <a href="https://github.com/jamonholmgren/path">
            A* Pathfinding implementation
          </a>
          in <a href="http://elm-lang.org">Elm</a>.
          <a href="https://github.com/jamonholmgren/path/tree/pdxfunc-meetup-2017">
            Source
          </a>
          and <a href="/static/path.html">demo</a> links.
        </li>
        <li>
          <a href="http://gwtw.co/80">Getting Work to Work Podcast</a> on July
          28, 2017 - I was the guest on Chris Martin's excellent podcast and
          talked about remote work, our conference, and more.
        </li>
        <li>
          <a href="https://infinite.red/ChainReactConf">Chain React</a> on July
          10-11, 2017 - Portland, Oregon - Gave the welcome and goodbye for our
          first conference ever, which was focused on React Native.
        </li>
        <li>
          <a href="https://www.meetup.com/Portland-Erlang-Elixir-User-Group/events/240039660/">
            Portland Erlang and Elixir User Group
          </a>
          on June 21, 2017 - Portland, Oregon - Gave a talk about
          <a href="https://github.com/infinitered/thesis-phoenix">Thesis</a>, a
          CMS for Elixir/Phoenix that I built.
        </li>
        <li>
          <a href="https://www.meetup.com/React-Native-Portland/events/240582291/">
            React Native Portland
          </a>
          on June 15, 2017 - Portland, Oregon - I gave a presentation on
          <a href="https://infinite.red/ignite">Ignite CLI</a>, a starter kit
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
