import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PlayerEdit.css'

export default function FoodEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    img: '',
    position: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const playerItem = props.players.find(player => player.id === Number(id));
      setFormData({
        name: playerItem.name,
        img: playerItem.img,
        position: playerItem.position
      })
    }
    if (props.players.length) {
      prefillForm();
    }
  }, [props.players])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="edit-container">
      <div>
        <h3 className="edit-title">Edit Player Card</h3>
      </div>
      <div className="edit-form">
        <form onSubmit={(e) => {
          e.preventDefault();
          props.handleUpdate(id, formData);
        }}>
          <div className="edit-input-name">
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="edit-input-img">
            <input
              type='text'
              name='img'
              value={formData.img}
              onChange={handleChange}
            />
          </div>
          <div className="edit-input-position">
            <input
              type='text'
              name='position'
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="screen-edit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
