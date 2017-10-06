import React from 'react'
import Page from '../components/page'
import Link from 'next/link'

export default () => {
  return (
    <Page title='What I am doing now'>
      <h1>What I'm doing now</h1>

      <p><em>Last updated October 5, 2017.</em></p>

      <p><em>(Inspired by Derek Sivers' <a href='http://sivers.org/now'>post</a>, here's what I'm currently up to.)</em></p>

      <p>I'm in my home in Washington state, watching the rain start to descend on my new lawn. My kids are back in school (all but the youngest). I'm spending most of my time working remotely from my home office as Chief Operating Officer and CTO at <a href='https://infinite.red'>my mobile &amp; web app development company</a>.</p>

      <ul>
        <li>Our family now has two new kittens, Waldo and Willow</li>
        <li>Been working out regularly</li>
        <li><Link prefetch href='/tech'>Playing with some new languages and frameworks</Link></li>
      </ul>

      <p><img width='468' alt='derek sivers tweet' src='https://cloud.githubusercontent.com/assets/1479215/19919313/1452e898-a08f-11e6-9e7c-3fc212129f29.png' /></p>
    </Page>
  )
}
