import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addSkill } from '../services/skills';
import { getOnePlayer } from '../services/players';
import './PlayerDetail.css'


export default function PlayerDetail(props) {
  const [player, setPlayer] = useState(null);
  const [skillId, setSkillId] = useState('')
  const { id } = useParams();

  useEffect(() => {
    const fetchPlayer = async () => {
      const playerData = await getOnePlayer(id);
      setPlayer(playerData);
    }
    fetchPlayer();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const player = await addSkill(skillId, id);
    setPlayer(player);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSkillId(value);
  }

  return (
    <div className="player-detail-container">
      <div>
        <h2>{player?.name}</h2>
        <img className="detail-image" src={player?.img} alt="player" width="400px" height="300px"></img>
        <h3>{player?.position}</h3>
      </div>
      <div className="skill-menu">
        {player?.skills.map(skill => (
          <p key={skill.id}>{skill.name}</p>
        ))}
        <form onSubmit={handleSubmit}>
          <select className="drow-down" defaultValue='default' onChange={handleChange}>
            <option disabled value='default'>-- Select a skill --</option>
            {props.skills.map(skill => (
              <option value={skill.id} key={skill.id}>{skill.name}</option>
            ))}
          </select>
          <button className="skill-add-button" >add</button>
        </form>
      </div>
    </div>
  )
}
