import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('current');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/projects/add', {
        title,
        description,
        status
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Project added successfully');
      navigate('/dashboard');
    } catch (err) {
      alert('Failed to add project');
    }
  };
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4">Add Project</h1>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border p-2 w-full mb-2" />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="border p-2 w-full mb-2" rows={4} />
      <select value={status} onChange={e => setStatus(e.target.value)} className="border p-2 w-full mb-2">
        <option value="current">Current</option>
        <option value="upcoming">Upcoming</option>
      </select>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </div>
  );
}

export default AddProject;