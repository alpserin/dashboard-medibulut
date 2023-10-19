<template>
  <div class="announcement-card">
    <div class="card-body">
      <h2 class="announcement-card-title">
        <font-awesome-icon :icon="['fas', 'bullhorn']" size="xs" />Duyurular
      </h2>
      <h5 class="announcementCount">{{ announcementCount }} Yeni Duyuru</h5>

      <div v-for="announcement in announcements" :key="announcement.title">
        <h5 class="announcement-title">{{ announcement.title }}</h5>
        <p>{{ announcement.body }}</p>
        <button
          id="button-d"
          type="button"
          class="btn btn-outline-secondary"
          disabled
        >
          Detay
        </button>
      </div>
    </div>
    <button id="showAll-button" type="button" class="btn btn-primary">
      Tümünü Göster
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

.announcement-card-title {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 3px;
}

.announcementCount {
  font-size: 15px;
  font-weight: 400;
  color: rgb(112, 112, 112);
}

#button-d {
  width: 70px;
}

.announcement-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 3px;
}

#showAll-button {
  width: 100%;
  margin-top: 39px;
}
</style>
