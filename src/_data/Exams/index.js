const exams = [
  {
    title: "T. Carlos' Challenge I",
    type: 'Conversational',
    difficulty: 2,
    recommendedNext: "T. Carlos' Challenge II",
    description: 'My first challenge Exam. I hope you know me well!',
    image:
      'https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    questions: [
      {
        text: "What's my full Name?",
        correctAnswer: 'Carlos Alberto Zuñiga Nava',
        answers: [
          'Charles Albert Zuñiga Nava',
          'Carlo Alberto Zuñiga Nava',
          'Carlangas Albertano Zuñi-GAS Navarruski'
        ]
      },
      {
        text: 'On a scale from 1 to 10. How much do I love Pokémon?',
        correctAnswer: '10 - You are bonkers for Pokémon.',
        answers: [
          '0 - You absolutely despise Poké-whatever.',
          "5 -  You think it's cool but you don't play often.",
          'Can you repeat that?'
        ]
      },
      {
        text: 'What is my favorite way to say hello?',
        correctAnswer: "What's up bro?",
        answers: [
          'Howdy, Partner!',
          'How do you do?',
          'Is it me or did the room just get happier?'
        ]
      },
      {
        image:
          'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        correctAnswer: 'Teacher Carlos loves Cars!',
        answers: [
          "Teacher Carlos' is a Formula 1 Racer",
          'Teacher Carlos has a collection of 100 toy cars.',
          "Teacher Carlos doesn't know how to drive."
        ]
      }
    ]
  },
  {
    title: 'Greetings and Goodbyes I',
    type: 'Conversational',
    difficulty: 1,
    recommendedNext: 'Greetings and Goodbyes II',
    description:
      'This exam should be a breeze for you after reviewing Lesson 1.',
    image:
      'https://images.pexels.com/photos/165907/pexels-photo-165907.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    questions: [
      {
        text: "Hello? What's your name?",
        correctAnswer: 'Hello, my name is Carlos.',
        answers: [
          'Hello, my name Carlos.',
          'Hello, I name is Carlos.',
          'Hello, name is Carlos.'
        ]
      },
      {
        text: "What's up?",
        correctAnswer: 'Nothing, just watching TV.',
        answers: [
          "I'm fine thanks.",
          'Thank you, you too.',
          'Can you repeat that?'
        ]
      },
      {
        text: 'Did you sleep well?',
        correctAnswer: 'I was a little uncomfortable.',
        answers: ['Ok, goodnight!.', 'Thank you, you too.', 'At 9 p.m.']
      },
      {
        image:
          'https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        correctAnswer: 'Good morning!',
        answers: ['Good afternoon!', 'Good evening!', 'Good night!']
      }
    ]
  },
  {
    title: 'Greetings and Goodbyes II',
    type: 'Conversational',
    difficulty: 2,
    description: 'The difficulty is upped just a notch, can you excel?',
    image:
      'https://images.pexels.com/photos/4127431/pexels-photo-4127431.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    title: 'Greetings and Goodbyes III',
    type: 'Conversational',
    difficulty: 3,
    description: 'Professional greetings for professional English.',
    image:
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    title: 'The verb to be I',
    type: 'Grammar',
    difficulty: 1,
    description:
      'Test your knowledge of the basic forms. Make sure to review Lesson 1.',
    image:
      'https://images.pexels.com/photos/3556662/pexels-photo-3556662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    title: 'The verb to be II',
    type: 'Grammar',
    difficulty: 2,
    description:
      'Can you answer all questions correctly? This is a bit more challenging. Test your knowledge of more advanced forms',
    image:
      'https://images.pexels.com/photos/1427432/pexels-photo-1427432.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    title: 'The verb to be III',
    type: 'Grammar',
    difficulty: 3,
    description: 'The final test. This is the most challenging test, so far.',
    image:
      'https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  }
];

export default exams;
