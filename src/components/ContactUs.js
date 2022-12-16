import React from 'react'
function ContactUs(props) {
  return (
    <div className={`container my-5 text-${props.mode==='dark'?'light':'dark'}`} id="contactus">
          <div className="mb-3 row">
    <label htmlhtmlFor="staticEmail" className={`col-sm-2 col-form-label text-${props.mode==='dark'?'light':'dark'}`}>Email</label>
    <div className="col-sm-10 ">
      <input type="text" readonly className={`form-control-plaintext text-${props.mode==='dark'?'light':'dark'}`} id="staticEmail" value="email@example.com" />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlhtmlFor="inputPassword" className={`col-sm-2 col-form-label text-${props.mode==='dark'?'light':'dark'}`}>Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" />
    </div>
  </div>


    </div>
  )
}

export default ContactUs