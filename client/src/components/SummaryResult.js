import React, { useState, useReducer } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_SUMMARY } from "../utils/queries";

const SummaryResult = (attr) => {
  const { loading, error, data } = useQuery(QUERY_GET_SUMMARY, {
    variables: { text: attr.text, sentnum: attr.sentnum },
  });

  if (!attr.text) {
    return <span>No text to summarize.</span>;
  }

  if (data && data.getSummary)
  {
    let summary = data.getSummary.sentences;
    if (summary) {
      return (
        <textarea name="" id="" cols="" rows="10" value={summary}/>
          
        
      );
    } else {
      <span>no summary</span>;
    }
  }
  return(
    <div className="sit-loading-animation">
    <div className="loading-container">
     <div className="loader">
       <div className="loading-bars">
         <div className="bar"></div>
         <div className="bar"></div>
         <div className="bar"></div>
         <div className="bar"></div>
         <div className="bar"></div>
       </div>
     </div>
   </div>
   <div className="loading" data-loading-text="summerizing..."></div>
 </div>

  )
};

export default SummaryResult;
