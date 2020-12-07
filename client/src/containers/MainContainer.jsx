import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Skills from '../screens/Skills';
import PlayerCreate from '../screens/PlayerCreate';
import PlayerDetail from '../screens/PlayerDetail';
import PlayerEdit from '../screens/PlayerEdit';
import Players from '../screens/Players';
import HomePage from '../screens/HomePage';
import { getAllSkills } from '../services/skills'
import { destroyPlayer, getAllPlayers, postPlayer, putPlayer } from '../services/players'

export default function MainContainer(props) {
  const [skills, setSkills] = useState([]);
  const [players, setPlayers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchSkills = async () => {
      const skillData = await getAllSkills();
      setSkills(skillData);
    }
    const fetchPlayers = async () => {
      const playerData = await getAllPlayers();
      setPlayers(playerData);
    }
    fetchSkills();
    fetchPlayers();
  }, [])

  const handleCreate = async (playerData) => {
    const newPlayer = await postPlayer(playerData);
    setPlayers(prevState => [...prevState, newPlayer]);
    history.push('/players');
  }

  const handleUpdate = async (id, playerData) => {
    const updatedPlayer = await putPlayer(id, playerData);
    setPlayers(prevState => prevState.map(player => {
      return player.id === Number(id) ? updatedPlayer : player
    }))
    history.push('/players');
  }

  const handleDelete = async (id) => {
    await destroyPlayer(id);
    setPlayers(prevState => prevState.filter(player => player.id !== id))
  }

  return (
    <Switch>
      <Route path='/skills'>
        <Skills skills={skills} />
      </Route>
      <Route path='/players/:id/edit'>
        <PlayerEdit players={players} handleUpdate={handleUpdate} />
      </Route>
      <Route path='/players/new'>
        <PlayerCreate handleCreate={handleCreate} />
      </Route>
      <Route path='/players/:id'>
        <PlayerDetail skills={skills} />
      </Route>
      <Route path='/players'>
        <Players
          players={players}
          handleDelete={handleDelete}
          currentUser={props.currentUser}
        />
      </Route>
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>
  )
}
