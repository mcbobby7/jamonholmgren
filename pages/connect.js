import React from "react";
import Link from "next/link";
import Page from "../components/page";

export default () => {
  return (
    <Page title="Connect with me">
      <h2>Connect with me</h2>

      <p>You can find me online any of these places:</p>

      <p>
        <a href="https://twitter.com/jamonholmgren">Twitter</a> &mdash; I tweet about
        software design and development mostly, with some humor, some remote
        work discussion, and generally friendly and upbeat tone. Follow me, I
        promise I’ll make it worth your while.
      </p>

      <p>
        <a href="https://facebook.com/jamon.holmgren">Facebook</a> &mdash; I post
        about my kids, family, amusing thoughts that come to my head, personal
        milestones, and a few other things. Feel free to friend request me
        there; I’m really not that private of a person.
      </p>

      <p>
        <a href="http://community.infinite.red">Infinite Red Community Slack</a>
        &mdash; I started my company’s community slack and we talk mostly about tech
        in there. Feel free to say hi if you join.
      </p>

      <p>
        <a href="https://instagram.com/jamonholmgren">Instagram</a> &mdash; I’m
        semi-active on there. Feel free to follow me, and I’ll probably follow
        you back.
      </p>

      <p>
        <a href="https://medium.com/@jamonholmgren">Medium</a> &mdash; I write
        occasionally there. Like Instagram, follow me and I’ll follow you back.
      </p>
    </Page>
  );
};
