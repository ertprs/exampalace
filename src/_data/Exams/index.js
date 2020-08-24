const exams = [
  {
    title: 'Greetings and Goodbyes I',
    type: 'Conversational',
    difficulty: 1,
    description:
      'This exam should be a breeze for you after reviewing Lesson 1.',
    image:
      'https://images.pexels.com/photos/165907/pexels-photo-165907.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    questions: [
      {
        text: "Hello? What's your name?",
        answers: [
          'Hello, my name is Carlos.',
          'Hello, my name Carlos.',
          'Hello, I name is Carlos.',
          'Hello, name is Carlos.'
        ]
      },
      {
        text: "What's up?",
        answers: [
          'Nothing, just watching TV.',
          "I'm fine thanks.",
          'Thank you, you too.',
          'Can you repeat that?'
        ]
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
