import React, { useState } from 'react';
import SummaryResults from "./SummaryResult"
import { useMutation } from '@apollo/client';
import { ADD_SUMMARY } from '../utils/mutations';





require('dotenv').config()

// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../../utils/mutations";
// import Auth from "../../utils/auth";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../../context/UserContext";
// import reducer from "../../context/reducers";


const TextSummarySubmit = () => {

  const [formState, setFormState] = useState("");
  const [summarizedState, setsummarizedState] = useState();
  const [sentenceNum, setsentenceNum] = useState(1);
  const [sumarizeMe, setSumarizeMe] = useState(null);
  const [summaryName, setSummaryName] = useState("");

  // Set up our mutation with an option to handle errors
  const [addSummary, { error }] = useMutation(ADD_SUMMARY);

  const onSaveSummaryClick = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addSummary({
        variables: { summaryText: formState, summaryName: summaryName },
      });

      //window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setFormState(value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setsentenceNum(parseInt(value));
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
      setSumarizeMe(formState);
      console.log(formState);
  }

  return (
    


    <section className="content-section">
      <div className="section-header-wrapper">
        <h1 className="section-header">Add text to Summarize</h1>
        <h1 className="section-header">Summary</h1>
        
      </div>
      <div className="content-section-line">
        <div className="section-part left">
          <div className="image-wrapper">
            <div className="image-overlay">
              <div className="video-info">
                <div className="video-info-text">
                  <form className="section-part left" onSubmit={onFormSubmit}>
                    Add Discription Of The Summary
                    <div className="search-wrapper mt-3 file-name" id="summary-input-area">
                      <textarea rows="20" cols="50" className="input" type="text" name="text" value={formState.text} onChange={handleChange} placeholder="Paste Text to Summarize here" />
                    </div>

                    <div class="search-wrapper mt-1 file-catagory" id="summary-sentance-num">
                      <input class="input" type="number" name="sentenceNum" value={sentenceNum.value} onChange={handleInputChange} placeholder="Number of sentences e.g. 3 or 5. Default is 1" min="1" />
                    </div>

                    <button type="button" onClick={onFormSubmit} class="btn btn-secondary btn-main m-2 submit_for_summery">Summarize!</button>


                  </form>
                </div>

              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80" />

          </div>

        </div>

        <div className="section-header-wrapper">


        </div>

        <div className="files-table w-50 ">

          <div className="files-table-header">

            <ol>
              <li className="files-table-row"> { (sumarizeMe) ? <SummaryResults  text={sumarizeMe} sentnum={sentenceNum} /> : null}</li>
              
            </ol>
            <form>
              <div className="search-wrapper mt-3 file-name mb-5" >
                <input className="input" type="text" name="project" value={formState.project} onChange={handleChange} placeholder="Name of Project e.g. Climate Change" />
              </div>
              
              <button onClick={onSaveSummaryClick} type="save" className="btn btn-secondary btn-main submit_for_summery">Save summary!</button>
          
          </form>
          </div>
          

          
          
      </div>
    </div>

    </section >



  );
};

export default TextSummarySubmit;
