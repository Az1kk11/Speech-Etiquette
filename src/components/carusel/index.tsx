import React, { useState } from 'react'

import img1 from '../../image/1.png'
import img2 from '../../image/2.png'
import img3 from '../../image/3.png'
import img4 from '../../image/4.png'

import './style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

const Carusel: React.FC = () => {
    const [image, setImage] = useState<boolean>(false)
    return (

        <div className="carusel">
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                autoplay
                pagination={{ clickable: true }}
                onSwiper={(swiper: any) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >

                <SwiperSlide>
                    <img src={img1} alt="" onClick={() => setImage(true)} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" onClick={() => setImage(true)}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" onClick={() => setImage(true)}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" onClick={() => setImage(true)}/>
                </SwiperSlide>
            </Swiper>

            <div className={image ? 'modal-swiper' : 'none'}>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper: any) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    <SwiperSlide>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                    </SwiperSlide>
                </Swiper>
                <div style={image ? {} : { display: 'none' }} onClick={() => setImage(false)} className='close'>
                    <i className="ri-close-line"></i>
                </div>
            </div>
        </div>

    )
}


export default Carusel