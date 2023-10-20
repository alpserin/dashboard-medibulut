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

      <button @click="addNew" class="add-button">
        <font-awesome-icon :icon="['fas', 'plus']" />
        Yeni Ekle
      </button>
    </div>

    <div class="card-body">
      <div class="reminder-list">
        <div v-for="(group, date) in groupedCalendar" :key="date">
          <div class="reminder">
            <div class="date-header">
              <div class="day">{{ formatDate(date).day }}</div>
              <div class="date">{{ formatDate(date).date }}</div>
            </div>

            <div class="reminder-container">
              <div>
                <div
                  v-for="cal in group"
                  :key="cal.title"
                  class="reminder-text"
                >
                  <div class="reminder-title-body">
                    <h5>{{ cal.title }}</h5>
                    <p class="reminder-parag">{{ cal.body }}</p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    id="dot-button"
                  >
                    <strong><strong>...</strong></strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      return { day: parts[1], date: parts[0] };
    },
  },
  computed: {
    // Group the reminders that have the same date
    groupedCalendar() {
      const grouped = {};
      this.calendar.forEach((event) => {
        const date = event.data;
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(event);
      });
      return grouped;
    },
  },
};
</script>

<style scoped>
.calendar-card {
}

.card-body {
  height: 260px;
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

.reminder-list {
  margin-top: 10px;
  overflow-y: auto;
  height: 320px;
}

.reminder-container {
  width: 100%;
}

.reminder {
  display: flex;
  width: 100%;
}

.date-header {
  width: 40px;
  margin-top: 12px;
  margin-right: 3px;
  font-size: 15px;
  font-weight: 500;
}

.day {
  color: rgb(145, 145, 145);
}

.reminder-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #d9d9d9;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  padding-left: 12px;
  padding-bottom: 0px;
  border-radius: 8px;
  margin-bottom: 2px;
  position: relative;
}

.reminder-parag {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: rgb(129, 129, 129);
}

#dot-button {
  border-radius: 100px;
  border-color: #ccc;
  margin-top: 12px;
  margin-right: 7px;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  transform: translateY(-30%);
}

#dot-button strong {
  display: block;
  margin-top: -9px;
  margin-left: -3px;
}

#button-d {
  width: 70px;
}

h5 {
  font-size: 14px;
}

#showAll-button {
  width: 100%;
  margin-top: 60px;
}
</style>
