import React from "react";
import Page from "../components/page";
import Link from "next/link";
// import YouTube from "react-youtube";

export default () => {
  return (
    <Page title="What I am doing now">
      <h1>What I'm doing now</h1>

      <p>
        <em>Last updated March 21, 2019. 🎃</em>
      </p>

      <p>
        <em>
          (Inspired by Derek Sivers' <a href="http://sivers.org/now">post</a>,
          here's what I'm currently up to.)
        </em>
      </p>

      <p>
        My family had a{" "}
        <a href="https://twitter.com/jamonholmgren/status/945465737874829317">
          huge, life-altering event
        </a>{" "}
        happen on Christmas Eve, 2017. We returned home to find our house
        burglarized and on fire. We are thankful everyone is safe and that law
        enforcement caught the suspects. We're now back in our house and settled
        back in.
      </p>

      <p>
        While this has been a topsy-turvy event in our lives, life does go on.
        Here's what I'm up to:
      </p>

      <ul>
        <li>
          I'm{" "}
          <a href="https://twitter.com/jamonholmgren/status/1083544483214446592">
            learning to play piano
          </a>
          ! My current plan is to learn one song per month. So far, I've learned
          Monody by the Fat Rat and am working on Sound of Silence by Simon and
          Garfunkel.
        </li>
        <li>
          Our family has a cat, Willow, who is about a year and a half old.
        </li>
        <li>
          I'm continuing to work out in my{" "}
          <Link prefetch href="/gym">
            new home gym
          </Link>
          .
        </li>
        <li>
          <Link prefetch href="/tech">
            <a>Playing with some new languages and frameworks</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/talks">
            <a>
              Organizing, attending, and speaking at conferences and meetups
            </a>
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
