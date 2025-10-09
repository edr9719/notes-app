import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import AreaText from './inputs/AreaText';

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Work',
    priority: 'Medium',
    description: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

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
    <>
      {/* Toggle Button */}

      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className='w-full p-2 border border-purple-500 rounded-full bg-gray-100  text-purple-800 py-2  cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4'
      >
        {isFormVisible ? 'Hide Form ✖️' : ' Add New Note ➕'}
      </button>

      {/* Form */}

      {isFormVisible && (
        <form className='mb-6' onSubmit={handleSubmit}>
          <TextInput
            name='title'
            label='Title'
            onChange={handleChange}
            value={formData.title}
            required
          />
          <SelectInput
            name='priority'
            label='Priority'
            onChange={handleChange}
            value={formData.priority}
            options={[
              { name: '🔴 High', value: 'High' },
              { name: '🟠 Medium', value: 'Medium' },
              { name: '🟢 Low', value: 'Low' },
            ]}
            required
          />

          <SelectInput
            name='category'
            label='Category'
            onChange={handleChange}
            value={formData.category}
            required
            options={[
              { name: '🛠️ Work', value: 'Work' },
              { name: '✍🏻 Personal', value: 'Personal' },
              { name: '🧠 Ideas', value: 'Ideas' },
            ]}
          />

          <AreaText
            name='description'
            label='Description'
            onChange={handleChange}
            value={formData.description}
            required
          />

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
      )}
    </>
  );
};

export default NoteForm;
