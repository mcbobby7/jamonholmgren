import React from 'react'
import Page from '../components/page'
// import Link from 'next/link'

export default () => {
  return (
    <Page title='Inspect UIWebView with Safari'>
      <h1>Inspect UIWebView with Safari</h1>
      <p><em>Published February 10, 2015</em></p>
      
      <p>My friend <a href="https://twitter.com/matthewsinclair">Matthew Sinclair</a> pointed out a <a href="https://github.com/motion-kit/motion-kit/issues/103#issuecomment-73644286">neat trick</a> recently. When embedding a UIWebView into an app, it's often useful to be able to inspect the contents of that view.</p>

      <p>First, go to Settings -> Advanced and turn on the "Develop menu" in Safari.</p>

      <p><img src="http://clrsight.co/jh/2015-02-10-qrzcd.png?+" alt="develop menu" /></p>

      <p>Then, with the simulator running, go to the Develop menu and choose the simulator.</p>

      <p><img src="https://cloud.githubusercontent.com/assets/311495/6121749/dc30a68c-b13c-11e4-8fd1-c7b8c6f0ad19.png" alt="simulator" /></p>

      <p>It'll open up the Safari Inspector and give you access to the UIWebView.</p>

      <p>It's often a good idea to mix in web views into your native screens where appropriate. Web views are fast to develop and, as long as you don't need to interact with them too much, seem just like native views. This gives you a few more tools to work with them.</p>
    </Page>
  )
}
