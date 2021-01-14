const soal2 = ( ) => {
  let baris = [ ];
  for (let i = 1; i <= 100; i++) {
    i % 3 === 0 && i % 5 === 0
      ? baris.push(i + " FizzBuzz")
      : i % 3 === 0
      ? baris.push(i + " Fizz")
      : i % 5 === 0
      ? baris.push(i + " Buzz")
      : baris.push(i);
  }
  return baris;
};

console.log(soal2());
