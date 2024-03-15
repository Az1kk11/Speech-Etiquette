import React from 'react'

import './App.css'
import logoImg from './image/se.png'
import Carusel from './components/carusel'

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
                href='https://api.citrusfiles.com/api/files/private_files/cjn61noxyhpqn29/speech_etiquette_vHQCjZhcPO.apk'
                download={'Speech Etiquette'}
              >
                <i className="ri-download-2-line"></i>
                17.9m
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

        This public speaking app has revealed your inner fear of public speaking through many practical public speaking exercises</p>
    </div>
  )
}

export default App