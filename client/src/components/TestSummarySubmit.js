import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import summation from './summationsymble.png'
import { QUERY_GET_SUMMARY } from '../utils/queries'

console.log(useQuery)

const axios = require('axios').default;
require('dotenv').config()


const TextSummarySubmit = () => {

  const [formState, setFormState] = useState("test");
  const [summarizedState, setsummarizedState] = useState();
  const { loading, error, data } = useQuery(QUERY_GET_SUMMARY, {
    variables: {"text": "this is a sentence" , "sentnum":"1"}
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setFormState(value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      var options = {
        method: 'POST',
        url: process.env.REACT_APP_APIURL + '/api/sumapi',
        headers: {'Content-Type': 'application/json'},
        data: {
          text: formState,
          sentnum: 1
        }
      };
      
      // var r = await axios.request(options).then(function (response) {
      //   console.log(response.data);
      //   setsummarizedState(response.data)
      // });
    }
    catch(e)
    {
      console.error(e);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div class="main-area-header">
        <div class="search-wrapper" id="searchLine">
          <input
            name="text"
            // className="url-search-input"
            type="text"
            placeholder="Paste test here"
            value={formState.text}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            <img className="img1" src={summation} alt="" />
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="feather feather-search"
            viewBox="0 0 24 24"
          >
            <defs />
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg> */}

            {/* <svg
              enable-background="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m493.3 159.69c-12.477-30.878-31.231-59.828-56.199-84.792-24.964-24.967-53.914-43.722-84.792-56.199-30.88-12.48-63.689-18.702-96.482-18.702-32.748 0-65.497 6.249-96.315 18.744-30.814 12.49-59.695 31.242-84.607 56.158-24.915 24.911-43.668 53.792-56.158 84.607-12.494 30.815-18.743 63.563-18.743 96.312 0 32.795 6.222 65.604 18.701 96.485 12.477 30.878 31.231 59.829 56.199 84.793 24.964 24.967 53.914 43.722 84.792 56.199 30.882 12.48 63.69 18.701 96.484 18.703 32.748 0 65.497-6.249 96.315-18.743 30.814-12.49 59.695-31.242 84.607-56.158 24.915-24.912 43.668-53.793 56.158-84.608 12.494-30.817 18.743-63.565 18.744-96.315-2e-3 -32.794-6.223-65.602-18.704-96.484zm-31.685 179.97c-10.821 26.683-27.018 51.648-48.659 73.292-21.643 21.64-46.608 37.837-73.291 48.659-26.679 10.818-55.078 16.241-83.484 16.241-28.477 0-56.947-5.406-83.688-16.214-26.744-10.813-51.76-27.008-73.441-48.685-21.679-21.682-37.874-46.697-48.685-73.442-10.808-26.741-16.214-55.212-16.213-83.689-2e-3 -28.406 5.422-56.804 16.239-83.483 10.821-26.683 27.018-51.648 48.659-73.291 21.643-21.64 46.608-37.837 73.292-48.659 26.679-10.818 55.078-16.241 83.484-16.241 28.477 0 56.947 5.405 83.688 16.214 26.744 10.813 51.76 27.007 73.441 48.685 21.679 21.682 37.873 46.697 48.685 73.441 10.808 26.741 16.214 55.211 16.214 83.688 0 28.406-5.423 56.804-16.241 83.484z" />
              <path d="m356.24 183.6c9.227 0 16.707-7.48 16.707-16.707v-33.412c0-4.399-1.782-8.703-4.893-11.814s-7.414-4.893-11.814-4.893h-200.48c-6.445 0-12.337 3.728-15.097 9.552-2.76 5.825-1.915 12.745 2.167 17.734l91.584 111.94-91.583 111.94c-4.082 4.987-4.927 11.909-2.167 17.734s8.652 9.552 15.097 9.552h200.48c4.399 0 8.702-1.782 11.814-4.893s4.893-7.414 4.893-11.814v-33.413c0-9.227-7.48-16.707-16.707-16.707s-16.707 7.48-16.707 16.707v16.707h-148.52l77.915-95.229c5.047-6.168 5.047-14.991 0-21.158l-77.915-95.229h148.52v16.706c1e-3 9.224 7.481 16.705 16.707 16.705z" />
            </svg> */}
          </button>
        </div>
      </div>
      ;
    </form>
  );
};

export default TextSummarySubmit;
