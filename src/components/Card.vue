<template>
  <div class="card">
    <div class="card-body">
      <h2>{{ cardHeader }}</h2>
      <h5>{{ cardSubHeader }}</h5>
      <v-if cardHeaderButton>
        <button
          id="button-d"
          type="button"
          class="btn btn-outline-secondary"
          disabled
        >
          {{ cardHeaderButton }}
        </button>
      </v-if>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardHeader: String,
    cardSubHeader: String,
    cardHeaderButton: {
      type: Boolean,
      default: false,
    },
    cardIcon: String,
    cardColor: String,
  },
};
</script>

<style scoped></style>
