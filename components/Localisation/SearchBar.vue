<template>
  <div class="search-container">
    <div class="search-bar-container">
      <input 
        v-model="searchQuery" 
        @input="handleInput" 
        @keyup.enter="validateInput"
        class="search-bar"
        placeholder="Search an address..." 
      />
      <button @click="validateInput" class="search-button" :disabled='isDisabled'>Search</button>
    </div>
      <ul v-if="showSuggestions && suggestions.length > 0" class="search-list">
        <li v-for="suggestion in suggestions" :key="suggestion.properties.id" @click="selectSuggestion(suggestion)" class="search-list-item">
          {{ suggestion.properties.label }}
        </li>
      </ul>
    <p class="search-description" :class="{ 'is-disabled': !isDisabled }">Please type at least 4 characters.</p>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    name: 'SearchBar',
    data() {
      return {
        data: null,
        query: this.$route.query.search,
        searchQuery: '',
        showSuggestions: false,
        suggestions: [],
      };
    },
    watch: {
      '$route.query': '$fetch',
      deep: true,
      immediate: true
    },
    computed: {
      isDisabled() {
        this.showSuggestions = false;
        return this.searchQuery.length <= 3 == true
      },
    },
      methods: {
      async handleInput() {
        if (this.searchQuery.length > 3) {
 
        try {
          const response = await axios.get('/api/', {
            params: {
              q: this.searchQuery,
              limit: 5,
            },
          });
  
          this.suggestions = response.data.features;
          this.showSuggestions = true;
        } catch (error) {
          console.error('Error:', error);
        }
      }
      },
      selectSuggestion(data) {
        this.$router.push({ path: '/', query: {search: data.properties.label, lat: data.geometry.coordinates[0], lon:data.geometry.coordinates[1] }})
        this.showSuggestions = false;
      },
      validateInput() {
        this.$router.push({ path: '/', query: {search: this.searchQuery}})
        this.$store.commit('setStoredData', this.suggestions);
        localStorage.setItem('fetchedData', JSON.stringify(this.suggestions));
        this.showSuggestions = false;
    },
      },
      async fetch() {
          try {
            const response = await axios.get('/api/', {
              params: {
                q: this.$route.query.search,
                limit: 5,
              },
            });

            const responseData = response.data.features;
            this.$store.commit('setStoredData', responseData);
            localStorage.setItem('fetchedData', JSON.stringify(responseData));

          } catch (error) {
            console.error('Error:', error);
            return { storedData: [] };
          }
        },
    };
</script>
  
<style>
  .search-container {
    width: 100%;
  }

  .search-bar-container {
    display: flex;
    justify-content: space-between;
    padding: 0.5em 0.5em 0 0.5em;
  }

  .search-bar {
    border: 2px dotted #b8e0b8;
    border-right: none;
    border-radius: 1em 0 0 1em;
    padding: 1.5em;
    width: 70%;
  }

  .search-button {
    background-color: #b8e0b8;
    border: 2px dotted #b8e0b8;
    border-left: none;
    border-radius: 0 1em 1em 0;
    flex-grow: 1;
  }

  .search-description {
    color: grey;
    margin: 1em 0;
    text-align: center;
  }

  .search-description :disabled{
    display: none;
  }

  .search-list {
    background-color: whitesmoke;
    border-radius: 0.2em;
    list-style: none;
    margin: -0.5em 0 1em 0.5em;
    padding: 0.5em;
    width: 60%;
  }

  .search-list-item {
    background-color: white;
    border-radius: 0.2em;
    margin: 0.3em;
    padding: 0.8em;
  }

  .is-disabled {
    display: none;
  }
</style>