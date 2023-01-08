import './BackCard.scss';

export const BackCard = ({ cardCvc }) => {
  return (
    <div className="back-card payment-section__back-card">
      <p className="back-card__cvc">{ cardCvc }</p>
    </div>
  );
};
