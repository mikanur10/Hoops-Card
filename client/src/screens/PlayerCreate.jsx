import { useState } from 'react';
import './PlayerCreate.css'


export default function PlayerCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
    img: '',
    position: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="create-container">
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleCreate(formData);
      }}>
        <h3>Create Player Card</h3>
        <label>Name:
        <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>Image:
        <input
            type='text'
            name='img'
            value={formData.img}
            onChange={handleChange}
          />
        </label>
        <label>Position:
        <input
            type='text'
            name='position'
            value={formData.position}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}