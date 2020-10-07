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
          v-model="model"
          fixed-tabs
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            href="#tab-1"
            class="primary--text"
          >
            <!-- <v-icon>mdi-phone</v-icon> -->
            睡眠
          </v-tab>

          <v-tab
            href="#tab-2"
            class="primary--text"
          >
            <!-- <v-icon>mdi-heart</v-icon> -->
            血圧
          </v-tab>

          <v-tab
            href="#tab-3"
            class="primary--text"
          >
            <!-- <v-icon>mdi-account-box</v-icon> -->
            心拍
          </v-tab>
          <v-tab
            href="#tab-4"
            class="primary--text"
          >
           
            体温
          </v-tab>
          <v-tab
            href="#tab-5"
            class="primary--text"
          >
           
            記録
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="model">
      <v-tab-item value="tab-1">
        睡眠のグラフなど
        <sleepstagechart/>
      </v-tab-item>
      <v-tab-item value="tab-2">
        血圧のグラフ
        <bpc/>
      </v-tab-item>
      <v-tab-item value="tab-3">
        心拍数のグラフ
        <hrc/>
      </v-tab-item>
      <v-tab-item value="tab-4">
        体温のグラフ
        <btc/>
      </v-tab-item>
      <v-tab-item value="tab-5">
       記録の一覧
        <formrecord/>
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
import formrecord from "../components/FormRecord";
import btc from "../components/BodyTempretureChart";
import bpc from "../components/BloodPressureChart";
import hrc from "../components/HeartRateChart";

export default {
    data() {
        return {
           model: 'tab-1'
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
        formrecord,
        btc,
        bpc,
        hrc,
    }
};
</script>
