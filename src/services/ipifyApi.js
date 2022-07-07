import axios from 'axios';

const ipifyApi = async (state) => {
  const petition = await axios.get('https://api.ipify.org/?format=json')
  state(petition.data.ip);
}

export default ipifyApi;