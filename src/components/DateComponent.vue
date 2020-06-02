<template>
  <div class="col-12 d-flex text-light px-5 justify-content-end" style="min-height:3vh;">
    <div class="dateComponent">
      <h3>{{dataObj.date}}</h3>
    </div>
  </div>
</template>


<script>
export default {
  name: "dateComponent",
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
.dateComponent {
  color: antiquewhite;
  text-shadow: 1px 1px 5px black;
  font-size: larger;
}
</style>