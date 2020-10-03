import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp(
        {
            apiKey: "AIzaSyCgYK76Q-1FPlvA62k8cItW_nTp7X0vVyc",
            authDomain: "yumemori-abb2b.firebaseapp.com",
            databaseURL: "https://yumemori-abb2b.firebaseio.com",
            projectId: "yumemori-abb2b",
            storageBucket: "yumemori-abb2b.appspot.com",
            messagingSenderId: "517783743611",
            appId: "1:517783743611:web:60868bf4491ea988a486de"
        }
    )
}

export default firebase