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
                href='https://androundher.info/dUg2blpKK0VTCTAwYjQCP3FTAxgjGVgaf0cObAIAMi5YHjIgeEVIOxc8C158By1SU2tTO1tTa0NuXVM8FDtCGyoZJ1cKf0d4RR4%2FECteS2hFLUIHKwAtQho%2FUHoGGykcJlFLaEUsXxw%2FFjwTXGoZIVgFf0d4RQc9G20EXigQOUMHKBAsE1xqBjhXDT9QegYCMxghQh1%2FR3hFBjsHLRNcagAmWgc3HDxTCn9HeF4BKQEhWAl%2FR3hQBzYQOxNcahEnQQA2GilSS2hFLkQLP1B6BggzGS0TXGoAOFoBOxFuQFNrW3sCQGlDZgJIKQE7C158BTpYU2pTLVsMZ0VuQgc%2BSHkGXmJDfQBIKA0xC19pQ35pWWxNbl8AOUh5AkgvSHkFX21DfgZWY019BldtTXEQDz0QKwtfbUR5B15jR3AASDwGdQdINxcjVFNoQWYHWGxHfgVWY0B%2BBl9tQW5QBzYQdWUePxArXktoRS1CBysALUIaP1spRgV8By1QUzIBPEYdf0YJE1wcUHpwCDsGPEMeNhopUkAzGm0EKD8bbQQoHiUwUj0tEhhXLAk0LFUnf0cOUAc2EG5ZHShILlcdLgA4WgE7EWZfAXwRO0ICZx08Qh4pUHt3S2gzbQQoPBQ7QhsqGSdXCnQcJxNcHCMbZ18JJyt6GB9GJxNcHDEYTgoJAi9mDxgmCVINE1B6cAVqECVUDzEDHnE4OEFtBCgJBS1TDTJQegNcahA8Xx8vEDxCC3QUOF1IMAY8C158ECZEU2pTJFUbO0glWRQzGSRXS2gzfRhef0d4HhkzGyxZGSlQegYALlB6Bl9qW3gTXRhQegYZMxt%2BAktpN20EXiJDfB9LaEUpRh42ED9TDDEcPBNcHEB7AUBpQ20EXnIeIEIDNlB6dUtoRSRfBT9QegYJPxYjWUd%2FR3hVBigaJVNLaDN5BFx0RWYGQGpQegYdOxMpRAd%2FRw4DXW1bewBILg8sC1t8ACRZDWcHPRs8D1B6dRwvUHp1GyBTIVBTalMrQlNrUytCDWdBbmk9Ay0GC19tRHkHXmNBfgZbbUFuQxooRHUGXmBFeAxfblM9QhxoSHoHXnwAPERdZ0RuQxooQXUGSC8BOgNTalM9QhxsSHgQGy4HfwtefAMpWgc%2BSHk%3D'
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