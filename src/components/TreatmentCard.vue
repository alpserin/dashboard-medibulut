<template>
  <div class="treatment-card">
    <div>tedaviler</div>
    <Pie />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);
export default {
  components: Pie,
};
</script>

<style scoped>
.treatment-card {
  background-color: #e6e6e6;
  width: 300px;
  height: 300px;
}
</style>
