<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <h5>FOLLOW CHANNELS</h5>
      <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/69e324f6-fc7d-4131-89ed-227a955637cf-profile_image-70x70.png"
          name='Gotage'
          follower='810k'/>
      <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/70d90ec14808c95f-profile_image-70x70.png"
               name='Lockclear'
               follower='900k'/>

      <h5>RECOMMENDED CHANNELS</h5>
      <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/21d8988f-87b4-4a6b-a63a-f87d30624031-profile_image-70x70.png"
          name='Jacquie'
          follower='100k'/>
      <p class="sidebar__topShowMore">Show more</p>
    </div>
    <div class="sidebar__bottom">
      <div class="sidebar__bottomContainer">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search to add friend">
      </div>
    </div>
  </div>
</template>

<script>


import Channel from "@/components/Channel";

export default {
  name: "Sidebar",
  components: {Channel},
}
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 10px;
  width: 13%;
  background-color: #1f1f23;
  display: flex;
  flex-direction: column;

  &__top {
    flex: 1;

    & > h5 {
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }

  &__topShowMore {
    color: #a970ff;
    cursor: pointer;
  }

  &__bottom {
    position: fixed;
    bottom: 0;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #4f4f52;

    & > div > input {
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 0.6rem;
      width: 100%;
      margin-left: 3px;
    }
  }

  &__bottomContainer {
    background-color: #4f4f52;
    width: 90%;
    display: flex;
    height: 2.5rem;
    border-radius: 8px;
    align-items: center;
    padding-left: 10px;
    padding-right: 5px;
  }
}


</style>