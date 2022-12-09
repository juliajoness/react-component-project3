import React, {useState} from "react";

function SubmitForm({album_id, addReviewToState}) {
 
    let initialForm = {
        comment: "",
        rating: "",
        album_id: album_id
    }

    const [form, setForm] = useState(initialForm)
    const[reviewsData, setReviewsData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9292/reviews",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }).then(response => response.json())
          .then(data => {
            setForm(initialForm)
            addReviewToState(data)
    })
}

let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value;
        setForm({...form,  [name]: value })
     }
    
     return(
         <div>
            <form onSubmit={handleSubmit}>
                <input value={form.comment} type="text" name='comment' placeholder='Comment' onChange={handleChange} required/>
                <input value={form.rating} type="number" min="1" max= "10" name='rating' placeholder='Rating' onChange={handleChange} required/>
                <button type="submit" >Add Review</button>
            </form>
        </div>
    )
    
}

export default SubmitForm 