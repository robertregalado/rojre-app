<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <p>The project id is {{ id }}</p>
    <p>{{ project.details }}</p>
  </div>
  <div v-else>
    <p>Loading project details...</p>
  </div>

</template>

<script>
export default {
    props: ['id'],
    data(){
      return {
        project: null
      }
    },
    mounted() {
      fetch(' http://localhost:3000/projects/' + this.id)
      .then(res => res.json())
      .then(data => this.project = data)
      .catch(err => console.log(err.message))
    }
  }
</script>

<style>

</style>