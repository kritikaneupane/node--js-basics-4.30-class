const getHello = () => {
  console.log("Hello from library");
};

const getNamaste = (name) => {
  console.log(`Namaste ${name}`);
};
module.exports = { getHello, getNamaste };
//write a function that converts any  provided string to proper case.
convert that to module
and create a new server i port 8000
and use that function and show the response in the html format