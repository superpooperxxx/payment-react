import './FrontCard.scss';
import cardLogo from '../../assets/card-logo.svg';
import { formatCardNumber } from '../../utils/handleCardNumber';

export const FrontCard = (props) => {
  const { cardNumber, cardOwner, cardExpiration } = props;
  const { cardMonth, cardYear } = cardExpiration; 

  return (
    <div className="front-card payment-section__front-card">
      <img 
        src={cardLogo}
        alt="Bank card logo" 
        className="front-card__logo"
      />
      <div className="front-card__info">
        <p className="front-card__number">
          { formatCardNumber(cardNumber.padEnd(16, 0)) }
        </p>

        <div className="front-card__bottom">
          <p className="front-card__owner">
            { cardOwner || 'Jane Appleseed' }
          </p>
          <p className="front-card__expiration">
            { `${cardMonth || '00'}/${cardYear || '00'}` }
          </p>
        </div>
      </div>
    </div>
  );
};
