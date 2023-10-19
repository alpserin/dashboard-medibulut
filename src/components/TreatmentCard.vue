<template>
  <div class="treatment-card">
    <div>tedaviler</div>
    <div>
      <PieChart />
    </div>
  </div>
</template>

<script>
import PieChart from "./PieChart.vue";

export default {
  components: PieChart,
};
</script>

<style scoped>
.treatment-card {
  background-color: #e6e6e6;
  width: 300px;
  height: 300px;
}
</style>
