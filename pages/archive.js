import React from 'react'
import Page from '../components/page'
import Link from 'next/link'

export default () => {
  return (
    <Page>
      <h1>Archived Posts</h1>
      <p>
        I rarely post articles on my personal website anymore, but here's an archive of old posts, so they don't disappear from the internet.
      </p>
      <ul>
        <li>
          <Link prefetch href='/new-again'>
            New Again - Experiencing Facebook for the first time again, through my 75 year old mother-in-law’s eyes.
          </Link>
        </li>
        <li>
          <Link prefetch href='/deprecating-promotion-form'>
            Deprecating ProMotion-form
          </Link>
        </li>
        <li>
          <Link prefetch href='/next'>
            Up Next
          </Link>
        </li>
        <li>
          <Link prefetch href='/ten'>
            Ten Years
          </Link>
        </li>
        <li>
          <Link prefetch href='/uninstalling-united-airlines-drm-plugin'>
            Uninstalling United Airlines DRM Plugin
          </Link>
        </li>
        <li>
          <Link prefetch href='/inspect2015'>
            Inspect 2015 Wrap-up
          </Link>
        </li>
        <li>
          <Link prefetch href='/speed2'>
            RubyMotion Speed - Part 2
          </Link>
        </li>
        <li>
          <Link prefetch href='/speed'>
            RubyMotion Speed - Part 1
          </Link>
        </li>
        <li>
          <Link prefetch href='/live'>
            Live Reloading in RubyMotion
          </Link>
        </li>
        <li>
          <Link prefetch href='/promotion-2-3-notable-changes'>
            ProMotion 2.3 Notable Changes
          </Link>
        </li>
        <li>
          <Link prefetch href='/rubymotion-react-pattern'>
            A React Pattern for your RubyMotion app
          </Link>
        </li>
        <li>
          <Link prefetch href='/iap'>
            In-App Purchases in RubyMotion
          </Link>
        </li>
        <li>
          <Link prefetch href='/cleaner-view-rendering-in-rails'>
            Cleaner View Rendering in Rails
          </Link>
        </li>
        <li>
          <Link prefetch href='/hex'>
            What the Hex?
          </Link>
        </li>
        <li>
          <Link prefetch href='/inspect-uiwebview-with-safari'>
            Inspect UIWebView with Safari
          </Link>
        </li>
        <li>
          <Link prefetch href='/bootcamp-windows-10'>
            How to use Bootcamp to run Windows 10 Preview on OS X Yosemite
          </Link>
        </li>
        <li>
          <Link prefetch href='/applicationverification-failed'>
            Annoying iOS issues: ApplicationVerification Failed
          </Link>
        </li>
        <li>
          <Link prefetch href='/four'>
            Working Four Day Weeks
          </Link>
        </li>
        <li>
          <Link prefetch href='/what-i-ll-write'>
            What I'll Write
          </Link>
        </li>
      </ul>
    </Page>
  )
}
