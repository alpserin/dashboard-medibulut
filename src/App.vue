<script>
import TopBar from "./components/TopBar.vue";
import Card from "./components/Card.vue";
import AnnouncementCard from "./components/AnnouncementCard.vue";
import AnnouncementService from "./services/AnnouncementService.js";
import PatientListCard from "./components/PatientListCard.vue";
import PatientListService from "./services/PatientListService.js";

export default {
  components: {
    PatientListCard,
    Card,
    AnnouncementCard,
  },
  data() {
    return {
      patientsData: { data: [] },
      announcementsData: { data: [] },
      controlsData: [],
      calendarData: [],
      treatmentData: [],
      patientCount: 0,
    };
  },
  created() {
    AnnouncementService.getAnnouncements().then((response) => {
      this.announcementsData = response.data;
    });
    PatientListService.getPatientList().then((response) => {
      this.patientsData = response;
      this.patientCount = this.patientsData.data.length;
    });
  },
};
</script>

<template>
  <div id="app">
    <TopBar />
    <div class="container mt-4">
      <div class="row">
        <div id="patient-list" class="col-md-3">
          <PatientListCard
            :patients="patientsData.data"
            :patientCount="patientCount"
          />
        </div>
        <div class="col-md-9">
          <div class="campaign">
            <div>
              <font-awesome-icon
                :icon="['fas', 'bolt']"
                style="color: #2257b2"
              />Kampanya için son 10 gün!
            </div>
            <button class="btn btn-primary">Detay</button>
          </div>

          <div class="row">
            <div class="col-md-6">
              <Card title="Kontrol Tarihi Yaklaşan Hastalar" />
            </div>

            <div class="col-md-6">
              <AnnouncementCard :announcements="announcementsData.data" />
            </div>

            <div class="col-md-6">
              <Card title="Tedaviler" :data="treatmentData" />
            </div>

            <div class="col-md-6">
              <Card title="Ajanda" :data="calendarData" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html {
  background-color: #e6e6e6;
}
.dashboard-content {
  display: flex;
}

.left-content {
  width: 25%;
}

.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.top-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;
}

.bottom-right {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
}

.card {
  padding: 20px;
  margin: 0;
  width: calc(60%);
  height: 300px;
  overflow-y: auto; /* Add a scrollbar for overflow content */
}

.campaign {
  padding: 7px;
  display: flex;
  border-radius: 5px;
  border-color: black;
  border-width: 1px;
  border-style: groove;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  /*d-flex justify-content-between align-items-center mb-3 */
}
</style>
