// https://eloquentjavascript.net/02_program_structure.html#i_rebKE3gdjV

for (let i = 1; i <= 100; i++) {
  let str = "";
  if (i % 3 === 0) str += "Fizz";
  if (i % 5 === 0) str += "Buzz";
  console.log(str || i);
}