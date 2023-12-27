import React from 'react'
import "../style/navbar.css"

function Navbar() {
    return (
        <>
            <div className="navbar d-block">
                <div className="navhead d-flex">
                    <div className="logo d-flex">
                        <img src="https://bntonline.in/wp-content/themes/bntnews/images/BNT-Logo.png" alt="" />
                        <h1 className="m-2">Breaking News Today <br /><span>हम सबकी खबर लें, हम सबको खबर दें!
                        </span></h1>
                    </div>
                    <div className="watch">
                        <button>WATCH LIVE</button>
                    </div>
                </div>
                <div className="navitem">
                    <a href="" style={{ borderBottom:"2px solid #ec4646",
    color: "#ec4646",
    fontWeight: 700}}>Home</a>
                    <a href="">Latest</a>
                    <a href="">World</a>
                    <a href="">Politics</a>
                    <a href="">Climate</a>
                    <a href="">Science & Tech</a>
                    <a href="">Business</a>
                    <a href="">Ents & Arts</a>
                    <a href="">Travel</a>
                    <a href="">More</a>

                </div>
            </div>
        </>
    )
}

export default Navbar