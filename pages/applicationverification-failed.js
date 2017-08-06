import React from 'react'
import Page from '../components/page'
// import Link from 'next/link'

export default () => {
  return (
    <Page title='Annoying iOS issues: ApplicationVerification Failed'>
      <h1>Annoying iOS issues: ApplicationVerification Failed</h1>
      <p><em>Published November 13, 2014</em></p>
      
      <p>Recently, <a href="https://twitter.com/ryanlntn">Ryan Linton</a> and I ran into an annoying error with a RubyMotion iOS project. Every time we'd run <code>rake device</code>, we'd get <code>ApplicationVerification Failed</code>.</p>

      <p>We eventually opened the Devices panel in Xcode:</p>

      <p><img src="http://clrsight.co/jh/Screen_Shot_2014-11-13_at_5.51.01_PM.png?+" alt="Xcode menu showing Devices selected" /></p>

      <p>...selected the iPhone, clicked the absurdly hidden console icon:</p>

      <p><img src="http://clrsight.co/jh/2014-11-13-gd856.png?+" alt="Hidden icon for console on bottom left" /></p>

      <p>...and dragged the console up large enough to see what was going on:</p>

      <p><img src="http://clrsight.co/jh/2014-11-13-07oje.png?+" alt="Click *just above* the icon and drag upward" /></p>

      <p>Once we tried <code>rake device</code> again, there was a line that said something to the effect that there were some entitlements that were not allowed with this provisioning profile. Ah-ha!</p>

      <p>We were trying to use HealthKit, and the App identifier in the <a href="http://developer.apple.com">Apple Developer center</a> wasn't set up for that:</p>

      <p><img src="http://clrsight.co/jh/2014-11-13-e69cl.png?+" alt="Showing HealthKit is off" /></p>

      <p>After turning that on and regenerating the provisioning profile, everything worked.</p>

      <p>Hope this helps someone!</p>

      <p><strong>UPDATE 11/18/2014:</strong></p>

      <p>We ran into another error:</p>

      <pre><code>Failed to create source for client (null)
      </code></pre>

      <p>After a lot of headscratching, we enlisted the help of <a href="https://twitter.com/seriousken">Ken Miller</a>, one of our good friends at <a href="http://infinitered.com/">InfiniteRed</a>. Ken figured out that we were missing another entitlement, <code>application-identifier</code>:</p>

      <pre><code class="ruby language-ruby">  app.seed_id = 'SEEDIDHERE'
        app.identifier = 'com.clearsightstudio.myapp'
        app.entitlements['application-identifier'] = app.seed_id + '.' + app.identifier
      </code></pre>

      <p>Make sure you also have this:</p>

      <pre><code class="ruby language-ruby">  app.entitlements['com.apple.developer.healthkit'] = true
      </code></pre>

      <p>Hopefully this also helps someone!</p>
    </Page>
  )
}
