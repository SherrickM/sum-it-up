import React, { useState, useReducer } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SUMMARIES } from "../utils/queries";
import  auth  from "../utils/auth";
import { element } from "prop-types";

const SummaryList = (attr) => {
    var p = {variables:{
        username: auth.getProfile().username
    }};
    const { loading, error, data } = useQuery(QUERY_SUMMARIES,p);
if(loading)
{
return(
    <div>Loading</div>
)

}


  if (data)
  {
    console.log(data)
    let customerList =
        data.summaries.map(function(element, index, array){ 
            return(<li>{element.summaryName}</li>);
        }, this);
   return (
        <ul>{customerList}</ul>
   )
  }
  return(
    <div class="loading-container">
      No Saved summaries.
    </div>

  )
};

export default SummaryList;
