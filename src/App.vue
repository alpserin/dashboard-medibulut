<script>
import TopBar from "./components/TopBar.vue";
import AnnouncementCard from "./components/AnnouncementCard.vue";
import AnnouncementService from "./services/AnnouncementService.js";
import PatientListCard from "./components/PatientListCard.vue";
import PatientListService from "./services/PatientListService.js";
import ControlService from "./services/ControlService.js";
import ControlCard from "./components/ControlCard.vue";
import TreatmentService from "./services/TreatmentService.js";
import CalendarCard from "./components/CalendarCard.vue";
import CalendarService from "./services/CalendarService.js";
import { Chart } from "highcharts-vue";
import { pieChartOptions } from "./pieChartOptions.js";

export default {
  components: {
    PatientListCard,
    AnnouncementCard,
    ControlCard,
    CalendarCard,
    highcharts: Chart,
  },
  data() {
    return {
      patientsData: { data: [] },
      patientCount: 0,

      announcementsData: { data: [] },
      announcementCount: 0,

      controlsData: { data: [] },
      controlCount: 0,

      calendarData: { data: [] },
      calendarCount: 0,

      pieChartOptions: pieChartOptions,
    };
  },

  created() {
    AnnouncementService.getAnnouncements().then((response) => {
      this.announcementsData = response.data;
      this.announcementCount = this.announcementsData.data.length;
      console.log(this.announcementCount);
    });
    PatientListService.getPatientList().then((response) => {
      this.patientsData = response;
      this.patientCount = this.patientsData.data.length;
    });
    ControlService.getControlList().then((response) => {
      this.controlsData = response.data;
      this.controlCount = this.controlsData.data.length;
    });
    TreatmentService.getTreatments().then((response) => {
      const newData = response.data.data;
      console.log(response.data);

      const transformedData = newData.map((item) => ({
        name: item.title,
        y: item.count,
      }));
      this.pieChartOptions.series[0].data = transformedData;
    });
    CalendarService.getCalendar().then((response) => {
      this.calendarData = response.data;
      this.calendarCount = this.calendarData.data.length;
    });
  },
};
</script>

<template>
  <div class="dashboard">
    <div id="app" class="app">
      <TopBar />

      <div class="row">
        <div id="patient-list-card" class="col-md-3">
          <PatientListCard
            :patients="patientsData.data"
            :patientCount="patientCount"
          />
        </div>
        <div class="col-md-9">
          <div class="right-side">
            <div class="campaign">
              <div>
                <font-awesome-icon
                  :icon="['fas', 'bolt']"
                  style="color: #2257b2"
                />Kampanya için son 10 gün!
              </div>
              <button class="btn btn-primary">Detay</button>
            </div>

            <div class="fast-access">
              <h5>Hızlı Erişim</h5>
              <div>
                <button type="button" class="btn btn-light">
                  <font-awesome-icon :icon="['fas', 'shapes']" />
                  Düzen
                </button>
              </div>
            </div>

            <div class="top-cards">
              <div id="card" class="col-md-6">
                <ControlCard
                  :patientCount="controlCount"
                  :patients="controlsData.data"
                />
              </div>

              <div id="card" class="col-md-6">
                <AnnouncementCard
                  :announcements="announcementsData.data"
                  :announcementCount="announcementCount"
                />
              </div>
            </div>

            <div class="bottom-cards">
              <div id="card" class="col-md-6">
                <div class="pie-chart">
                  <highcharts :options="pieChartOptions"></highcharts>
                </div>
              </div>

              <div id="card" class="col-md-6">
                <CalendarCard
                  :calendar="calendarData.data"
                  :calendarCount="calendarCount"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  overflow-x: hidden;
}

.row {
  background-color: rgb(242, 244, 248);
}

.right-side {
  display: block;
  justify-content: space-around;
  margin-left: 50px;
}

#card {
  width: 440px;
  background-color: white;
  height: 430px;
  padding: 20px;
  overflow-y: auto;
}

.top-cards {
  display: flex;
}

.bottom-cards {
  display: flex;
}

.campaign {
  background-color: white;
  padding: 7px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 8px;
}

.fast-access {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  margin-left: 8px;
  margin-top: 8px;
}

#layout-button {
  background-color: rgb(242, 244, 248);
  border-radius: 10px;
  border-color: rgb(114, 114, 114);
}

.col-md-6 {
  border-radius: 8px;
  width: 500px;
  margin: 10px;
}

.pie-chart {
  width: 430px;
}
</style>
