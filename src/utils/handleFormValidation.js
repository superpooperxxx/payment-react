export const hasErrorsInForm = (errors) => {
  return !Object.values(errors).every(error => error === '');
};

export const validateCardData = (cardData) => {
  const lengths = {
    cardNumber: 16,
    cardOwner: 2,
    cardMonth: 2,
    cardYear: 2,
    cardCvc: 3,
  };
  const errors = [];
  const cardDataArray = Object.entries(cardData).slice(1);
  const currentDate = new Date();
  const currentYear = String(currentDate.getFullYear()).slice(2);
  // const currentMonth = currentDate.getMonth() + 1;

  for (const [name, value] of cardDataArray) {
    if (value === '') {
      errors.push([name, 'Can\'t be blank']);
    } else {
      if (value.length < lengths[name]) {
        errors.push([name, `Min length is ${lengths[name]}`]);
      }

      if (name === 'cardMonth' && (Number(value) < 1 || Number(value) > 12)) {
        errors.push([name, 'Invalid Month']);
      }

      if (name === 'cardYear' && +value < currentYear) {
        errors.push([name, 'Card has expired']);
      }
    }
  }

  return errors;
};

export const inputIsValid = (name, value) => {
  switch (name) {
    case 'cardOwner':
      return [
        ![...value].some(elem => elem !== ' ' && Number.isInteger(+elem)),
        'Wrong format, letters only',
      ];
    default:
      return [
        [...value].every(elem => Number.isInteger(+elem)),
        'Wrong format, numbers only',
      ];
  }
};
