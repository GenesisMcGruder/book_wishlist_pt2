import React from "react";
import {useFormik} from 'formik';
import * as Yup from "yup";


function NewReview({handleClick, fetchReviews, user, book}){
    const formik = useFormik({
        initialValues:{
            comment:"",
            user_id: user.id,
            book_id: book.id,  
        },
        onSubmit: (values, actions) => {
            fetch('reviews',{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(values),
            }).then(
                (res)=>{
                    if (res.status === 200){
                        actions.resetForm()
                        handleClick()
                        fetchReviews(book.id)
                        console.log(values)
                    }
                }
            )
        },
        validationSchema: Yup.object({
            comment: Yup.string().required('comment required'),
        })
    })
    return(
        <div className="form-case">
            <form className="form" onSubmit={formik.handleSubmit}>
                {/* <h1 className="form-header">Books</h1> */}
                <label>Comment:</label>
                <input className="form-input"
                name="comment"
                type="text"
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                <div className="error">
                    {formik.errors.comment && formik.touched.comment && formik.errors.comment}
                </div>  
                <button className="form-input-submit" type="submit">Submit</button>
                </form>
            </div>
            
        )   
    }
    
    
    export default NewReview;