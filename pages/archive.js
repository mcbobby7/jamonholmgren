import React from "react";
import Page from "../components/page";
import Link from "next/link";

export default () => {
  return (
    <Page title="Archived Posts">
      <h1>Archived Posts</h1>
      <p>
        I rarely post articles on my personal website anymore, but here's an
        archive of old posts, so they don't disappear from the internet.
      </p>
      <ul>
        <li>
          <Link prefetch href="/new-again">
            <a>
              New Again - Experiencing Facebook for the first time again,
              through my 75 year old mother-in-law’s eyes.
            </a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/deprecating-promotion-form">
            <a>Deprecating ProMotion-form</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/next">
            <a>Up Next</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/ten">
            <a>Ten Years</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/uninstalling-united-airlines-drm-plugin">
            <a>Uninstalling United Airlines DRM Plugin</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/inspect2015">
            <a>Inspect 2015 Wrap-up</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/speed2">
            <a>RubyMotion Speed - Part 2</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/speed">
            <a>RubyMotion Speed - Part 1</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/live">
            <a>Live Reloading in RubyMotion</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/promotion-2-3-notable-changes">
            <a>ProMotion 2.3 Notable Changes</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/rubymotion-react-pattern">
            <a>A React Pattern for your RubyMotion app</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/iap">
            <a>In-App Purchases in RubyMotion</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/cleaner-view-rendering-in-rails">
            <a>Cleaner View Rendering in Rails</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/hex">
            <a>What the Hex?</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/inspect-uiwebview-with-safari">
            <a>Inspect UIWebView with Safari</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/bootcamp-windows-10">
            <a>
              How to use Bootcamp to run Windows 10 Preview on OS X Yosemite
            </a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/applicationverification-failed">
            <a>Annoying iOS issues: ApplicationVerification Failed</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/four">
            <a>Working Four Day Weeks</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/what-i-ll-write">
            <a>What I'll Write</a>
          </Link>
        </li>
      </ul>
    </Page>
  );
};
