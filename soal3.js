const soal3 = ( startnumber, limit = Number ) => {
  if (limit < startnumber) {
    return "nilai limit harus lebih besar dari nilai startnumber";
  };
  ////////////////////////////////////////////////////////////////
  let deret = [ startnumber, startnumber+1 ];
  for (let i = deret.length; i < limit; i++) {
    if (deret[i-1] + deret[i-2] > limit) return deret;
    deret.push(deret[i-1] + Math.abs(deret[i-2]));
  };
  return deret;
};

// format
console.log(soal3(-50, 200));
