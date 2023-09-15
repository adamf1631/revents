import firebase from "../config/firebase";
import cuid from "cuid";

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp)
        data[prop] = data[prop].toDate();
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function listenToEventsFromFirestore() {
  return db.collection("events").orderBy("date");
}

export function listenToEventFromFirestore(eventId) {
  return db.collection("events").doc(eventId);
}

export function addEventToFirestore(event) {
  return db.collection("events").add({
    ...event,
    hostedBy: "Billy",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/16.jpg",
    attendees: firebase.firestore.FieldValue.arrayRemove({
      id: cuid(),
      displayName: "Billy",
      photoURL: "https://randomuser.me/api/portraits/men/16.jpg",
    }),
  });
}

export function updateEventInFirestore(event) {
  return db.collection("events").doc(event.id).update(event);
}

export function deleteEventInFirestore(eventId) {
  return db.collection("events").doc(eventId).delete();
}

export function cancelEventToggle(event) {
  db.collection("events").doc(event.id).update({
    isCancelled: !event.isCancelled,
  });
}

export function setUserProfileData(user) {
  return db.collection("users").doc(user.id).set({
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}
