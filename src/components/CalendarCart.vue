<template>
  <div class="card">
    <div class="card-body">
      <h2>Ajanda</h2>
      <div v-for="cal in calendar" :key="cal.title">
        <div>{{ cal.data }}</div>
        <h5>{{ cal.title }}</h5>
        <p>{{ cal.body }}</p>
      </div>
    </div>
    <button
      id="button-d"
      type="button"
      class="btn btn-outline-secondary"
      disabled
    >
      Detay
    </button>
  </div>
</template>

<script>
export default {
  props: {
    calendar: Array,
  },
};
</script>

<style scoped>
.card {
  background-color: #e6e6e6;
  padding: 20px;
  margin: 10px;
  width: 200px;
}

#button-d {
  width: 70px;
}
</style>
