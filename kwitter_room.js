
const firebaseConfig = {
      apiKey: "AIzaSyDh63Zz_I6urjPfSIL-6EBOQG_P3F9nXec",
      authDomain: "kwitter-3662a.firebaseapp.com",
      databaseURL: "https://kwitter-3662a-default-rtdb.firebaseio.com",
      projectId: "kwitter-3662a",
      storageBucket: "kwitter-3662a.appspot.com",
      messagingSenderId: "821791431609",
      appId: "1:821791431609:web:36e9399fea3a9f9689f468"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
