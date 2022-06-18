import axios from 'axios';

const API_URL = '/api/goals/';

//Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const respone = await axios.post(API_URL, goalData, config);

  return respone.data;
};

//Get user goals
const getGoals = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const respone = await axios.get(API_URL, config);

  return respone.data;
};

//Delete User goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const respone = await axios.delete(`${API_URL}${goalId}`, config);

  return respone.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;
