<script>
import axios, { HttpStatusCode } from 'axios';

  export default{
    name: 'MainApp',
    data(){
      return{
        arrayProjects: []
      }
    },
    methods: {
      getProjects(){

        axios.get( 'http://127.0.0.1:8000/api/test' )
        .then( res => {
          console.log( res.data.projects )

          this.arrayProjects = res.data.projects
        })

      }
    },
    mounted(){
      this.getProjects()
    }
  }
</script>

<template>

  <main>
    <h3>I progetti:</h3>

    <ul>
      <li v-for="(element, index) in arrayProjects" :key="element.id">
        <a href="#">{{ element.name }}</a>
      </li>
    </ul>
  </main>

</template>

<style scoped>
  ul{
    list-style-type: none;
  }
</style>
