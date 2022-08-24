import React, { useState, useReducer } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SUMMARIES } from "../utils/queries";
import  auth  from "../utils/auth";
import { element } from "prop-types";

const SummaryResultss = (attr) => {
    var user = {variables:{
        username: auth.getProfile().username
    }};
    const { loading, error, data } = useQuery(QUERY_SUMMARIES,user);
if(loading)
{
return(
    <div>Loading</div>
)

}


  if (data)
  console.log(data)
  {
    return(
  //   console.log(data)
  //   let summaryList =
  //       data.summaries.map(function(element, index, array){ 
  //           return(<li key={element._id}>{element.summaryName}</li>);
  //       }, this);
  //  return (
  //       <ul>{summaryList }</ul>
  //  )
  <ul>
    {data.summaries.map((sums)=>(
          <li key={sums._id}>
            <div className="content-section-line">
                    <div className="files-table w-50 ">
                        <div className="files-table-header">
                            <div className="column-header table-cell">{sums.summaryName}</div>
                            
                        </div>
                        <ul >
                            <li className="files-table-row"> {sums.summaryText}</li>
                           
                        </ul>
                        <div >

                        </div>
                    </div>
                  

                    
                </div>
              
            
          </li>
          ))}
        </ul>
    )
  }
  return(
    <div class="loading-container">
      No Saved summaries.
    </div>

  )
};

export default SummaryResultss;

