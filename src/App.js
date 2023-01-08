import { Component } from 'react';
import './App.scss';
import { BackCard } from './components/BackCard/BackCard';
import { CardData } from './components/CardData/CardData';
import { FrontCard } from './components/FrontCard/FrontCard';

export class App extends Component {
  state = {
    cardNumber: '0000 0000 0000 0000',
    cardOwner: 'Jane Appleseed',
    cardMonth: '00',
    cardYear: '00',
    cardCvc: '000',
  };

  getCardData = (name, value) => {
    this.setState({
      [name]: value,
    })
  }

  render () {
    const { 
      cardNumber,
      cardOwner,
      cardMonth,
      cardYear,
      cardCvc 
    } = this.state;
  
    return (
      <section className='payment-section'>
        <div className="payment-section__container">
          <div className="payment-section__cards">
            <BackCard cardCvc={cardCvc} />
            <FrontCard 
              cardNumber={cardNumber}
              cardOwner={cardOwner}
              cardExpiration={{cardMonth, cardYear}}
            />
          </div>
  
          <div className="payment-section__form-wrapper">
            <CardData getCardData={this.getCardData} />
          </div>
        </div>
      </section>
    );
  }
}
