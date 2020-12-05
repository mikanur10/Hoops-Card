import React from 'react';
import { Link } from 'react-router-dom';
import './Players.css'

export default function Players(props) {
  return (
    <div className="players-container">
      <Link to='/players/new'><button>Create</button></Link>
      <h3>Players</h3>
      {
        props.players.map(player => (
          <div className="player-cards">
            <React.Fragment key={player.id}>
              <Link to={`/players/${player.id}`}><p className="player-name">{player.name}</p></Link>
              <div>
                <img src={player.img} width="400px" height="300px" alt="player"></img>
              </div>
              <p>{player.position}</p>
              {
                player.user_id === props.currentUser?.id &&
                <>
                  <Link to={`/players/${player.id}/edit`}><button>Edit</button></Link>
                  <button onClick={() => props.handleDelete(player.id)}>Delete</button>
                </>
              }
            </React.Fragment>
          </div>
        ))
      }
      {/* <br /> */}
    </div>
  )
}
