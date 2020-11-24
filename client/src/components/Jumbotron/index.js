import React from "react";
import "./style.css"


function Jumbotron() {
    return (
        <div className="jumbotron text-center">
            <h1><span><a className="white" id="jumbo" href="/">Enjoy Your Book Search</a></span></h1>
            <div>
                <a className="white" target="_blank" href="http://developers.google.com/books/">
                    Powered by Google Books
                </a>
            </div>
        </div>
    )
}

export default Jumbotron;