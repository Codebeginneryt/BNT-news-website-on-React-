import React from 'react'
import '../style/newsbanner.css'

function Newsbanner() {
  return (
    <>
    <div className="newsbanner p-5">
        <div className="banner d-flex p-5">
            <div className="banner-image">
                <img src="https://bntonline.in/wp-content/uploads/2020/05/1.jpg" alt="" />
            </div>
            <div className="banner-text text-center">
                <h1>A Matter of Issues</h1>
                <p>People's Problems
Bring voice to the corridors of power
Let's raise our voices together</p>
            </div>
            <div className="banner-image">
                <img src="https://bntonline.in/wp-content/uploads/2020/05/2.jpg" alt="" />
            </div>
        </div>
        <div className="banner-note">
            <p>Population explosion * unemployment * farmers committing suicide * suffocating pollution * lack of storage for food grains * justice delayed * hunger * education etc....</p>
        </div>
    </div>
    </>
  )
}

export default Newsbanner