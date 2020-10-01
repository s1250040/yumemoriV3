<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
         <button v-on:click="toggle_switch()">Toggle Button</button>
         <div v-if="isActive === false">

         <v-list>
         <v-list-item v-for="user in users" :key="user.id" :to="user.chart">
            <v-list-item-content>
              {{user}}
            </v-list-item-content>
         </v-list-item>
         </v-list>
        </div>

         <!-- <p v-else>クリックで切り替わった内容
         </p> -->
         <div v-else>
         <v-col v-for="user in users" :key="user.id" :cols=4>
          <v-card hover=ture :color="user.state" :to="user.chart" class="text-center" nuxt=ture>
          <v-row dence>
          <v-col cols=12 ><v-card-title v-text="user.name" ></v-card-title></v-col>
          <v-col cols=6><v-icon x-large class="pa-1">{{user.icon}}</v-icon></v-col>
          <v-col cols=6>
          <v-card-text v-text="user.leaving">
          </v-card-text>
          </v-col>
          </v-row>
          </v-card>
        </v-col>
        </div>
      </div>
      
    </v-col>
  </v-row>
</template>

<script>


export default {
  data(){
    return{
      isActive: false,
      users: [
        {
          id: '1',
          name: '101千葉照子',
          leaving: "離床時間"+'60'+"分",
          bpm: "心拍数"+'100'+"bpm",
          bodytempreture: "体温"+'36.2'+"度",
          chart: '/Dashboard',
          state: 'yellow',
          icon: 'mdi-airplane-takeoff'
        },
        {
          id: '2',
          name: '102山内智恵子',
          leaving: "離床時間"+'0'+"分",
          bpm: "心拍数"+'105'+"bpm",
          bodytempreture: "体温"+'36.6'+"度",
          chart: '/Dashboard',
          state: '#64FFDA',
          icon: 'mdi-bed' 
        },
        {
          id: '3',
          name: '103宮内考子',
          leaving: "離床時間"+'3'+"分",
          bpm: "心拍数"+'99'+"bpm",
          bodytempreture: "体温"+'36.8'+"度",
          chart: '/Dashboard',
          state: '#64FFDA',
          icon: 'mdi-airplane-takeoff'
        },
      ]
    };
    
  },

  methods:{
    toggle_switch: function() {
    this.isActive = !this.isActive
    }
  },

  components: {
  
  },
}
</script>
