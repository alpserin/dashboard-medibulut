<template>
  <div class="calendar-card">
    <div class="header">
      <div class="header-left">
        <font-awesome-icon
          :icon="['far', 'clipboard']"
          size="xl"
          class="icon"
        />
        <div>
          <div class="title-container">
            <h2 class="title">Ajanda</h2>
            <h5 class="count">{{ calendarCount }} Hatırlatma</h5>
          </div>
        </div>
      </div>

      <button @click="addNewPatient" class="add-button">
        <font-awesome-icon :icon="['fas', 'plus']" />
        Yeni Ekle
      </button>
    </div>

    <div class="card-body">
      <div v-for="cal in calendar" :key="cal.title">
        <div>{{ formatDate(cal.data) }}</div>
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
  methods: {
    formatDate(dateString) {
      const options = {
        weekday: "short",
        day: "numeric",
      };
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString("tr-TR", options);

      // Split and rearrange formatted date
      // We want to show 'Pzr 18' instead of '18 Pzr'
      const parts = formattedDate.split(" ");
      return `${parts[1]} ${parts[0]}`;
    },
  },
};
</script>

<style scoped>
.calendar-card {
  overflow-y: auto;
  overflow-y: hidden;
}

.header {
  display: flex;
  border-bottom: 1px solid #ccc;
  width: 100%;
  margin-bottom: 4px;
  padding-bottom: 10px;
  justify-content: space-between;
}

.header-left {
  display: flex;
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

.add-button {
  font-size: 12px;
  background-color: rgb(30, 33, 33);
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 8px;
  width: 100px;
  height: 40px;
}

#button-d {
  width: 70px;
}

h5 {
  font-size: 14px;
}
</style>
