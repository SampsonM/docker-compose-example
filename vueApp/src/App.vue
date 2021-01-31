<template>
  <div id="app">
    ey, {{ data }}

    <form
      class="search"
      @submit.prevent="addURL">
      <input type="text" v-model="URL">
      <button type="submit">Get URL Shortened</button>
    </form>

    <table>
      <tr>
        <th>Original URL</th>
        <th>Shortened URL</th>
      </tr>
      <tr
        v-for="(urlData, i) in allURLData"
        :key="i">
        <td>{{ urlData.URL }}</td>
        <td>{{ urlData.shortURL }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      URL: '',
      allURLData: [],
      data: 'enter a url to shorten'
    }
  },
  async mounted() {
    this.getURLs()
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

        this.URL = ''

        const response = await fetch('http://localhost:3031/', requestData)
        const data = await response.json()

        if (data.URLs) {
          this.allURLData = data.URLs
        }

        this.data = 'Your new shortened URL: ' + data.url.shortURL

      } catch (error) {
        this.data = error
      }
    },
    async getURLs() {
      try {
        const response = await fetch('http://localhost:3031/')
        const allURLData = await response.json()
      
        this.allURLData = allURLData
      
      } catch (error) {
        this.data = "Couldn't get all URL's"
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

.search {
  margin: 10px 0;
}

.search input {
  margin-right: 10px;
}

table {
  text-align: left;
}

th { 
  min-width: 300px;
}

td {
  padding-right: 15px;
}
</style>
