import React from "react";
import './Style.css'
import UrlSummarySubmit from "../components/UrlSumarySubmit";
import TextSummarySubmit from "../components/TestSummarySubmit";


const fileTypes = ["doc", "docx", "odt", "pdf", "rtf", "tex", "txt", "wpd"];



function Profile (){
    
    return  <div className="app-container">
      <div className="left-area">
        <button className="btn-close-left">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-x-circle" viewBox="0 0 24 24">
            <defs/>
            <circle cx="12" cy="12" r="10"/>
            <path d="M15 9l-6 6M9 9l6 6"/>
          </svg>
        </button>
        <div className="app-name">MyDocs</div>
        <a href="#" className="item-link active" id="pageLink">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-grid" viewBox="0 0 24 24">
            <defs />
            <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
          </svg>
        </a>
        <a href="#" className="item-link" id="pageLink">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-folder" viewBox="0 0 24 24">
            <defs />
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
          </svg>
        </a>
        <a href="#" className="item-link" id="pageLink">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-hard-drive" viewBox="0 0 24 24">
            <defs />
            <path d="M22 12H2M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11zM6 16h.01M10 16h.01" />
          </svg>
        </a>
        <a href="#" className="item-link" id="pageLink">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-settings" viewBox="0 0 24 24">
            <defs />
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </a>
        <button className="btn-logout">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-log-out" viewBox="0 0 24 24">
            <defs/>
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
          </svg>
        </button>
      </div>
      <div className="main-area">
        <button className="btn-show-right-area">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className="btn-show-left-area">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div className="main-area-header">
          <div className="search-wrapper" id="searchLine">
          <input className="search-input" type="text" placeholder="e.g. files.doc"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-search" viewBox="0 0 24 24">
            <defs/>
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </div>
        </div>
        <section className="content-section">
          <h1 className="section-header">Quick Access</h1>
          <div className="access-links">
            <div className="access-link-wrapper">
              <div className="access-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-image">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
           
              <span className="access-text">Docs</span>
            </div>
            <div className="access-link-wrapper">
              <div className="access-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <span className="access-text">Articles</span>
            </div>
            <div className="access-link-wrapper">
              <div className="access-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-down-circle">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="8 12 12 16 16 12"/>
                  <line x1="12" y1="8" x2="12" y2="16"/>
                </svg>
              </div>
              <span className="access-text">Download</span>
            </div>
          </div>
        </section>
        <UrlSummarySubmit />
        <TextSummarySubmit />
        <section className="content-section">
           <div className="section-header-wrapper">
             <h1 className="section-header">New Summery</h1>
             {/* <a className="section-header-link">
               View in folders
             </a> */}
           </div>
          <div className="content-section-line">
            <div className="section-part left">
              <a className="image-wrapper">
                <div className="image-overlay">
                  <div className="video-info">
                    <div className="video-info-text">
                      <p className="video-name medium">Drag and Drop your files here</p>
                      <p className="video-subtext medium"> files must be below 45.5 MB</p>
                    </div>
                    <button className="btn-play"></button>
                </div>
                </div>
                <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"/>
                <span className="video-time">Browse</span>
              </a>
            </div>
            
          </div>
        </section>
        <section className="content-section">
          <div className="section-header-wrapper">
            <h1 className="section-header">Recent Files</h1>
            <a className="section-header-link">
              View all files
            </a>
          </div>
          <div className="files-table">
            <div className="files-table-header">
              <div className="column-header table-cell">Name</div>
              <div className="column-header table-cell size-cell">Size</div>
              <div className="column-header table-cell">Last Modified</div>
              <div className="column-header table-cell">Action</div>
            </div>
            <div className="files-table-row">
              <div className="table-cell name-cell pdf">Brandenburg.pdf</div>
              <div className="table-cell">42 MB</div>
              <div className="table-cell">Aug 26, 2020</div>
              <div className="table-cell action-cell">
                <button className="more-action"></button>
              </div>
            </div>
            <div className="files-table-row">
              <div className="table-cell name-cell jpg">TheLionsRoar.jpg</div>
              <div className="table-cell size-cell">500 KB</div>
              <div className="table-cell">Aug 26, 2020</div>
              <div className="table-cell action-cell">
                <button className="more-action"></button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="right-area">
        <button className="btn-close-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-x-circle" viewBox="0 0 24 24">
            <defs/>
            <circle cx="12" cy="12" r="10"/>
            <path d="M15 9l-6 6M9 9l6 6"/>
          </svg>
        </button>
        <div className="right-area-header-wrapper">
          <p className="right-area-header">Downloads</p>
          <button className="more-action"></button>
        </div>
        <div className="download-item-line">
          <div className="line-header">Today</div>
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
              <p className="download-text-header">New Project.docx</p>
              <p className="download-text-info">34.45 MB<span>Waiting for download</span></p>
            </div>
            <div className="download-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                <defs/>
                <path d="M403.939 295.749l-78.814 78.833V172.125c0-10.557-8.568-19.125-19.125-19.125s-19.125 8.568-19.125 19.125v202.457l-78.814-78.814c-7.478-7.478-19.584-7.478-27.043 0-7.478 7.478-7.478 19.584 0 27.042L289.208 431c4.59 4.59 10.863 6.005 16.812 4.953 5.929 1.052 12.221-.382 16.811-4.953l108.19-108.19c7.478-7.478 7.478-19.583 0-27.042-7.498-7.478-19.604-7.478-27.082-.019zM306 0C137.012 0 0 136.992 0 306s137.012 306 306 306 306-137.012 306-306S475.008 0 306 0zm0 573.75C158.125 573.75 38.25 453.875 38.25 306S158.125 38.25 306 38.25 573.75 158.125 573.75 306 453.875 573.75 306 573.75z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="download-item-line">
          <div className="line-header">Yesterday</div>
          <div className="download-area">
            <div className="download-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="">
                <defs></defs>
                <circle cx="256" cy="256" r="256" fill="#4bc0dd"></circle>
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
              <p className="download-text-header">SelfDriving.PDF</p>
              <div className="progress-bar">
                <span className="progress"></span>
              </div>
            </div>
            <div className="download-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 512 512">
                <defs/>
                <path d="M256 512C114.613 512 0 397.383 0 256S114.613 0 256 0s256 114.613 256 256c-.168 141.316-114.684 255.832-256 256zm0-480C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224c-.133-123.656-100.344-223.867-224-224zm0 0"/>
                <path d="M208 368c-8.836 0-16-7.164-16-16V160c0-8.836 7.164-16 16-16s16 7.164 16 16v192c0 8.836-7.164 16-16 16zm0 0M304 368c-8.836 0-16-7.164-16-16V160c0-8.836 7.164-16 16-16s16 7.164 16 16v192c0 8.836-7.164 16-16 16zm0 0"/>
              </svg>
            </div>
          </div>
        </div>
       
      </div>
    </div>
    
}
export default Profile