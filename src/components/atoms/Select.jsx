import styles from "./Select.module.css";

function Select({
  id,
  label,
  name,
  value,
  onChange,
  required = false,
  options = [],
  placeholder = "Selecciona una opción",
  error,
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={styles.select}
      >
        <option value="" disabled className={styles.selectOption}>
          {placeholder}
        </option>
        {options.map((opcion) => (
          <option key={opcion} value={opcion} className={styles.selectOption}>
            {opcion}
          </option>
        ))}
      </select>
      {error && <small style={{ color: "red" }}>{error}</small>}
    </div>
  );
}

export default Select;
