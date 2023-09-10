
const reader = require('xlsx');
const file = reader.readFile('C:/Users/ibrah/Desktop/sheet.xlsx'); 

let data = [];
const sheets = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.forEach((res) => {
    data.push(res);
  });
}

console.log(data);
