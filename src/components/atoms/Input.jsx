import { useState } from "react";
import styles from "./Input.module.css";

function Input({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  placeholder = "",
  checked,
  validator,
}) {
  const [errorMessage, setErrorMessage] = useState("");
  const [touched, setTouched] = useState(false);

  const isCheck = type === "radio" || type === "checkbox";

  const handleBlur = () => {
    setTouched(true);
    if (validator) {
      const error = validator(value);
      setErrorMessage(error);
    }
  };

  const handleChange = (e) => {
    onChange(e);
    if (touched) {
      setTouched(false);
      setErrorMessage("");
    }
  };

  return (
    <div className={`${styles.inputWrapper} ${isCheck ? styles.inline : ""}`}>
      <label
        htmlFor={id}
        className={styles.label}
        style={{ display: isCheck ? "inline" : "block" }}
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        placeholder={placeholder}
        checked={isCheck ? checked : undefined}
        className={`${styles.inputField} ${
          errorMessage && touched ? styles.errorInput : ""
        }`}
      />

      {errorMessage && touched && (
        <small className={styles.errorText}>{errorMessage}</small>
      )}
    </div>
  );
}

export default Input;
