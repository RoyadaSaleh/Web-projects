import {useState} from 'react'

function Form(){
    const [postTitle, setPostTitle] = useState("")

    const handleChange = (event) => {
        setPostTitle(event.target.value)

    }
    
    return(
        <form onSubmit={(event)=>{
            event.preventDefault() 

            if (postTitle !== "") {
                
            }else {
                alert("Posts need a comment")
            }

        }}>
            <label for="linkName">Link Name:</label>
            <input type="text" name="linkName"/>
            <br />
            <label for="URL">Link URL:</label>
            <input type="text" name="linkName" onChange={handleChange} value={postTitle}/>
            <input type="submit" />
        </form>
    )  

}
export default Form