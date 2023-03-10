const news = [
  {
    id: "1",
    title: "We know more now than before, and it’s still alarming",
    body: "Understanding Long Covid",
    isTrending: true,
    category: "Mental Health",
    read: "9 min read",
    createdUser: {
      firstName: "Tom Frieden",
      lastName: "Dr",
      userId: "1",
      userImg: require("../images/1_oTq5RWcSwzoDiuAO_OBhaw.png"),
      organization: "Forbes",
    },
    img: require("../images/1_SIrSIkSoOBiUFvv8wIyYgg.png"),
    date: "2022-02-01",
    isSaved: false,
  },
  {
    id: "2",
    title: "We know more now than before, and it’s still alarming",
    body: "Understanding Long Covid",
    isTrending: false,
    category: "Mental Health",
    read: "9 min read",
    createdUser: {
      firstName: "Tom Frieden",
      lastName: "Dr",
      userId: "1",
      userImg: require("../images/1_oTq5RWcSwzoDiuAO_OBhaw.png"),
      organization: "Forbes",
    },
    img: require("../images/1_SIrSIkSoOBiUFvv8wIyYgg.png"),
    date: "2022-05-01",
    isSaved: false,
  },
  {
    id: "3",
    title: "We know more now than before, and it’s still alarming",
    body: "Understanding Long Covid",
    isTrending: false,
    category: "Mental Health",
    read: "9 min read",
    createdUser: {
      firstName: "Tom Frieden",
      lastName: "Dr",
      userId: "1",
      userImg: require("../images/1_oTq5RWcSwzoDiuAO_OBhaw.png"),
      organization: "Forbes",
    },
    img: require("../images/1_SIrSIkSoOBiUFvv8wIyYgg.png"),
    date: "2022-06-01",
    isSaved: false,
  },
  {
    id: "4",
    title: "We know more now than before, and it’s still alarming",
    body: "Understanding Long Covid",
    isTrending: true,
    category: "Technology",
    read: "9 min read",
    createdUser: {
      firstName: "Tom Frieden",
      lastName: "Dr",
      userId: "1",
      userImg: require("../images/1_oTq5RWcSwzoDiuAO_OBhaw.png"),
      organization: "Forbes",
    },
    img: require("../images/1_SIrSIkSoOBiUFvv8wIyYgg.png"),
    date: "2023-01-04",
    isSaved: false,
  },
  {
    id: "5",
    title: "We know more now than before, and it’s still alarming",
    body: "Understanding Long Covid",
    isTrending: true,
    category: "Technology",
    read: "9 min read",
    createdUser: {
      firstName: "Tom Frieden",
      lastName: "Dr",
      userId: "1",
      userImg: require("../images/1_oTq5RWcSwzoDiuAO_OBhaw.png"),
      organization: "Forbes",
    },
    img: require("../images/1_SIrSIkSoOBiUFvv8wIyYgg.png"),
    date: "2023-01-07",
    isSaved: true,
  },
];

const users = [
  {
    id: 1,
    username: "U00001",
    firstName: "Kylie",
    organization: "Forbes",
    password: "qweqwe",
    type: "superuser",
  },
  {
    id: 2,
    username: "U83901",
    firstName: "John",
    organization: "Forbes",
    password: "qweqwe",
    type: "user",
  },
  {
    id: 3,
    username: "U83902",
    firstName: "Taylor",
    organization: "Forbes",
    password: "qweqwe",
    type: "user",
  },
];

export { news, users };
