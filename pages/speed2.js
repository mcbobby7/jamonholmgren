import React from "react";
import Page from "../components/page";
// import Link from 'next/link'

export default () => {
  return (
    <Page title="RubyMotion Speed, Part 2">
      <h1>RubyMotion Speed, Part 2</h1>
      <p>
        <em>Published May 29, 2015</em>
      </p>

      <p>
        In my <a href="http://jamonholmgren.com/speed">last article</a>, I
        complained about RubyMotion compile times and proposed a solution. I
        even released a gem, called
        <a href="https://github.com/jamonholmgren/compressor">Compressor</a>,
        that speeds up large project compiles by up to 90% in some cases.
      </p>

      <p>
        Today, HipByte
        <a href="https://twitter.com/RubyMotion/status/604323863464427522">
          released version 3.12
        </a>
        with much faster compile times for iOS. This is great news!
      </p>

      <h3 id="howitworks">How it works</h3>

      <p>
        In 3.11 and below, RubyMotion would spawn a new compiler instance for
        every file. With 3.12, they now boot up the compiler and fork the
        process for each file, sharing the compiler memory. This drastically
        reduces the boot-up time for each file.
        <a href="https://twitter.com/watson1978">Watson</a> came up with this
        methodology.
      </p>

      <p>So, let's put it through its paces.</p>

      <h3 id="speedimprovements">Speed improvements</h3>

      <p>
        I tested a clean build for 3.11 vs 3.12, with and without Compressor on
        the latest version of
        <a href="https://itunes.apple.com/us/app/beast-mode-fitness/id963380881?mt=8">
          Beast Mode Fitness
        </a>
        (new 1.1 version). I have a MacBook Pro 13" late 2013 dual-core 2.4ghz
        i5. Compressor is configured to concatenate only gem files (not
        <code>app</code>), which is my recommendation. There are 323 total
        RubyMotion files, including 101 app files. We use the
        <a href="https://robots.thoughtbot.com/sandi-metz-rules-for-developers">
          Sandi Metz Rules
        </a>
        of small classes, one per file, so we always have lots of small files.
      </p>

      <p>
        Note that with <code>rake build</code>, RubyMotion actually builds it
        twice: once for the simulator architecture and once for device. So these
        numbers are actually inflated 2x from simulator-only builds (if you did
        <code>rake build:simulator</code>). This shows a better average, since
        you'll be building for both architectures at some point in your
        development workflow.
      </p>

      <p>Here are the results:</p>

      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>No Compressor&nbsp;</th>
            <th>Compressor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>RubyMotion 3.11&nbsp;</th>
            <td>95 minutes</td>
            <td>33 minutes</td>
          </tr>
          <tr>
            <th>RubyMotion 3.12&nbsp;</th>
            <td>5.6 minutes</td>
            <td>6.6 minutes</td>
          </tr>
        </tbody>
      </table>

      <p>
        <br />
      </p>

      <p>
        <img
          src="http://media4.giphy.com/media/KbFVImXebcfXG/giphy.gif"
          alt="holy crap"
        />
      </p>

      <p>
        3.12 is <em>much, much</em> faster. It seems to be even faster without
        compressor, so at this point I don't think I'd recommend using it.
        That's about a 17X speed increase over non-compressor, and 5X faster
        than 3.11 compressor builds.
      </p>

      <p>
        So far, I haven't noticed any regressions related to this. The app works
        fine in simulator.
      </p>

      <p>Great work, HipByte!</p>

      <p>
        (here is my <code>time</code> output)
      </p>

      <ul>
        <li>
          3.11 compressor:
          <code>
            bundle exec rake build 2021.41s user 104.13s system 263% cpu
            13:28.05 total
          </code>
        </li>

        <li>
          3.11 no compressor:
          <code>
            bundle exec rake build 5732.69s user 288.20s system 290% cpu
            34:35.55 total
          </code>
        </li>

        <li>
          3.12 compressor:
          <code>
            bundle exec rake build 400.95s user 53.42s system 176% cpu 4:17.46
            total
          </code>
        </li>

        <li>
          3.12 no compressor:
          <code>
            bundle exec rake build 340.73s user 118.14s system 227% cpu 3:21.90
            total
          </code>
        </li>
      </ul>
    </Page>
  );
};
