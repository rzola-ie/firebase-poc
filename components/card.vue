<template>
  <div class="card">
    <div class="card-header" v-if="title">
      <h4 class="title">{{ title }}</h4>
      <div class="card-dots">
        <svg
          width="26"
          height="3"
          viewBox="0 0 26 3"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="#D8D8D8" />
          <circle cx="13" cy="1.5" r="1.5" fill="#D8D8D8" />
          <circle cx="24.5" cy="1.5" r="1.5" fill="#D8D8D8" />
        </svg>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  min-height: 500px;
  width: 650px;
  padding: 28px;
  padding: 1rem;
  border-radius: 4px;
  border-radius: 0.25rem;
  background-color: white;
  transition: opacity 200ms ease-in-out;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
}

.card-header {
  margin-bottom: 1rem;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #009ee3;

  margin: 0;
  line-height: 0.8;
}
</style>