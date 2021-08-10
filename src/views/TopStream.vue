<template>
  <ListTopStreams
      h1="Top Streamers"
      :get-top="getTopStream"
  />
</template>

<script>
import {RepositoryFactory} from "@/api/RepositoryFactory";
import ListTopStreams from "@/components/ListTopStreams";

const StreamRepository = RepositoryFactory.get('streams')

export default {
  name: "TopStream",
  components: {ListTopStreams},
  data: function () {
    return {
      getTopStream : StreamRepository.getTopStream(30)
    }
  }
}
</script>

<style scoped>

</style>