<template>
  <div class="streamer">
    <div class="streamer__heading">
      <h1>{{ this.streamTitle }}</h1>
    </div>

    <div id="twitch-embed"></div>

    <div id="twitch_embed_script_link"></div>
  </div>
</template>

<script src="https://embed.twitch.tv/embed/v1.js"></script>
<script>
import {RepositoryFactory} from "@/api/RepositoryFactory";

const ChannelRepository = RepositoryFactory.get('channels');


export default {
  name: "StreamUser",
  data: function () {
    return {
      streamId: 0,
      streamerName: '',
      gameId: 0,
      gameName: '',
      streamTitle: '',
      streamerViewerCount: 0,
    }
  },
  methods: {
    async fetchBroadCastByUserId() {
      const {data} = await ChannelRepository.getChannelByUserId(this.$route.params.id)
      this.streamId = data.data[0].broadcaster_id;
      this.streamerName = data.data[0].broadcaster_name;
      this.gameId = data.data[0].game_id;
      this.gameName = data.data[0].game_name;
      this.streamTitle = data.data[0].title;
    },
    insertTwitchEmbedScript() {
      let twitchEmbedDiv = document.querySelector('#twitch_embed_script_link');
      let twitch_embed_script = document.createElement('script');
      twitch_embed_script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');

      twitchEmbedDiv.appendChild(twitch_embed_script);
    },
    runTwitchEmbed() {
      const embed = new Twitch.Embed("twitch-embed", {
        width: 854,
        height: 480,
        channel: this.streamerName,
        style: "height: 1000px",
      });
      embed.addEventListener(Twitch.Embed.VIDEO_READY, function () {
        console.log('The video is ready');
      });
      this.$forceUpdate();
    }
  },
  mounted() {
    this.fetchBroadCastByUserId();
    this.insertTwitchEmbedScript();
    setTimeout(() => this.runTwitchEmbed(), 3000)
  }
}

</script>

<style lang="scss" scoped>

.streamer {
  background-color: #0e0e10;
  height: 100%;
  text-align: center;
  width: 100%;

  &__heading {
    margin-left: 40px;

    & > h1 {
      margin: 0;
      padding-bottom: 5rem;
      padding-top: 2em;
      line-height: 3rem;
    }
  }
}
</style>