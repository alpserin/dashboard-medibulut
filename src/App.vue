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
.row {
  background-color: rgb(242, 244, 248);
}

.right-side {
  display: block;
  justify-content: space-around;
  margin-left: 50px;
}

#card {
  width: 400px;
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
  margin-bottom: 10px;
  margin-left: 8px;
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
