export default function Input({
  type,
  name,
  placeHolder,
  value,
  onChange,
  label,
  error,
}) {
  return (
    <>
      <label htmlFor={name}>
        {label}
        {error}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
