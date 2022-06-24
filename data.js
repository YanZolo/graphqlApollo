const authors = [
  { name: 'Marijn Haverbeke' },
  { name: 'Nicolás Bevacqua' },
  { name: 'Nicholas C. Zakas' },
  { name: 'Axel Rauschmayer' },
  { name: 'Kyle Simpson' },
  { name: 'Scott Chacon and Ben Straub' },
  { name: 'Caitlin Sadowski, Thomas Zimmermann' },
];

const books = [
  {
    title: 'Eloquent JavaScript, Third Edition',
    author: 'Marijn Haverbeke',
    description:
      'Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications.',
  },
  {
    title: 'Practical Modern JavaScript',
    author: 'Nicolás Bevacqua',
    description:
      'To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details. Armed with practical examples, author Nicolas Bevacqua shows you new ways to deal with asynchronous flow control, declare objects or functions, and create proxies or unique sets, among many other features.',
  },
  {
    title: 'Mastering Modular JavaScript',
    author: 'Nicolás Bevacqua',
    description:
      'If you have a working knowledge of JavaScript and ECMAScript 6 (ES6), this practical guide will help you tackle modular programming to produce code that’s readable, maintainable, and scalable. You’ll learn the fundamentals of modular architecture with JavaScript and the benefits of writing self-contained code at every system level, including the client and server.',
  },
  {
    title: 'The Definitive Guide for JavaScript Developers',
    author: 'Nicholas C. Zakas',
    description:
      'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript. Every chapter is packed with example code that works in any JavaScript environment so you’ll be able to see new features in action.',
  },
  {
    title: 'The Principles of Object-Oriented JavaScript',
    author: 'Nicholas C. Zakas',
    description:
      "If you've used a more traditional object-oriented language, such as C++ or Java, JavaScript probably doesn't seem object-oriented at all. It has no concept of classes, and you don't even need to define any objects in order to write code. But don't be fooled—JavaScript is an incredibly powerful and expressive object-oriented language that puts many design decisions right into your hands.",
  },
  {
    title: 'An In-Depth Guide for Programmers',
    author: 'Axel Rauschmayer',
    description:
      'Like it or not, JavaScript is everywhere these days—from browser to server to mobile—and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.',
  },
  {
    title: 'JavaScript for Impatient Programmers',
    author: 'Axel Rauschmayer',
    description:
      'This book makes JavaScript less challenging to learn for newcomers, by offering a modern view that is as consistent as possible.',
  },
  {
    title: "You Don't Know JS Yet",
    author: 'Kyle Simpson',
    description:
      'It seems like there\'s never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!The worldwide best selling "You Don\'t Know JS" book series is back for a 2nd edition: "You Don\'t Know JS Yet". All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond."Get Started" prepares you for the journey ahead, first surveying the language then detailing how the rest of the You Don\'t Know JS Yet book series guides you to knowing JS more deeply.',
  },
  {
    title: 'Everything you neeed to know about Git',
    author: 'Scott Chacon and Ben Straub',
    description:
      'Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.',
  },
  {
    title: 'Rethinking Productivity in Software Engineering',
    author: 'Caitlin Sadowski, Thomas Zimmermann',
    description:
      'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
  },
];

const users = [
  {
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
  {
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
  },
  {
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
  },
  {
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
  },
  { username: 'Sofiane', email: 'sofiane@admin.com' },
  { username: 'Romain', email: 'romain@admin.com' },
];

const posts = [
  {
    body: 'this my first post',
    comments: [],
    likes: [],
    user: '62b570154eb75dea32fc68b5',
  },
  {
    body: 'this my first post',
    comments: [],
    likes: [],
    user: '62b570154eb75dea32fc68bb',
  },
];

module.exports = { authors, books, users, posts };
