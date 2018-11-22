import React from "react";
import Page from "../components/page";
// import Link from 'next/link'

export default () => {
  return (
    <Page title="Cleaner View Rendering in Rails">
      <h1>Cleaner View Rendering in Rails</h1>
      <p>
        <em>Published February 11, 2015</em>
      </p>

      <p>
        We've been using the "Presenter pattern" at
        <a href="http://clearsightstudio.com/">ClearSight</a> for some time now.
        Since everyone seems to have gotten used to the idea of only using one
        instance variable per controller action, we decided to take it one step
        further.
      </p>

      <p>
        We avoid convenience methods such as <code>current_user</code> in the
        view and provide all data through the presenter in simple data
        structures rather than full ActiveRecord objects. It makes mocking and
        testing much easier if there isn't a reliance on exterior state or
        objects.
      </p>

      <p>
        We also want to avoid setting any instance variables at all and instead
        provide a local variable via the <code>locals</code> hash.
      </p>

      <p>
        Here's how we've accomplished it through POROs (plain old Ruby objects).
        We're pretty happy with this and excited about how clean it makes our
        code.
      </p>

      <h3 id="thecontroller">The Controller</h3>

      <p>
        To clean up the render action (no ugly <code>locals</code> hash), we
        provide a class method called <code>build</code> that returns the right
        hash:
      </p>

      <pre>
        <code class="ruby language-ruby">{`class MyController &lt; ApplicationController
        def index
          render :index, MyIndexPresenter.build({
            people: User.all,
            current_user: current_user,
          })
        end
      end
      `}</code>
      </pre>

      <h3 id="thepresenter">The Presenter</h3>

      <p>Each presenter is something like this:</p>

      <pre>
        <code class="ruby language-ruby">{`class MyIndexPresenter &lt; AppPresenter
        def people
          properties[:people].map do |person|
            {
              profile_url: "/user/#{person.id}",
              display_name: "#{person.first_name} #{person.last_name}",
            }
          end
        end

        def current_user_name
          properties[:current_user].display_name
        end
      end
      `}</code>
      </pre>

      <p>
        Simple, direct, to the point. It exposes some convenient methods we can
        use in our view, referring to the <code>properties</code> hash which is
        set on initialization. It explicitly provides hashes for any collections
        (like this group of users above), giving the view only the data it needs
        in the format it needs.
      </p>

      <h3 id="theview">The View</h3>

      <p>We use Slim, and our view might look something like this:</p>

      <pre>
        <code class="slim language-slim">
          header title = presenter.current_user_name div ul -
          presenter.people.each do |person| li = link_to person[:display_name],
          person[:profile_url] `}
        </code>
      </pre>

      <p>
        The <code>presenter</code> local variable has exposed two methods to us,
        so we use those. In most cases, these are hashes or strings or integers
        -- no complex objects at all.
      </p>

      <h3 id="theapppresenter">The AppPresenter</h3>

      <p>
        The <code>AppPresenter</code> is a PORO class that gives you just a few
        methods.
      </p>

      <pre>
        <code class="ruby language-ruby">{`class AppPresenter
        def self.build(args={})
          new(args).render_options
        end

        def initialize(args={})
          @properties = args
        end

        def properties
          @properties ||= {}
        end

        def render_options
          { locals: { presenter: self } }
        end
      end
      `}</code>
      </pre>

      <p>
        The <code>build</code> method just conveniently calls
        <code>new(args).render_options</code> for us, so we can render cleanly
        in our controller (see above). It hangs onto properties that you pass
        into it, and the <code>render_options</code> method passes back to
        Rails's built-in <code>render</code> method the option hash it expects;
        mainly the <code>locals:</code> directive which tells it to expose the
        presenter to the view.
      </p>

      <p>
        What do you think of this pattern? Pros, cons? Rails developers never
        have opinions about this stuff, right? ;-) Let me know on Twitter!
      </p>
    </Page>
  );
};
