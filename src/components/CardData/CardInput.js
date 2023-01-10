import classNames from 'classnames';
import { shrinkCardNumber } from '../../utils/handleCardNumber';
import { formatCardOwner } from '../../utils/handleCardOwner';

export const CardInput = ({
  fullWidth,
  name,
  placeholder,
  maxLength,
  value,
  updateCardData
}) => {

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

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
        "card-data__input-wrapper--full-width": fullWidth,
      }
    )}>
      <input
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
