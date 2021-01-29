import http from '../services/BaseService'
class PostService {
    async getAll(){
        try {
            const response = await http.get('posts')    
            return response.data     
        } catch (error) {
            console.log(error)
        }
    }

   async get(id) {
        const result = await http.get(`posts/${id}`)
        console.log(result.data);
        
        return result.data;
    }
}

const postService = new PostService();
export default  postService