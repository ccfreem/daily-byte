const complimentaryNumber = (num) => {
  const bits = Number(num).toString(2);

  let compliment = "";
  for (let bit in bits) {
    if (parseInt(bits[bit]) === 0) {
      compliment += 1;
    } else {
      compliment += 0;
    }
  }
  return parseInt(compliment, 2);
};
module.exports = complimentaryNumber;
