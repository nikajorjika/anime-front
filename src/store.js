import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [ {
      name: 'Kill La Kill',
      plot: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti dignissimos, facere fugit ipsum laborum minima obcaecati possimus quidem, sequi, ullam vitae. Dicta eius eveniet laborum nostrum, placeat saepe unde?',
      starring: [
        'John Doe', 'Jane Doe', 'Janet Doe', 'Julia Roberts'
      ],
      genre: [
        'Fantasy', 'Smart', 'faint', 'stupid'
      ],
      src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
    }, {
      name: 'Kill La Kill',
      plot: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti dignissimos, facere fugit ipsum laborum minima obcaecati possimus quidem, sequi, ullam vitae. Dicta eius eveniet laborum nostrum, placeat saepe unde?',
      starring: [
        'John Doe', 'Jane Doe', 'Janet Doe', 'Julia Roberts'
      ],
      genre: [
        'Fantasy', 'Smart', 'faint', 'stupid'
      ],
      src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
    }, {
      name: 'Kill La Kill',
      plot: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti dignissimos, facere fugit ipsum laborum minima obcaecati possimus quidem, sequi, ullam vitae. Dicta eius eveniet laborum nostrum, placeat saepe unde?',
      starring: [
        'John Doe', 'Jane Doe', 'Janet Doe', 'Julia Roberts'
      ],
      genre: [
        'Fantasy', 'Smart', 'faint', 'stupid'
      ],
      src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
    }, {
      name: 'Kill La Kill',
      plot: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti dignissimos, facere fugit ipsum laborum minima obcaecati possimus quidem, sequi, ullam vitae. Dicta eius eveniet laborum nostrum, placeat saepe unde?',
      starring: [
        'John Doe', 'Jane Doe', 'Janet Doe', 'Julia Roberts'
      ],
      genre: [
        'Fantasy', 'Smart', 'faint', 'stupid'
      ],
      src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
    }, {
      name: 'Kill La Kill',
      plot: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti dignissimos, facere fugit ipsum laborum minima obcaecati possimus quidem, sequi, ullam vitae. Dicta eius eveniet laborum nostrum, placeat saepe unde?',
      starring: [
        'John Doe', 'Jane Doe', 'Janet Doe', 'Julia Roberts'
      ],
      genre: [
        'Fantasy', 'Smart', 'faint', 'stupid'
      ],
      src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
    }, {
      name: 'Kill La Kill',
      plot: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti dignissimos, facere fugit ipsum laborum minima obcaecati possimus quidem, sequi, ullam vitae. Dicta eius eveniet laborum nostrum, placeat saepe unde?',
      starring: [
        'John Doe', 'Jane Doe', 'Janet Doe', 'Julia Roberts'
      ],
      genre: [
        'Fantasy', 'Smart', 'faint', 'stupid'
      ],
      src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
    }, {
      name: 'Kill La Kill',
      plot: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti dignissimos, facere fugit ipsum laborum minima obcaecati possimus quidem, sequi, ullam vitae. Dicta eius eveniet laborum nostrum, placeat saepe unde?',
      starring: [
        'John Doe', 'Jane Doe', 'Janet Doe', 'Julia Roberts'
      ],
      genre: [
        'Fantasy', 'Smart', 'faint', 'stupid'
      ],
      src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
    } ]
  },
  getters: {
    movies: state => {
      return state.movies
    }
  },
  mutations: {},
  actions: {}
})
