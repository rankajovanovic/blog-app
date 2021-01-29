<template>
  <div class="container"> 
      <ul class="list-group list-group-flush">
          <li v-for="post in posts" :key="post.id" class="list-group-item">
             <h3>{{post.title}}</h3>
             <router-link :to="{ name: 'SinglePost', params: {id:post.id} }" type="button" class="btn btn-primary" tag="button">View post</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
import postService  from '../services/PostService.js'
export default {
    data() {
        return {
            posts: []
        }
    },
    async created(){
        this.posts = await postService.getAll();
    },
}
</script>

<style>

</style>