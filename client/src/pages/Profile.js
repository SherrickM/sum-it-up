import React from "react";
import './Style.css'
import TextSummarySubmit from '../components/SummarySubmitandSave'
import SummaryList from "../components/SummaryList"
function Profile() {

  return <div className="app-container">
    <div className="left-area">


    <a title="Home screen" href="/profile" className="item-link active" id="pageLink">
      <i class="fa-solid fa-house-chimney"></i>
      </a>
      <a title="History" href="/summary" className="item-link active" id="pageLink">
        <i class="fa-solid fa-clock-rotate-left"></i>
      </a>
      
      
    </div>
    <div className="main-area">
      <button className="btn-show-right-area">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button className="btn-show-left-area">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
      </button>

      <section className="content-section">
        <h1 className="section-header">Quick Access</h1>
        <div className="access-links" >
          <div className="access-link-wrapper">
            

            <a title="View History" className="access-text" href="/summary">
            <div className="access-icon" >
              <i class="fa-regular fa-comment-dots"></i>
            </div>
              Summaries</a>
          </div>
          
          
        </div>
      </section>
     <TextSummarySubmit/>

      
    </div>
    <div className="right-area">
      <button className="btn-close-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-x-circle" viewBox="0 0 24 24">
          <defs />
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9l-6 6M9 9l6 6" />
        </svg>
      </button>
      <div className="right-area-header-wrapper">
        <p className="right-area-header">History</p>
        
      </div>
      <div className="download-item-line">
      <SummaryList/>
      </div>


    </div>
  </div>

}
export default Profile