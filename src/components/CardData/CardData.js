import './CardData.scss';

export const CardData = () => {
  return (
    <form
      action="#"
      method="post"
      className="card-data payment-section__card-data"
    >
      <label className="card-data__label">Cardholder name</label>
      <div className="
        card-data__input-wrapper
        card-data__input-wrapper--full-width
      ">
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          className="card-data__input"
        />
      </div>

      <label className="card-data__label">Card number</label>
      <div className="
        card-data__input-wrapper
        card-data__input-wrapper--full-width
      ">
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          className="card-data__input"
        />
      </div>

      <div className="card-data__date-wrapper">
        <label className="card-data__label">Exp. Date (MM/YY)</label>

        <div className="card-data__date-inputs">
          <div className="card-data__input-wrapper">
            <input
              type="text"
              placeholder="MM"
              maxLength="2"
              className="card-data__input"
            />
          </div>

          <div className="card-data__input-wrapper">
            <input
              type="text"
              placeholder="YY"
              maxLength="2"
              className="card-data__input"
            />
          </div>
        </div>
      </div>

      <div className="card-data__cvc-wrapper">
        <label className="card-data__label">Cvc</label>

        <div className="card-data__input-wrapper">
          <input
            type="text"
            placeholder="e.g. 123"
            maxLength="3"
            className="card-data__input"
          />
        </div>
      </div>

      <button type="button" className="card-data__btn">Confirm</button>
    </form>
  );
};
