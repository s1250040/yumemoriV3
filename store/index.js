import firebase from '~/plugins/firebase'
const db = firebase.firestore();

const userRef = db.collection('users')


export const state = () => ({
    userUid: '',
    userName: '',
    users: []
})

export const mutations = {
    setUserUid(state, userUid) {
        state.userUid = userUid
    },
    setUserName(state, userName) {
        state.userName = userName
    },
    addUser(state, user) {
        state.users.push(user)
    },
    clearUser(state) {
        state.users = []
    }
}

export const actions = {
    login({ commit }) {
        console.log('login action')
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const user = result.user;
            console.log('success : ' + user.uid + ' : ' + user.displayName)
            commit('setUserUid', user.uid)
            commit('setUserName', user.displayName)
        }).catch(function (error) {
            var errorCode = error.code;
            console.log('error : ' + errorCode)
        });
    },
    fetchUsers({ commit }) {
        userRef
            .get()
            .then(res => {
                res.forEach((doc) => {
                    console.log('success : ' + `${doc.id} => ${doc.data()}`);
                    commit('addUser', doc.data())
                })
            })
            .catch(error => {
                console.log('error : ' + error)
            })
    },
    addUser({ commit }, user) {
        console.log(user)
        userRef
            .add({
                user: user.user,
                time: user.time,
                sbp: user.sbp,
                dbp: user.dbp,
                bt: user.bt,
                hr: user.hr,
                spo2: user.spo2,
                note: user.note,
            })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                commit('addUser', user)
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
  }
}

export const getters = {
    getUserUid(state) {
        return state.userUid
    },
    getUserName(state) {
        return state.userName
    },
    getUsers(state) {
        return state.users
    }
}