const SelectInput = ({
  name,
  label,
  onChange,
  value,
  options,
  required = false,
}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold'>
        {label}
      </label>
      <select
        name={name}
        type='text'
        className='w-full p-2 border border-purple-500 rounded-full'
        onChange={onChange}
        value={value}
        required
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
