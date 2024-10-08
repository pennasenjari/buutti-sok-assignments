/* Create the attached cars list in a .js file. Convert the JS array to a JSON format,
 and write it to a new .json file.

 const autot = [
  {
    rekisteri: "abc-123",
    merkki: "Toyota",
    vuosimalli: 1998,
  },
  {
    rekisteri: "xyz-999",
    merkki: "Mercedes Benz",
    vuosimalli: 2011,
  },
  {
    rekisteri: "les-0",
    merkki: "Tesla",
    vuosimalli: 2022,
  },
];

Do it manually
Use JavaScript’s features to convert it programmatically  */

import fs from "fs";

const autot = [
  {
    rekisteri: "abc-123",
    merkki: "Toyota",
    vuosimalli: 1998,
  },
  {
    rekisteri: "xyz-999",
    merkki: "Mercedes Benz",
    vuosimalli: 2011,
  },
  {
    rekisteri: "les-0",
    merkki: "Tesla",
    vuosimalli: 2022,
  },
];

const json = JSON.stringify(autot);
fs.writeFileSync("./cars.json", json, "utf-8");