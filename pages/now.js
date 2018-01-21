import React from "react";
import Page from "../components/page";
import Link from "next/link";
import YouTube from "react-youtube";

export default () => {
  return (
    <Page title="What I am doing now">
      <h1>What I'm doing now</h1>

      <p>
        <em>Last updated January 20, 2018.</em>
      </p>

      <p>
        <em>
          (Inspired by Derek Sivers' <a href="http://sivers.org/now">post</a>,
          here's what I'm currently up to.)
        </em>
      </p>

      <p>
        My family had a <a href='https://www.facebook.com/jamon.holmgren/posts/10156004630782090?pnref=story'>huge, life-altering event</a> happen on Christmas Eve.
        We returned home to find our house burglarized and on fire. We are thankful everyone is safe and
        that law enforcement caught the suspects.
      </p>

      <p>
        While this has been a topsy-turvy event in our lives, life does go on. Here's what I'm up to:
      </p>

      <ul>
        <li>
          We are now moved into a rental home not far from our home, which has about six months of
          restoration construction ahead.
        </li>
        <li>
          Our family has a kitten, Willow, who is about 8 or 9 months old.
        </li>
        <li>
          Been working out fairly regularly, although it's been harder now that we're in a rental.
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
