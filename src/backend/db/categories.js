import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mercedes-AMG Petronas",
    collectionId: "MB",
    imageUrl:
      "https://raw.githubusercontent.com/NeerajVodala/cluachshop/homepage-new/src/assets/images/homepage-category-mb.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Red Bull Racing",
    collectionId: "RBR",
    imageUrl:
      "https://raw.githubusercontent.com/NeerajVodala/cluachshop/homepage-new/src/assets/images/homepage-category-rbr.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Scuderia Ferrari",
    collectionId: "SF",
    imageUrl:
      "https://raw.githubusercontent.com/NeerajVodala/cluachshop/homepage-new/src/assets/images/homepage-category-sf.jpg",
  },
  {
    _id: uuid(),
    categoryName: "McLaren F1",
    collectionId: "MCL",
    imageUrl:
      "https://raw.githubusercontent.com/NeerajVodala/cluachshop/homepage-new/src/assets/images/homepage-category-mcl.jpg",
  },
];
