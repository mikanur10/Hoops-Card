import api from './apiConfig';

export const getAllSkills = async () => {
  const resp = await api.get('/skills');
  return resp.data;
}

export const addSkill = async (skillId, playerId) => {
  const resp = await api.put(`/skills/${skillId}/players/${playerId}`);
  return resp.data;
}