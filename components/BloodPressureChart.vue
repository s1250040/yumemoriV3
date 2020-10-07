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
  },
  data() {
    return {
      cdata: [
        ["","",""],
      ],
      chartType: 'LineChart',
      chartData: [
        ['日付', '収縮', '拡張'],
        ['10/2 9:00', 120, 84],
        ['10/2 10:00', 110, 80],
        ['10/2 11:00', 100, 77],
        ['10/2 12:00', 111, 82]
      ],
      chartOptions: {
        title: 'mmHg',
        // subtitle: '売上',
        width: 1000,
        height: 500,
        trigger: 'both',
        tooltip:{
          isHtml: true
        }
      }
    };
  },
  methods:{
      
  },
    mounted: function(){
    const db = firebase.firestore();
    const hrRef = db.collection('users').orderBy('time');
    
    let sbpValue;
    let dbpValue;
    let timeValue;

    hrRef.onSnapshot((snapshot) => {
      this.cdata = [];
      snapshot.forEach((doc) => {
        timeValue = doc.data().time;
        sbpValue = doc.data().sbp;
        dbpValue = doc.data().dbp;
        
        this.cdata.push([
           timeValue.toDate(), sbpValue, dbpValue
        ])
      })
      this.cdata.unshift(["日付", "収縮", "拡張"])
    }) 
  }
//   created() {
//     this.data = this.$store.dispatch('fetchUsers')
//    }
}
</script>