<template>
  <div class="announcement-card">
    <div class="card-body">
      <div class="header">
        <font-awesome-icon :icon="['fas', 'bullhorn']" size="xl" class="icon" />
        <div>
          <div class="title-container">
            <h2 class="title">Announcements</h2>
            <h5 class="count">{{ announcementCount }} New Announcements</h5>
          </div>
        </div>
      </div>

      <div class="announcements">
        <div v-for="announcement in announcements" :key="announcement.title">
          <h5 class="announcement-title">{{ announcement.title }}</h5>
          <p class="announcement-text">{{ announcement.body }}</p>

          <div class="detail-button-container">
            <button type="button" class="btn btn-outline-secondary">
              <div class="detail-button-text">Details</div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button id="showAll-button" type="button" class="btn btn-primary">
        Show All
      </button>
    </div>
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
.card-body {
  height: 260px;
}

.header {
  display: flex;
  border-bottom: 1px solid #ccc;
  width: 100%;
  margin-bottom: 4px;
  padding-bottom: 10px;
}

.icon {
  margin-top: 8px;
  margin-right: 8px;
}

.title {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 3px;
}

.count {
  font-size: 15px;
  font-weight: 400;
  color: rgb(112, 112, 112);
}

.announcements {
  margin-top: 20px;
  overflow-y: auto;
  height: 320px;
}

.announcement-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0px;
}

.announcement-text {
  margin-bottom: 10px;
  color: rgb(112, 112, 112);
}

.detail-button-container {
  margin-bottom: 20px;
}

#detail-button {
  width: 40px;
  border-color: #ccc;
}

.detail-button-text {
  font-weight: 700;
  font-size: 14px;
}

#showAll-button {
  width: 100%;
  margin-top: 133px;
}
</style>
