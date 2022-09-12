const firebaseConfig = {
    apiKey: "AIzaSyBEpsvCLD-FYhfmPrD0sZn0zYp_ezqkb20",
    authDomain: "ihealth-3ada5.firebaseapp.com",
    databaseURL: "https://ihealth-3ada5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ihealth-3ada5",
    storageBucket: "ihealth-3ada5.appspot.com",
    messagingSenderId: "407237185523",
    appId: "1:407237185523:web:c5431d7618673d7d454c86",
    measurementId: "G-3XBWNW17HK"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebase.database();
// display the messages
// reference the collection created earlier
const fetchChat = db.ref("/");

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const v = snapshot.val();
  console.log(v);
  document.getElementById("one").innerHTML = v;
  const Kcal = 0.06 * v;
  document.getElementById("Kcal").innerHTML = Kcal;
});

setTimeout(function () { location. reload(1); }, 3000);

