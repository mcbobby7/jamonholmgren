import React from "react";
import Page from "../../components/page";
// import Link from 'next/link'

export default () => {
  return (
    <Page title="What I will write">
      <h1>What I'll write</h1>
      <p>
        <em>Published December 11, 2013</em>
      </p>

      <p>
        For the longest time, I redirected this domain to my company site. "Too
        busy, can't blog," I thought.
      </p>

      <p>
        No more. Prepare ye' self. I shall blog!
        <em>(EDIT: Well, for a while...)</em>
      </p>

      <p>
        What about? Since it's a personal blog, probably a lot about the things
        I care about. You'll see a lot of tech and programming topics. I might
        talk about my family a bit.
      </p>

      <p>
        <img src="/static/family.jpg" alt="My family" />
      </p>
      <p>
        <em>Yeah, that’s a lot of kids.</em>
      </p>

      <p>
        I won’t talk about politics at all or religion-specific topics much
        here. I’m sure you get enough of that elsewhere. I’m a Christian,
        Lutheran in fact, and take my faith seriously, but that’s not what this
        blog will be focused on.
      </p>

      <p>
        Feel free to follow me on Twitter – I’ll post links there as I write
        posts.
      </p>

      <p>
        And feel free to reach out with comments, criticism, even positive
        things. I like people, so unless you’re a complete jerk I’ll probably
        like you. :-)
      </p>
    </Page>
  );
};
