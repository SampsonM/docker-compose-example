<template>
  <div id="app">
    ey, {{ data }}

    <div>
      <input type="text" v-model="URL">
      <button @click="addURL">Get URL Shortened</button>
    </div>

    <ul>
      <li 
        v-for="(url, i) in allURLs"
        :key="i">
        {{ url }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      URL: '',
      allURLs: [],
      data: 'enter a url to shorten'
    }
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost:3031/')
      const allURLs = await response.json()
    
      this.allURLs = allURLs
    
    } catch (error) {
      this.data = "Couldn't get all URL's"
    }
  },
  methods: {
    async addURL() {
      try {
        this.data = 'getting shortend URL'

        const requestData = {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: this.URL })
        }

        const response = await fetch('http://localhost:3031/', requestData)
        const data = await response.json()

        if (data.URLs) {
          this.allURLs = data.URLs
        }

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
