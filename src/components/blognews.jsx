import React from 'react'
import "../style/blognews.css"
import Newsdata from './newsdata';

function Blognews() {
  return (
      <>
      <div className="blognews">
          <div className="container">
              <div className="row">
                  {
                      Newsdata.map((val) =>{
                          return(
                              <>
                               <div className="col my-4">
                      <div className="card" style={{ width: "20rem", cursor:"pointer", padding:"10px",boxShadow:"-3px 6px 14px 10px rgba(0,0,0,0.10)"}}>
                          <div className="news-image" style={{height:"200px", with:"20rem", overflow:"hidden",}}>
                              <img src={val.Img} alt="" style={{height:"100%", width:"100%"}}/>
                          </div>
                          <div className="news-title">
                              <h2 style={{fontSize:"20px"}}>{val.Title}</h2>
                              <p>{val.News}</p>
                              <a href="">Read More</a>
                          </div>
                      </div>
                  </div>
                              </>
                          )
                      })
                  }
              </div>
              <div className="more-news">
                  <button>Load More</button>
              </div>
          </div>
      </div>
      </>
  )
}

export default Blognews