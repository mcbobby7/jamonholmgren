import React from "react";
import Page from "../components/page";
import Link from "next/link";

export default () => {
  return (
    <Page title="RubyMotion Inspect 2015 Wrap-up">
      <h1>RubyMotion Inspect 2015 Wrap-up</h1>
      <p>
        <em>Published July 15, 2015</em>
      </p>

      <p>Paris is hot.</p>

      <p>
        Well, at least it was hot during the week of RubyMotion
        <a href="https://twitter.com/search?q=%23inspect2015">#inspect2015</a>.
        And nobody seems to have air conditioning.
      </p>

      <p>
        But that's is pretty much the end of my whining about last week.
        Everything else was great. It was my first time to Paris, and I really
        enjoyed the trip.
      </p>

      <h4 id="keynoterubymotion4">Keynote - RubyMotion 4</h4>

      <p>
        <a href="https://twitter.com/lrz">Laurent Sansonetti</a> delivered the
        keynote, as he has the last two Inspects. He talked a little bit about
        the state of RubyMotion. The hype is gone, but the tools are starting to
        mature. It's a good time to be a
        <a href="http://motioneers.herokuapp.com/">Motioneer</a>.
      </p>

      <p>
        <strong>New Live REPL - on device</strong>
      </p>

      <p>
        For RubyMotion 4, Laurent introduced a new REPL for both iOS and Android
        that actually works <strong>on device</strong>.
      </p>

      <p>
        This is a big deal and I'm especially happy about the Android side of
        this, since the Android REPL has been less than impressive.
      </p>

      <p>
        <a href="https://twitter.com/watson1978">Watson</a> demonstrated, using
        <a href="https://github.com/infinitered/redpotion">RedPotion</a>, that
        live code reload works on device using the
        <a href="/live">live code reloading technique</a> that I discovered a
        couple months ago and Todd Werth and I built into RedPotion.
      </p>

      <p>
        Laurent talked about how difficult it was to do this. He's doing quite a
        bit of coordination between the REPL and the device, because the REPL
        needs to know the memory addresses of symbols in the device. Sounds
        difficult.
      </p>

      <p>
        <strong>RubyMotion Cross-Platform Game Framework</strong>
      </p>

      <p>
        Laurent announced and demonstrated something he's been working on for a
        while. It's a cross-platform game framework that wraps Cocos 2D and
        provides a new 2D game-oriented UIViewController in iOS and Activity in
        Android.
      </p>

      <p>
        Like most developers, I have a few little games floating around in my
        head I'd like to make sometime. This game framework looks pretty good,
        and being able to use Ruby is a huge plus for me.
      </p>

      <p>
        Laurent made a little Flappy Birds clone and played it on both the iOS
        and Android (Genymotion) simulators. Physics, sprites, sounds, controls
        all work.
      </p>

      <p>Now I just need someone to make sprites and sound effects for me.</p>

      <p>
        <strong>WatchOS</strong>
      </p>

      <p>
        RubyMotion 4 will also support native WatchOS apps. I need to do some
        more digging into these.
      </p>

      <h4 id="richkilmercargosense">Rich Kilmer - CargoSense</h4>

      <p>
        <a href="https://twitter.com/rich_kilmer">Rich</a>, rocking white pants,
        demonstrated the stack he's been using for his RubyMotion apps at
        CargoSense. He showed his layout system. Given that I've been a part of
        three layout systems on RubyMotion so far (ProMotion::Styling
        (deprecated),
        <a href="https://github.com/motion-kit/motion-kit">MotionKit</a> (see
        below), and
        <a href="https://github.com/infinitered/redpotion">RedPotion</a>), there
        were a lot of similar concepts.
      </p>

      <p>
        Someone joked that every RubyMotion gem expands until it includes a
        layout and styling system.
      </p>

      <p>
        Rich's system has some really interesting things, though, and we
        discussed it afterward in the break room. Look for RedPotion to
        incorporate some ideas from his system in the future.
      </p>

      <h4 id="tatianavasilyevarubymine">Tatiana Vasilyeva - RubyMine</h4>

      <p>
        <a href="https://twitter.com/waggi_tan">Tatiana</a> demonstrated some
        neat features from RubyMine for developing RubyMotion apps. Despite
        protesting that she wasn't a developer before starting the talk, she did
        a great job and we didn't believe her.
      </p>

      <p>
        Many developers come to RubyMotion to get away from IDEs, but if you
        want to use an IDE, RubyMine looks like a pretty good option. I
        especially like some of the introspection tooling.
      </p>

      <h4 id="toddwerthredpotionpart1">Todd Werth - RedPotion (part 1)</h4>

      <p>
        <a href="http://infinitered.com/2015/07/03/inspect-2015-redpotion-talk-slides/16">
          Slides
        </a>
      </p>

      <p>
        <a href="https://twitter.com/twerth">Todd</a> introduced RedPotion (and
        BluePotion), which aim to be the "Rails of RubyMotion". He talked about
        why the community came together to build it.
      </p>

      <p>
        Ruby itself didn't really take off until Rails came along, and it feels
        like we're at a similar point with RubyMotion. RedPotion is a collection
        of the most widely-used RubyMotion-iOS gems, knit together into a
        cohesive API.
      </p>

      <p>
        Todd talked about some of the features of RedPotion but mostly explained
        why we did it and where it's going.
      </p>

      <h4 id="jamonholmgrenredpotionpart2">
        Jamon Holmgren - RedPotion (part 2)
      </h4>

      <p>
        <a href="https://www.icloud.com/keynote/AwBWCAESEOLAXvVPlpLZU2zirAVymY4aKmiU-d2Q2BFpZN_QuALz8u1oaJnUsahnWj4iHYBTyTOF8tOc31eFut5YyAMCUCAQEEIDT5ph2VotenTUlPM3sbdMJ9X0hMdnIllA4o_7iMfzOt#Inspect_2015_-_RedPotion_In_Practice">
          Slides
        </a>
      </p>

      <p>
        My presentation focused on code examples, showing how RedPotion's API is
        clean, straightforward, and Ruby-like. I talked about how easy
        onboarding, common conventions, and a shared community vision are all
        really important for RubyMotion developers, and how RedPotion
        accomplishes that.
      </p>

      <h4 id="darinwilsonbluepotion">Darin Wilson - BluePotion</h4>

      <p>
        <a href="https://twitter.com/darinwilson">Darin</a> introduced
        BluePotion, which is RedPotion for RubyMotion-Android.
        RubyMotion-Android has very few gems written for it, so BluePotion is a
        really great way to bring the most popular gems to the Android side.
      </p>

      <p>
        He talked about how the goal of BluePotion isn't "Write once, run
        anywhere" but rather "Learn once, write anywhere".
      </p>

      <p>
        I'm very excited about BluePotion. I think we can achieve 80% API parity
        with RedPotion, especially if YOU help.
      </p>

      <p>;-)</p>

      <h4 id="davidlarrabeeintegrationtesting">
        David Larrabee - Integration Testing
      </h4>

      <p>
        <a href="https://t.co/CbDCWmfVJx">Slides</a>
      </p>

      <p>
        David (<a href="https://twitter.com/squidpunch">Squidpunch</a>,
        ProMotion core team) discussed the various integration testing
        techniques out there. Without Capybara, we have to use other means to do
        full integration/feature tests, and Squidpunch has it pretty dialed.
      </p>

      <p>
        Squid also mentioned a few other testing techniques for iOS apps. He
        didn't have much to say on Android unfortunately. Next Inspect?
      </p>

      <h4 id="amirrajanadarkroom">Amir Rajan - A Dark Room</h4>

      <p>
        <a href="https://twitter.com/amirrajan">Amir</a> gave an awesome talk
        about doing meaningful work and his experience building a #1 overall
        app. Everyone sat, spellbound, as he worked his magic.
      </p>

      <p>
        I'm very proud of the fact that the second commit on
        <a href="https://itunes.apple.com/us/app/a-dark-room/id736683061?mt=8">
          A Dark Room
        </a>
        was "Integrated ProMotion". In a small way, I contributed to its
        success, and that's something very cool.
      </p>

      <p>
        Amir gave a second talk right afterward, walking through the meteoric
        rise of ADR.
      </p>

      <p>When the video is posted of his two talks, it will be must-see.</p>

      <h4 id="paulsturgesstitlechallenge">Paul Sturgess - Title Challenge</h4>

      <p>
        <a href="https://twitter.com/paulsturgess">Paul</a> presented on the
        unique CPU and memory constraints he faced building a football (soccer)
        simulation/management game for iOS. Paul was able to work on this game
        full time as part of an agency that supported his work. I talked to both
        Paul and his boss
        <a href="https://twitter.com/laurent_maguire">Laurent Maguire</a> and
        they're very cool.
      </p>

      <h4 id="gantlabordevalidations">Gant Laborde - Validations</h4>

      <p>
        <a href="http://t.co/7xDj3c3RHO">Slides</a>
      </p>

      <p>
        <a href="https://twitter.com/gantlaborde">Gant</a> showed the very cool
        validation library he created. It's a great example of how to create
        your own plugins/addons for RedPotion. Gant is a lot of fun to be around
        and we spent a whole day touring Paris after the conference. "Oh hey,
        Jamon, look over there, it's just a few blocks more to see that other
        thing." Over and over.
      </p>

      <h4 id="borisbglingwatchos">Boris Bügling - WatchOS</h4>

      <p>
        <a href="https://twitter.com/NeoNacho">Boris</a> talked about building
        watch apps. His talk was really interesting and his slides were
        mind-bending.
      </p>

      <h4 id="markrickert">Mark Rickert</h4>

      <p>
        <a href="http://t.co/Pw9he7JYC4">Slides</a>
      </p>

      <p>
        <a href="https://twitter.com/markrickert">Mark</a> gave a great talk
        about "cutting away, living your dream, and programming RubyMotion full
        time". Mark lives in an RV with solar panels on the roof, traveling the
        USA, skydiving, and does RubyMotion consulting for InfiniteRed. He's
        also a ProMotion core contributor.
      </p>

      <h4 id="colintagrayrubymotionapparchitecture">
        Colin T.A. Gray - RubyMotion App Architecture
      </h4>

      <p>
        <a href="http://t.co/1qFoL7bt0H">Slides 1</a>
        <a href="http://t.co/Cpw601V5eY">Slides 2</a>
      </p>

      <p>
        It was great to see <a href="https://twitter.com/colinta">Colin</a>
        again. He talked about bringing some concepts from Swift (at his day
        job) to RubyMotion. He also gave an update on MotionKit.
      </p>

      <p>
        MotionKit's great constraints DSL will be extracted and rebuilt as a
        RedPotion plugin. One of the common questions we get about RedPotion is
        "where is the constraints system?" This will answer that and make a lot
        of people happy who came from MotionKit (including me). RMQ's layout
        system is more than capable in most cases, but many RubyMotion
        developers want to use constraints. Since RedPotion is going to be the
        "Rails of RubyMotion", it just makes sense to have that as a feature.
      </p>

      <h4 id="thoughtsonrubymotion">Thoughts on RubyMotion</h4>

      <p>
        RubyMotion 4 seems like an evolution rather than a huge change (like
        RubyMotion 3 was), which shows that the product is maturing. This is a
        great thing for companies who may have been scared off by the hype.
        RedPotion and BluePotion are the culmination of three years of work by
        the community, and there's a steady influx of new developers, mostly
        coming from the Rails world.
      </p>

      <p>
        I think it's a great time to be using RubyMotion. There are a lot of
        alternatives out there now, but they all have tradeoffs. RubyMotion's
        excellent new REPL, pretty gem APIs, and tight-knit and encouraging
        developer community are great reasons to stick with it.
      </p>

      <hr />

      <p>
        It was another great #inspect! It was definitely worth going and I had a
        great time meeting and talking with RubyMotion developers from around
        the world.
      </p>

      <p>
        Going forward, I plan to be putting out a lot of RubyMotion (especially
        RedPotion/BluePotion-related) articles, tutorials, and news on this
        blog. Keep an eye on it, or
        <a href="https://twitter.com/jamonholmgren">follow me on Twitter</a> to
        get alerted to new articles.
      </p>

      <p>
        Also, don't forget to join our
        <a href="http://motioneers.herokuapp.com/">Motioneers</a> Slack channel
        if you haven't yet, sponsored by
        <a href="http://clearsightstudio.com/">ClearSight</a>, my Rails and
        RubyMotion development shop! Let's talk RubyMotion. :-)
      </p>
    </Page>
  );
};
