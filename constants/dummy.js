import assets from "./assets";

const NFTData = [
  {
    id: "MOVIE-01",
    name: "Ben & Jourdy",
    creator: "Ryuza Aly Syahputra",
    rilis: "January 2, 2022",
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: "https://m.media-amazon.com/images/M/MV5BYzc2YmNhOTUtNjU2Ny00ZTA4LWI0MzUtOWEzODczMzQ2ZDRlXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_.jpg",
    duration: "2h 30m",
    bintang: 3, 
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "MOVIE-02",
    name: "Ghost Writter 2",
    creator: "Ryuza Aly Syahputra",
    rilis: "July 21, 2022",
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: "https://m.media-amazon.com/images/M/MV5BZTU5ZjJhMjQtZjA5OC00OTFiLWJkYWItNzhkNDk1YjkyMzlhXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    duration: "2h 30m",
    bintang: 5, 
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "MOVIE-03",
    name: "Minion",
    creator: "Ryuza Aly Syahputra",
    rilis: "June 29, 2022",
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: "https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_FMjpg_UX1000_.jpg",
    duration: "2h 30m",
    bintang: 2, 
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 95.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "MOVIE-04",
    name: "Morbius",
    creator: "Ryuza Aly Syahputra",
    rilis: "March 30, 2022",
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    image: "https://m.media-amazon.com/images/M/MV5BNTA3N2Q0ZTAtODJjNy00MmQzLWJlMmItOGFmNDI0ODgxN2QwXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg",
    duration: "1h 30m",
    bintang: 5, 
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "MOVIE-05",
    name: "Ngeri - Ngeri Sedap",
    creator: "Ryuza Aly Syahputra",
    rilis: "June 2, 2022",
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: "https://m.media-amazon.com/images/M/MV5BM2E3MjQyOWQtZjFhNC00NDYxLWIxYmUtN2NiZjg0YmJhYTJkXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    duration: "2h 30m",
    bintang: 5, 
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 10.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  }
];

export { NFTData };
