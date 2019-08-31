import firebase from 'firebase'

export const db = firebase
  .initializeApp({ projectId: 'chatvue-3ac5c' })
  .firestore()