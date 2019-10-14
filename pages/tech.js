import React from "react";
import Page from "../components/page";
import YouTube from "react-youtube";
import TweetEmbed from "react-tweet-embed";

export default () => {
  return (
    <Page
      title="My favorite tech"
      description="All about my favorite technologies and what I am currently learning"
    >
      <h2>My Favorite Tech (for now)</h2>

      <p>
        If there's one thing I've learned, it's that I love to explore new
        technologies. Here's a description of what I'm currently learning about
        and playing with.
      </p>

      <h3>Gluegun CLI</h3>

      <p>
        I've been working a lot on Gluegun, our CLI system, and recently
        released version 2.0!
      </p>

      <TweetEmbed id="1075473950107410433" />

      <h3>Electron</h3>

      <p>I kinda love Electron, to be honest.</p>

      <h3>React Native Community Core Team</h3>

      <p>
        I've recently joined the React Native community core team and have been
        working on the "Lean Core" initiative, specifically the WebView, which I{" "}
        <a href="/talks">talked about</a> recently.
      </p>

      <TweetEmbed id="1050893463762300928" />

      <h3>Elixir & Phoenix</h3>

      <p>
        My company also uses <a href="http://elixir-lang.org">Elixir</a>
        and the
        <a href="http://phoenixframework.org">Phoenix web framework</a>
        for many of our websites, web apps, back ends, and APIs.
      </p>
      <p>
        Elixir is probably my favorite programming language. It combines
        functional ideas in a practical way with a Ruby-esque beauty and
        Erlang's powerful underlying OTP and virtual machine.
      </p>
      <p>
        I've built a content management system for Elixir / Phoenix called
        <a href="https://github.com/infinitered/thesis-phoenix">Thesis</a>. It's
        really slick, although not a lot of people know about it.
      </p>

      <YouTube videoId="DOgT_K5tLxU" />

      <h3>Next.js, Now.sh</h3>

      <p>
        This website is
        <a href="https://github.com/jamonholmgren/jamonholmgren">open source</a>
        and written in <a href="https://zeit.co/blog/next">Next.js</a>, deployed
        via <a href="https://zeit.co/now">Now.sh</a>. The process couldn't have
        been easier! I really enjoyed it from the initial spin-up to porting
        over my old Ghost CMS blog posts to deploying live and configuring the
        DNS.
      </p>
      <p>
        Not only that, but I recently upgraded it from Next 2 to Next 7 and had
        basically no problems at all.
      </p>
      <TweetEmbed id="1065447628966514688" />
    </Page>
  );
};
