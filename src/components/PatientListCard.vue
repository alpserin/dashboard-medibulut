<template>
  <div class="patient-list-card">
    <div class="header">
      <div class="header-left">
        <font-awesome-icon :icon="['far', 'user']" size="lg" class="icon" />

        <div>
          <h2 class="card-title">Hasta Listesi</h2>
          <h5 class="patientCount">{{ patientCount }} Hasta</h5>
        </div>
      </div>

      <button @click="addNewPatient" class="add-button">
        <font-awesome-icon :icon="['fas', 'plus']" />
        Yeni Hasta
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
          placeholder="Hasta ara..."
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
            <h5>{{ patient.first_name }} {{ patient.last_name }}</h5>
            <p>{{ patient.phone }}</p>
          </div>
        </div>

        <div class="patient-separator"></div>
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
  margin-top: 9px;
}

.patient-separator {
  height: 1px;
  background-color: #ccc;
  margin: 5px 0;
}

.patientCount {
  font-size: 14px;
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
  border-radius: 8px;
  width: 100px;
  height: 40px;
}

h5 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 1px;
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
  width: 33px;
  height: 33px;
  border-radius: 20px;
  margin-right: 8px;
  margin-top: 2px;
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
