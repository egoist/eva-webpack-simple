import EVA from 'eva.js'
import axios from 'axios'
import App from './App'
import Home from './Home'
import Repos from './Repos'

const app = new EVA()

app.model({
  state: {
    repos: [],
    fetching: false
  },
  mutations: {
    FETCH_START(state) {
      state.fetching = true
    },
    FETCH_DONE(state) {
      state.fetching = false
    },
    FETCHED_REPOS(state, repos) {
      state.repos = repos
    }
  },
  actions: {
    fetchRepos({commit}) {
      axios.get('https://api.github.com/users/egoist/repos')
        .then(res => {
          commit('FETCH_START')
          commit('FETCHED_REPOS', res.data)
          commit('FETCH_DONE')
        })
    }
  }
})

app.router(route => [
  route('/', Home),
  route('/repos', Repos)
])

app.start(App, '#app')