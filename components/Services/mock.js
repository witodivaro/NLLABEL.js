const SERVICES = [
  {
    _id: 1,
    title: "Аренда студии",
    description: "Полная аренда студии под Вашу запись.",
    price: 35,
    priceFor: "час",
    extensions: [
      {
        _id: 1,
        name: "Со звукорежиссером",
        price: 5,
      },
    ],
    img: "/img/recording_studio.png",
  },
  {
    _id: 2,
    title: "Обработка трека",
    priceFor: "трек",
    description:
      "Обработка вокала, сведение с минусом, ритмическая коррекция, тюнинг и мастеринг композиции.",
    price: 120,
    img: "/img/man_in_recording_studio.jpg",
  },
  {
    _id: 3,
    title: "Тюнинг вокала",
    description: "Обработка дорожки с вокалом",
    price: 40,
    priceFor: "дорожка",
    img: "/img/girl_sings.jpeg",
  },
  {
    _id: 4,
    title: "Мастеринг песни",
    price: 40,
    priceFor: "час",
    img: "/img/mastering.jpg",
  },
];

export default SERVICES;
