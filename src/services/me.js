import Auth from './auth'
import User from './user'

const getId = () => {
  return Auth.getCurrentUser().uid
}

const get = () => {
  return User.get(getId())
}

const set = (data) => {
  return User.set(getId(), data)
}

export default {
  getId,
  get,
  set
}
