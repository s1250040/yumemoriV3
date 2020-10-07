<template>
  <div class="container">
    <chart
      :chartType="chartType"
      :chartData="cdata"
      :chartOptions="chartOptions"
    />
  </div>
</template>

<script>
import Chart from '@/components/charts/Chart';
import firebase from '~/plugins/firebase';

export default {
  components: {
    Chart,
    // Dropdown
  },
  data() {
    return {
      data: [],
      time: [],
      cdata: [
        ['',''],
      ],
      chartType: 'LineChart',
      chartData: [
        ['日付', '体温'],
        ['10/2', 36.5],
        ['10/3', 36.6],
        ['10/4', 36.7],
        ['10/5', 36.8]
      ],
      chartOptions: {
        title: '℃',
        // subtitle: '売上',
        width: 1000,
        height: 500
      }
    }
  },
    mounted: function(){
    const db = firebase.firestore();
    const hrRef = db.collection('users').orderBy('time');

    let dataValue;
    let timeValue;

    hrRef.onSnapshot((snapshot) => {
    
      this.cdata = [];
      snapshot.forEach((doc) => {
        timeValue = doc.data().time;
        dataValue = doc.data().bt;
        this.cdata.push([
           timeValue.toDate(), dataValue
        ])
      })
      this.cdata.unshift(["日付", "体温"])
    }) 
    // this.chdata = JSON.parse(this.cdata)
  }
}
</script>