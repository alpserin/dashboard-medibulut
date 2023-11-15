<template>
  <div class="control-card">
    <div class="header">
      <font-awesome-icon :icon="['far', 'calendar']" size="xl" class="icon" />
      <div>
        <div class="title-container">
          <h2 class="title">Patients with Approaching Control Dates</h2>
          <h5 class="count">{{ patientCount }} Patients</h5>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="patient-list">
        <div
          v-for="patient in patients"
          :key="patient.first_name + patient.last_name"
        >
          <div class="patient">
            <div class="patient-container">
              <img
                :src="patient.photo_url"
                alt="Patient Photo"
                class="patient-photo"
              />
              <div class="v">
                <h5 class="patient-name">
                  {{ patient.first_name }} {{ patient.last_name }}
                </h5>
                <p class="patient-phone">{{ patient.phone }}</p>
              </div>
            </div>
            <hr />
            <div>
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
    <div class="show-container">
      <button id="showAll-button" type="button" class="btn btn-primary">
        Show All
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    patients: Array,
    patientCount: Number,
  },
};
</script>

<style scoped>
.control-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-body {
  flex: 1;
  overflow-y: auto;
  max-height: 400px; /* Set a fixed height for the card-body */
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

.patient-list {
  overflow-y: auto;
}

.patient {
  display: flex;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
}

.patient-container {
  display: flex;
  margin-left: 0px;
  margin-top: 0px;
}

.patient-photo {
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-right: 7px;
  margin-top: 12px;
}

.patient-name {
  font-size: 17px;
  font-weight: 700;
  margin-top: 9px;
  margin-bottom: 0;
}

.patient-phone {
  font-size: 13px;
  margin-bottom: 10px;
}

#dot-button {
  border-radius: 100px;
  border-color: #ccc;
  margin-top: 12px;
  vertical-align: middle;
  width: 30px;
  height: 30px;
}

#dot-button strong {
  display: block;
  margin-top: -9px;
  margin-left: -3px;
}

.show-container {
  margin-top: auto;
}

#showAll-button {
  width: 100%;
}
</style>
