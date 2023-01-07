import './FrontCard.scss';
import cardLogo from "../../assets/card-logo.svg"

export const FrontCard = () => {
  return (
    <div className="front-card">
      <img 
        src={cardLogo}
        alt="" 
        className="front-card__logo"
      />
      <div className="front-card__info">
        <p className="front-card__number">0000 0000 0000 0000</p>
        <div className="front-card__bottom">
          <p className="front-card__owner">Jane Appleseed</p>
          <p className="front-card__expiration">00/00</p>
        </div>
      </div>
    </div>
  );
};
