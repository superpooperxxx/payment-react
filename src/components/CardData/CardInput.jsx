import classNames from 'classnames';
import { shrinkCardNumber } from '../../utils/handleCardNumber';
import { formatCardOwner } from '../../utils/handleCardOwner';
import { inputIsValid } from '../../utils/handleFormValidation';

export const CardInput = ({
  error,
  name,
  placeholder,
  maxLength,
  value,
  updateCardData,
  setError,
}) => {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const [isValidInput, errorMessage] = inputIsValid(name, value);

    if (!isValidInput) {
      setError(name, errorMessage);
    } else {
      setError(name, '');
    }

    switch (name) {
      case 'cardNumber':
        updateCardData(name, shrinkCardNumber(value));
        break;

      case 'cardOwner':
        updateCardData(name, formatCardOwner(value));
        break;

      default:
        updateCardData(name, value.trim());
    }
  };

  return (
    <div className={classNames(
      "card-data__input-wrapper",
      {
        "card-data__input-wrapper--invalid": error,
      }
    )}>
      <input
        id={name}
        type="text"
        className="card-data__input"

        name={name}
        placeholder={placeholder}
        maxLength={maxLength}

        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
