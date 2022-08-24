import React from "react";
import './Style.css'
import SummaryResultss from "../components/BulkResults";


function Summary() {

    return <div className="app-container">
        <div className="left-area">

            <a href="/profile" className="item-link active" id="pageLink">
                <i class="fa-solid fa-house-chimney"></i>
            </a>

            <a href="summary" className="item-link active" id="pageLink">
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

            </section>
            <section className="content-section">
                <div className="section-header-wrapper">

                    <h1 className="section-header">Summaries</h1>
                    {/* <a className="section-header-link">
               View in folders
             </a> */}
                </div>
                <SummaryResultss/>

            </section>


        </div>

    </div>

}
export default Summary