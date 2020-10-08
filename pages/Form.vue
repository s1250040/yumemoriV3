<template>
  <div class="container">
  <!-- <table class="table is-narrow">
    <thead>
        <tr>
            <th>user</th>
            <th>time</th>
            <th>sbp</th>
            <th>dbp</th>
            <th>bt</th>
            <th>hr</th>
            <th>spo2</th>
            <th>note</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="user in $store.getters.getUsers" :key="user.user">
            <td>{{user.user}}</td>
            <td>{{user.time}}</td>
            <td>{{user.sbp}}</td>
            <td>{{user.dbp}}</td>
            <td>{{user.bt}}</td>
            <td>{{user.hr}}</td>
            <td>{{user.spo2}}</td>
            <td>{{user.note}}</td>
        </tr>
    </tbody>
   </table> -->

    <div class="field is-grouped">
     <p class="control is-expanded">
       <input v-model="newUser" class="input" type="text" placeholder="user">
     </p>
     <p class="control is-expanded">
       <input v-model="newTime" class="input" type="text" placeholder="time">
     </p>
     <p class="control is-expanded">
       <input v-model.number="newSbp" class="input" type="number" placeholder="sbp">
     </p>
     <p class="control is-expanded">
       <input v-model.number="newDbp" class="input" type="number" placeholder="dbp">
     </p>
     <p class="control is-expanded">
       <input v-model.number="newBt" class="input" type="number" placeholder="bt">
     </p>
     <p class="control is-expanded">
       <input v-model.number="newHr" class="input" type="number" placeholder="hr">
     </p>
     <p class="control is-expanded">
       <input v-model.number="newSpo2" class="input" type="number" placeholder="spo2">
     </p>
     <p class="control is-expanded">
       <input v-model="newNote" class="input" type="text" placeholder="note">
     </p>
     <p class="control">
      <a class="button is-primary" @click="addUser">
         add
      </a>
     </p>
   </div>

  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      newUser: '千葉照子',
      newTime: firebase.firestore.Timestamp.fromDate(new Date(2020, 9, 5)),
      newSbp: 110,
      newDbp: 70,
      newBt: 36.0,
      newHr: 70,
      newSpo2: 95,
      newNote: '',
    }
  },
  methods: {
    addUser() {
      const user = this.newUser
      const time = this.newTime
      const sbp = this.newSbp
      const dbp = this.newDbp
      const bt = this.newBt
      const hr = this.newHr
      const spo2 = this.newSpo2
      const note = this.newNote

      this.$store.dispatch('addUser', {user, time, sbp, dbp, bt, hr, spo2, note})
      this.newUser = ''
      this.newTime = ''
      this.newSbp = ''
      this.newDbp = ''
      this.newBt = ''
      this.newHr = ''
      this.newSpo2 = ''
      this.newNote = ''
      
      // this.newUser = user
      // this.newTime = time
      // this.newSbp = sbp
      // this.newDbp = dbp
      // this.newBt = bt
      // this.newHr = hr
      // this.newSpo2 = spo2
      // this.newNote = note
      }
   },
//    created() {
//     this.$store.dispatch('fetchUsers')
//    }
}
</script>

