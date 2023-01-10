export const formatCardOwner = (cardOwner) => {
  let trimmedCardOwner = cardOwner.trimStart();
  let formattedCardOwner = '';
  let spaceWasUsed = false;

  for (const letter of trimmedCardOwner) {
    if (spaceWasUsed && letter === ' ') {
      continue;
    }

    if (letter === ' ') {
      spaceWasUsed = true;
    }

    formattedCardOwner += letter;
  }

  return formattedCardOwner;
};
