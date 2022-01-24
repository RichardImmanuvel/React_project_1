import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import img1 from './myimage.jpg';
const Header = () => {
    return (
        <>
        <div className="border-2 border-solid border-black rounded-xl">
            <span class="flex flex-wrap items-start">
            <div>
                <img class="rounded-full w-[20%] h-[70%]"src={img1} alt=""></img>
            </div>
            <div class="font-serif pt-9">
                <h1 className="font-bold text-3xl text-blue-800 leading-6">Richard Immanuvel</h1>
                <h4 className="text-md">B.C.A (Computer application) | 2 years of experience in Sales Support Management Coordinator</h4>
            </div>
        
            <div class="text-lg text-justify font-serif"><p>To be a part of the team in a company,where I can utilize my technical and design skills and explore for more innovative ideas to keep a best with the current trend in our field and hence contribute to the success of organization.</p></div>
            </span>
        </div>
        </>
    )
}

export default Header
/*  Mobile view  375*667*/