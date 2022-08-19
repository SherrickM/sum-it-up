import React from "react";
import './Style.css'

function Profile() {

  return <div class="app-container">
    <div class="left-area">


      <a href="#" class="item-link active" id="pageLink">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-grid" viewBox="0 0 24 24">
          <defs />
          <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
        </svg>
      </a>
      <a href="#" class="item-link" id="pageLink">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-folder" viewBox="0 0 24 24">
          <defs />
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
      </a>
      
      <a href="#" class="item-link" id="pageLink">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-settings" viewBox="0 0 24 24">
          <defs />
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </a>
      <button class="btn-logout">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-log-out" viewBox="0 0 24 24">
          <defs />
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
        </svg>
      </button>
    </div>
    <div class="main-area">
      <button class="btn-show-right-area">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button class="btn-show-left-area">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
      </button>

      <section class="content-section">
        <h1 class="section-header">Quick Access</h1>
        <div class="access-links">
          <div class="access-link-wrapper">
            <div class="access-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>

            <span class="access-text">Summaries</span>
          </div>
          <div class="access-link-wrapper">
            <div class="access-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <span class="access-text">Catagories</span>
          </div>
          <div class="access-link-wrapper">
            <div class="access-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle">
                <circle cx="12" cy="12" r="10" />
                <polyline points="8 12 12 16 16 12" />
                <line x1="12" y1="8" x2="12" y2="16" />
              </svg>
            </div>
            <span class="access-text">Placeholder</span>
          </div>
        </div>
      </section>
      <section class="content-section">
        <div class="section-header-wrapper">
          <h1 class="section-header">Upload New File to Summarize</h1>
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

                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80" />
              <span class="video-time">Browse</span>
            </a>

          </div>
          <form class="section-part left">
            Add Discription Of The Summery
            <div class="search-wrapper mt-3 file-name" >
              <input class="input" type="text" placeholder="Name of Project e.g. Climate Change" />
            </div>
            <div class="search-wrapper mt-1 file-catagory" >
              <input class="input" type="text" placeholder="Catagory e.g. Science" />
            </div>
            <div class="search-wrapper mt-1 file-catagory" >
              <input class="input" type="text" placeholder="Number of sentences e.g. 3 or 5" />
            </div>
            <button type="submit" class="btn btn-secondary m-2 submit_for_summery">Summarize!</button>
          </form>
        </div>

      </section>

      <section class="content-section">
        <div class="section-header-wrapper">
          <h1 class="section-header">Summery</h1>

        </div>

        <div class="files-table">

          {/* <div class="files-table-header">
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
          </div> */}
          <div class="files-table-header">
            <div class="column-header table-cell">Name of Summery</div>
            <div class="column-header table-cell">Catagory of summery</div>
          </div>
          <ul >
            <li class="files-table-row"> Summery one</li>
            <li class="files-table-row"> Summery two</li>
            <li class="files-table-row"> Summery Three</li>
          </ul>

        </div>
      </section>
    </div>
    <div class="right-area">
      <button class="btn-close-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-x-circle" viewBox="0 0 24 24">
          <defs />
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9l-6 6M9 9l6 6" />
        </svg>
      </button>
      <div class="right-area-header-wrapper">
        <p class="right-area-header">History</p>
      </div>
      <div class="download-item-line">
        <ul>
          <li>
            <div class="line-header">Date Created</div>
            <div class="download-area">
              <div class="download-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="">
                  <defs></defs>
                  <circle cx="256" cy="256" r="256" fill="#4b50dd"></circle>
                  <path fill="#f5f5f5" d="M192 64h176c4.4 0 8 3.6 8 8v328c0 4.4-3.6 8-8 8H120c-4.4 0-8-3.6-8-8V148l80-84z"></path>
                  <path fill="#e6e6e6" d="M184 148c4.4 0 8-3.6 8-8V64l-80 84h72z"></path>
                  <circle cx="352" cy="384" r="52" fill="#2179a6"></circle>
                  <g fill="#f5f5f5" class="g">
                    <path d="M352 416c-2.208 0-4-1.788-4-4v-56c0-2.212 1.792-4 4-4s4 1.788 4 4v56c0 2.212-1.792 4-4 4z"></path>
                    <path d="M352 416a3.989 3.989 0 01-2.828-1.172l-20-20c-1.564-1.564-1.564-4.092 0-5.656s4.092-1.564 5.656 0L352 406.344l17.172-17.172c1.564-1.564 4.092-1.564 5.656 0s1.564 4.092 0 5.656l-20 20A3.989 3.989 0 01352 416z"></path>
                  </g>
                </svg>
              </div>
              <div class="download-item-texts">
                <p class="download-text-header">Project name</p>
                <p class="download-text-info">Project catagory</p>
              </div>
            </div>
          </li>
        </ul>
      </div>


    </div>
  </div>

}
export default Profile