<template>
  <div class="col-12 text-left p-3" style="min-height:15vh;">
    <div class="titleComponent">
      <h3>{{dataObj.title}}</h3>
    </div>
  </div>
</template>


<script>
export default {
  name: "titleComponent",
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
.titleComponent {
  color: antiquewhite;
  text-shadow: 1px 1px 5px black;
  font-size: larger;
}
</style>