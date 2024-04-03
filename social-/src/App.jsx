import React from 'react';
import Post from './components/Post';
function App(){ 

  const [WebProjects, setWebProjects] = useState([])

  let handleNewSubmission = (data) => {
    setWebProjects([...WebProjects, data])
  }
    let onNewPost = (data) =>{
      // receives data from form
      setWebProjects([...WebProjects, data])
    }

  return(
    <div>
      <h1>Fakebook!</h1>
      
        <Form onNewSubmit={handleNewSubmission} />
        <Table links={webProjects} />
        {/* Feed */}
        
        <Post content="This is a test post!" />
        <Post content="This is another test post!" />
    
    </div>
  )
}
export default App