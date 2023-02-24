import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

function Footer() {
  return (
    <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
        <div>
          <h6 className="font-bold uppercase pt-2">SOLUTIONS</h6>
          <ul>
            <li className="py-1 cursor-pointer">TRAVEL</li>
            <li className="py-1 cursor-pointer">BOOKING</li>
            <li className="py-1 cursor-pointer">FLIGHTS</li>
            <li className="py-1 cursor-pointer">CRUISES</li>
            <li className="py-1 cursor-pointer">GROUND</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">SUPPORT</h6>
          <ul>
            <li className="py-1 cursor-pointer">PRICING</li>
            <li className="py-1 cursor-pointer">DOCUMENTATION</li>
            <li className="py-1 cursor-pointer">TOURS</li>
            <li className="py-1 cursor-pointer">REFUNDS</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">COMPANY</h6>
          <ul>
            <li className="py-1 cursor-pointer">ABOUT</li>
            <li className="py-1 cursor-pointer">BLOG</li>
            <li className="py-1 cursor-pointer">JOB</li>
            <li className="py-1 cursor-pointer">PRESS</li>
            <li className="py-1 cursor-pointer">PARTNERS</li>
          </ul>
        </div>
        <div>
            <h6 className="font-bold uppercase pt-2">LEGAL</h6>
            <ul>
                <li className="py-1 cursor-pointer">CLAIMS</li>
                <li className="py-1 cursor-pointer">PRIVACY</li>
                <li className="py-1 cursor-pointer">POLICIES</li>
                <li className="py-1 cursor-pointer">CONDITIONS</li>
            </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2">
            <p className="font-bold uppercase">SUBSCRIBE TO OUR NEWSLETTER</p>
            <p className="py-4">The Latest deals, articles and resources sent to your inbox weekly.</p>
            <form className="flex flex-col sm:flex-row">
                <input className="w-full p-2 mr-4 rounded-md mb-4 text-black" type="email" placeholder="Enter Your Email"/>
                <button className="p-2 mb-4 rounded-md">SUBSCRIBE</button>
            </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2023 EXPERIENCES, LLC. ALL RIGHTS RESERVED</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <TiSocialPinterest size={30}/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
