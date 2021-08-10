<template>
  <div class="channel">
    <div class="channel__details">
      <img v-bind:src="avatar" alt="img channel">
      <p>{{ name }}</p>
    </div>
    <p>{{ follower }}</p>
  </div>
</template>

<script>
export default {
  name: 'Channel',
  props: {
    avatar: String,
    name: String,
    follower: String
  }
}
</script>

<style lang="scss" scoped>
.channel {
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;

  &:hover {
    background-color: #25252c;
  }

  &__details {
    display: flex;
    align-items: center;
  }

  & > div > img {
    object-fit: contain;
    margin-right: 5px;
    width: 40px;
    border-radius: 50%;
  }
}

</style>