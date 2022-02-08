import React from 'react';
import data from './data';
import SingleQuestion from './Question'
import { useState } from 'react';

const App = () => {

  // store elements of data.js
  const [questions, setQuestions] = useState(data);

  // displays on screen
  return <main>
    <div className='container'>
      <h2>Questions and Answers</h2>
      <section className='info'>
        {/* // loop */}
        {
          questions.map((question) => {
            return (
               // display questions from this file
               // pass everything question has
              <SingleQuestion key={question.id} {...question} />

            );
          })
        }
      </section>
    </div>
  </main>;
};

export default App;
