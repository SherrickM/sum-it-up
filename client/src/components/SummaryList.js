import React, { useState, useEffect, useReducer } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import  auth  from "../utils/auth";
import { element } from "prop-types";
import { useUser } from '../context/UserContext';
import reducer from '../context/reducers';
import { LOGIN } from "../context/actions";


const SummaryList = ({state, dispatch}) => {
   
    const { loading, error, data } = useQuery(QUERY_ME);
   
    useEffect(function(){
      console.log({loading, data})
      if(data && data.hasOwnProperty("me"))
      dispatch({type:LOGIN, payload:data.me})
      console.log(state)
    }, [loading, data])
if(loading)
{
return(
    <div>Loading</div>
)

}


  if (state.user)
  
  {
    console.log(state)
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
    {state.user.summaries.map((sums)=>(
          <li key={sums._id}>
            <div className="line-header">Date Created - </div>
            <div className="download-area">
              <div className="download-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="">
                  <defs></defs>
                  <circle cx="256" cy="256" r="256" fill="#4b50dd"></circle>
                  <path fill="#f5f5f5" d="M192 64h176c4.4 0 8 3.6 8 8v328c0 4.4-3.6 8-8 8H120c-4.4 0-8-3.6-8-8V148l80-84z"></path>
                  <path fill="#e6e6e6" d="M184 148c4.4 0 8-3.6 8-8V64l-80 84h72z"></path>
                  <circle cx="352" cy="384" r="52" fill="#2179a6"></circle>
                  <g fill="#f5f5f5" className="g">
                    <path d="M352 416c-2.208 0-4-1.788-4-4v-56c0-2.212 1.792-4 4-4s4 1.788 4 4v56c0 2.212-1.792 4-4 4z"></path>
                    <path d="M352 416a3.989 3.989 0 01-2.828-1.172l-20-20c-1.564-1.564-1.564-4.092 0-5.656s4.092-1.564 5.656 0L352 406.344l17.172-17.172c1.564-1.564 4.092-1.564 5.656 0s1.564 4.092 0 5.656l-20 20A3.989 3.989 0 01352 416z"></path>
                  </g>
                </svg>
              </div>
              <div className="download-item-texts">
                <p className="download-text-header">{sums.summaryName}</p>
                <p className="download-text-info">{sums.summaryText}</p>
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

export default SummaryList;
