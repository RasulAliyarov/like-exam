import React from 'react'
import "./Add.scss"
import { useFormik } from 'formik';
import * as Yup from 'yup';
function Add() {

  const addShema = Yup.object().shape({
    name: Yup.string().required("Doldur bunu"),
    city: Yup.string().required("Doldur bunu"),
    desc: Yup.string().required("Doldur bunu"),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      city: "",
      desc: ""
    },
    validateOnBlur: "",
    validationSchema: addShema,
    onSubmit: values => {
      console.log(values);
    }
  })

  return (
    <div className='add'>
      <div className="add__wrapper container">
        <form onSubmit={formik.handleSubmit} className="add__wrapper__form">
          <h1>Add Person</h1>

          {formik.errors.name && formik.touched.name ? <div className='errorMessage'>{formik.errors.name}</div> : null}
          <input type="text" name='name' placeholder='Name' onChange={formik.handleChange} onBlur={formik.handleBlur} />

          {formik.errors.city && formik.touched.city ? <div className='errorMessage'>{formik.errors.city}</div> : null}
          <input type="text" name='city' placeholder='City' onChange={formik.handleChange} onBlur={formik.handleBlur} />

          {formik.errors.desc && formik.touched.desc ? <div className='errorMessage'>{formik.errors.desc}</div> : null}
          <textarea type="text" name='desc' placeholder='Description' onChange={formik.handleChange} onBlur={formik.handleBlur} />

          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default Add