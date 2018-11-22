import React from "react";
import Page from "../../components/page";
import Link from "next/link";

export default () => {
  return (
    <Page title='Uninstalling United Airline "Panasonic DRM plugin"'>
      <h1>Uninstalling United Airline's "Panasonic DRM plugin"</h1>
      <p>
        <em>Published July 20, 2015</em>
      </p>

      <p>
        I just got in last night from a United flight. During the flight, I
        installed (against my better judgment) their in-flight DRM plugin so I
        could watch a movie on my MacBook Pro.
      </p>

      <p>
        The playback was terrible on my laptop anyway, so I switched to the
        United app on my iPhone which was surprisingly decent.
      </p>

      <p>But now, how do I get rid of the DRM plugin?</p>

      <p>
        Googling around revealed absolutely nothing. United, of course, doesn't
        say anything in their FAQ about where this plugin is installed.
      </p>

      <p>
        I finally did a Finder search and found a file named
        <code>PanasonicDrmPlugin_2.plugin</code> in
        <code>/Library/Internet Plugins</code>. I deleted that file, and after
        more Finder searches couldn't find anything else.
      </p>

      <p>So, for a one-liner you can put into Terminal:</p>

      <pre>
        <code>
          sudo rm /Library/Internet\ Plugins/PanasonicDrmPlugin_2.plugin
        </code>
      </pre>

      <p>Hope this helps someone else!</p>
    </Page>
  );
};
