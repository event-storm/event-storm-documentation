import React from 'react';
import { Helmet } from 'react-helmet';

function FAQ() {
  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "When should I use Event Storm?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>The Event Storm is a general purpose state management solution. You can use the library in large project, as well as in small ones. The library is providing a choice for smaller state's. If you're new to state management at all, you can start with creating a <a href='/event-storm-documentation/docs/api-reference/model/'>model</a>. </p><p>Meanwhile, if you're already an advanced user of state management you can start using the <a href='/event-storm-documentation/docs/faq/docs/api-reference/storm/'>storm</a> directly. More specifically, if you're already using a state management and suffering from performance problems, definetely you need to give a try of the Event storm. The library was initially created <a href='/event-storm-documentation/docs/motivation/'>for that reason</a>.</p>"
              }
            },
            {
              "@type": "Question",
              "name": "Can Event storm only be used with React?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>No. You are free to use the library in any environment with any framework(library) you wish. The Event storm is design in to be used in any Javascript hoisted environment(browser, nodejs, native, etc.).</p>"
              }
            },
            {
              "@type": "Question",
              "name": "How to organize the directory structure?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>We are suggesting not to make a separated directory for managing all the storm related stuff. Having simple storm directory with project bindings can be enough in most of the cases.</p>"
              }
            },
            {
              "@type": "Question",
              "name": "Why the library has no action or reducer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>The Event Storm is following the KISS principle. The simpler the code, the easier to maintain it. The main reason for having unified actions or reducers, is to ensure that all the updates for the information are done from single sources. Thus it's easier to debug and to find the issues. Unfortunately, as far as the project is being scaled, there is moreoften need to update the same state from multiple action/reducers, and the abstraction is bringing more overhead, rather than solving real problem.</p><p>The Event Storm library suggests to keep the information updates from a single functions and call them directly. There is no need to keep the centralized condition determinator to make the updates just with that functions. Furthermore, the keeping the updates as simple as function will decrease the boilerplate when trying to add some updater dynamically.</p>"
              }
            },
            {
              "@type": "Question",
              "name": "Should I keep everything inside one storm?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>The library is not limited to just one storm instance. It is possible to create as many library instances as you need. You can relay on your use-case and separate the application information in a modular manner. You can also use <a href='/event-storm-documentation/docs/api-reference/model/'>models</a> when dealing with a single shared information units.</p>"
              }
            },
            {
              "@type": "Question",
              "name": "How to organize the migration to Event storm?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>The Event Storm is designed to be an easy replacement for existing state management solutions. For that reason the naming is mostly kept the same. When migrating from action/reducer architecture(e.g. Redux) you can:</p><ul><li>specify your reducers as a separate functions</li><li>get rid of actions and actions types</li><li>replace dispatching actions to calling the direct update functions</li></ul><p>If you're using React:</p><ul><li>The library has no React.Provider, so you can simple get rid of it</li><li><a href='/event-storm-documentation/docs/bindings/react/api-reference/useStorm/'>useStorm</a> is similiar to other state management hooks. You can skip using the <a href='/event-storm-documentation/docs/bindings/react/api-reference/useStorm/#tselectfragment'>second argument</a> for the first migration phase. By default the subscription function will be assigned to subscribe to whole store. You can address the performance optimizations later.</li></ul>"
              }
            }
          ]
        }
      `}</script>
    </Helmet>
  );
}

export default FAQ;