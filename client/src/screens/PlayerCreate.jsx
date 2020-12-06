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
      <div>
        <h3 className="create-title">Create Player Card</h3>
      </div>
      <div className="create-form">
        <form onSubmit={(e) => {
          e.preventDefault();
          props.handleCreate(formData);
        }}>
          <div className="input-name">
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-img">
            <input
              type='text'
              placeholder='Image URL'
              name='img'
              value={formData.img}
              onChange={handleChange}
            />
          </div>
          <div className="input-position">
            <input
              type='text'
              placeholder='Position'
              name='position'
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="screen-create-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}