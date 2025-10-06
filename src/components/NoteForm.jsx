import { useState } from 'react';

const NoteForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Work',
    priority: 'Medium',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      title: formData.title,
      category: formData.category,
      priority: formData.priority,
      description: formData.description,
      [e.target.name]: e.target.value, // This overwrites whichever field changed
    });
  };

  return (
    <form className='mb-6'>
      <div className='mb-4'>
        <label htmlFor='title' className='block font-semibold'>
          Title
        </label>
        <input
          name='title'
          type='text'
          className='w-full p-2 border rounded-lg'
          onChange={handleChange}
          value={formData.title}
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='priority' className='block font-semibold'>
          Priority
        </label>
        <select
          name='priority'
          type='text'
          className='w-full p-2 border rounded-lg'
          onChange={handleChange}
          value={formData.priority}
        >
          <option value='High'>🔴 High</option>
          <option value='Medium'>🟠 Medium</option>7
          <option value='Low'>🟢 Low</option>
        </select>
      </div>

      <div className='mb-4'>
        <label htmlFor='category' className='block font-semibold'>
          Category
        </label>
        <select
          type='text'
          className='w-full p-2 border rounded-lg'
          onChange={handleChange}
          value={formData.category}
          name='category'
        >
          <option value='Work'>🛠️ Work</option>
          <option value='Personal'>✍🏻 Personal</option>7
          <option value='Ideas'>🧠 Ideas</option>
        </select>
      </div>

      <div className='mb-4'>
        <label htmlFor='description' className='block font-semibold'>
          Description
        </label>
        <textarea
          name='description'
          type='text'
          className='w-full p-2 border rounded-lg'
          onChange={handleChange}
          value={formData.description}
        />
      </div>
      <button className='w-full bg-purple-400 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-500'>
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
