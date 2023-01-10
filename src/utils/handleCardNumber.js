export const formatCardNumber = (number) => {
  const cardNumberDividedBy4 = [];

  for (let i = 0; i < number.length; i += 4) {
    cardNumberDividedBy4.push(number.slice(i, i + 4));
  }

  return cardNumberDividedBy4.join(' ');
};

export const shrinkCardNumber = (number) => {
  return [...number.trim()].filter(num => num !== ' ').join('');
};
