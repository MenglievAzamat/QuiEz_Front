<script>
export default {
  name: "vue-title",
  props: ["title"],
  created() {
    document.title = this.title;
  },
  watch: {
    title() {
      document.title = this.title;
    }
  }
};
</script>
