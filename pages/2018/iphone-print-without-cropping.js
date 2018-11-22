import React from "react";
import Page from "../../components/page";

export default () => {
  return (
    <Page title="FIXED: iOS Printing Images Cropped Weirdly">
      <h1>FIXED: iOS Printing Images Cropped Weirdly</h1>
      <p>
        <em>Published November 21, 2018</em>
      </p>
      <p>
        My wife Chyra told me recently that her iPhone always seems to crop
        images oddly when printing via AirPrint.
      </p>
      <p>
        She sent me a photo and when I went to print from my iPhone, I saw the
        same behavior.
      </p>
      <img src="/static/random/print-issue-iphone.jpg" />
      <p>
        As you can see from the following screenshot, the above image gets
        cropped:
      </p>
      <img src="/static/random/print-issue-iphone-screenshot.jpg" />
    </Page>
  );
};
