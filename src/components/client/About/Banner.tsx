import React from 'react'

const Banner = () => {
    return (
        <div className="max-w-full slideShow overflow-hidden">
            <div className=" max-w-7xl w-full relative m-auto rounded-2xl overflow-hidden">
                <div className="mySlides fade">
                    <img className='w-full h-[450px] object-cover' src='https://mona.media/wp-content/uploads/2021/06/banner-giay.png'/>
                </div>
                <div className="overlay flex absolute top-0 w-full h-full bg-[#332C54] bg-opacity-[65%] text-center">
                    <div className="m-auto">
                        <h2 className="text-5xl text-white font-bold mb-3">About</h2>
                        <span className="text-sm text-white w-[550px] inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner