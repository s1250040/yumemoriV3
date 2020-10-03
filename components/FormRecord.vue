<template>
  <div class="container">
  <table class="table is-narrow">
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
   </table>
  </div>
</template>

<script>
export default {
    created() {
    this.$store.dispatch('fetchUsers')
   }
}
</script>