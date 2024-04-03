import React, { useState } from 'react';

function ReplyForm(props){
  const [reply, setReply] = useState("")

  return(
    <form onSubmit={(event)=>{
      event.preventDefault()

      props.onNewReply(reply)

      alert(reply)
    }}>
      
    <textarea placeholder='Add your reply!' onChange={(event)=>{
      setReply(event.target.value)
    }} value={reply}/>
    <input type="submit" />

  </form>
    
  )
}

function ReplyList(props){
  let renderList = (data) => {
    return props.data.map((data) => {
      return <p>{data}</p>
  })

}

Return (
  <div>
    {renderList()}
  </div>
)
}

import Comment from './Comment';


function Post(props){

let [replies, setReplies] = useState([])


  const [likes, setLikes] = useState(0);
  function handleLike(){
    setLikes(likes + 1);
  }
  return(
    <div>
      <h3>{props.content}</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>
      <Comment content="This is a test comment!" />
      <Comment content="This is another test comment!" />
      <Comment content="This is yet another test comment!" />

      <div>


      </div>
      <h4>Replies</h4>
      <ReplyForm onNewRepky={(reply)=>{
        setReplies([...replies, reply])
      }}/>

      <ReplyList data={replies}/>

    </div>

  )
}

export default Post 