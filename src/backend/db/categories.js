import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    name: "True Sight",
    url: "https://res.cloudinary.com/dut75albw/image/upload/v1648961159/AegisTube/Categories/true-sight.webp",
    description:
      "TRUE SIGHT is a documentary series that takes you behind the scenes of the journeys of professional Dota 2 teams.",
  },
  {
    _id: uuid(),
    name: "The International",
    url: "https://res.cloudinary.com/dut75albw/image/upload/v1648961158/AegisTube/Categories/The-International.webp",
    description:
      "The International is the most prestegious trournament in the DotA 2 Calender. 18 teams battle it out for the Aegis of Champions and millions of Dollars.",
  },
  {
    _id: uuid(),
    name: "DotA 2 Major",
    url: "https://res.cloudinary.com/dut75albw/image/upload/v1648961097/AegisTube/Categories/Major.webp",
    description:
      "DotA 2 Major's are regional events that lead to The International",
  },
  {
    _id: uuid(),
    name: "Pro VODS",
    url: "https://res.cloudinary.com/dut75albw/image/upload/v1648962545/AegisTube/Categories/Pro-GOD-Mode.webp",
    description:
      "Watch your favourite PROs enter GOD Mode and decimate the oppositions",
  },
];
