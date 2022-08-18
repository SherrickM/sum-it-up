import React from "react";
import Profile from "./Profile";

export default function Home(){
  return (
    <>
    <div class="app-container">
      
      <div class="main-area">
        <button class="btn-show-right-area">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button class="btn-show-left-area">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div class="main-area-header">
          <div class="search-wrapper" id="searchLine">
          <input class="search-input" type="text" placeholder="e.g. files.doc"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
            <defs/>
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </div>
        </div>
        <section class="content-section">
          <h1 class="section-header">Quick Access</h1>
          <div class="access-links">
            <div class="access-link-wrapper">
              <div class="access-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
           
              <span class="access-text">Docs</span>
            </div>
            <div class="access-link-wrapper">
              <div class="access-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <span class="access-text">Articles</span>
            </div>
            <div class="access-link-wrapper">
              <div class="access-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="8 12 12 16 16 12"/>
                  <line x1="12" y1="8" x2="12" y2="16"/>
                </svg>
              </div>
              <span class="access-text">Download</span>
            </div>
          </div>
        </section>
        <section class="content-section">
           <div class="section-header-wrapper">
             <h1 class="section-header">New Summery</h1>
             {/* <a class="section-header-link">
               View in folders
             </a> */}
           </div>
          <div class="content-section-line">
            <div class="section-part left">
              <a class="image-wrapper">
                <div class="image-overlay">
                  <div class="video-info">
                    <div class="video-info-text">
                      <p class="video-name medium">Drag and Drop your files here</p>
                      <p class="video-subtext medium"> files must be below 45.5 MB</p>
                    </div>
                    <button class="btn-play"></button>
                </div>
                </div>
                <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"/>
                <span class="video-time">Browse</span>
              </a>
            </div>
            
          </div>
        </section>
        <section class="content-section">
          <div class="section-header-wrapper">
            <h1 class="section-header">Recent Files</h1>
            <a class="section-header-link">
              View all files
            </a>
          </div>
          <div class="files-table">
            <div class="files-table-header">
              <div class="column-header table-cell">Name</div>
              <div class="column-header table-cell size-cell">Size</div>
              <div class="column-header table-cell">Last Modified</div>
              <div class="column-header table-cell">Action</div>
            </div>
            <div class="files-table-row">
              <div class="table-cell name-cell pdf">Brandenburg.pdf</div>
              <div class="table-cell">42 MB</div>
              <div class="table-cell">Aug 26, 2020</div>
              <div class="table-cell action-cell">
                <button class="more-action"></button>
              </div>
            </div>
            <div class="files-table-row">
              <div class="table-cell name-cell jpg">TheLionsRoar.jpg</div>
              <div class="table-cell size-cell">500 KB</div>
              <div class="table-cell">Aug 26, 2020</div>
              <div class="table-cell action-cell">
                <button class="more-action"></button>
              </div>
            </div>

          </div>
        </section>
      </div>
      <div class="right-area">
        <button class="btn-close-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-x-circle" viewBox="0 0 24 24">
            <defs/>
            <circle cx="12" cy="12" r="10"/>
            <path d="M15 9l-6 6M9 9l6 6"/>
          </svg>
        </button>
        </div>
       <Profile/>                  
    </div></>
 
    
  );
}
