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
       <input v-model="newTime" class="input" type="datetime-local" placeholder="time">
     </p>
     <p class="control is-expanded">
       <input v-model="newSbp" class="input" type="number" placeholder="sbp">
     </p>
     <p class="control is-expanded">
       <input v-model="newDbp" class="input" type="number" placeholder="dbp">
     </p>
     <p class="control is-expanded">
       <input v-model="newBt" class="input" type="number" placeholder="bt">
     </p>
     <p class="control is-expanded">
       <input v-model="newHr" class="input" type="number" placeholder="hr">
     </p>
     <p class="control is-expanded">
       <input v-model="newSpo2" class="input" type="number" placeholder="spo2">
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
export default {
  data() {
    return {
      newUser: '',
      newTime: '',
      newSbp: '',
      newDbp: '',
      newBt: '',
      newHr: '',
      newSpo2: '',
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
      }
   },
//    created() {
//     this.$store.dispatch('fetchUsers')
//    }
}
</script>

