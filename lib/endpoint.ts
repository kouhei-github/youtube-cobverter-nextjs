import axios from 'axios'

export const convertMp3 = async (url: string) => {
  const body = {url}
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://jqfzxyv2ak.execute-api.ap-northeast-1.amazonaws.com/main/prod',
    headers: {
      'Content-Type': 'text/plain'
    },
    data : JSON.stringify(body)
  };

  const res = await axios.request(config)
  const mp3: {file_name: string, thumbnail: string, title: string, duration: string, filesize: string} = res.data
  return mp3
}
