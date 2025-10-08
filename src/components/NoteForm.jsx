import { useState } from 'react';

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Work',
    priority: 'Medium',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // This overwrites whichever field changed
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    //Create Note Object
    const newNote = { id: Date.now(), ...formData };

    //Add Notes to State
    setNotes([newNote, ...notes]);

    //Reset Form Data
    setFormData({
      title: '',
      category: 'Work',
      priority: 'Medium',
      description: '',
    });
    console.log(notes);
  };

  return (
    <form className='mb-6' onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label htmlFor='title' className='block font-semibold'>
          Title
        </label>
        <input
          name='title'
          type='text'
          className='w-full p-2 border border-purple-500 rounded-full'
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
          className='w-full p-2 border border-purple-500 rounded-full'
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
          className='w-full p-2 border border-purple-500 rounded-full'
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
          className='w-full p-2 border border-purple-500 rounded-lg'
          onChange={handleChange}
          value={formData.description}
        />
      </div>
      <button
        className={`w-full py-2 rounded-full ${
          !formData.description || !formData.title
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-purple-400 text-white hover:bg-purple-500 cursor-pointer'
        }`}
        disabled={!formData.description || !formData.title}
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
