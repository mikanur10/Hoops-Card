import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleUpdate(id, formData);
    }}>
      <h3>Edit Player</h3>
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
  )
}
