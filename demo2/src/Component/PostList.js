import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[],
              errmsg:''
         }
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response=>{
             console.log(response)
             this.setState({posts:response.data})
         }).catch(error=>{
             console.log(error)
             this.setState({errmsg:"Error retriving data"})
         })
     }
     
    render() {
        const {posts,errmsg}= this.state

        return (
            <div>
             list of post
             {
                 posts.length ? posts.map(post=><div key={post.id} >{post.title} </div>):null

                 
                 

             }
             {errmsg ?<div>{errmsg}</div>:null}
             {/* check passing wrong url */}
            </div>
        )
    }
}

export default PostList
