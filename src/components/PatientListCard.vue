<template>
  <div class="patient-list-card">
    <div class="header">
      <font-awesome-icon :icon="['far', 'user']" />

      <div>
        <h2>Hasta Listesi</h2>
        <h5>{{ patientCount }} Hasta</h5>
        <button @click="addNewPatient" class="add-button">
          <font-awesome-icon :icon="['fas', 'plus']" />
          Yeni Hasta
        </button>
      </div>

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
  </div>
</template>

<script>
export default {
  props: {
    patients: Array,
  },
};
</script>

<style scoped>
.header {
  display: block;
}

.add-button {
  font-size: 12px;
  background-color: rgb(30, 33, 33);
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  width: 130px;
  height: 40px;
}

.patient-list {
  max-height: 100%; /* Make the list scrollable within the fixed height */
  font-size: 10px;
  overflow-y: auto;
}

.patient-list-card {
  background-color: #f2f2f2;
  padding: 20px;
  overflow: hidden; /* Hide overflow content */
  overflow-y: auto;
  height: 430px; /* Set a fixed height for the scrollable area */
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
