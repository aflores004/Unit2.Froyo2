const userInputString = prompt(
  "Please enter some comma-separated froyo flavors.",
  "vanilla,strawberry,chocolate,coffee,cookies&cream"
);

// Split the strings into an array of strings.
const stringArray = userInputString.split(",");
let countObj = {};
function displayUnitCounts(arr) {
 

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (countObj[element] === undefined) {
      countObj[element] = 1;
    } else {
      countObj[element]++;
    }
  }

  
  let dataForTable = [];
  for (let unit in countObj) {
    dataForTable.push({ Unit: unit, Count: countObj[unit] });
  }

  console.table(countObj);
}




displayUnitCounts(stringArray);
