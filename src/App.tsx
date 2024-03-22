import React from 'react'

import './App.css'
import logoImg from './image/se.png'
import Carusel from './components/carusel'
import Info from './components/info'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="box">
        <div className="text-box">
          <div className="mobile-logo">
            <div className="logo">
              <img src={logoImg} alt="" />
            </div>
            <div className="mobile-text">
              <h2>Speech Etiquette</h2>
              <p>IMAX company</p>
            </div>
          </div>
          <div className="btn-rate-box">
            <div className="rate-box">
              <div className="rate">
                <span>4.8
                  <i className="ri-star-s-fill"></i>
                </span>
                <span className='rate-text'>Reviews</span>
              </div>
              <div className="rate">
                <span>1K+</span>
                <span className='rate-text'>Downloads</span>
              </div>
              <div className="rate rate__right">
                <span className='age-rat'>3+</span>
                <span className='rate-text'>Rated for 3+</span>
              </div>
            </div>
            <button className='download'>
              <a
                href='https://upnow-prod.ff45e40d1a1c8f7e7de4e976d0c9e555.r2.cloudflarestorage.com/WN7233TzO5gRLhlCskyCVoWetN82/5df1b6bf-14a7-4afc-bd8f-6e8ffd6bdfde?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=cdd12e35bbd220303957dc5603a4cc8e%2F20240322%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20240322T123057Z&X-Amz-Expires=43200&X-Amz-Signature=7e77170e0a3246a1c1dcf2a85754324f9e842d4dcae5c037208efc0485c38126&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22Speech%20etiquette.apk%22'
                download={'Speech Etiquette'}
              >
                <i className="ri-download-2-line"></i>
                19.48m
              </a>
            </button>
          </div>
        </div>
        <div className="logo-box">
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>
        </div>
      </div>
      <Carusel />
      <p>The Public Speaking app is designed for all users who want to learn and practice English in order to speak fluently with people
        The application is Public speaking for beginners and advanced level students. You may have English speaking skills, but these English language skills will not help you when you want to speak in front of people. That's why you need to learn how to speak publicly, and you need to acquire public speaking skills.
        This public speaking app has revealed your inner fear of public speaking through many practical public speaking exercises
      </p>
      <Info/>
    </div>
  )
}

export default App