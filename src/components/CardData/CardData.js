import { Component } from 'react';
import { CardInput } from './CardInput';
import { formatCardNumber } from '../../utils/handleCardNumber';
import './CardData.scss';

export class CardData extends Component {
  render() {
    const { updateCardData, cardData } = this.props;

    const {
      cardNumber,
      cardOwner,
      cardMonth,
      cardYear,
      cardCvc,
    } = cardData;

    return (
      <form
        action="#"
        method="post"
        className="card-data"
      >
        <label className="card-data__label">Cardholder name</label>
        <CardInput 
          fullWidth={true}
          name="cardOwner"
          placeholder="e.g. Jane Appleseed"
          maxLength="22"
          value={cardOwner} // Нужно форматирование
          updateCardData={updateCardData}
        />
  
        <label className="card-data__label">Card number</label>
        <CardInput 
          fullWidth={true}
          name="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength="19"
          value={formatCardNumber(cardNumber)}
          updateCardData={updateCardData}
        />
  
        <div className="card-data__date-wrapper">
          <label className="card-data__label">Exp. Date (MM/YY)</label>
  
          <div className="card-data__date-inputs">
            <CardInput 
              name="cardMonth"
              placeholder="MM"
              maxLength="2"
              value={cardMonth}
              updateCardData={updateCardData}
            />

            <CardInput 
              name="cardYear"
              placeholder="YY"
              maxLength="2"
              value={cardYear}
              updateCardData={updateCardData}
            />
          </div>
        </div>
  
        <div className="card-data__cvc-wrapper">
          <label className="card-data__label">Cvc</label>
          <CardInput 
            name="cardCvc"
            placeholder="e.g. 123"
            maxLength="3"
            value={cardCvc}
            updateCardData={updateCardData}
          />
        </div>
  
        <button type="button" className="card-data__btn">
          Confirm
        </button>
      </form>
    );
  }
}
