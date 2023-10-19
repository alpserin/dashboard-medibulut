<script>
import TopBar from "./components/TopBar.vue";
import AnnouncementCard from "./components/AnnouncementCard.vue";
import AnnouncementService from "./services/AnnouncementService.js";
import PatientListCard from "./components/PatientListCard.vue";
import PatientListService from "./services/PatientListService.js";
import ControlService from "./services/ControlService.js";
import ControlCard from "./components/ControlCard.vue";
import TreatmentCard from "./components/TreatmentCard.vue";
import TreatmentService from "./services/TreatmentService.js";
import CalendarCard from "./components/CalendarCard.vue";
import CalendarService from "./services/CalendarService.js";
import PieChart from "./components/PieChart.vue";
import HighchartsVue from "highcharts-vue";
import { Chart } from "highcharts-vue";
import { pieChartOptions } from "./pieChartOptions.js";

export default {
  components: {
    PatientListCard,
    AnnouncementCard,
    ControlCard,
    TreatmentCard,
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
              <ControlCard
                :patientCount="controlCount"
                :patients="controlsData.data"
              />
            </div>

            <div class="col-md-6">
              <AnnouncementCard
                :announcements="announcementsData.data"
                :announcementCount="announcementCount"
              />
            </div>

            <div class="col-md-6">
              <div class="pie-chart">
                <highcharts :options="pieChartOptions"></highcharts>
              </div>
            </div>

            <div class="col-md-6">
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
}

.pie-chart {
}
</style>
