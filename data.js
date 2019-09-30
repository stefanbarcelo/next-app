import taipei from "./src/images/taipei.jpg"

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "taipei",
      slug: "taipei",
      country: "taiwan",
      flag: '🇹🇼',
      price: 1900,
      weather: '18˚C/60˚F',
      symbol: '☀️',
      images: [
        {
          fields: {
            file: {
              url: taipei
            }
          }
        }
      ]
    }
  },
];