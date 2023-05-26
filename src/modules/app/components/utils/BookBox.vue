<template>
  <div @click="openModal(book._id)" class="box">
    <div class="box-img">
      <img :src="book.cover" alt="" srcset="" />
    </div>

    <div class="box-info">
      <div class="stars">
        <strong style="font-size: 10px; margin-right: 4px">4.4</strong>
        <svg
          style="margin-right: 5px"
          width="10"
          height="10"
          viewBox="0 0 576 512"
        >
          <path
            fill="#efba0f"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          ></path>
        </svg>

        <span style="font-size: 10px; opacity: 0.6">(176)</span>
      </div>
      <div class="title">{{ book.title }}</div>
      <div class="by">{{ book.createdBy.username }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookBox",
  props: {
    book: Object,
  },
  methods: {
    openModal(id) {
      this.$store.dispatch("actionsSetModals", {
        name: "moreinfobook",
        id
      })
    }
  }
};
</script>

<style scoped>
.box {
  position: relative;
  box-sizing: border-box;
  background-color: var(--search-background);
  color: var(--search-color);
  width: 10rem;
  max-height: 16rem;
  float: left;
  margin-right: 16px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.box:hover {
  color: var(--color-link);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.box-img {
  width: 100%;
  height: 150px;
}
.box-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.box-info {
  box-sizing: border-box;
  padding: 12px;
}
.box-info .title {
  font-size: 1rem;
  max-height: 4.375rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 600;
}
.box-info .by {
  font-size: 0.75rem;
  color: #707780;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 414px) {
  .box {
 width: 46%;
    margin-right: 12px;
  }
}
</style>