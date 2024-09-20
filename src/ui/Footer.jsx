import React from "react";

function Footer() {
  return (
    <div className="fixed w-[100%] bottom-0 bg-[#0a5089] text-gray-50 flex justify-center gap-32 py-10">
      <div className="px-4 text-m">
        <h1 className="text-xl">Address</h1>
        <p className="font-light">Email: vvs.supet@gmail.com</p>
        <p className="font-light">Call: +91 2898 274571/74/75</p>
      </div>
      <hr className="w-[1px] h-auto bg-slate-400" />
      <div className="px-4">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Campus</li>
          <li>Programs</li>
        </ul>
      </div>
      <hr className="w-[1px] h-auto bg-slate-400" />
      <div className="px-4">Social Icons</div>
      <hr className="w-[1px] h-auto bg-slate-400" />

      <div className="px-4">Our Logo</div>
    </div>
  );
}

export default Footer;
