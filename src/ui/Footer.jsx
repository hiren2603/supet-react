import React from "react";

function Footer() {
  return (
    <div className="fixed w-full bottom-0 bg-[#0a5089] text-gray-50 flex justify-center gap-0 py-10">
      <div className="flex lg: w-[75%] justify-around">
        <div className="px-4 font-extralight flex flex-col gap-4">
          <h1 className="text-2xl">Address</h1>
          <p className="font-light">Email: vvs.supet@gmail.com</p>
          <p className="font-light">Call: +91 2898 274571/74/75</p>
        </div>
        <hr className="w-[1px] h-auto bg-slate-400" />
        <div className="px-4 flex gap-10">
          <ul className="flex flex-col gap-4 font-extralight py-11">
            <li>About</li>
            <li>Campus</li>
            <li>Programs</li>
            <li>Announcement</li>
            <li>Contact</li>
          </ul>
          <ul className="flex flex-col gap-4 font-extralight">
            <h2 className="text-xl">Campus</h2>
            <li>Home</li>
            <li>About</li>
            <li>School</li>
            <li>Sports & Gym</li>
          </ul>
          <ul className="flex flex-col gap-4 font-extralight">
            <h2 className="text-xl">Programs</h2>
            <li>House Systems</li>
            <li>Clubs</li>
            <li>recognition & Awards</li>
            <li>Health</li>
            <li>Initiatives</li>
          </ul>
        </div>
        <hr className="w-[1px] h-auto bg-slate-400" />
        <div className="px-4 col-start-4">Social Icons</div>
        <hr className="w-[1px] h-auto bg-slate-400" />
        <div className="px-4 col-start-5">Our Logo</div>
      </div>
    </div>
  );
}

export default Footer;
// <div className="bottom-0 bg-primary py-4 w-full">
//   <div className="grid grid-cols-8 gap-4 justify-between m-auto text-white">
//     <div className="grid-col-2 text-white divide-x">
//       <h2 className="text-xl text-center ">Contact Us</h2>
//       <p className="font-light text-center">Email: vvs.supet@gmail.com</p>
//       <p className="font-light text-center">Call: +91 2898 274571/74/75</p>
//     </div>
//     <div className="grid grid-col-3 gap-4 grid-rows-1 border-slate-50 border-2">
//       <h2 className="text-xl col-span-3">Site Map</h2>
//       <div className="grid-cols-subgrid col-span-3">
//         <ul className="grid-col-1">
//           <li>About</li>
//           <li>Campus</li>
//           <li>Programs</li>
//           <li>Announcements</li>
//           <li>Contact</li>
//         </ul>
//         <ul className="grid-col-2">
//           <li>School</li>
//           <li>Sports & Gym</li>
//           <li>Hostels</li>
//           <li>Bhojanalaya</li>
//         </ul>
//         <ul className="grid-col-3">
//           <li>House Systems</li>
//           <li>Clubs</li>
//           <li>recognition & Awards</li>
//           <li>Health</li>
//           <li>Initiatives</li>
//         </ul>
//       </div>
//     </div>
//     <div className="grid-col-4 lg:divide-x">
//       <h2>Social</h2>
//       <p>Icons</p>
//     </div>
//     <div className="grid-col-5 lg:divide-x">
//       <h2>Our Logo</h2>
//     </div>
//   </div>
// </div>
