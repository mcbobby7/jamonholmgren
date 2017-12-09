import React from "react";
import Page from "../components/page";
import Link from "next/link";
import YouTube from "react-youtube";

export default () => {
  return (
    <Page title="What I am doing now">
      <h1>What I'm doing now</h1>

      <p>
        <em>Last updated December 8, 2017.</em>
      </p>

      <p>
        <em>
          (Inspired by Derek Sivers' <a href="http://sivers.org/now">post</a>,
          here's what I'm currently up to.)
        </em>
      </p>

      <p>
        I'm in my home in Washington state, watching the rain drizzle down. My
        kids are in school (all but the youngest). I'm spending most of my time
        working remotely from my home office as Chief Operating Officer at{" "}
        <a href="https://infinite.red">
          my mobile &amp; web app development company
        </a>. I also just bought a new{" "}
        <a href="https://www.boltdrones.com/">$200 Bolt Drone</a> which I fly
        between raindrops -- it's surprisingly fun!
      </p>

      <YouTube videoId="SSeH7Z9pVEQ" />

      <ul>
        <li>
          Our family now has a new kitten, Willow (we had another, Waldo, but he
          unfortunately ran away)
        </li>
        <li>
          Been working out regularly -- just finished a 12 week "Cowboy Method"
          program
        </li>
        <li>
          <Link prefetch href="/tech">
            Playing with some new languages and frameworks
          </Link>
        </li>
      </ul>

      <p>
        <img
          width="468"
          alt="derek sivers tweet"
          src="https://cloud.githubusercontent.com/assets/1479215/19919313/1452e898-a08f-11e6-9e7c-3fc212129f29.png"
        />
      </p>
    </Page>
  );
};
