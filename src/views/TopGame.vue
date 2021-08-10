<template>
  <ListTopGame
      h1="Top Game"
      :get-top="getTopGames"
  />
</template>

<script>
import {RepositoryFactory} from "@/api/RepositoryFactory";
import ListTopGame from "@/components/ListTopGame";

const GameRepository = RepositoryFactory.get('games');

export default {
  name: "TopGame",
  components: {ListTopGame},
  data: function () {
    return {
      getTopGames: GameRepository.getTopGame(30)
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  background-color: #0e0e10;
  height: 100%;
  text-align: center;
  width: 100%;

  .active {
    color: #a970ff;
    border-bottom: 5px solid #a970ff;
    padding-bottom: 10px;
  }

  &__recentItems {
    display: flex;
    flex-flow: row wrap;
    height: 100%;
  }


  &__recent {
    margin-left: 40px;

    & > h1 {
      margin: 0;
      padding-bottom: 5rem;
      padding-top: 2em;
    }
  }
}
</style>