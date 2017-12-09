import React from "react";
import Page from "../components/page";
// import Link from 'next/link'

export default () => {
  return (
    <Page title="Working four-day weeks">
      <h1>Working four-day weeks</h1>
      <p>
        <em>Published October 3, 2014</em>
      </p>

      <p>
        For the last three years, I've set our "summer hours" to Monday-Thursday
        from June to end of August.
      </p>

      <p>
        It's been very popular with my employees. The Pacific Northwest is known
        for rain (Portland, Seattle) but the summers are incredibly gorgeous,
        and this gives everyone a chance to enjoy the summer more fully.
      </p>

      <p>
        The reality, of course, is that we still need to make money to pay the
        bills. We're a small team (11 of us now) and we live and die by our
        billable hours/weeks. And I wasn't about to reduce salaries.
      </p>

      <h3 id="challenge1convincingourclients">
        Challenge 1: Convincing our clients
      </h3>

      <p>
        We generally charge by the week for development work. Design is usually
        hourly, since there's more back-and-forth and waiting-for-response time.
        And since nearly every client is in a hurry to get their project done,
        it is important that we convince them that we will still get their
        projects done on time.
      </p>

      <p>
        Surprisingly, this wasn't hard to do at all. Most clients understand the
        concept of "four tens" (e.g. four 10-hour workdays) and, while we didn't
        strictly follow that schedule (more on this later), it was the easiest
        way to communicate how it worked.
      </p>

      <p>
        In fact, the most common response was "Wow, I wish <em>we</em> worked
        four-day weeks!"
      </p>

      <h3 id="challenge2increasingproductivitymonthu">
        Challenge 2: Increasing productivity Mon-Thu
      </h3>

      <p>
        Our goal was to work four <em>8-hour</em> days, not 10-hour days. My
        rule of thumb is that a typical productive employee will get about four
        to five hours of billable client work done in a workday. That's 20-25
        hours in a typical week. In order to achieve this in four days, we
        needed consistently 5+ hours of billable time Monday through Thursday.
      </p>

      <p>
        To achieve this level of focus, we cut out our normal Monday-morning
        marathon of meetings (business development, engineering leads, scrum
        standups, and the like). We also reduced our open source work and
        internal tool development. Most also cut out social media sites except
        for lunchtime, although that was just a suggestion and not a policy.
      </p>

      <p>
        In the end, we still ended up working longer hours, but these changes
        helped keep the days manageable.
      </p>

      <p>
        There were definite downsides to these changes, though. I'll go over
        them in the Results section below.
      </p>

      <h3 id="challenge3maintainingthepace">
        Challenge 3: Maintaining the pace
      </h3>

      <p>
        It's easy to slip back into a 5-day workweek pace. I didn't want to have
        to "crack the whip" -- this was a collaborative thing, not an imposed
        thing, and I treat my team members as responsible adults. If the team
        wanted to continue it, they'd find a way to make it work. If they
        didn't, we could go back to five days.
      </p>

      <p>
        When it came down to it, the team paid more attention to the pace than I
        did. Each person did an amazing job of focusing on their projects and
        turning out great work in a shorter amount of time. I never had to
        "crack the whip" at all.
      </p>

      <h3 id="theresults">The results</h3>

      <p>
        Of the 17 weeks June-September, we worked only one five day workweek.
      </p>

      <ul>
        <li>June: 0 of 4 Fridays worked</li>

        <li>July: 0 of 4 Fridays worked</li>

        <li>August: 1 of 5 Fridays worked</li>

        <li>September: 0 of 4 Fridays worked</li>
      </ul>

      <p>
        <strong>The positives:</strong>
      </p>

      <ul>
        <li>
          Our billable time actually <em>increased</em> as soon as we went to
          4-day workweeks. Here are the four months before and after:
          <img src="http://clrsight.co/jh/2014-10-03-bm9ud.png?+" alt="graph" />
        </li>

        <li>Our revenue went up accordingly</li>

        <li>Every team member said they really enjoyed the schedule</li>

        <li>I went to the beach a lot with my family :-)</li>
      </ul>

      <p>
        <strong>The negatives:</strong>
      </p>

      <ul>
        <li>
          Project management was more scattered (exacerbated by our PM leaving
          partway through the summer) -- this is a focus point going forward
        </li>

        <li>Business development topics stalled for months</li>

        <li>
          Our{" "}
          <a href="https://github.com/clearsightstudio">open source projects</a>{" "}
          were maintained, but significant development was put on hold
        </li>

        <li>
          Sales leads weren't cultivated as much as normal (since I had less
          time to help with them)
        </li>
      </ul>

      <h3 id="goingforward">Going forward</h3>

      <p>
        As you probably guessed from the title, we consider the four-day
        workweek a success. We'll work on improving our project management
        processes, spend a little more time on strategic things, and maybe work
        a Friday here and there on open source, internal projects, or fun side
        projects.
      </p>

      <p>
        <em>
          Do you work 4-day workweeks? Wish you did?{" "}
          <a href="https://twitter.com/jamonholmgren">
            Tell me about it on Twitter
          </a>.
        </em>
      </p>
    </Page>
  );
};
