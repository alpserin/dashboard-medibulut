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
    TopBar,
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

      showAddPatient: false,
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
  methods: {
    toggleAddPatient() {
      this.showAddPatient = !this.showAddPatient;
    },
  },
};
</script>

<template>
  <div class="dashboard">
    <div id="app" class="app">
      <div class="row">
        <div id="patient-list-card" class="col-md-3">
          <div v-show="showAddPatient" class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >First Name</span
            >
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <PatientListCard
            :patients="patientsData.data"
            :patientCount="patientCount"
            @toggle-add-patient="toggleAddPatient"
          />
        </div>
        <div class="col-md-9">
          <div class="right-side">
            <div class="campaign">
              <TopBar />
            </div>

            <div class="fast-access">
              <h5 class="fast-access-text">Fast Access</h5>
              <div>
                <button type="button" class="btn btn-light">
                  <font-awesome-icon :icon="['fas', 'shapes']" />
                  <strong>Layout</strong>
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
                <div class="treatment-card">
                  <div class="pie-chart">
                    <highcharts :options="pieChartOptions"></highcharts>
                  </div>
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
  min-height: 100vh;
  height: 100%;
}

.row {
  background-color: rgb(242, 244, 248);
  min-height: 100vh;
  height: 100%;
}

.right-side {
  display: block;
  justify-content: space-around;
  margin-left: 120px;
}

#card {
  width: 440px;
  background-color: white;
  height: 470px;
  padding: 20px;
  overflow-y: auto;
}

.top-cards {
  display: flex;
}

.bottom-cards {
  display: flex;
}

.fast-access {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  margin-left: 8px;
  margin-top: 18px;
}

.fast-access-text {
  font-size: 24px;
  font-weight: 700;
}

strong {
  font-weight: 600;
  margin-left: 6px;
}

.col-md-6 {
  border-radius: 8px;
  width: 500px;
  margin: 10px;
}

.treatment-card {
  overflow-x: hidden;
  overflow-y: hidden;
  width: 400px;
  padding: 0;
}

.pie-chart {
  width: 427px;
  transform: translateX(-3%);
  height: 380px;
  margin: 0;
}
</style>
