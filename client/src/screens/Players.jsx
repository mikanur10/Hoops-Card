import React from 'react';
import { Link } from 'react-router-dom';

export default function Players(props) {
  return (
    <div>
      <h3>Players</h3>
      {
        props.players.map(player => (
          <React.Fragment key={player.id}>
            <Link to={`/players/${player.id}`}><p>{player.name}</p></Link>
            <img src={player.img} alt="player image"></img>
            <p>{player.position}</p>
            {
              player.user_id === props.currentUser?.id &&
              <>
                <Link to={`/players/${player.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => props.handleDelete(player.id)}>Delete</button>
              </>
            }
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/players/new'><button>Create</button></Link>
    </div>
  )
}
