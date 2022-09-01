import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'
import {ArrowBackIos} from '@material-ui/icons'

  // install Swiper modules
  SwiperCore.use([Autoplay]);

const Slider = () => {
    return (
        <>
        <div className="container-fluid slider-div g-0 ">
       
            <Swiper 
                spaceBetween={0}
                centeredSlides={false}
                loop={true}
                slidesPerView={'1'}
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                }}>
                <SwiperSlide>
                
                <div className="slider-div">
                 <Image className="slider-img" src='https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={1440} height={500} objectFit='cover'  alt="" />
                </div>
             </SwiperSlide>
                <SwiperSlide>
                <div className="slider-div">
                <Image className="slider-img"  src='https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={1440} height={500} objectFit='cover'  alt="" />
                </div>
             </SwiperSlide>
                <SwiperSlide>
                <div className="slider-div">
                <Image className="slider-img" src='https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={1440} height={500} objectFit='cover'   alt="" />
                </div>
             </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}

export default Slider
