import React from 'react';
import { Link } from 'react-router-dom';
import './Players.css'

export default function Players(props) {
  return (
    <div>
      <Link to='/players/new'><button>Create</button></Link>
      <h3>Players</h3>
      {
        props.players.map(player => (
          <React.Fragment key={player.id}>
            <div className="player-cards">
              <Link to={`/players/${player.id}`}><p>{player.name}</p></Link>
              <img src={player.img} width="400px" height="300px" alt="player"></img>
              <p>{player.position}</p>
              {
                player.user_id === props.currentUser?.id &&
                <>
                  <Link to={`/players/${player.id}/edit`}><button>Edit</button></Link>
                  <button onClick={() => props.handleDelete(player.id)}>Delete</button>
                </>
              }
            </div>
          </React.Fragment>
        ))
      }
      {/* <br /> */}
    </div>
  )
}
