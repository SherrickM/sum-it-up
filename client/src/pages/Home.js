import React from "react";
import Profile from "./ProfileTest";

export default function Home(){
  return (
    <div className="container">
        <h1 className="headline">Home</h1>
        <div className="d-flex gap-3 mb-4">
		    <div className="col-md-6 border border-danger rounded p-4">
                <h2>This section will be an summary of the APP</h2>
                <ul>
                    <li>Intro section</li>
                    <li>About the project</li>
                    <li>Images/Carousel</li>
                    <li>signup Call to action</li>
                </ul>
            </div>
		    <div className="col-md-6 border border-danger rounded p-4">
                <h2>This section will host a trial version (1 free summary before signing up)</h2>
                <ul>
                    <li>Input field</li>
                    <li>button to summarize</li>
                    <li>replace input field with summarized article</li>
                </ul>

            </div>
	    </div>  
      <Profile/>                  
    </div>
    
  );
}
