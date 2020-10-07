<template>
  <div class="container">
    <chart
      :chartType="chartType"
      :chartData="cdata"
      :chartOptions="chartOptions"
    />

  <p>
    {{cdata}}
  </p>

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
      chdata:[],

      chartType: 'LineChart',
      chartData: [
        ['時間', '心拍数'],
        ['10/2 9:00', 100],
        ['10/2 10:00', 80],
        ['10/2 11:00', 90],
        ['10/2 12:00', 82]
      ],
      chartOptions: {
        title: 'bpm',
        width: 1000,
        height: 500
      }
    }
  },
  mounted: function(){
    const db = firebase.firestore();
    // const sinceAtDate = firebase.firestore.Timestamp.fromDate(new Date('2020/10/01 00:00:00'));
    // const recentAtDate = firebase.firestore.Timestamp.fromDate(new Date('2020/10/04 00:00:00'));
    const hrRef = db.collection('users').orderBy('time');
    // const hrRef = db.collection('data').orderBy('time').startAt(recentAtDate).endAt(sinceAtDate);

    let dataValue;
    let timeValue;

    hrRef.onSnapshot((snapshot) => {
      this.data = [];
      this.time = [];
      this.cdata = [];
      snapshot.forEach((doc) => {
        timeValue = doc.data().time;
        dataValue = doc.data().hr;
        // this.data.push({
        //   data: dataValue,
        // })
        // this.time.push({ 
        //   time: timeValue.toDate().toString()
        // })
        // this.cdata.push({
        //    time:timeValue.toDate(), data: dataValue
        // })
        this.cdata.push([
           timeValue.toDate(), dataValue
        ])
      })
      this.cdata.unshift(["時間", "心拍数"])
    }) 
    // this.chdata = JSON.parse(this.cdata)
  }
}
</script>