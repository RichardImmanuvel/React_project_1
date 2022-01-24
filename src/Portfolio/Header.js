import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import img1 from './myimage.jpg';
const Header = () => {
    return (
        <>
            <div className="border-2 border-double border-black rounded-xl flex flex-wrap items-start m-[2%] sm:m-0 sm:mx-[20%]">
                <div class="font-serif pt-9 flex flex-col sm:flex-row items-center px-[6%] sm:px-[20%]">
                    <img class="rounded-full w-[70px] h-[90px]" src={img1} alt=""></img>
                    <div class="flex flex-col">
                        <h1 className="font-bold text-3xl text-blue-800 leading-6">Richard Immanuvel</h1>
                        <h4 className="text-md sm:px-0 px-[2%]">B.C.A (Computer application) | 2 years of experience in Sales Support Management Coordinator</h4>
                    </div>
                </div>

                <div class="text-lg text-justify font-serif mx-[5%] sm:mx-[10%] "><p>To be a part of the team in a company,where I can utilize my technical and design skills and explore for more innovative ideas to keep a best with the current trend in our field and hence contribute to the success of organization.</p></div>

            </div>
        </>
    )
}

export default Header
/*  Mobile view  375*667*/