import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deletion = (person) => {
  if (window.confirm(`Delete ${person.name}`)) {
    return axios.delete(`${baseUrl}/${person.id}`)
    .then(response => response.data)
  }
}

export default {getAll, create, update, deletion}