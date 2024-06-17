import React from "react";
import '../Navbar/navbar.css';
const Navbar = () => {
  return (
    <div className="Main-navbar">
      <div className="wrapper">
      <div className="navbar">
      <div class="browser-ui-nav-control"></div>
      <div class="browser-ui-nav-control"></div>
      <div class="browser-ui-nav-control"></div>
      <div className="link-bar">
        <button className="link-bar-btn">
        <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="w-4 mt-0.5 text-slate-300"><path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"></path>
        </svg><span>Click Publish to creare a sharable url...</span></button>
      </div>
      <div className="custom-domain">
     <button className="customize-domain-btn"> <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
      <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm6.918 6h-3.215a49.088 49.088 0 0 0-.565-3.357A8.048 8.048 0 0 1 18.918 8zm-5.904-3.928c.068.352.387 2.038.645 3.928h-3.318c.258-1.89.577-3.576.645-3.928C11.319 4.029 11.656 4 12 4s.681.029 1.014.072zM14 12c0 .598-.043 1.286-.109 2h-3.782c-.066-.714-.109-1.402-.109-2s.043-1.286.109-2h3.782c.066.714.109 1.402.109 2zM8.862 4.643A49.088 49.088 0 0 0 8.297 8H5.082a8.048 8.048 0 0 1 3.78-3.357zM4.263 10h3.821C8.033 10.668 8 11.344 8 12s.033 1.332.085 2H4.263C4.097 13.359 4 12.692 4 12s.098-1.359.263-2zm.819 6h3.215c.188 1.424.42 2.65.565 3.357A8.048 8.048 0 0 1 5.082 16zm5.904 3.928A77.282 77.282 0 0 1 10.341 16h3.318a78.303 78.303 0 0 1-.645 3.928c-.333.043-.67.072-1.014.072s-.681-.029-1.014-.072zm4.152-.571c.145-.707.377-1.933.565-3.357h3.215a8.048 8.048 0 0 1-3.78 3.357zM19.737 14h-3.821c.051-.668.084-1.344.084-2s-.033-1.332-.085-2h3.821c.166.641.264 1.308.264 2s-.097 1.359-.263 2z"></path>
      </svg>
        <span>Customize Domain</span> </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
