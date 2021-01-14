const patternbox = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// function to search angka's position in pattern box
const posisiangka = (angka) => {
  // return indexangka=[indexbaris,indexkolom]
  let indexangka = [];
  let rowvalue = patternbox.map((val) => val.findIndex((ta) => ta == angka));
  let indexbaris = rowvalue.findIndex((val) => val > -1);
  let indexkolom = rowvalue[indexbaris];
  indexangka.push(indexbaris, indexkolom);
  return indexangka;
};

const soal5 = (deretangka) => {
  // check rule 1 and 2
  if (deretangka.toString().length < 5 || deretangka.toString().length > 7) return "TIDAK";
  //check rule 3
  let posisideret = [];
  deretangka.toString().split("").map((angka) => { posisideret.push(posisiangka(angka)) });
  for (let i = 0; i < posisideret.length - 1; i++) {
    if ( Math.abs(posisideret[i][0] - posisideret[i + 1][0]) > 1 || Math.abs(posisideret[i][1] - posisideret[i + 1][1]) > 1) return "TIDAK";
  };
  return "IYA";
};

let testing = [12321, 23654789, 512369, 13125, 196499];

// console.log(posisiangka())

console.log(
  soal5(testing[0]),
  soal5(testing[1]),
  soal5(testing[2]),
  soal5(testing[3]),
  soal5(testing[4])
);
