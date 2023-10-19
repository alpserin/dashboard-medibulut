<template>
  <div class="patient-list-card">
    <div class="header">
      <div class="header-left">
        <font-awesome-icon :icon="['far', 'user']" size="lg" class="icon" />

        <div>
          <h2>Hasta Listesi</h2>
          <h5 class="patientCount">{{ patientCount }} Hasta</h5>
        </div>
      </div>

      <button @click="addNewPatient" class="add-button">
        <font-awesome-icon :icon="['fas', 'plus']" />
        Yeni Hasta
      </button>
    </div>
    <hr />
    <div class="patient-list">
      <div
        v-for="patient in patients"
        :key="patient.first_name + patient.last_name"
        class="patient"
      >
        <img
          :src="patient.photo_url"
          alt="Patient Photo"
          class="patient-photo"
        />
        <div class="patient-info">
          <h5>{{ patient.first_name }} {{ patient.last_name }}</h5>
          <p>{{ patient.phone }}</p>
          <hr />
        </div>
      </div>
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
.patient-list-card {
  background-color: #ffffff;
  padding: 20px;
  height: 560px;
  width: 400px;
  margin-right: 60px;
}

.patient-list {
  height: 380px;
  max-height: 100%;
  min-height: 0;
  font-size: 10px;
  overflow-y: auto;
}

.header {
  display: flex;
  justify-content: space-between;
}

.header-left {
  display: flex;
}

.icon {
  margin-top: 8px;
  margin-left: 5px;
  margin-right: 10px;
}

h2 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 3px;
}

.patientCount {
  font-size: 13px;
  font-weight: 400;
  margin: 0px;
}

.add-button {
  font-size: 12px;
  background-color: rgb(30, 33, 33);
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  width: 100px;
  height: 40px;
}

h5 {
  font-size: 15px;
  font-weight: 700;
}

.patient {
  display: flex;
  height: 55px;
  margin-top: 1px;
}

.patient-photo {
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-right: 8px;
  margin-top: 3px;
}
</style>
