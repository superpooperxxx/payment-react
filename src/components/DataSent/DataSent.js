import './DataSent.scss';
import successImage from '../../assets/icon-complete.svg';

export const DataSent = () => {
  return (
    <article className="data-sent">
      <img
        src={successImage}
        alt="card data was sent"
        className="data-sent__img"
      />
      <h2 className="data-sent__title">Thank you!</h2>
      <p className="data-sent__text">
        We’ve added your card details
      </p>
      <button type="button" className="data-sent__btn">Continue</button>
    </article>
  );
};
