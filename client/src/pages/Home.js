import React from "react";

export default function Home(){
  return (
    <div className="container">
        <h1 className="headline">Home</h1>
        <div className="row">
		    <div className="col-md-6">
                Left col - This section will be an summary of the APP
            </div>
		    <div className="col-md-6">
                right col - This section will host a trial version (1 free summary before signing up)
            </div>
	    </div>                    
    </div>
  );
}
