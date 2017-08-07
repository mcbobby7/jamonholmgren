import React from 'react'
import Page from '../components/page'
import Link from 'next/link'

export default () => {
  return (
    <Page title='My favorite tech' description='All about my favorite technologies and what I am currently learning'>
      <h1>My Favorite Tech (for now)</h1>

      <p>
        If there's one thing I've learned, it's that I love to explore new technologies. Here's a description of what I'm currently learning about and playing with.
      </p>

      <h3>React Native</h3>

      <p>My company, <a href='https://infinite.red'>Infinite Red, Inc.</a>, uses <a href='https://facebook.github.io/react-native/'>React Native</a> to power our client mobile apps. I've been working on some personal projects in React Native using the <a href='https://infinite.red/ignite'>Ignite</a> React Native Starter Kit, and it's pretty awesome. I've done native mobile app programming as well as RubyMotion, but nothing has come close to the speed and cross platform story of React Native.</p>
      <p>Biggest downside is still the Node/NPM ecosystem, which can be a crapshoot at best. But it's worth fighting through.</p>

      <h3>Elixir & Phoenix</h3>

      <p>My company also uses <a href='http://elixir-lang.org'>Elixir</a> and the <a href='http://phoenixframework.org'>Phoenix web framework</a> for many of our websites, web apps, back ends, and APIs.</p>
      <p>Elixir is probably my favorite programming language. It combines functional ideas in a practical way with a Ruby-esque beauty and Erlang's powerful underlying OTP and virtual machine.</p>
      <p>I've built a content management system for Elixir / Phoenix called <a href='https://github.com/infinitered/thesis-phoenix'>Thesis</a>. It's really slick, although not a lot of people know about it.</p>

      <h3>Next.js, Now.sh</h3>

      <p>This website is <a href='https://github.com/jamonholmgren/jamonholmgren'>open source</a> and written in <a href='https://zeit.co/blog/next'>Next.js</a>, deployed via <a href='https://zeit.co/now'>Now.sh</a>. The process couldn't have been easier! I really enjoyed it from the initial spin-up to porting over my old Ghost CMS blog posts to deploying live and configuring the DNS.</p>

      <h3>Elm</h3>

      <p>I'm <Link href='/talks'>giving talks</Link> on Elm fairly regularly and have done some open source experiments, including <a href='https://github.com/jamonholmgren/path'>Path</a> and <a href='https://github.com/jamonholmgren/rocket-elm'>Rocket Elm</a>.</p>
      <p>Elm is fantastic and I have a lot of admiration for it. It remains to be seen if it can ever <a href='http://www.elmbark.com/2016/03/16/mainstream-elm-user-focused-design'>be mainstream</a>.</p>

      <h3>Excalibur.js</h3>

      <p>My son is now twelve, like I was <Link href='/beginnings'>when I started coding</Link>, and I found <a href='https://excaliburjs.com/'>Excalibur.js</a> for him to make small games with. It's a delightful little JavaScript/TypeScript game framework.</p>
    </Page>
  )
}
