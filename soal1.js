const soal1 = ( kalimat ) => kalimat.map((val) => val.split("")).map((val2) => val2.reverse().join(""));

let tamilak = [
  "italem irad irigayaj",
  "iadab itsap ulalreb",
  "nalub kusutret gnalali",
];

console.log(soal1(tamilak));
