import React from 'react';
import AnswerOption from './AnswerOption';

const ExamTemplate = () => {
  let answers = ['answer 1', 'answer 2', 'answer 3', 'answer 4'];

  return (
    <div>
      <ExamHeader />
      <ExamQuestion />
      {
          answers.map((answer, i) => (
              <AnswerOption
              answer={answer}
               />
          ))
      }
    </div>
  );
};

export default ExamTemplate;
