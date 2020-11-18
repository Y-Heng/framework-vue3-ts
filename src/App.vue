<!--
 * @Descripttion:
 * @version:
 * @Author: kurumi
 * @Date: 2020-10-20 10:37:54
 * @LastEditors: kurumi
 * @LastEditTime: 2020-11-18 18:31:12
-->
<template>
  <div id="nav">
    <router-link to="/">
      {{ x }}
    </router-link>
    |
    <router-link to="/about">
      About
    </router-link>
  </div>
  <vue-particles color="#dedede" :particle-opacity="0.7" :particles-number="80" shape-type="circle" :particle-size="4" lines-color="#dedede" :lines-width="1" :line-linked="true" :line-opacity="0.4" :lines-distance="150" :move-speed="3" :hover-effect="true" hover-mode="grab" :click-effect="true" click-mode="push" />
  <router-view />
</template>

<script lang="ts">
import { ref } from 'vue'
import { Options, Vue } from 'vue-class-component'
import VueParticles from 'vue-particles'

@Options({
  components: { VueParticles }
})
export default class Home extends Vue {
  setup() {
    const x = ref('111')
    console.log('setup')
    return { x }
  }
  //
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
