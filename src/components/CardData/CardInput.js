import classNames from 'classnames';

export const CardInput = ({
  fullWidth,
  name,
  placeholder,
  maxLength,
  value,
  onChange
}) => {

  return (
    <div className={classNames(
      "card-data__input-wrapper",
      {
        "card-data__input-wrapper--full-width": fullWidth,
      }
    )}>
      <input
        type="text"
        className="card-data__input"

        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
