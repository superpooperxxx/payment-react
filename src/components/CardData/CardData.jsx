import { Component } from 'react';
import { CardInput } from './CardInput';
import { formatCardNumber } from '../../utils/handleCardNumber';
import { hasErrorsInForm, validateCardData } from '../../utils/handleFormValidation';
import './CardData.scss';

export class CardData extends Component {
  state = {
    cardNumberError: '',
    cardOwnerError: '',
    cardMonthError: '',
    cardYearError: '',
    cardCvcError: '', 
  }

  setError = (name, errorMessage) => {
    this.setState({
      [name + 'Error']: errorMessage,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { cardData, updateCardData } = this.props;

    if (!hasErrorsInForm(this.state)) {
      const cardDataErrors = validateCardData(cardData);

      if (cardDataErrors.length === 0) {
        updateCardData('cardDataWasSent', true);
      } else {
        for (const error of cardDataErrors) {
          const [name, errorMessage] = error;
          this.setError(name, errorMessage);
        }
      }
    }
  };

  render() {
    const { updateCardData, cardData } = this.props;
    const {
      cardNumber,
      cardOwner,
      cardMonth,
      cardYear,
      cardCvc,
    } = cardData;

    const {
      cardOwnerError,
      cardNumberError,
      cardMonthError,
      cardYearError,
      cardCvcError,
    } = this.state;

    return (
      <form
        action="#"
        method="post"
        className="card-data"
        onSubmit={this.handleSubmit}
      >
        <div className="card-data__section">
          <label htmlFor="cardOwner" className="card-data__label">
            Cardholder name
          </label>

          <CardInput
            error={Boolean(cardOwnerError)}
            name="cardOwner"
            placeholder="e.g. Jane Appleseed"
            maxLength="22"
            value={cardOwner}
            updateCardData={updateCardData}
            setError={this.setError}
          />
          
          {cardOwnerError && (
            <p className="card-data__error">{ cardOwnerError }</p>
          )}
        </div>
  
        <div className="card-data__section">
          <label htmlFor="cardNumber" className="card-data__label">
            Card number
          </label>

          <CardInput
            error={Boolean(cardNumberError)}
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength="19"
            value={formatCardNumber(cardNumber)}
            updateCardData={updateCardData}
            setError={this.setError}
          />

          {cardNumberError && (
            <p className="card-data__error">{ cardNumberError }</p>
          )}
        </div>
  
        <div className="card-data__date-wrapper">
          <label htmlFor="cardMonth" className="card-data__label">
            Exp. Date (MM/YY)
          </label>
  
          <div className="card-data__date-inputs">
            <CardInput
              error={Boolean(cardMonthError)}
              name="cardMonth"
              placeholder="MM"
              maxLength="2"
              value={cardMonth}
              updateCardData={updateCardData}
              setError={this.setError}
            />

            <CardInput
              error={Boolean(cardYearError)}
              name="cardYear"
              placeholder="YY"
              maxLength="2"
              value={cardYear}
              updateCardData={updateCardData}
              setError={this.setError}
            />
          </div>
          
          {(cardMonthError || cardYearError) && (
            <p className="card-data__error">
              { cardMonthError || cardYearError }
            </p>
          )}
        </div>
  
        <div className="card-data__cvc-wrapper">
          <label htmlFor="cardCvc" className="card-data__label">
            Cvc
          </label>

          <CardInput
            error={Boolean(cardCvcError)}
            name="cardCvc"
            placeholder="e.g. 123"
            maxLength="3"
            value={cardCvc}
            updateCardData={updateCardData}
            setError={this.setError}
          />
          
          {cardCvcError && (
            <p className="card-data__error">{ cardCvcError }</p>
          )}
        </div>
  
        <button type="submit" className="card-data__btn">
          Confirm
        </button>
      </form>
    );
  }
}
