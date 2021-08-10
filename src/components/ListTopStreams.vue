<template>
  <div class="top">
    <div class="top__game">
      <h1>{{ h1 }}</h1>
      <div class="top__streams">
        <Streamer
            v-for='topStream in listTopStream' :key="topStream.id"
            :stream-title="topStream.stream_title"
            :thumbnail_url="topStream.thumbnail_url.replace('{width}', '301').replace('{height}', '201')"
            :user_name="topStream.user_name"
            :viewer_count="topStream.viewer_count"
            :user_id="topStream.user_id"
        />
      </div>
    </div>
  </div>
</template>

<script>

import Streamer from "@/components/Streamer";

export default {
  name: "ListTopStreams",
  props: {
    h1: String,
    getTop: Promise
  },
  components: {Streamer},
  data: function () {
    return {
      listTopStream: [],
      topFunction: Function
    }
  },
  methods: {
    async fetchTop() {
      const {data} = await this.getTop;

      let dataListOfTop = [];
      for (const key in data.data) {
        dataListOfTop.push({
          id: data.data[key].id,
          user_id: data.data[key].user_id,
          user_name: data.data[key].user_name,
          game_id: data.data[key].game_id,
          stream_title: data.data[key].stream_title,
          viewer_count: data.data[key].viewer_count,
          thumbnail_url: data.data[key].thumbnail_url,
        })
      }
      this.listTopStream = [...this.listTopStream, ...dataListOfTop];
    },
  },
  mounted() {
    this.fetchTop();
  }
}
</script>

<style lang="scss">
.top {
  background-color: #0e0e10;
  height: 100%;
  text-align: center;
  width: 100%;

  .active {
    color: #a970ff;
    border-bottom: 5px solid #a970ff;
    padding-bottom: 10px;
  }

  &__streams {
    display: flex;
    flex-flow: row wrap;
    height: 100%;
  }
}
</style>