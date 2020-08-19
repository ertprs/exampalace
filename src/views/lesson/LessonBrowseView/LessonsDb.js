import moment from 'moment';
const lessons = [
  {
    id: '5e8dcef8f95685ce21f16f3d',
    progress: 0,
    caption:
      'Vamos a comenzar aprendiendo como saludar en inglés. El curso esta repleto de vocabulario y examenes que te enseñaran una gran variedad de presentaciones.',
    currency: '$',
    isLiked: true,
    likesCount: 7,
    location: 'Europe',
    image:
      'https://images.pexels.com/photos/4473415/pexels-photo-4473415.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    rating: 5,
    membersCount: 2,
    title: 'Greetings and Goodbyes',
    type: 'Full-Time',
    updatedAt: moment()
      .subtract(24, 'minutes')
      .toDate()
      .getTime()
  },
  {
    id: '5e8dcf076c50b9d8e756a5a2',
    progress: 0,
    caption: `Este curso es el curso más potente del verbo 'to be'. Aprenderás todas
      las formas del verbo más común en inglés.`,
    currency: '$',
    isLiked: true,
    likesCount: 12,
    location: 'Europe',
    image:
      'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: 4.5,
    membersCount: 3,
    title: "The almighty verb 'to be'",
    type: 'Full-Time',
    updatedAt: moment()
      .subtract(1, 'hour')
      .toDate()
      .getTime()
  },
  {
    id: '5e8dcf105a6732b3ed82cf7a',
    progress: 0,
    caption:
      'This verb is used to talk about habits. There are many primary verbs you will need to know to have a good handle on english. This course will teach you verbs like eat, sleep, drink, want, need, etc.',
    currency: '$',
    isLiked: true,
    likesCount: 18,
    location: 'Europe',
    image:
      'https://images.pexels.com/photos/4546115/pexels-photo-4546115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: 4.7,
    membersCount: 8,
    title: 'Simple present',
    type: 'Full-Time',
    updatedAt: moment()
      .subtract(16, 'hour')
      .toDate()
      .getTime()
  },
  {
    id: '5e8dcf1cc7155d0e947dc27f',
    progress: 0,
    caption:
      'This verb is used to talk about habits. There are many primary verbs you will need to know to have a good handle on english. This course will teach you verbs like eat, sleep, drink, want, need, etc.',
    currency: '$',
    image: '/static/images/projects/project_4.png',
    isLiked: false,
    likesCount: 1,
    location: 'Europe',
    membersCount: 10,
    rating: 2,
    title: 'Neura e-commerce UI Kit',
    type: 'Full-Time',
    updatedAt: moment()
      .subtract(3, 'days')
      .toDate()
      .getTime()
  },
  {
    id: '5e8dcf252313876001e83221',
    progress: 0,
    caption:
      "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
    currency: '$',
    isLiked: false,
    likesCount: 7,
    location: 'Europe',
    image: '/static/images/projects/project_5.jpg',
    rating: 5,
    membersCount: 2,
    title: 'Administrator Dashboard',
    type: 'Full-Time',
    updatedAt: moment()
      .subtract(7, 'days')
      .toDate()
      .getTime()
  },
  {
    id: '5e8dcf4250d77c954b04902e',
    progress: 0,
    caption:
      "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
    currency: '$',
    isLiked: true,
    likesCount: 4,
    location: 'Europe',
    image: null,
    rating: 4.2,
    membersCount: 12,
    title: 'Kalli UI Kit',
    type: 'Full-Time',
    updatedAt: moment()
      .subtract(8, 'days')
      .toDate()
      .getTime()
  }
];

export default lessons;
