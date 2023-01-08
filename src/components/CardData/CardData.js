import { Component } from 'react';
import { CardInput } from './CardInput';
import './CardData.scss';

export class CardData extends Component {
  state = {
    cardOwner: '',
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cardCvc: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.props.getCardData(name, value);
    
    this.setState({
      [name]: value,
    })
  };

  render() {
    const {
      cardOwner,
      cardNumber,
      cardMonth,
      cardYear,
      cardCvc
    } = this.state;

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
          value={cardOwner}
          onChange={this.handleChange}
        />
  
        <label className="card-data__label">Card number</label>
        <CardInput 
          fullWidth={true}
          name="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardNumber}
          onChange={this.handleChange}
        />
  
        <div className="card-data__date-wrapper">
          <label className="card-data__label">Exp. Date (MM/YY)</label>
  
          <div className="card-data__date-inputs">
            <CardInput 
              name="cardMonth"
              placeholder="MM"
              maxLength="2"
              value={cardMonth}
              onChange={this.handleChange}
            />

            <CardInput 
              name="cardYear"
              placeholder="YY"
              maxLength="2"
              value={cardYear}
              onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </div>
  
        <button type="button" className="card-data__btn">Confirm</button>
      </form>
    );
  }
}
