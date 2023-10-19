<template>
  <div class="patient-list-card">
    <div class="header">
      <font-awesome-icon :icon="['far', 'user']" />

      <div>
        <h2>Hasta Listesi</h2>
        <h5>{{ patientCount }} Hasta</h5>
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
.header {
  display: flex;
  justify-content: space-between;
}

h2 {
  font-size: 24px;
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
.patient-list-card {
  background-color: #f2f2f2;
  padding: 20px;
  height: 430px;
}
.patient-list {
  height: 300px;
  max-height: 100%;
  min-height: 0;
  font-size: 10px;
  overflow-y: auto;
}

h5 {
  font-size: 14px;
}

.patient {
  display: flex;
}

.patient-photo {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
</style>
