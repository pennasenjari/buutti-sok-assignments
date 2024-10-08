/* Create a file forecast_data.json and then add to following data to it.

Then read the data, parse it to a JS object, and modify the temperature 
 of that forecast. Lastly, save the change back to the same file.
*/

import fs from "fs";

const forecastData = fs.readFileSync("./forecast_data.json", "utf-8");
console.log(forecastData)
let fData = JSON.parse(forecastData);
console.log(fData)

fData["day"] = "friday";
fData["temperature"] = 35;
// 2 in JSON.stringify = add 2 spaces per row
fs.writeFileSync("./forecast_data2.json", JSON.stringify(fData, null, 2), "utf-8");
