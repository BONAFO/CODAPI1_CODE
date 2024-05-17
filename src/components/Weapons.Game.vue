<script setup>
import GET_PARAMS from "@/assets/getParams";
import GetGameData from "@/functions/getGameData";
import { computed, ref } from "vue";
import BackButton from "./BackButton.vue";

const game = GET_PARAMS().game;
const wc = GET_PARAMS().wc;

const data = ref([]);
const attrs = ref([]);

const get_gameData = computed(() => {
  GetGameData(game).then((res) => {
    data.value = res.default;
    data.value = data.value.filter((w) => w.name == wc)[0].weapons;
  });
  return "";
});

const get_attrs = computed(() => {
  GetGameData(game + "-attr").then((res) => {
    attrs.value = res.default;

    // data.value = data.value.filter((w) => w.name == wc)[0].weapons;
  });
});

const get_attr = (id) => {
  try {
    return attrs.value.filter((at) => at.id == id)[0].name;
  } catch (error) {
    return "";
  }
};


</script>
<template>
  <BackButton class="mb-3" :url="game"></BackButton>
  <div class="container" v-for="d in data">
    <div class="we-card">
      <div>
        <img class="we-img d-inline-block" :src="d.img" alt="" />
        <div class="we-att d-inline-block">
          <table>
            <tr>
              <td>{{ get_attr(d.att[0]) }}</td>
              <td>{{ get_attr(d.att[1]) }}</td>
            </tr>
            <tr>
              <td>{{ get_attr(d.att[2]) }}</td>
              <td>{{ get_attr(d.att[3]) }}</td>
            </tr>
            <tr>
              <td>{{ get_attr(d.att[4]) }}</td>
              <td>{{ get_attr(d.att[5]) }}</td>
            </tr>
            <tr>
              <td>{{ get_attr(d.att[6]) }}</td>
              <td>{{ get_attr(d.att[7]) }}</td>
            </tr>
            <tr>
              <td>{{ get_attr(d.att[8]) }}</td>
              <td>{{ get_attr(d.att[9]) }}</td>
            </tr>
            <tr>
              <td>{{ get_attr(d.att[10]) }}</td>
              <td>{{ get_attr(d.att[11]) }}</td>
            </tr>
            <tr>
              <td>{{ get_attr(d.att[12]) }}</td>
              <td>{{ get_attr(d.att[13]) }}</td>
            </tr>
          </table>

          <!-- <table v-for="att in d.att">
                    <tr>
                        <td>asd</td>
                        <td>asd</td>
                    </tr>
                </table> -->
        </div>
      </div>
      <br />
      <div></div>
    </div>
    <br />
  </div>
  {{ data }}
  {{ get_gameData }}
  {{ get_attrs }}
</template>

<style>
.container {
  text-align: center;
  width: 100%;
}
.we-card {
  background-color: #6f6f6f;
  border-radius: 2%;
  width: 95%;
  margin-left: 2%;
  text-align: start;
}

.we-img {
  width: 50%;
  height: 16vh;
}

.we-att {
  position: relative;
  float: right;
  width: 50%;
  background-color: #c2c2c239;
  height: 16vh;
}

table {
  width: 100%;
  text-align: center;
}

td {
  width: 50%;
  font-size: 1.2vh;
}
</style>
