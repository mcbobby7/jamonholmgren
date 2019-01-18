import React from "react";
import Link from "next/link";
import Page from "../components/page";

export default () => {
  return (
    <Page title="The personal website of Jamon">
      <div className="photo-wall">
        <img src="/static/family-2018.jpg" alt="My family" />
        <img
          src="/static/basketball.jpg"
          alt="Playing some pick up basketball"
        />
        <img src="/static/stage.jpg" alt="At Chain React 2017" />
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
        <Link prefetch href="/beginnings">
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

      <h4>Or...</h4>

      <ul>
        <li>
          See how I built a home gym for under $3,000:{" "}
          <a href="/gym">Building My Home Garage Gym</a>
        </li>
        <li>
          Check out a cool pathfinding demo I wrote in Elm!{" "}
          <a href="/static/path.html">Pathfinding Demo</a>
        </li>
        <li>
          Listen to a recent Podcast interview:{" "}
          <a href="https://www.virtualnotdistant.com/podcasts/remote-teams-conversation">
            21st Century Work Life
          </a>
        </li>
        <li>
          Watch a lightning talk I gave at{" "}
          <a href="https://www.youtube.com/watch?v=DOgT_K5tLxU">ElixirConf</a>
        </li>
      </ul>

      <style jsx>{`
        .opening {
          font-weight: normal;
          font-style: italic;
        }

        .photo-wall {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .photo-wall img {
          width: 300px;
          height: 300px;
        }

        @media (max-width: 920px) {
          .photo-wall img {
            width: 33%;
            height: 33%;
          }
        }
      `}</style>
    </Page>
  );
};
