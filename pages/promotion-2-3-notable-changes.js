import React from 'react'
import Page from '../components/page'
// import Link from 'next/link'

export default () => {
  return (
    <Page title='ProMotion 2.3 Notable Changes'>
      <h1>ProMotion 2.3 Notable Changes</h1>
      <p><em>Published April 3, 2015</em></p>
      
      <p><a href="https://github.com/clearsightstudio/ProMotion">ProMotion 2.3</a> includes several useful new features and better compatibility with <a href="https://github.com/infinitered/redpotion">RedPotion</a>. It should be fully backwards-compatible with older version of ProMotion, so <a href="https://github.com/clearsightstudio/ProMotion/issues">file an issue</a> if you run into anything.</p>

      <p>Here are the notable changes in ProMotion 2.3:</p>

      <h4 id="documentation">Documentation</h4>

      <p>Documentation has been moved from the Wiki to a <code>./docs</code> folder within the repository itself. All pull requests should include relevant documentation updates, keeping our docs more in sync with the code base.</p>

      <h4 id="pmtablesearchableimprovements">PM::Table::Searchable improvements</h4>

      <p>You can now specify a lambda with your search parameter for more fine-grained control.</p>

      <pre><code class="ruby language-ruby">
      {`
        class TableScreenStabbySearchable &lt; TableScreenSearchable
          searchable with: -&gt; (cell, search_string) {
            return search_string.split(/\s+/).all? {|term|
              cell[:properties][:searched_title].downcase.strip.include?(term.downcase.strip)
            }
          }

          def build_cell(title)
            {
              title: title,
              subtitle: @subtitle.to_s,
              action: :update_subtitle,
              properties: {
                searched_title: "#{title} - stabby"
              }
            }
          end
        end
      `}
      </code></pre>

      <p>Or if you want to reference a method instead:</p>

      <pre><code class="ruby language-ruby">class MyTableScreen &lt; PM::TableScreen
        searchable placeholder: "Search This Table", with: :custom_search_method

        def custom_search_method(cell, search_string)
          cell[:properties][:some_obscure_attribute].strip.downcase.include? search_string.strip.downcase
        end
      end
      </code></pre>

      <p>To initially hide the search bar behind the nav bar until the user scrolls it into view, use <code>hide_initially: true</code>.</p>

      <pre><code class="ruby language-ruby">class MyTableScreen &lt; PM::TableScreen
        searchable hide_initially: true
      end
      </code></pre>

      <h4 id="pmdelegateon_tab_selected">PM::Delegate <code>on_tab_selected</code></h4>

      <p>ProMotion tab bar now triggers an <code>on_tab_selected</code> method call when a tab is selected.</p>

      <pre><code class="ruby language-ruby">class AppDelegate &lt; ProMotion::Delegate
        def on_load(app, options)
          open_tab_bar HomeScreen, AboutScreen, ContactScreen
        end

        def on_tab_selected(screen)
          puts screen # instance of some screen
        end
      end
      </code></pre>

      <h4 id="pmtablescreenwill_display_header">PM::TableScreen <code>will_display_header</code></h4>

      <p>You can customize the section header views just before they are displayed on the table. Note this is different from the table header view.</p>

      <pre><code class="ruby language-ruby">def will_display_header(view)
        view.tintColor = UIColor.redColor
        view.textLabel.setTextColor(UIColor.blueColor)
      end
      </code></pre>

      <h4 id="pmtablescreentable_footer_view">PM::TableScreen <code>table_footer_view</code></h4>

      <p>You can give the table a custom header view (this is different from a section footer view) by defining:</p>

      <pre><code class="ruby language-ruby">def table_footer_view
        # Return a UIView subclass here and it will be set at the bottom of the table.
      end
      </code></pre>

      <p>This is useful for information that needs to be at the very bottom of a table.</p>

      <h4 id="pmsupport">PM::Support</h4>

      <p>New module (automatically included in PM::Delegate and PM::Screen variants) that includes the following methods:</p>

      <ul>
      <li><code>app</code>: shortcut for <code>UIApplication.sharedApplication</code></li>

      <li><code>app_delegate</code>: shortcut for <code>UIApplication.sharedApplication.delegate</code></li>

      <li><code>app_window</code>: shortcut for <code>UIApplication.sharedApplication.delegate.window</code></li>

      <li><code>try</code>: lets you try methods that may not exist, similar to ActiveSupport's <code>try</code> method. Note that unlike ActiveSupport, we're not monkeypatching every object with this method.</li>
      </ul>

      <p>It's sometimes useful to monkeypatch all objects with the methods in PM::Support. Just create a file in your app like this:</p>

      <pre><code class="ruby language-ruby">class NSObject
        include ProMotion::Support
      end
      </code></pre>

      <p>Now you can use <code>try</code> and <code>app</code> and whatnot in any object. Since PM::Support is so tiny, it shouldn't have any appreciable impact on performance.</p>

      <h4 id="pmscreenset_nav_bar_buttons">PM::Screen <code>set_nav_bar_buttons</code></h4>

      <p>Similar to <code>set_nav_bar_button</code>, this allows you to set more than one at a time by passing in an array.</p>

      <pre><code class="ruby language-ruby">{`set_nav_bar_buttons :right, [{
        custom_view: my_custom_view_button
      },{
        title: "Tasks",
        image: UIImage.imageNamed("whatever"),
        action: nil
      }]
      `}</code></pre>

      <h3 id="otherimprovements">Other improvements</h3>

      <ul>
      <li>Refactored a bunch of tests to make the test suite run faster and have better coverage</li>

      <li>Fixed some subtle bugs with searchable</li>

      <li>Added in <code>cell#on_load</code> to make PM more compatible with RedPotion</li>
      </ul>

      <p>Thanks to everyone who contributed to this latest release, which is our most stable and useful ProMotion yet!</p>

    </Page>
  )
}
