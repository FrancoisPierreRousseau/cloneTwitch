<template>
  <div class="streamer">
    <router-link class="streamer__link" :to="`/stream/${user_id}`">
      <div class="streamer__thumbnailContainer">
        <img :src="thumbnail_url" alt="">
      </div>
      <div class="streamer__description">
        <span class="streamer__title"><strong>{{ streamTitle }}</strong></span>
        <span class="streamer__username">Streamer name: {{ user_name }}</span>
        <span class="streamer__viewerCount">Viewers: {{ viewer_count }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Streamer",
  props: {
    streamTitle: String,
    thumbnail_url: String,
    user_name: String,
    viewer_count: {
      type: Number
    },
    user_id: String
  }
}
</script>

<style lang="scss" scoped>
.streamer {
  flex-basis: 50%;
  padding: 7px;
  margin-bottom: 7px;
  overflow: hidden;

  &__thumbnailContainer {
    width: 100%;
  }

  &__description span {
    display: block;
  }
}
</style>