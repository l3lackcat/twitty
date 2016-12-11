import firebase from 'firebase'

const get = (userId) => {
  return firebase.database()
    .ref(`user/${userId}`)
    .once('value')
    .then((snapshot) => {
      return snapshot.val()
    })
}

const set = (userId, data) => {
  return firebase.database()
    .ref(`user/${userId}`)
    .set(data)
}

const subscribe = (userId, callback) => {
  firebase.database()
    .ref(`user/${userId}`)
    .on('value', (snapshot) => {
      callback(snapshot.val())
    })
}

export default {
  get,
  set,
  subscribe
}
