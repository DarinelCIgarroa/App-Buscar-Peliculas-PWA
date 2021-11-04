const app = Vue.createApp({
    data(){
        return{
            title: "Search Movie Vue",
            movie: [],
            movieSearch: "",
            loadingSearch: false
        }
    },
    created(){
        this.getMovie();
    },
    methods:{
      async getMovie(){
          this.loadingSearch = true;
          const movie = this.movieSearch.toLowerCase().replace(/ /g, '+');
          const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=6228b970`);
          const movieData = await response.json();
          this.movie = movieData;
          this.loadingSearch = false;
      },
    }
})