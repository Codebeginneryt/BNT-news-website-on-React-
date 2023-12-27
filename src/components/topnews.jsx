import React from 'react'
import "../style/topnews.css"

function Topnews() {
  return (
    <>
    <div className="topnews">
        <div className="latestnews d-flex">
            <div className="banner d-flex">
                <div className="banner-image">
                <img src="https://e3.365dm.com/23/12/768x432/skynews-glasgow-scotland-rain_6394882.jpg?20231216161912" alt="" />
                </div>
                <h1>Weather warnings for wind and rain issued accross India in day after Christmas</h1>
            </div>
            <div className="second-banner">
            <div className="banner-image">
                <img src="https://th.bing.com/th/id/OIP._ngR70fO9EVUERJXEGVs4AHaFJ?w=258&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                </div>
                <h1>Narendra Modi responds to assassination claims.</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Topnews