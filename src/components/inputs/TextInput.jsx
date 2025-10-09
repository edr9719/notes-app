const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold'>
        {label}
      </label>
      <input
        name={name}
        type='text'
        className='w-full p-2 border border-purple-500 rounded-full'
        onChange={onChange}
        value={value}
        required={required}
      />
    </div>
  );
};

export default TextInput;
