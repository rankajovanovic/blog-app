<template>
  <div class="container">
      <h2>{{post.title}}</h2>
      <p>{{post.text}}</p>
  </div>
</template>

<script>
import postService  from '../services/PostService.js'
export default {
    data() {
        return {
            post: {
            }
        }
        
    },
    async created() {
        const post = await postService.get(this.$route.params.id);
        console.log(post);
        
    }
}


</script>

<style>

</style>