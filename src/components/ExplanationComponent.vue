<template>
  <div class="col-11 align-self-center p-3">
    <div class="explanationComponent">{{dataObj.explanation}}</div>
  </div>
</template>


<script>
export default {
  name: "explanationComponent",
  data() {
    return {};
  },
  computed: {
    dataObj() {
      return this.$store.state.dataObj;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
.action {
  cursor: pointer;
}
.explanationComponent {
  margin-left: -2em;
}
</style>