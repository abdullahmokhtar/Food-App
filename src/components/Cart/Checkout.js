import classes from "./Checkout.module.css";
import useInput from "../../hooks/user-input";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
  } = useInput(isEmpty);

  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    valueBlurHandler: streetBlurHandler,
  } = useInput(isEmpty);

  const {
    value: postalCodeValue,
    isValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    valueBlurHandler: postalCodeBlurHandler,
  } = useInput(isNotFiveChars);

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
  } = useInput(isEmpty);

  const confirmHandler = (event) => {
    event.preventDefault();

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: nameValue,
      street: streetValue,
      city: cityValue,
      postalCode: postalCodeValue,
    });
    
  };

  const nameControlClasses = `${classes.control} ${
    nameHasError ? classes.invalid : ""
  }`;
  const streetControlClasses = `${classes.control} ${
    streetHasError ? classes.invalid : ""
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    postalCodeHasError ? classes.invalid : ""
  }`;
  const cityControlClasses = `${classes.control} ${
    cityHasError ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetValue}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalCodeValue}
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeHasError && <p>Please enter a valid Postal Code.</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityValue}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && <p>Please enter a valid City.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
