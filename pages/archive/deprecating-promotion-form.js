import React from "react";
import Page from "../../components/page";
// import Link from 'next/link'

export default () => {
  return (
    <Page title="Deprecating ProMotion-form">
      <h1>Deprecating ProMotion-form</h1>
      <p>
        <em>Published November 20, 2015</em>
      </p>
      <p>
        As of today, I'm deprecating
        <a href="https://github.com/infinitered/ProMotion-form">
          ProMotion-form
        </a>
        .
      </p>

      <p>
        It's never all that much fun to shut down an open source project that I
        created. I know that others rely on it, and it will cause some pain.
      </p>

      <p>
        Fortunately, there's a great alternative to ProMotion-form.
        <a href="https://twitter.com/bmichotte">Benjamin Michotte</a>, the
        prolific Belgian RubyMotion developer, has created a new ProMotion addon
        called
        <a href="https://github.com/bmichotte/ProMotion-XLForm">
          ProMotion-XLForm
        </a>
        . Since it's powered by a much less flakey CocoaPod, the odd issues
        caused by XLForms won't be present. And Benjamin is an excellent
        developer, so he'll take good care of you.
      </p>

      <p>
        Migration should be pretty straightforward. Read the docs -- the API is
        very similar to PM-form, so migrating over shouldn't be a huge pain.
      </p>

      <p>
        Thanks Benjamin for the excellent successor, and thanks to everyone who
        helped contribute to ProMotion-form!
      </p>
    </Page>
  );
};
