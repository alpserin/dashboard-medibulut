<template>
  <div class="control-card">
    <div class="header">
      <font-awesome-icon :icon="['far', 'calendar']" />
      <div>
        <div class="title">
          <h2>Kontrol Tarihi Yaklaşan Hastalar</h2>
        </div>

        <h5>{{ patientCount }} Hasta</h5>
      </div>
    </div>

    <div class="patient-list">
      <hr />
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
        <hr />

        <button
          type="button"
          class="btn btn-outline-secondary"
          disabled
        ></button>
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
.control-card {
  overflow-y: auto;
}
.header {
  display: flex;
}

h2 {
  font-size: 16px;
}
.title {
  font-size: 24px;
}

.patient-list {
  max-height: 100%; /* Make the list scrollable within the fixed height */
  font-size: 10px;
  overflow-y: auto;
}

h5 {
  font-size: 12px;
}

.patient {
  display: flex;
}

.patient-photo {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}

button {
  border-radius: 40px;
  width: 20px;
  height: 20px;
}
</style>
