<template>
  <div id="app">
    <NavBar/>
    <div class="app">
      <Sidebar/>
      <div class="body">
        <div class="body--left">
          <router-view :key="$route.path"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  color: white;
}

* {
  margin: 0;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: "Source Code Pro", sans-serif;
}

.app {
  display: flex;
}

.body {
  background-color: #0e0e10;
  flex: 1;
  display: flex;
  height: 100vh;
  overflow: scroll;
}

.body--left {
  width: 100%;
  height: 100%;
}

#twitch-embed iframe{
  height: 500px !important;
}

</style>

<script>
import NavBar from "@/components/layouts/NavBar";
import Sidebar from "@/components/layouts/Sidebar";

export default {
  components: {Sidebar, NavBar}
}
</script>