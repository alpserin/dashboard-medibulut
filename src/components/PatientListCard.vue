<template>
  <div class="patient-list-card">
    <div class="header">
      <div class="header-left">
        <font-awesome-icon :icon="['far', 'user']" size="lg" class="icon" />

        <div>
          <h2 class="card-title">Patient List</h2>
          <h5 class="patientCount">{{ patientCount }} Patients</h5>
        </div>
      </div>

      <button @click="addNewPatient()" class="add-button">
        <font-awesome-icon :icon="['fas', 'plus']" />
        New Patient
      </button>
    </div>
    <hr />

    <div class="patient-search">
      <div class="search-bar">
        <font-awesome-icon
          :icon="['fas', 'magnifying-glass']"
          style="color: #878787"
          class="search-icon"
        />
        <input
          type="text"
          placeholder="Search for a patient"
          v-model="searchTerm"
          class="search-input"
        />
      </div>
    </div>

    <div class="patient-list">
      <div
        v-for="patient in patients"
        :key="patient.first_name + patient.last_name"
        class="patient"
      >
        <div class="patient-container">
          <img
            :src="patient.photo_url"
            alt="Patient Photo"
            class="patient-photo"
          />
          <div class="patient-info">
            <h5 class="patient-name">
              {{ patient.first_name }} {{ patient.last_name }}
            </h5>
            <p class="patient-phone">{{ patient.phone }}</p>
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
    patientCount: Number,
  },
  methods: {
    addNewPatient() {
      this.$emit("toggle-add-patient");
    },
  },
};
</script>

<style scoped>
.patient-list-card {
  background-color: #ffffff;
  padding: 20px;
  height: 580px;
  width: 440px;
  margin-right: 60px;
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

.card-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 3px;
}

.patient-list {
  height: 380px;
  max-height: 100%;
  min-height: 0;
  font-size: 10px;
  overflow-y: auto;
}

.patient-container {
  display: flex;
  margin-top: 7px;
}

.patientCount {
  font-size: 14px;
  font-weight: 400;
  margin: 1px;
  color: rgb(112, 112, 112);
}

.add-button {
  font-size: 12px;
  background-color: rgb(30, 33, 33);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  width: 100px;
  height: 40px;
}

.add-button:hover {
  background-color: rgb(71, 71, 71);
}

.add-button:active {
  background-color: rgb(13, 42, 158);
}

.patient-name {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 0px;
}

.patient-phone {
  font-size: 13px;
}

.patient {
  display: flex;
  height: 55px;
  border-bottom: 1px solid #ccc;
}

.patient hr {
  padding-bottom: 15px;
}

.patient-photo {
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-right: 8px;
  margin-top: 3px;
}

.search-input {
  border-radius: 5px;
  border-color: rgb(223, 223, 223);
  border-width: 1px;
  background-color: rgb(246, 246, 246);
  width: 100%;
  padding-left: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 0px;
}

.search-bar {
  position: relative;
  margin-bottom: 15px;
  margin-left: 3px;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.search-input::placeholder {
  text-align: left;
}
</style>
