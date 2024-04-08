<script>
import axios, { HttpStatusCode } from 'axios';

  export default{
    name: 'MainApp',
    data(){
      return{
        arrayProjects: [],
        currentProject: '',
        lastProject: '',
      }
    },
    methods: {
      getProjects(projectApiPage){

        axios.get( 'http://127.0.0.1:8000/api/test',
      
          {
            params:{
              page: projectApiPage
            }
          }

      )
        .then( res => {
          console.log( res.data.projects.data )

          this.arrayProjects = res.data.projects.data
          this.currentProject = res.data.project.currentProject
          this.lastProject = res.data.project.lastProject
        })

      }
    },
    mounted(){
      this.getProjects(1)
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

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': currentProject === 1}">
          <button class="page-link" @click="getProjects( currentProject - 1 )">Previous</button>
        </li>

        <li class="page-item" v-for="(element, index) in lastProject" :key="index">
          <button class="page-link" @click="getProjects( element )">{{ element }}</button>
        </li>

        <li class="page-item" :class="{'disabled': currentProject === lastProject}">
          <button class="page-link" @click="getProjects( currentProject + 1 )">Next</button>
        </li>
      </ul>
  </nav>
  </main>

</template>

<style scoped>
  ul{
    list-style-type: none;
  }
</style>
