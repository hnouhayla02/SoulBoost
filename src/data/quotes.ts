interface Quote {
  text: string;
  author: string;
  emotions: string[];
}

export const quotes: Quote[] = [
  {
    text: "The darkest hour has only sixty minutes.",
    author: "Morris Mandel",
    emotions: ["sad", "desperate", "depressed"]
  },
  {
    text: "Comparison is the thief of joy.",
    author: "Theodore Roosevelt",
    emotions: ["jealous", "confused"]
  },
  {
    text: "Rock bottom became the solid foundation on which I rebuilt my life.",
    author: "J.K. Rowling",
    emotions: ["desperate", "depressed"]
  },
  {
    text: "The only way out is through.",
    author: "Robert Frost",
    emotions: ["sad", "confused", "depressed"]
  },
  {
    text: "Your present circumstances don't determine where you can go; they merely determine where you start.",
    author: "Nido Qubein",
    emotions: ["inspiration"]
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
    emotions: ["confused", "inspiration"]
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    emotions: ["inspiration"]
  },
  {
    text: "The wound is the place where the Light enters you.",
    author: "Rumi",
    emotions: ["sad", "depressed", "inspiration"]
  }
];