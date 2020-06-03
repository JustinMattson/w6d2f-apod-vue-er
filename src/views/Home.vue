<template>
  <div id="home" class="home conatiner bg" :style="{backgroundImage: `url(${dataObj.url})`}">
    <div class="row d-flex m-0" style="max-height:98vh">
      <title-comp />
      <div class="col-1 d-flex m-0" style="min-height:75vh">
        <i class="fas fa-hat-wizard fa-2x action text-primary" @click="hitApi()"></i>
      </div>
      <explanation />
    </div>
    <date />
    <div class="col-12 text-muted text-center footer" style="min-height:2vh;">
      Brought to you with
      <img
        class="m-0 p-0"
        alt="Vue logo"
        src="../assets/logo.png"
        style="width:15px;"
      /> by Justin Mattson
    </div>
  </div>
</template>


<script>
import Explanation from "@/components/ExplanationComponent";
import Date from "@/components/DateComponent";
import TitleComp from "@/components/TitleComponent";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    dataObj() {
      return this.$store.state.dataObj;
    }
  },
  methods: {
    hitApi() {
      this.$store.dispatch("hitApi");
    }
  },
  components: {
    Explanation,
    Date,
    TitleComp
  }
};
</script>


<style scoped>
.bg {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.fa {
  text-shadow: 1px 1px 5px black;
}
.action {
  cursor: pointer;
}
.footer {
  margin-left: -2em;
  color: rgb(255, 249, 242);
  text-shadow: 1px 1px 5px black;
}
</style>
