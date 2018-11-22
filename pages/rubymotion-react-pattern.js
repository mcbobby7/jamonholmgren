import React from "react";
import Page from "../components/page";
// import Link from 'next/link'

export default () => {
  return (
    <Page title="A React Pattern for your RubyMotion app">
      <h1>A React Pattern for your RubyMotion app</h1>
      <p>
        <em>Published March 15, 2015</em>
      </p>

      <p>
        <em>
          Post summary: I build a "Bitcoin price" RubyMotion iOS app and show
          how it can be made to follow more of a React.js pattern.
        </em>
      </p>

      <p>
        <em>
          Updated 10/8/2016: changed <code>set_state</code> to
          <code>render</code>. Need to fix images too.
        </em>
      </p>

      <hr />

      <p>
        At <a href="http://clearsightstudio.com">ClearSight</a> we are venturing
        beyond Rails and into the realm of React.js and Ember.js client-side
        JavaScript frameworks. The experience has been both painful and
        enlightening. Most worthwhile learning experiences are a bit of both.
      </p>

      <p>
        In this post, I'm going to show how you normally build an app. All of
        the usual actions (initialization, asynchronous data load, user touches)
        will affect the view in some way, and the cognitive load will increase.
        Then I'll refactor using the lessons learned from React.js and show how
        the cognitive load is reduced drastically.
      </p>

      <p>
        For this discussion, let's say that we're building an app that retrieves
        the current Bitcoin price and converts it to various currencies.
      </p>

      <h3 id="buildinganappthenormalway">Building an app the normal way</h3>

      <p>
        We're going to use
        <a href="https://github.com/infinitered/redpotion">RedPotion</a>
        (currently 1.0.0), which is
        <a href="https://github.com/clearsightstudio/ProMotion">ProMotion</a>
        and <a href="https://github.com/infinitered/rmq">RMQ</a> and several
        other useful gems pulled together into one.
      </p>

      <p>Start off by generating the app:</p>

      <pre>
        <code>{`$ gem install redpotion
      $ potion create bitcoin-app
      $ cd bitcoin-app
      $ bundle
      $ rake pod:install
      `}</code>
      </pre>

      <h4 id="buildthescreen">Build the screen</h4>

      <p>Generate a new screen using RedPotion's generator:</p>

      <pre>
        <code>{`$ potion create screen bit_coin
      `}</code>
      </pre>

      <p>
        This will create a screen file, a stylesheet, and a spec file. We're
        going to skip the spec file for now, but we will definitely revisit it
        when we make this more like React.js.
      </p>

      <p>
        Let's build a very simplified UI using RedPotion's RMQ
        <code>append</code> command.
      </p>

      <pre>
        <code class="ruby language-ruby">{`# app/screens/bit_coin_screen.rb
      class BitCoinScreen &lt; PM::Screen
        title "Bitcoin Price"
        stylesheet BitCoinScreenStylesheet

        def on_load
          append(UILabel, :bitcoin_price).data("Loading...")
          append(UILabel, :last_fetched_date).data("...")
        end
      end
      `}</code>
      </pre>

      <h4 id="updateyourstylesheet">Update your stylesheet</h4>

      <p>This will be a very simple stylesheet.</p>

      <pre>
        <code class="ruby language-ruby">{`# app/stylesheets/bit_coin_screen_stylesheet.rb
      class BitCoinScreenStylesheet &lt; ApplicationStylesheet
        def root_view(st)
          st.background_color = color.white
        end

        def bitcoin_price(st)
          st.frame = {
            left:           20,
            from_right:     20,
            top:            100,
            height:         50,
          }
          st.text_alignment = :center
          st.font = UIFont.boldSystemFontOfSize(40.0)
        end

        def last_fetched_date(st)
          st.frame = {
            left:           20,
            from_right:     20,
            below_previous: 100,
            height:         50,
          }
          st.text_alignment = :center
          st.font = UIFont.systemFontOfSize(24.0)
        end
      end
      `}</code>
      </pre>

      <h4 id="updatetheappdelegate">Update the App Delegate</h4>

      <p>
        Since this is a single-screen app, your AppDelegate will be very tiny:
      </p>

      <pre>
        <code class="ruby language-ruby">{`class AppDelegate &lt; PM::Delegate
        def on_load(app, options)
          return true if RUBYMOTION_ENV == "test"
          open BitCoinScreen
        end
      end
      `}</code>
      </pre>

      <h4 id="runtheapp">Run the app</h4>

      <p>
        Run <code>rake</code> and you should get an app that looks like this:
      </p>

      <p>
        <img
          src="http://clrsight.co/jh/Screen_Shot_2015-03-21_at_3.48.44_PM.png?+"
          alt="simulator screenshot"
        />
      </p>

      <p>
        <em>
          (Note: if you get "ERROR! Can't locate iPhoneSimulator SDK 8.1" then
          just go delete the <code>app.sdk_version</code> line in the Rakefile.)
        </em>
      </p>

      <h4 id="addbtccurrencyfetching">Add BTC currency fetching</h4>

      <p>
        We already have AFMotion enabled in our Gemfile (add it if it's not
        there with <code>gem "AFMotion"</code>). So let's fetch the data using
        the <a href="https://bitcoinaverage.com/">BitcoinAverage Price Index</a>
        API. In your screen:
      </p>

      <pre>
        <code class="ruby language-ruby">{`# app/screens/bit_coin_screen.rb
      class BitCoinScreen &lt; PM::Screen
        title "Bitcoin Price"
        stylesheet BitCoinScreenStylesheet

        def on_load
          @bitcoin_prices = {}
          @bitcoin_price = nil
          @last_fetched = nil
          @currency = "USD"

          append(UILabel, :bitcoin_price).data("Loading...")
          append(UILabel, :last_fetched_date).data("...")

          load_prices
        end

        def load_prices
          AFMotion::JSON.get("https://api.bitcoinaverage.com/all") do |result|
            if result.success?
              @bitcoin_prices = result.object
              @bitcoin_price = @bitcoin_prices[@currency]["global_averages"]["last"]
              find(:bitcoin_price).data("#{@bitcoin_price} #{@currency}")
              find(:last_fetched_date).data(Time.now.strftime("%b %e, %l:%M %p"))
            else
              mp result
            end
          end
        end

      end
      `}</code>
      </pre>

      <p>
        This time, when we run <code>rake</code> we get some data!
      </p>

      <p>
        <img
          src="http://clrsight.co/jh/Screen_Shot_2015-03-21_at_4.05.35_PM.png?+"
          alt="simulator with data"
        />
      </p>

      <p>
        Now let's add a button that changes the currency every time you press
        it. Easy enough, just add this to your <code>on_load</code>:
      </p>

      <pre>
        <code class="ruby language-ruby">{`# app/screens/bit_coin_screen.rb
      class BitCoinScreen &lt; PM::Screen
        title "Bitcoin Price"
        stylesheet BitCoinScreenStylesheet

        def on_load
          @bitcoin_prices = {}
          @bitcoin_price = nil
          @last_fetched = nil
          @currency = "USD"
          @currencies = [ "USD", "AUD", "CAD", "EUR" ]

          append(UILabel, :bitcoin_price).data("Loading...")
          append(UILabel, :last_fetched_date).data("...")
          append(UIButton, :cycle_currency).data("USD").on(:tap) do
            # Get next currency
            @currency = @currencies.rotate(@currencies.index(@currency) + 1).first
            @bitcoin_price = @bitcoin_prices[@currency]["global_averages"]["last"]
            find(:bitcoin_price).data("#{@bitcoin_price} #{@currency}")
          end

          load_prices
        end

        # ... omitted
      end
      `}</code>
      </pre>

      <p>Update your stylesheet to set the frame for this new button:</p>

      <pre>
        <code class="ruby language-ruby">{`# app/stylesheets/bit_coin_screen_stylesheet.rb
      class BitCoinScreenStylesheet &lt; ApplicationStylesheet

        # ... omitted

        def cycle_currency(st)
          st.frame = {
            left:           20,
            from_right:     20,
            below_previous: 100,
            height:         50,
          }
          st.font = UIFont.systemFontOfSize(24.0)
          st.color = UIColor.blackColor
        end
      end
      `}</code>
      </pre>

      <p>
        When the user taps the button, it'll cycle through a few currencies and
        display their prices.
      </p>

      <p>Run it and tap the button.</p>

      <p>
        <img
          src="http://clrsight.co/jh/Screen_Shot_2015-03-21_at_4.23.30_PM.png?+"
          alt="simulator with button"
        />
      </p>

      <p>Here's a link to the code up to this point:</p>

      <p>https://github.com/jamonholmgren/bitcoin-app/tree/normal</p>

      <h3 id="refactoringtoareactjspattern">
        Refactoring to a React.js pattern
      </h3>

      <p>
        The app works fine, but there are several places that interact with the
        UI when something happens to reflect the changes.
      </p>

      <p>
        <img
          src="http://clrsight.co/jh/2015-03-21-5iww9.png?+"
          alt="state changes"
        />
      </p>

      <p>
        One of the concepts that I keep coming back to is the idea of the UI
        being <em>a function of application state</em>; in other words, given a
        particular set of data, your UI should always look the same. This is one
        of the fundamental concepts taken from React.js. They refer to this as
        "one-way data flow".
      </p>

      <p>
        Let's take a look at what happens when we apply the principle that the
        UI should reflect the current application state.
      </p>

      <p>
        What would our app state look like? Let's use a simple hash, updating
        our <code>on_load</code> method:
      </p>

      <pre>
        <code class="ruby language-ruby">{`  def on_load
          @state = {
            bitcoin_prices: {},
            last_fetched: nil,
            currency: "USD",
            currencies: [ "USD", "AUD", "CAD", "EUR" ],
          }
          render(@state)
          load_prices
        end
      `}</code>
      </pre>

      <p>
        The line before <code>load_prices</code> is a new method call,
        <code>render</code>. Let's build it:
      </p>

      <pre>
        <code class="ruby language-ruby">{`  def render(state)
          # Build the UI initially if it hasn't been built yet
          build_initial_ui if find(:bitcoin_price).length == 0

          bitcoin_price = bitcoin_price_for_currency(state)

          # Set all the UI elements to reflect the current state
          find(:bitcoin_price).data("#{bitcoin_price} #{state[:currency]}")
          find(:last_fetched_date).data(state[:last_fetched_date])
          find(:cycle_currency).data(state[:currency])
        end

        def build_initial_ui
          append(UILabel, :bitcoin_price)
          append(UILabel, :last_fetched_date)
          append(UIButton, :cycle_currency).on(:tap) do
            rotate_currency
          end
        end

        def rotate_currency
          @state[:currency] = @state[:currencies].rotate(@state[:currencies].index(@state[:currency]) + 1).first
          render(@state)
        end

        def bitcoin_price_for_currency(state)
          return "Loading" unless state[:bitcoin_prices][state[:currency]]
          state[:bitcoin_prices][state[:currency]]["global_averages"]["last"]
        end
      `}</code>
      </pre>

      <p>
        There's a lot of familiar code. It checks to see if the views have been
        built yet and builds them if not. Then, it sets all the state data (like
        current bitcoin price, currency, button title). If the button is tapped,
        it calls <code>rotate_currency</code> which just rotates the currency
        and calls <code>render</code> again to update the UI.
      </p>

      <p>
        The <code>load_prices</code> method gets simpler. Check this out:
      </p>

      <pre>
        <code class="ruby language-ruby">{`  def load_prices
          AFMotion::JSON.get("https://api.bitcoinaverage.com/all") do |result|
            if result.success?
              @state[:bitcoin_prices] = result.object
              @state[:last_fetched_date] = Time.now.strftime("%b %e, %l:%M %p")
              render(@state)
            else
              mp result
            end
          end
        end
      `}</code>
      </pre>

      <p>
        There's only one method that manipulates the UI -- <code>render</code>.
        It can take any state hash that has the proper structure, so the screen
        just manipulates the <code>@state</code> hash and calls
        <code>render(@state)</code> anytime something has changed.
      </p>

      <p>Run it and you'll find that the app works just like before.</p>

      <p>Here's a link to the diff:</p>

      <p>
        https://github.com/jamonholmgren/bitcoin-app/commit/fcd635384e4b8e24425faeec5fd3cbbbd3a47367
      </p>

      <p>And the branch:</p>

      <p>https://github.com/jamonholmgren/bitcoin-app/tree/react</p>

      <h3 id="whatsthebenefit">What's the benefit?</h3>

      <p>
        It's about the same amount of code. I'm sure we could refactor the
        original to bring it in line with the React-like version. So, what
        benefits do we gain from this approach?
      </p>

      <p>
        The main benefit is <strong>cognitive</strong>. The only way the UI ever
        gets updated is with <code>render</code>, so if you have a UI element
        that isn't updating properly, you know where to look -- either in
        <code>render</code> or in something manipulating <code>@state</code> and
        calling <code>render</code>.
      </p>

      <p>
        <img
          src="http://clrsight.co/jh/2015-03-21-cnefy.png?+"
          alt="react version"
        />
      </p>

      <p>
        Another benefit is that the app state is very
        <strong>encapsulated</strong>, in one hash. You could serialize that
        when you exit the app and then unserialize. When you call
        <code>render</code> with the unserialized data, you'll be right back
        where you left off. You could even implement an undo feature in not too
        many lines of code or track history.
      </p>

      <p>
        You can also provide UI <strong>abstraction</strong> much easier, such
        as iPhone and iPad UI versions, or even iOS and Android. Look at this:
      </p>

      <pre>
        <code class="ruby language-ruby">{`def render(state)
        update_ui_android(state) if android?
        update_ui_iphone(state) if ios? &amp;&amp; iphone?
        update_ui_ipad(state) if ios? &amp;&amp; ipad?
      end
      `}</code>
      </pre>

      <p>
        Consider how complex a UI update would be in a cross-platform app
        without this single point of abstraction.
      </p>

      <p>
        And lastly, you can <strong>test</strong> the UI so much easier. Let's
        write a test.
      </p>

      <h3 id="testing">Testing</h3>

      <p>
        With the first example, there would need to be a lot of mocking or
        something like <code>instance_variable_set</code> to put the screen into
        a state that could be tested. With this, you can easily test the UI.
      </p>

      <p>
        Go into your spec folder and edit the
        <code>bit_coin_screen_spec.rb</code> file like this:
      </p>

      <pre>
        <code class="ruby language-ruby">{`# spec/screens/bit_coin_screen_spec.rb
      describe 'BitCoinScreen' do
        it "sets the current bitcoin price in USD" do
          screen = BitCoinScreen.new
          screen.render({
            bitcoin_prices: {
              "USD" =&gt; { "global_averages" =&gt; { "last" =&gt; 2.52 } },
            },
            last_fetched_date: "2015-03-21",
            currency: "USD",
            currencies: [ "USD" ],
          })

          screen.find(:bitcoin_price).data.should == "2.52 USD"
          screen.find(:last_fetched_date).data.should == "2015-03-21"
          screen.find(:cycle_currency).data.should == "USD"
        end
      end
      `}</code>
      </pre>

      <p>Run that spec. It should pass:</p>

      <pre>
        <code>{`BitCoinScreen
        - sets the current bitcoin price in USD

      1 specifications (3 requirements), 0 failures, 0 errors
      `}</code>
      </pre>

      <p>
        It's a fast and effective way to test UI elements. We aren't even
        mounting the screen in the simulator, but rather just testing it in
        memory. The speed gains are pretty impressive.
      </p>

      <h3 id="lookingforward">Looking forward</h3>

      <p>
        For ClearSight, we find that the <code>render</code> method is where our
        front end engineers and back end engineers meet. The front end can mock
        up the data they need to build the UI and call <code>render</code>, and
        the back end can hook up the real data and call <code>render</code>
        without worrying about what happens after that all that much. It's a
        great way to meet in the middle.
      </p>

      <p>
        If you're interested in being involved in the discussion, I've opened a
        <a href="https://github.com/infinitered/redpotion/issues/63">
          Github issue
        </a>
        on RedPotion. Or let me know what you think on Twitter!
      </p>

      <hr />

      <p>
        <em>
          Hat tip to <a href="https://twitter.com/hackflow">@hackflow</a> for
          the great article,
          <a href="http://hackflow.com/blog/2015/03/08/boiling-react-down-to-few-lines-in-jquery/">
            Boiling React down to a few lines of jQuery
          </a>
          , which provided the inspiration for this blog post. Also thanks to
          Matt Green, Darin Wilson, and Matthew Sinclair for their feedback on
          early drafts.
        </em>
      </p>
    </Page>
  );
};
