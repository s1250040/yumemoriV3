<template>
  <v-row>
   <v-col>
      <v-card class="form">
        <v-form ref="form">
          <v-container>
            <v-row> 
              <!-- <vue-timepicker
                hour-label="時"
                minute-label="分"
                v-model="newTime"
                close-on-complete
                format="HH:mm"
                id="time"
              ></vue-timepicker> -->
            </v-row>
            <v-row>
              <v-text-field 
              placeholder 
              v-model="newMaxPressure" 
              label="収縮期血圧" 
              outlined="true" 
              class="pressure" 
              clearable
              counter="3"
              ></v-text-field>
              <v-text-field 
              placeholder 
              v-model="newMinPressure" 
              label="拡張期血圧" 
              outlined="true" 
              class="pressure" 
              clearable
              counter="3"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field 
              placeholder 
              v-model="newHeart" 
              label="心拍数" 
              outlined="true" 
              clearable
              counter="3"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field 
              placeholder 
              v-model="newTemp" 
              label="体温" 
              outlined="true" 
              clearable
              counter="4"
              ></v-text-field>
            </v-row>
             <v-row>
              <v-text-field 
              placeholder 
              v-model="newSpO2" 
              label="SpO2" 
              outlined="true" 
              clearable
              counter="2"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                placeholder="特記事項があれば入力してください"
                v-model="newNote"
                label="特記事項"
                outlined="true"
                clearable
              ></v-text-field>
            </v-row>
            <v-btn color="primary" @click="add">確定</v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import VueTimepicker from "vue2-timepicker";
// import "vue2-timepicker/dist/VueTimepicker.css";

export default {
  data() {
    return {
     newMaxPressure: "",
      newMinPressure: "",
      newTemp: "",
      newHeart: "",
      newSpO2: "",
      newNote: "",
      newTime: "",
      data: [
        {
          maxPressure: "130",
          minPressure: "65",
          temp: "36.5",
          heart: "100",
          SpO2: "98",
          note: "あああああ",
          time: "01:11"
        },
        {
          maxPressure: "135",
          minPressure: "70",
          temp: "36.8",
          heart: "111",
          SpO2: "99",
          note: "あaあああ",
          time: "02:00"
        }
      ]
    };
  },
  methods: {
    add: function() {
      if (confirm("確定してもよろしいですか？")) {
        this.data.push({
          maxPressure: this.newMaxPressure,
          minPressure: this.newMinPressure,
          temp: this.newTemp,
          heart: this.newHeart,
          SpO2: this.newSpO2,
          note: this.newNote,
          time: this.newTime
        });
        this.newMaxPressure = "";
        this.newMinPressure = "";
        this.newHeart = "";
        this.newTemp = "";
        this.newSpO2 = "";
        this.newNote = "";
      }
    }
  },

  components: {
    // "vue-timepicker": VueTimepicker
  }
};
</script>

<style>
.form {
  padding: 30px;
}
.pressure {
  padding: 10px;
}

#time {
  margin: 20px;
}


</style>

