import React from 'react'
import Page from '../components/page'
// import Link from 'next/link'

export default () => {
  return (
    <Page title='What I am doing now'>
      <h1>What I'm doing now</h1>

      <p><em>Last updated July 15, 2017.</em></p>

      <p><em>(Inspired by Derek Sivers' <a href='http://sivers.org/now'>post</a>, here's what I'm currently up to.)</em></p>

      <p>I'm in my (relatively) new house in Washington state, working to finish putting in a new lawn. My kids are on summer break. I'm spending most of my time working remotely from my home office as Chief Operating Officer and CTO at <a href='https://infinite.red'>my mobile &amp; web app development company</a>.</p>

      <p>Also:</p>

      <p><img width='468' alt='derek sivers tweet' src='https://cloud.githubusercontent.com/assets/1479215/19919313/1452e898-a08f-11e6-9e7c-3fc212129f29.png' /></p>

      <ul>
        <li>Just wrapped up <a href='https://infinite.red/ChainReactConf'>a React Native conference</a></li>
        <li>Been working out regularly</li>
        <li><a href='https://www.facebook.com/photo.php?fbid=10155541585472090&set=a.88655052089.107840.727792089&type=3&theater'>Dropped 30 lbs in the last year</a></li>
      </ul>
    </Page>
  )
}
