import React from 'react'
import Page from '../components/page'
// import Link from 'next/link'

export default () => {
  return (
    <Page>
      <h1>What the hex?</h1>
      <p><em>Published January 30, 2015</em></p>
      
      <p>We all know it's not a good idea to commit secret API keys into your git repository. For RubyMotion, it's tempting to do so anyway, since the code will be compiled into a binary.</p>

      <p>This is a terrible idea.</p>

      <p>Let me show you how easy it is to steal that information.</p>

      <h5 id="1spinuparubymotionapp">1. Spin up a RubyMotion app</h5>

      <p><img src="http://clrsight.co/jh/Screen_Shot_2015-01-30_at_8.40.15_AM.png?+" alt="my_happy_app" /></p>

      <h5 id="2addanapikeyinyourappdelegate">2. Add an API key in your app delegate.</h5>

      <pre><code class="ruby language-ruby">{`class AppDelegate
        def application(application, didFinishLaunchingWithOptions:launchOptions)
          my_happy_api_key = "ABCDEFGHIJKLMNOPYAY"
          true
        end
      end
      `}</code></pre>

      <h5 id="3buildanipaarchive">3. Build an IPA archive</h5>

      <pre><code>$ rake archive
      `}</code></pre>

      <p><img src="http://clrsight.co/jh/Screen_Shot_2015-01-30_at_8.52.17_AM.png?+" alt="binary" /></p>

      <h5 id="4openupthatipafileandextractitwitharchiveutility">4. Open up that IPA file and extract it with Archive Utility</h5>

      <p><img src="http://clrsight.co/jh/Screen_Shot_2015-01-30_at_8.54.08_AM.png?+" alt="extracting" /></p>

      <h5 id="5findthebinary">5. Find the binary</h5>

      <p>Go into the <code>Payload</code> folder, right-click on the app and Show Package Contents. You should see something like this:</p>

      <p><img src="http://clrsight.co/jh/Screen_Shot_2015-01-30_at_8.57.28_AM.png?+" alt="happy app" /></p>

      <h5 id="6downloadahexeditor">6. Download a hex editor.</h5>

      <p>I use <a href="http://ridiculousfish.com/hexfiend/">Hex Fiend</a>.</p>

      <h5 id="7openthebinaryinhexfiend">7. Open the binary in Hex Fiend</h5>

      <p>Choose File -> Open, then drag the binary from Finder into your file dialog, which will pre-select it. I use this trick all the time in OSX.</p>

      <p>You'll see something like this:</p>

      <p><img src="http://clrsight.co/jh/Screen_Shot_2015-01-30_at_8.59.37_AM.png?+" alt="hex fiend" /></p>

      <h5 id="searchforyourapistring">Search for your API string</h5>

      <p>Command+F, choose "Text" on top left and paste in your string.</p>

      <h5 id="uhoh">Uh-oh.</h5>

      <p>If you can find it that easily, someone else could scan through the binary and find it too.</p>

      <p><img src="http://clrsight.co/jh/2015-01-30-6pqr0.png?+" alt="uh-oh" /></p>

      <p>It's even easier from Terminal. Just cd into that folder and run <code>strings my_happy_app | grep "YAY"</code>.</p>

      <p><img src="http://clrsight.co/jh/Screen_Shot_2015-01-30_at_9.10.35_AM.png?+" alt="yay not" /></p>

      <h5 id="arentmyappsprotectedbytheappstore">Aren't my apps protected by the App Store?</h5>

      <p>Not really. You don't even need to jailbreak your iPhone to use <a href="http://www.macroplant.com/iexplorer/">iExplorer</a> and the various protections Apple puts around your app are relatively easy to circumvent.</p>

      <h2 id="youroptions">Your Options</h2>

      <p>You can't use a plist or NSUserDefaults, because those are <a href="http://www.raywenderlich.com/45645/ios-app-security-analysis-part-1">quite vulnerable</a> too. Even the Keychain is not entirely foolproof.</p>

      <p>Your best option is probably obfuscation -- make it harder on the hacker. Here's a very simplistic example.</p>

      <p><img src="http://clrsight.co/jh/Screen_Shot_2015-01-30_at_10.24.25_AM.png?+" alt="base64" /></p>

      <pre><code class="ruby language-ruby">{`class AppDelegate
        def application(application, didFinishLaunchingWithOptions:launchOptions)
          my_happy_api_key = set_up_items
          puts my_happy_api_key
          true
        end

        def set_up_items
          visibility_s("QUJDREVGR0hJSktMTU5PUFlBWQ" + "==" + "\n")
        end

        def visibility_s(s)
          NSString.alloc.initWithData(visibility_d(s), encoding: NSUTF8StringEncoding)
        end

        def visibility_d(s)
          NSData.alloc.initWithBase64Encoding(s)
        end
      end
      `}</code></pre>

      <p>Note that I'm using odd method names here. You probably don't want <code>decode_api_base64_string</code> as your method, since that will be clearly obvious to anyone looking at your binary.</p>

      <p>Running that app correctly decodes the string:</p>

      <p><img src="http://clrsight.co/jh/Screen_Shot_2015-01-30_at_10.23.25_AM.png?+" alt="decoded" /></p>

      <p>But it doesn't appear in the binary:</p>

      <p>}<img src="http://clrsight.co/jh/Screen_Shot_2015-01-30_at_10.26.00_AM.png?+" alt="binary" /></p>

      <p>This is by no means foolproof. Someone could see that string, deduce that it's a Base64-encoded string (especially by the method calls around it), and just run their own Base64 decoder on it. So you'll want to devise your own clever obfuscation strategies.</p>

      <p><strong>Have any other iOS API key security tips? I'd love to hear them. Hit me up <a href="https://twitter.com/jamonholmgren">on Twitter</a>.</strong></p>

      <p><strong>UPDATE:</strong> Ørta pointed out his awesome <a href="https://github.com/orta/cocoapods-keys">cocoapods-keys</a>, which deals with this issue. Note that it requires a pre-release CocoaPods to install.</p>

      <p><em>H/T to <br />
      Ian Hofmann-Hicks and Ryan Linton for helping with this article. Also, <a href="http://www.raywenderlich.com/45645/ios-app-security-analysis-part-1">Derek Selander's security tutorial on Ray Wenderlich</a> (also <a href="http://www.raywenderlich.com/46223/ios-app-security-analysis-part-2">part 2</a>) is awesome.</em></p>
    </Page>
  )
}
