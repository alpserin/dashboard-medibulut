<template>
  <div class="card">
    <h4>{{ title }}</h4>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: { title: String, body: String },
};
</script>

<style scoped>
.card {
  background-color: #e6e6e6;
  padding: 20px;
  margin: 10px;
  width: 200px;
}
</style>
