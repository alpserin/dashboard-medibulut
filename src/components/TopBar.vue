<template>
  <div class="top-bar">
    <p>Kampanya için son 10 gün!</p>
    <button class="detail-button">Detay</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background-color: #333;
  color: white;
}

.detail-button {
  background-color: #d21818;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
