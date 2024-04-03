import {useState} from 'react'

function Form(props){
    const [postTitle, setPostTitle] = useState("")
    const [postDescription, setPostDescription] = useState("")

    const handleChange = (event) => {
        setPostTitle(event.target.value)
    }
    
    const handleDescriptionChange = (event) => {
        setPostDescription(event.target)
    }

    return(
        <form onSubmit={(event)=>{
            event.preventDefault() 

            if (postTitle !== "") {
                props.handleSubmit(postTitle)
            }else {
                alert("Posts need a comment")
            }

        }}>
            <input type="text" name="linkName" onChange={handleChange} value={postTitle}/>
            <input type="description" onChange={handelDescriptionChange} value={postDescription}/>
            <br />

            <input type="submit" />
        </form>
    )  

}
export default Form