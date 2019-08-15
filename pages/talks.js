import React from "react";
// import Link from "next/link";
import Page from "../components/page";
import YouTube from "react-youtube";
import TweetEmbed from "react-tweet-embed";

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
          I'm planning to give a talk at{" "}
          <a href="https://react-native.eu/">React Native EU</a> in September.
        </li>
        <li>
          On the same trip as the React Native EU conference, I will also be
          speaking at <a href="https://reactlive.nl/">React Live Amsterdam!</a>{" "}
          I can't wait!
          <br />
          <TweetEmbed id="1152044689710673920" />
        </li>
        <li>
          After I get home from Europe, the following month (in October) I'll be
          speaking at a conference in Florida,{" "}
          <a href="https://www.ancientcityruby.com/#/speakers?lang=en&speakerId=7865000000135002">
            Ancient City Ruby/Rails/React
          </a>
          .
        </li>
      </ul>

      <h3>Recent</h3>

      <ul>
        <li>
          I was a guest on the panel at{" "}
          <a href="https://devchat.tv/react-native-radio/rnr-128-chain-react-with-jamon-holmgren/">
            React Native Radio
          </a>{" "}
          for the July 30, 2019 edition.
        </li>
        <li>
          I was interviewed in June for DistantJobs podcast. They just launched
          a new website -- check it out!{" "}
          <a href="https://distantjob.com/blog/podcasts/leading-a-fully-remote-team-with-jamon-holmgren/">
            Leading a Fully Remote Team with Jamon Holmgren
          </a>
        </li>
        <li>
          I am an organizer and was on the speaker panel at{" "}
          <a href="https://infinite.red/ChainReactConf">Chain React 2019</a> in
          July, 2019! It was an amazing conference all around. Here's the video
          of my panel appearance.
          <br />
          <YouTube videoId="Jm19JlVukak" />
          <br />
          <TweetEmbed id="1149780351633391618" />
        </li>
        <li>
          I was a backup speaker at{" "}
          <a href="https://runningremote.com">RunningRemote</a> in Bali in June.
          While I didn't give a talk, I did get a chance to be at that amazing
          conference, which I really loved.
          <br />
          <TweetEmbed id="1144773212791697408" />
        </li>
        <li>
          I spoke at <a href="https://react-finland.fi">React Finland 2019</a>!
          You can see the video here:
          <br />
          <YouTube videoId="gTG8_9Zv0YI" />
          <br />
          My slides are here:{" "}
          <a href="/static/downloads/ReactFinland-Jamon-Holmgren-Slides.pdf">
            ReactFinland-Jamon-Holmgren-Slides.pdf
          </a>
        </li>
        <li>
          While I was in Finland, I also gave a talk about React Native WebView
          at{" "}
          <a href="https://meetabit.com/events/react-helsinki-april-2019">
            React Helsinki
          </a>
          ! They have a video, which I will post when it's available.
          <br />
          {/* <YouTube videoId="gTG8_9Zv0YI" /> */}
          <br />
          My slides are here:{" "}
          <a href="/static/downloads/ReactHelsinki-Jamon-Holmgren-Slides.pdf">
            ReactFinland-Jamon-Holmgren-Slides.pdf
          </a>
        </li>
        <li>
          I was on the <a href="https://reactpodcast.com/43">React Podcast</a>{" "}
          with Michael Chan. He's a great interviewer. Give it a listen!
        </li>
        <li>
          I gave a talk at Portland State University about React Native on
          February 29. It went really well!
        </li>
        <li>
          I was the first speaker at the new meetup in Vancouver, Washington,
          called{" "}
          <a href="https://www.meetup.com/Vancouver-Full-Stack/events/258023247/">
            Vancouver Full Stack
          </a>
          , ! I spoke about Modern JavaScript.
          <br />
          <YouTube videoId="wXvXcrjgiXw" />
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
        <li>
          I was interviewed on the Cultivate Now Podcast with Jonathan Sharp.{" "}
          <a href="https://remote.works/episode/2">Link to the episode</a> and{" "}
          <a href="https://remote.works/episode/2/transcript">transcript</a>.
        </li>
      </ul>
    </Page>
  );
};
