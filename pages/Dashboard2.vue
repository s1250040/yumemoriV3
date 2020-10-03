<template>
    <v-card>
    <v-toolbar >
      <v-toolbar-title>データ</v-toolbar-title>

      <v-spacer></v-spacer>   
      <v-btn icon @click="show">
        <v-icon>mdi-calendar-month</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          fixed-tabs
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            href="#mobile-tabs-5-1"
            class="primary--text"
          >
            <!-- <v-icon>mdi-phone</v-icon> -->
            睡眠
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-2"
            class="primary--text"
          >
            <!-- <v-icon>mdi-heart</v-icon> -->
            血圧
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-3"
            class="primary--text"
          >
            <!-- <v-icon>mdi-account-box</v-icon> -->
            心拍
          </v-tab>
          <v-tab
            href="#mobile-tabs-5-4"
            class="primary--text"
          >
           
            体温
          </v-tab>
          <v-tab
            href="#mobile-tabs-5-5"
            class="primary--text"
          >
           
            記録
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item
        v-for="i in 5"
        :key="i"
        :value="'mobile-tabs-5-' + i"
      >
        <v-card flat>
            
          <sleepstagechart/>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <div>

     <modal name="modal-content" width="70%" height="90%" :scrollable="true" clickToClose="ture">
      <full-calendar @dateClick="handleDateClick" :plugins="calendarPlugins"/>
     </modal>
    </div>
  </v-card>

</template>

<script>
import sleepstagechart from "../components/SleepStage";
export default {
    data() {
        return {
           
    };
    },
    methods: {
       show() {
        this.$modal.show("modal-content");
       },
       hide() {
        this.$modal.hide("modal-content");
       }
      },  
    components:{
        sleepstagechart,
    }
};
</script>
