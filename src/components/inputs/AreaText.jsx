const AreaText = ({ name, label, onChange, value, required = false }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold'>
        {label}
      </label>
      <textarea
        required
        name={name}
        type='text'
        className='w-full p-2 border border-purple-500 rounded-lg'
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default AreaText;
