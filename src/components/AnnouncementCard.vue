<template>
  <div class="announcement-card">
    <div class="card-body">
      <h2>
        <font-awesome-icon :icon="['fas', 'bullhorn']" size="xs" />Duyurular
      </h2>
      <h5>{{ announcementCount }} Yeni Duyuru</h5>

      <div v-for="announcement in announcements" :key="announcement.title">
        <h5>{{ announcement.title }}</h5>
        <p>{{ announcement.body }}</p>
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
    announcements: Array,
    announcementCount: Number,
  },
};
</script>

<style scoped>
.announcement-card {
  overflow-y: auto;
}

#button-d {
  width: 70px;
}

h5 {
  font-size: 14px;
}
</style>
