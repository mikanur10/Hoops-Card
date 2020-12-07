import React from 'react';
import { Link } from 'react-router-dom';
import './Players.css'

export default function Players(props) {
  return (
    <div className="players-container">
      <Link to='/players/new'><button className="create-button">Create</button></Link>
      <h3 className="players-title">Players</h3>
      {
        props.players.map(player => (
          <div className="player-cards">
            <React.Fragment key={player.id}>
              <Link className="player-name" to={`/players/${player.id}`}><p>{player.name}</p></Link>
              <div>
                <img className="card-image" src={player.img} width="500px" height="300px" alt="player"></img>
              </div>
              <p>{player.position}</p>
              {
                player.user_id === props.currentUser?.id &&
                <>
                  <Link to={`/players/${player.id}/edit`}><button className="edit-button">Edit</button></Link>
                  <button className="delete-button" onClick={() => props.handleDelete(player.id)}>Delete</button>
                </>
              }
            </React.Fragment>
          </div>
        ))
      }
    </div>
  )
}
