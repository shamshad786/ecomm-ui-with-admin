import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import Link from "next/link";
import {categories} from '../components/data';
import {Category} from '@material-ui/icons'

SwiperCore.use([Autoplay]);

const CategorySlide = () => {

  return (
            <div className="container cardmaindiv">
                    <div className="service-main-div">
                <div className='service-heading-div'>
                <h5>Categories</h5>
                <Category className='category-icon' />
                <select className='productlist-selected-otpions'  name="" id="">
                <option value=''>Select</option>
                    {
                        categories.map((data)=>{
                            return(
                                <option key={data.id} value={data.id}>{data.title}</option>
                            )
                        })
                    }
                </select>
                <Link href={'/productlist'} passHref>
                <button className='category-filter-search-homepage-btn' >Filter Search</button>
                </Link>
                </div>
                <h1>Latest Fashions</h1>  
                </div>

                <div className="container">
                <Link href={'/productlist'} passHref>
                <div className="card-main-div">
                <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                }}
                // slider breakpoints for mobile start
                    breakpoints={{
                     300:{
                         slidesPerView: 1, 
                          },
                           992: {
                         slidesPerView: 3
                           },
                              }} 
                 // slider breakpoints for mobile end
                        navigation
                        // pagination={{ clickable: true }}
                      
                        onSwiper={(swiper) => console.log()}
                        onSlideChange={() => console.log()}
                        >
                        {
                            categories.map((data)=>{
                            return(
                              <SwiperSlide key={data.id}>
                                <div className='category-card'>
                                    <div className='category-slider-product-img-div' >
                                    <Image className='category-slider-product-img' src={data.img} layout='fill'  alt='' objectFit='cover'  />
                                    </div>
                                    <div className='cat-info-content'>
                                        <h4>{data.title}</h4>
                                        
                                        <button>Shop Now</button>
                                      
                                    </div>
                                </div>
                              </SwiperSlide>
                            )
                          })
                        }
                        </Swiper>
                        </div>
                        </Link>
                </div>
            </div>
  
  );
};

export default CategorySlide;
