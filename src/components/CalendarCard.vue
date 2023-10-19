<template>
  <div class="calendar-card">
    <div class="header">
      <h2>
        <font-awesome-icon :icon="['far', 'note-sticky']" size="xs" />
        Ajanda
      </h2>
      <h5>{{ calendarCount }} Hatırlatma</h5>
    </div>

    <div class="card-body">
      <div v-for="cal in calendar" :key="cal.title">
        <div>{{ cal.data }}</div>
        <h5>{{ cal.title }}</h5>
        <p>{{ cal.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    calendar: Array,
    calendarCount: Number,
  },
};
</script>

<style scoped>
.calendar-card {
  overflow-y: auto;
  overflow-y: hidden;
}

.card-body {
  overflow-y: auto;
}

#button-d {
  width: 70px;
}

h5 {
  font-size: 14px;
}
</style>
