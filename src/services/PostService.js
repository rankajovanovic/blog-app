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
}

const postService = new PostService();
export default  postService