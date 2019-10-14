import React from "react";
import Link from "next/link";
import Page from "../components/page";

export default () => {
  return (
    <Page title="The personal website of Jamon">
      <div className="photo-wall">
        <img src="/static/family-2018.jpg" alt="My family" />
        <img src="/static/goalie.jpg" alt="Playing ice hockey" />
        <img src="/static/stage-2019.jpg" alt="At React Live Amsterdam 2019" />
      </div>

      <h2 className="opening">I've loved software for a very long time.</h2>

      <p>
        When my dad brought home a 286 in 1991, I was enthralled. I watched as
        he painstakingly typed and simultaneously repeated{" "}
        <code>cd backslash games enter</code> and saw the screen scroll and
        change. It was mind-blowing to a ten year old.
      </p>

      <p>
        A couple years later, a middle school math teacher gave me a book on
        BASIC programming, and said she had noticed I liked computers. At home,
        I discovered that our new 486DX computer had QBasic. I was in heaven.
      </p>

      <p>
        That has led to a life-long obsession with coding. The journey has taken
        me from running large excavation equipment to framing houses to 3D CAD
        design, until I eventually landed on a career in software.
      </p>

      <p>
        Read more about it in{" "}
        <Link href="/beginnings">
          <a>Beginnings</a>
        </Link>
        .
      </p>

      <hr />

      <p>
        I’m Jamon Holmgren, a software developer, business owner, husband, and
        father of four, located near Portland, Oregon, in SW Washington state.
      </p>
      <p>
        I am one of the co-founders of{" "}
        <a href="https://infinite.red">Infinite Red, Inc.</a>, a web & mobile
        app design and development studio based out of Portland and San
        Francisco.
      </p>
      <p>
        Feel free to shoot me an email at{" "}
        <a href="mailto:jamonholmgren@gmail.com">jamonholmgren@gmail.com</a>. If
        it's work-related, use{" "}
        <a href="mailto:jamon@infinite.red">jamon@infinite.red</a>.
      </p>

      <h3>Or...</h3>

      <ul>
        <li>
          Check out our new custom pool deck:{" "}
          <Link href="/pool-deck">
            <a>Our Custom Pool Deck</a>
          </Link>
        </li>
        <li>
          See how I built a home gym:{" "}
          <Link href="/gym">
            <a>Building My Home Garage Gym</a>
          </Link>
        </li>
        <li>
          Check out a cool pathfinding demo I wrote in Elm!{" "}
          <a href="/static/path.html">Pathfinding Demo</a>
        </li>
        <li>
          Listen to a recent Podcast interview:{" "}
          <a href="https://devchat.tv/react-native-radio/rnr-128-chain-react-with-jamon-holmgren/">
            React Native Radio #128 - Chain React with Jamon Holmgren
          </a>
        </li>
        <li>
          Watch a 5 minute lightning talk I gave at{" "}
          <a href="https://www.youtube.com/watch?v=DOgT_K5tLxU">ElixirConf</a>
          {" "}
          or other{" "}
          <Link href="/talks">
            <a>talks</a>
          </Link>.
        </li>
      </ul>

      <hr />

      <p>
        P.S. I built this website in <a href="https://nextjs.org">Next.js</a> and
        I've had a great experience with it.{" "}
        <a href="https://twitter.com/jamonholmgren/status/1065447628966514688">
          Upgrading
        </a>{" "}
        is super easy. This website is{" "}
        <a href="https://github.com/jamonholmgren/jamonholmgren">
          open source on Github!
        </a>
      </p>

      <style jsx>{`
        hr {
          background: lightgray;
          height: 0.15rem;
          border: none;
          margin: 1em 0.25em;
        }

        .opening {
          font-weight: normal;
          font-style: italic;
        }

        .photo-wall {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin: 2em 0;
        }
        .photo-wall img {
          /* Let browser handle scaling... */
          height: 33%;
          width: 33%;

          /* ...up to our max dimensions. */
          max-height: 300px;
          max-width: 300px;
        }
      `}</style>
    </Page>
  );
};
