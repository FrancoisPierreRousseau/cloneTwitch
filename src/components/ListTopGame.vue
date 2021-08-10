<template>
  <div class="top">
    <div class="top__game">
      <h1>{{ h1 }}</h1>
      <div class="top__games">
        <Game
            v-for='topGame in listOfTop' :key="topGame.id"
            :name="topGame.name"
            :avatar="topGame.boxArtUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Game from "@/components/Game";

export default {
  name: "ListTopGame",
  props: {
    h1: String,
    getTop: Promise
  },
  components: {Game},
  data: function () {
    return {
      listOfTop: [],
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
          name: data.data[key].name,
          boxArtUrl: data.data[key].box_art_url.replace('{width}', '100').replace('{height}', '150'),
        })
      }
      this.listOfTop = [...this.listOfTop, ...dataListOfTop];
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

  &__games {
    display: flex;
    flex-flow: row wrap;
    height: 100%;
  }


  &__game {
    margin-left: 40px;

    & > h1 {
      margin: 0;
      padding-bottom: 5rem;
      padding-top: 2em;
    }
  }
}
</style>