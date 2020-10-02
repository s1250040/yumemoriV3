<template > 
  <FullCalendar
    default-view="dayGridMonth"
    :locale="locale"
    :header="calendarHeader"
    :weekends="calendarWeekends"
    :plugins="calendarPlugins"
    :events="events"
    @eventClick="eventClick"
    @dateClick="handleDateClick"
  />
 <!-- :events="calendarEvents" -->
</template>

<script>
import axios from 'axios';
// import api from "../plugins/api.js";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja"; // 日本語化用

export default {

  // props: ['hoge'],

  components: {
    // api,
    FullCalendar // make the <FullCalendar> tag available
  },
  computed: {},
  data() {
    return {

    // eventSources:{
    //   url:'https://jsondata.okiba.me/v1/json/oxmhS200816055834',
    //   extraParams: function(){
    //     return{
    //       dynamic_value : Math.random()
    //     }
    //   }
    //     // events(start,callback){
    //     //   axios.get('https://jsondata.okiba.me/v1/json/oxmhS200816055834').then(response => {
    //     //     callback(response.data.data)
    //     //   })
    //     // }

    //   },
  
    
      locale: jaLocale, // 日本語化
      // カレンダーヘッダーのデザイン
      calendarHeader: {
        left: " ",
        center: "title",
        right: "prev,next today"
      },
      calendarWeekends: true, // 土日を表示するか
      // カレンダーで使用するプラグイン
      calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      
      // events: {start: "2020-04-04"},

      events:  [
        {
          start: "2020-04-04",
          // // end : "",
          // rendering: 'background', 
          // backgroundColor: 'white',
        },
      ],
      // backgroundColor: 'white',
      // eventColor: "white",
      // items: ""
    };
  },
  methods: {
    eventClick: function(info) {
     window.location.href = "./Dashboard";
  }
  },
  mounted(){
    this.$nextTick(function (){
      //  console.log(this.$api.getHoge())
    // this.asyncData()
    axios.get('https://jsondata.okiba.me/v1/json/j0CQ5200816084851').then(response => {
    //   axios.get('http://localhost:8080/users').then(response => {
      console.log(response.data)
      // console.log(this.items)
      // this.items=response.data 
      var temp = JSON.parse(JSON.stringify(response.data))
      console.log(temp)
      // this.events.push(temp)
      this.events = temp
      })
      
    })
  },
  //  async asyncData() {
  //   await axios.get('https://jsondata.okiba.me/v1/json/oxmhS200816055834')
  //   .then(res =>{
  //     console.log(res)
  //     this.items= res.data.contents
  //   })
  // }
  // async asyncData({ app }) {
  //   // const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
  //   const baseUrl = 'http://localhost:8080/users';
  //   const response = await app.$axios.$get(baseUrl);
  //   return { lists: response };
  // }
  // asyncData(){
  //   return axios.get('http://localhost:8080/users').then(res => {
  //     return {lists:data}
  //   })
  // }
};
</script>
<style>
@import "~/node_modules/@fullcalendar/core/main.css";
@import "~/node_modules/@fullcalendar/daygrid/main.css";
@import "~/node_modules/@fullcalendar/timegrid/main.css";

.fc-sun {
  /* 日曜日 */
  color: red;
}
.fc-sat {
  /* 土曜日 */
  color: blue;
}
.fc-body {
  color: black; /* 日付の色 */
}
.fc-widget-header th {
  background-color: #eff0ff;
}
.fc-event {
  color: palevioletred;
}
.fc-day {
  border-color: black;
  background-color: #cacaca;
}

/* .fc-day:hover {
  background-color: #e6e6fa;
}
*/

.fc-bgevent {
  background-color: #ffffff;
  opacity: 1;
}

.fc-bgevent:hover {
  background-color: #e6e6fa!important;
}


/* .fc-today:hover {
  background-color: #e6e6fa!important;
}
*/


</style>
