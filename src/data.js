const sections = [
  {
    name: "Background",
    content: [
      process.env.PUBLIC_URL + "/Background/Putih.png",
      process.env.PUBLIC_URL + "/Background/Kuning.png",
    ],
  },
  {
    name: "Head",
    content: [
      process.env.PUBLIC_URL + "/Head/Baldo.png",
      process.env.PUBLIC_URL + "/Head/Bob.png",
      process.env.PUBLIC_URL + "/Head/Kritink.png",
    ],
  },
  {
    name: "Face",
    content: [
      process.env.PUBLIC_URL + "/Face/Mm.png",
      process.env.PUBLIC_URL + "/Face/O.png",
      process.env.PUBLIC_URL + "/Face/Ohno.png",
    ],
  },
  {
    name: "Body",
    content: [
      process.env.PUBLIC_URL + "/Body/Dilan.png",
      process.env.PUBLIC_URL + "/Body/Hoodie.png",
      process.env.PUBLIC_URL + "/Body/Shirt.png",
    ],
  },
];

const gifSections = [
  {
    name: "Background",
    content: [
      process.env.PUBLIC_URL + "/Background/Putih.png",
      process.env.PUBLIC_URL + "/Background/Kuning.png",
    ],
  },
  {
    name: "Limbs",
    content: [process.env.PUBLIC_URL + "/Limbs/Limbs.gif"],
  },
  {
    name: "Body",
    content: [process.env.PUBLIC_URL + "/Body/Body.gif"],
  },
  {
    name: "Head",
    content: [process.env.PUBLIC_URL + "/Head/Head.gif"],
  },
  {
    name: "Eyes",
    content: [process.env.PUBLIC_URL + "/Eyes/Eyes.gif"],
  },
];

export { sections, gifSections };
