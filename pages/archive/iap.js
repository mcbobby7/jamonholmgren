import React from "react";
import Page from "../../components/page";
// import Link from 'next/link'

export default () => {
  return (
    <Page title="In-App Purchases in RubyMotion">
      <h1>In-App Purchases in RubyMotion</h1>
      <p>
        <em>Published February 12, 2015</em>
      </p>

      <p>
        Building iPhone apps is fun, but you need to at some point reap the
        rewards of your hard work. That's where in-app purchases (IAPs) come in.
      </p>

      <p>
        There are a few options out there, such as
        <a href="https://github.com/ivanacostarubio/helu">Helu</a> by my friend
        Ivan Acosta-Rubio. But Helu hasn't been updated in a while and I ran
        into a difficult to track down bug that I had to work around. Plus, the
        API, while simple enough, isn't quite "
        <a href="http://promotion.readthedocs.org/en/master/#goalphilosophyroadmap">
          ProMotion-like
        </a>
        ". I considered rewriting Helu to work better, but eventually decided it
        would be better to draw inspiration from it and go a different
        direction.
      </p>

      <p>
        That's why
        <a href="https://github.com/kevinvangelder">Kevin VanGelder</a> and I
        built a new gem called
        <a href="https://github.com/clearsightstudio/ProMotion-iap">
          ProMotion-iap
        </a>
        .
      </p>

      <p>More on this later. First, a tiny bit of background.</p>

      <h4 id="storekit">StoreKit</h4>

      <p>
        IAPs are handled by a Cocoa library called
        <a href="https://developer.apple.com/library/ios/documentation/StoreKit/Reference/StoreKit_Collection/">
          StoreKit
        </a>
        . StoreKit contains a fairly tight collection of classes and delegate
        protocols to retrieve, purchase, and restore purchases --
        non-consumable, consumable, subscription, and others.
      </p>

      <h4 id="itunesconnect">iTunes Connect</h4>

      <p>
        Before you get too far down this path, you'll need to set up an in-app
        purchase in <a href="https://itunesconnect.apple.com">iTunes Connect</a>
        and connect it to your app. Apple does a pretty good job of walking you
        through this process, so I won't detail it here, but you'll want to make
        sure you have a simple "Product ID" to reference from your app.
      </p>

      <h2 id="promotioniap">ProMotion-iap</h2>

      <p>
        ProMotion-iap is provides a module (<code>PM::IAP</code>) that exposes
        several methods to you when you include it. It's
        <a href="https://github.com/clearsightstudio/ProMotion-iap/tree/master/spec">
          well tested
        </a>
        and running in a production app.
      </p>

      <p>
        You can also use a convenience class for single in-app purchase
        products, <code>PM::IAP::Product</code>. I'll provide my examples using
        that class, but check out the README for the included module examples
        too which allow for bulk operations.
      </p>

      <p>
        <em>
          Note that, despite its name, ProMotion-iap doesn't require ProMotion
          to run. Feel free to add it to your Gemfile and include it in any
          class you want.
        </em>
      </p>

      <p>
        <em>
          Also note that this article is targeting version 0.2. Some things
          might change in minor ways before 1.0.
        </em>
      </p>

      <h4 id="retrievinginapppurchaseproducts">
        Retrieving in-app purchase products
      </h4>

      <pre>
        <code class="ruby language-ruby">{`class PurchaseScreen &lt; PM::Screen
        def on_load

          PM::IAP::Product.new("productid1").retrieve do |product, error|
            # product looks something like the following
            {
              product_id:               "productid1",
              title:                    "title",
              description:              "description",
              price:                    &lt;BigDecimal 0.99&gt;,
              formatted_price:          "$0.99",
              price_locale:             &lt;NSLocale&gt;,
              downloadable:             false,
              download_content_lengths: &lt;?&gt;, # TODO: ?
              download_content_version: &lt;?&gt;, # TODO: ?
              product:                  &lt;SKProduct&gt;
            }
          end

        end
      end
      `}</code>
      </pre>

      <p>
        <code>retrieve</code> does an asynchronous call to iTunes to retrieve
        the product, then map it into a readable hash that you can see in the
        example above. The <code>SKProduct</code> instance that we get from
        StoreKit is still available in the <code>[:product]</code> key, so if
        you need to do something else with it you still can. The
        <code>formatted_price</code> is done for you using Apple's recommended
        method.
      </p>

      <h4 id="purchasinganinappproduct">Purchasing an in-app product</h4>

      <pre>
        <code class="ruby language-ruby">{`class PurchaseScreen &lt; PM::Screen
        def on_load

          PM::IAP::Product.new("productid").purchase do |status, transaction|
            case status
            when :in_progress then show_spinner
            when :deferred    then hide_spinner
            when :purchased   then complete_transaction
            when :canceled    then go_away
            when :error
              # Failed to purchase
              transaction.error.localizedDescription # =&gt; error message
            end
          end

        end
      end
      `}</code>
      </pre>

      <p>
        This one is a little different. The block will be called multiple times
        for the product with various status updates. So the best thing to do is
        provide a <code>case</code> statement (it's still legal to use those in
        Ruby, right?) and then do whatever you need to do for that update.
      </p>

      <p>
        The methods called after <code>then</code> are your own. So, you might
        have something like this:
      </p>

      <pre>
        <code class="ruby language-ruby">{`def complete_transaction
        UIAlertView.alert "Thanks!", "You just bought a smudgeron!"
        User.current.smudgerons += 1
        User.current.save
      end
      `}</code>
      </pre>

      <h3 id="restoringiaps">Restoring IAPs</h3>

      <p>
        Apple recently rejected an iPhone app we developed at
        <a href="http://clearsightstudio.com/">ClearSight</a> because there
        wasn't a way to "restore in-app purchases." ProMotion-iap makes this
        easy to fix:
      </p>

      <pre>
        <code class="ruby language-ruby">{`class PurchaseScreen &lt; PM::Screen
        def on_load

          PM::IAP::Product.new("productid").restore do |status, product|
            if status == :restored
              # Update your UI, notify the user
            end
          end

        end
      end
      `}</code>
      </pre>

      <p>
        For now, <code>status</code> will always be <code>:restored</code>, but
        we will likely change that in the future to show error conditions, so be
        aware of it.
      </p>

      <p>
        You can restore all of the in-app purchases at once by using the
        included module method, <code>restore_iaps</code>. Check out the README
        for more.
      </p>

      <h4 id="nextsteps">Next steps</h4>

      <p>
        Kevin and I will be fleshing out the rest of the StoreKit API soon,
        including subscription products. In the meantime, go check it out and
        file an issue if you run into anything.
      </p>

      <p>
        <em>
          UPDATED 2/16/15: Clarified my decision on why I didn't use Helu, since
          it caused some confusion.
        </em>
      </p>
    </Page>
  );
};
