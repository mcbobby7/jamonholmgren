import React from "react";
import Page from "../components/page";
// import Link from 'next/link'

export default () => {
  return (
    <Page title="How to use Bootcamp to run Windows 10 Preview on OS X Yosemite">
      <h1>How to use Bootcamp to run Windows 10 Preview on OS X Yosemite</h1>
      <p>
        <em>Published November 27, 2014</em>
      </p>

      <p>
        I've been playing with Windows 10 on VirtualBox for a while , but the
        performance on my 2013 13" MacBook Pro Retina is a bit lacking. Since
        I'd like to get back into playing a few games on this MBP, I decided to
        take the plunge and install Windows 10 on Bootcamp. I couldn't find any
        good guides online, so here's a blog post describing in detail what I
        had to do to get it working.
      </p>

      <h4 id="whatyouneed">What you need:</h4>

      <ol>
        <li>Relatively recent MacBook Pro or similar</li>

        <li>A good backup in case you screw this up</li>

        <li>A 4 GB USB flash drive or larger</li>

        <li>
          Patience -- this took about 90 minutes (excluding ISO download time,
          which was about 3 hours on my old cable modem that I need to replace)
        </li>
      </ol>

      <h4 id="1downloadwindows10preview">1. Download Windows 10 Preview</h4>

      <p>Go here: http://windows.microsoft.com/en-us/windows/preview-iso</p>

      <p>
        ...and follow the instructions to download the ISO. I chose the English
        (United States) 64-bit (x64) version.
      </p>

      <p>You can continue on while it's downloading. It's 3.8 GB.</p>

      <h4 id="2cleanoutyourusbdrive">2. Clean out your USB drive</h4>

      <p>
        Since this process will result in wiping your USB flash drive, make sure
        you've copied all the info off of there that you don't want to lose.
        Keep it plugged into your Mac.
      </p>

      <p>
        <em>
          Note: I also formatted the drive as exFAT just in case. I'm not sure
          if this step is necessary or not.
        </em>
      </p>

      <h4 id="3launchbootcampassistant">3. Launch Boot Camp Assistant</h4>

      <p>
        <img
          src="http://clrsight.co/jh/2014-11-26-u8oy6.png?+"
          alt="Boot Camp Assistant"
        />
      </p>

      <h4 id="4choosewindows7orlater">4. Choose Windows 7 or later</h4>

      <p>
        Check both of the active boxes (the middle one should be checked but
        grayed out).
      </p>

      <p>
        <img
          src="http://clrsight.co/jh/2014-11-26-57gwv.png?+"
          alt="Select Tasks"
        />
      </p>

      <h4 id="5selecttheisoimage">5. Select the ISO image</h4>

      <p>When your download is finished, select it in the next box.</p>

      <p>
        <img
          src="http://clrsight.co/jh/2014-11-26-chpxh.png?+"
          alt="Open ISO file dialog"
        />
      </p>

      <h4 id="6maketheinstallusbflashdrive">
        6. Make the install USB flash drive
      </h4>

      <p>
        Allow Boot Camp Assistant to wipe your USB flash drive and it'll copy
        Windows onto it.
      </p>

      <p>
        <img
          src="http://clrsight.co/jh/2014-11-26-5fr3a.png?+"
          alt="copying windows files"
        />
      </p>

      <p>It'll also download more stuff. This took about 10 minutes for me.</p>

      <h4 id="7createapartitionatleast25gb">
        7. Create a partition at least 25 GB
      </h4>

      <p>
        Boot Camp Assistant will ask you how much room to add for Windows 10.
        I'd recommend at least 25 GB. Since I plan to play games on it, I chose
        60 GB.
      </p>

      <p>
        <img src="http://clrsight.co/jh/2014-11-27-ppnvr.png?+" alt="" />
      </p>

      <p>
        <em>
          By the way, a good way to free up hard drive space on your MacBook Pro
          is to move larger files onto a USB drive. I found a 128 GB USB drive
          with great ratings for $35 which is pretty nuts. That's the size of my
          old MacBook Air's entire hard drive...<a href="http://www.amazon.com/gp/product/B00FE2N1WS/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B00FE2N1WS&amp;linkCode=as2&amp;tag=jamonholmgren-20&amp;linkId=XY3OTJ5YECI4LWNN">
            here's the link
          </a>.
        </em>
      </p>

      <p>While partitioning the drive, I got this error:</p>

      <blockquote>
        <p>
          The disk cannot be partitioned because some files cannot be moved.
        </p>

        <p>
          Back up the disk and use Disk Utility to format it as a single Mac OS
          Extended (Journaled) volume. Restore your information to the disk and
          try using Boot Camp Assistant again.
        </p>
      </blockquote>

      <p>
        <img
          src="http://clrsight.co/jh/2014-11-27-h6kn2.png?+"
          alt="The disk cannot be partitioned because some files cannot be moved"
        />
      </p>

      <p>
        This will save you a lot of time, so let me put it in unnecessarily loud
        bolded text:{" "}
        <strong>
          If you follow these steps properly it should NOT require you to
          reinstall or clone/restore like this recommends.
        </strong>
      </p>

      <p>
        I got around this by going to Disk Utilities in Recovery mode and
        repairing the partition.
      </p>

      <p>
        First, restart in recovery mode by holding Cmd+R while booting up.
        Select Disk Utilities and do a repair on your main HD partition (NOT the
        first option in the volume list, usually the second).
      </p>

      <p>
        <img
          src="http://clrsight.co/jh/2014-11-27-hcqcs.png?+"
          alt="disk utilities"
        />
      </p>

      <p>
        Note that you might have to unlock your hard drive to get to the
        partition Repair Disk. It's on the top toolbar (not pictured above, but
        you'll see an Unlock icon).
      </p>

      <p>
        Once the repair is done, restart your Mac normally, log in, and start
        Boot Camp Assistant again. This time, skip the install disk and download
        checkboxes.
      </p>

      <p>
        <img
          src="http://clrsight.co/jh/2014-11-27-sf8b7.png?+"
          alt="select tasks"
        />
      </p>

      <p>It will partition properly this time. Whew!</p>

      <h4 id="8installwindows10">8. Install Windows 10</h4>

      <p>
        This is a pretty simple process. Boot Camp Assistant will walk you
        through the process.
      </p>

      <p>
        It takes a long time, though, like 20 minutes at least I think. Have
        something else to do in the meantime.
      </p>

      <h4 id="9thereisnostep9">9. There is no step 9</h4>

      <p>I've always wanted to write that.</p>

      <p>
        <img
          src="http://jamonholmgren.com/content/images/2014/11/Windows10onMacBookPro.jpg"
          alt="WINDOWS running on MAC that's insane"
        />
      </p>

      <p>
        Hit me up on Twitter if this helped you! Feel free to let me know any
        refinements needed. I probably won't be able to provide any tech support
        though, so figure it out on your own. :)
      </p>

      <p>Happy Thanksgiving!</p>

      <h4 id="update1272014">Update 12/7/2014</h4>

      <p>A few notes after using this for a while:</p>

      <ol>
        <li>
          Make sure you have enough space. 60 GB wasn't nearly enough and I had
          to blow everything away and reinstall, running into{" "}
          <a href="http://jamonholmgren.com/finder-disk-utilities-hard-drive-space/">
            this problem
          </a>{" "}
          in the meantime.
        </li>

        <li>
          Make sure you install all the Boot Camp drivers on the Windows side,
          or bluetooth and WiFi won't work.
        </li>

        <li>
          If you're running OS X Yosemite, your hard drive has likely been
          formatted using Core Storage rather than HFS+. Because of that,
          Windows won't be able to access anything on the Mac side, nor are
          there any third party tools that I've found that allow that.
          Supposedly you can switch back to HFS+, but I wouldn't recommend that.
          Bummer. Best way to transfer files is to format a flash drive as FAT
          (exFAT?) and move files that way, or use Dropbox.
        </li>
      </ol>
    </Page>
  );
};
