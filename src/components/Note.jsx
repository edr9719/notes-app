const Note = ({ note, deleteNote }) => {
  const classColors = {
    border: {
      Low: 'border-green-500',
      Medium: 'border-yellow-500',
      High: 'border-red-500',
    },
    text: {
      Low: 'text-green-500',
      Medium: 'text-yellow-500',
      High: 'text-red-500',
    },
  };
  return (
    <div
      className={`${
        classColors.border[note.priority]
      } p-4 bg-white-800 rounded-lg shadow-md border-l-6`}
    >
      <h3 className={`${classColors.text[note.priority]} text-lg font-bold`}>
        {note.title}
      </h3>
      <p className='text sm text-gray-600'>
        <strong>Category: </strong>
        {note.category}
      </p>
      <p className='text sm text-gray-600'>
        <strong>Priority: </strong>
        {note.priority}
      </p>
      <p className='mt-2'>{note.description}</p>
      <button
        onClick={() => deleteNote(note.id)}
        className='mt-3  text-red-600 cursor-pointer transition hover:text-red-800'
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default Note;
