
const posts=[]

function addNewPost(userID, post){
    let myPost={
        postedBy: userID,
        message: post.message,
        time: Date.now()
    }
    posts.unshift(myPost)
}

function getPosts(n=3){
    return posts.slice(0,n)
}



module.exports={addNewPost, getPosts}
