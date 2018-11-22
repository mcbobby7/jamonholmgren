import React from "react";
import Page from "../../components/page";
import Link from "next/link";

export default () => {
  return (
    <Page title="RubyMotion Speed">
      <h1>RubyMotion Speed</h1>
      <p>
        <em>Published April 17, 2015</em>
      </p>

      <p>
        <br />

        <strong>
          UPDATE 5/29/2015: RubyMotion 3.12 came out with much faster compile
          times. Go check out my
          <a href="http://jamonholmgren.com/archive/speed2/">
            follow-up blog post
          </a>
          .
        </strong>
      </p>

      <p>
        <strong>Original post:</strong>
      </p>

      <p>
        <em>Crash.</em>
      </p>

      <p>
        <code>$ rake clean:all</code>.
      </p>

      <p>Wait.</p>

      <p>
        <code>$ rake pod:install</code>.
      </p>

      <p>Wait.</p>

      <p>
        <code>$ rake</code>
      </p>

      <p>Wait. And wait some more.</p>

      <p>
        <em>Crash.</em>
      </p>

      <p>
        It's 10:30 PM. I'm sitting at my kitchen table. My four kids and Chy, my
        wife, are all already in bed. And I need to get this app ready for
        submittal.
      </p>

      <p>
        <img src="http://cdn.meme.am/images/300x/2779687.jpg" alt="desk flip" />
      </p>

      <p>And I am pissed.</p>

      <p>
        The error message is incomprehensible. I've been doing RubyMotion iOS
        app development for three years, and I've never seen this. I'm trying
        different things...downgrading RubyMotion. Trying a different iOS SDK
        version. Commenting out lines of code.
      </p>

      <p>
        And each time, it's taking eight minutes to clean the cached files and
        recompile. I can't do this.
      </p>

      <h3 id="inspiration">Inspiration</h3>

      <p>
        As I unenthusiastically watch the <code>Compile /Users/jh/...</code>
        lines fill my screen, I observe that they seem to be scrolling by at a
        somewhat constant rate. Large files, small files. All at about the same
        amount of time.
      </p>

      <p>
        I pull up Slack. The only one online is Gant Laborde. When I message
        him, he's about ready to go to bed, but humors me.
      </p>

      <blockquote>
        <p>I had an idea</p>

        <p>
          Do you think concatenating all RubyMotion files into one file before
          compiling would make it compile way faster?
        </p>
      </blockquote>

      <p>Gant thinks it's a bit crazy. "Have you tried it?"</p>

      <p>Nope. He goes to bed, after I promise to tell him my results.</p>

      <h3 id="concatenation">Concatenation</h3>

      <p>
        I build a small script that concatenates ProMotion files into a single
        large file, and then points the compiler to that concatenated file. At
        first, it crashes right away, because I don't have the load order
        correct. Once I rearrange things a bit, it builds and displays the app.
      </p>

      <p>
        There's a noticable pause on the generated, concatenated
        <code>ProMotion-concat.rb</code> file. I run <code>time rake</code> on
        both the non-concatenated version and the concatenated version.
      </p>

      <p>
        I can't believe my eyes. It builds in about 500 seconds with the regular
        version, and in about 25 seconds with the concatenated version.
      </p>

      <p>
        I run the test suite. It passes with both, but 784 seconds reduces to
        266 seconds. Most of the 266 seconds is actually in the test suite run
        (about 200 seconds), so we're talking a 90-95% speed improvement. Just
        by concatenating the project files into one large file.
      </p>

      <h3 id="considerations">Considerations</h3>

      <p>
        It's an awesome discovery, but there are a few things to work through in
        the coming weeks.
      </p>

      <p>
        This only improves full, clean installs. Incremental compiles of one or
        two changed files will still be faster the normal way. So for normal
        apps where you're adjusting one or two files and recompiling without
        running a <code>rake clean:all</code>, it may not bring much benefit.
      </p>

      <p>
        I also need to solve the dependency issue in an automatic way. Having to
        manually specify file load order isn't a long term solution.
      </p>

      <p>
        It also obfuscates your backtraces. It'll say the crash happened at line
        4952 of "ProMotion-concat.rb", which isn't as useful.
      </p>

      <h3 id="gemauthors">Gem Authors</h3>

      <p>
        For gem authors, this is an opportunity to help your users out in a big
        way. The app I was working on last night included Sugarcube and
        MotionKit as well as ProMotion. When you add in the app files, we are
        compiling around 320 files total. If ProMotion, MotionKit, and Sugarcube
        were one concatenated file apiece, we'd be down to 126 files, reducing
        the compile time significantly without compromising the debug backtraces
        for the app.
      </p>

      <h3 id="next">Next</h3>

      <p>
        In the coming weeks, I'll be experimenting with this technique and
        trying it in real apps. I'll see if there's opportunity for a "speed
        compile" gem. At the very least, I'll be providing an optional (or
        default?) concatentated version of ProMotion, referenced something like
        this:
      </p>

      <pre>
        <code class="ruby language-ruby">
          gem "ProMotion", require: "ProMotion-concat"
        </code>
      </pre>

      <p>
        If I can save app developers several hundred seconds of compile time by
        doing this, it's a no brainer.
      </p>

      <p>
        And maybe, just maybe, we won't groan when we have to
        <code>rake clean:all</code>.
      </p>
    </Page>
  );
};
