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

  for (const [name, value] of cardDataArray) {
    if (value === '') {
      errors.push([name, 'Can\'t be blank']);
    } else {
      if (value.length < lengths[name]) {
        errors.push([name, `Min length is ${lengths[name]}`]);
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
