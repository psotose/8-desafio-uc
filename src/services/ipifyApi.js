import axios from 'axios';

const ipifyApi = async (state) => {
try {  
  const petition = await axios.get('https://api.ipify.org/?format=json')
  state(petition.data.ip);
} catch (e) {
  state(null)
  console.log("error", e);
} finally {
  console.log("process done");
}
}

export default ipifyApi;