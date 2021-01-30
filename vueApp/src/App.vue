<template>
  <div id="app">
    ey, {{ data }}

    <br>
    <br>
    <div>
      <input type="text" v-model="url">
      <button @click="getUrlShort">Get URL Shortened</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      url: '',
      data: 'enter a url to shorten'
    }
  },
  methods: {
    async getUrlShort() {
      try {
        this.data = 'getting shortend URL'

        const response = await fetch(`http://localhost:3031/?url=${this.url}/`)
        const data = await response.json()
        
        this.data = data

      } catch (error) {
        this.data = error
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
