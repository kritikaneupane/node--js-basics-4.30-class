//1 Exercise
// write the function for conversion of tittle to slug
// Eg:"Back-End and web Development Trends For 2024"=>"back-end-and-web-development-trends-for-2024"
//email trending features
// Node js Events
const slugify = (string) => {
  return string
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
};
const result = slugify("Back-End and Web Delopment Trends For 2024");
console.log({ result });
//second problem :NPM package (slugify)
//email sending features
//Node Js enents
