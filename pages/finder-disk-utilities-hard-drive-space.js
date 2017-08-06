import React from 'react'
import Page from '../components/page'
// import Link from 'next/link'

export default () => {
  return (
    <Page title='Finder and Disk Utilities report different free space'>
      <h1>Finder and Disk Utilities report different free space</h1>
      <p><em>Published December 1, 2014</em></p>
      
      <p>I recently <a href="/bootcamp-windows-10/">installed Windows 10 Preview via Boot Camp</a> and the process went pretty smoothly. I decided, however, to blow away the partition because I wanted to a bigger one.</p>

      <p>After removing the partition using Boot Camp Assistant, Finder showed the 140 GB of freed up hard drive space just fine. But Boot Camp Assistant reported only 26 GB, as did Disk Utilities -- a lot less space than I needed.</p>

      <p>I tried a bunch of stuff and nothing worked. Finally, I called AppleCare, and after an escalation to a helpful guy named Phil, we figured out that the <code>/Volumes/MobileBackups</code> folder had gotten out of control.</p>

      <p>This folder apparently houses temporary (ostensibly) backups when you're not connected to your Time Machine drive. Since I had been away from my Time Capsule for a few days over Thanksgiving break and had installed a massive partition, this folder had somehow swelled to large proportions. OS X is supposed to delete these files when it needs more space, but they weren't being deleted.</p>

      <p>To remedy this, I just turned off Time Machine and turned it back on.</p>

      <p><img src="http://clrsight.co/jh/Screen_Shot_2014-12-01_at_4.58.34_PM.png?+" alt="time machine" /></p>

      <p>This cleared that folder and Disk Utilities showed the right info again.</p>

      <p>Another "this was super annoying and I hope it helps someone some day" blog post! Hit me up on Twitter if it helped you.</p>
    </Page>
  )
}
