import './FrontCard.scss';
import cardLogo from "../../assets/card-logo.svg"

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
        <p className="front-card__number">{ cardNumber }</p>
        <div className="front-card__bottom">
          <p className="front-card__owner">{ cardOwner }</p>
          <p className="front-card__expiration">
            { `${cardMonth}/${cardYear}` }
          </p>
        </div>
      </div>
    </div>
  );
};
