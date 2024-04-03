import React from 'react';
import Post from './components/post';
function App(){ 

  const [WebProjects, setWebProjects] = useState([])

  let handleNewSubmission = (data) => {
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