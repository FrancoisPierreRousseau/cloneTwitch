<template>
  <nav id="nav" class="navbar">
    <div class="navbar__left">
      <img class="navbar__leftLogo"
           src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
           alt="twitch logo">
      <ul>
        <li>
          <RouterLink to="/">Top Gamer</RouterLink>
          <RouterLink to="/topStream">Top Streams</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="scss" scoped>

//ok
.navbar {
  height: 5rem;
  border-bottom: 1px solid black;
  z-index: 100;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #18181b;


  &__left {
    display: flex;
    align-items: center;
    flex: 1;

    & > ul > li > a {
      display: inline-block;
      padding: 1rem 1rem;
      font-size: 18px;
      text-decoration: none;
      color: white;

      &:hover {
        color: #a970ff;
      }
    }


    & > h2 {
      margin: 15px;
    }

    & > svg {
      margin-left: 15px;
    }
  }

  &__leftLogo {
    object-fit: contain;
    height: 3rem;
    margin-left: 20px;
  }
}


</style>