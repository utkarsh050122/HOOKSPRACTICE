import React, { useState } from 'react';

const MenuItem = ({ label, href, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = children != null;

  const handleClick = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <li className="relative">
      <a
        href={href}
        onClick={handleClick}
        className={`block px-4 py-2 text-sm text-gray-200 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out ${
          hasChildren ? 'cursor-pointer' : ''
        }`}
      >
        {label}
      </a>
      {hasChildren && isOpen && (
        <ul className="relative bg-blue-700 py-2 space-y-1">
          {children}
        </ul>
      )}
    </li>
  );
};

const Menu = () => {
  return (
    <nav className="bg-blue-800 shadow-lg">
      <ul className="flex flex-col items-start space-y-2">
        <MenuItem label="Home" href="/" />
        <MenuItem label="About Us" href="/about">
          <ul>
            <MenuItem label="Our Team" href="/team" />
            <MenuItem label="Our History" href="/history" />
            <MenuItem label="Our Mission" href="/mission" />
          </ul>
        </MenuItem>
        <MenuItem label="Services" href="/services">
          <ul>
            <MenuItem label="Web Design" href="/web-design">
              <ul>
                <MenuItem label="User Interface Design" href="/ui-design" />
                <MenuItem label="User Experience Design" href="/ux-design" />
              </ul>
            </MenuItem>
            <MenuItem label="Development" href="/development">
              <ul>
                <MenuItem label="Web Development" href="/web-development" />
                <MenuItem label="Mobile App Development" href="/app-development" />
              </ul>
            </MenuItem>
          </ul>
        </MenuItem>
        <MenuItem label="Portfolio" href="/portfolio" />
        <MenuItem label="Contact Us" href="/contact" />
      </ul>
    </nav>
  );
};

export default Menu;




// import React, { useState } from 'react';

// const MenuItem = ({ label, href, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const hasChildren = children != null;

//   const handleMouseEnter = () => {
//     if (hasChildren) setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     if (hasChildren) setIsOpen(false);
//   };

//   return (
//     <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <a
//         href={href}
//         onClick={(e) => {
//           if (hasChildren) e.preventDefault();
//           setIsOpen(!isOpen);
//         }}
//         className={`block px-4 py-2 text-sm text-gray-200 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out ${
//           hasChildren ? 'cursor-pointer' : ''
//         }`}
//       >
//         {label}
//       </a>
//       {hasChildren && isOpen && (
//         <ul className="absolute left-0 w-full bg-blue-700 py-2 space-y-1">
//           {children}
//         </ul>
//       )}
//     </li>
//   );
// };

// const Menu = () => {
//   return (
//     <nav className="bg-blue-800 shadow-lg">
//       <ul className="flex flex-col lg:flex-row items-center lg:space-x-4">
//         <MenuItem label="Home" href="/" />
//         <MenuItem label="About Us" href="/about">
//           <MenuItem label="Our Team" href="/team" />
//           <MenuItem label="Our History" href="/history" />
//           <MenuItem label="Our Mission" href="/mission" />
//         </MenuItem>
//         <MenuItem label="Services" href="/services">
//           <MenuItem label="Web Design" href="/web-design">
//             <MenuItem label="User Interface Design" href="/ui-design" />
//             <MenuItem label="User Experience Design" href="/ux-design" />
//           </MenuItem>
//           <MenuItem label="Development" href="/development">
//             <MenuItem label="Web Development" href="/web-development" />
//             <MenuItem label="Mobile App Development" href="/app-development" />
//           </MenuItem>
//         </MenuItem>
//         <MenuItem label="Portfolio" href="/portfolio" />
//         <MenuItem label="Contact Us" href="/contact" />
//       </ul>
//     </nav>
//   );
// };

// export default Menu;


// // Menu.js
// import React from 'react';

// const Menu = () => {
//   return (
//     <ul className="flex flex-col bg-gray-800 w-full text-white">
//       <li className="hover:bg-gray-700">
//         <a href="/" className="block px-4 py-2">Home</a>
//       </li>
//       <li className="group relative hover:bg-gray-700">
//         <a href="/about" className="block px-4 py-2">About Us</a>
//         <ul className="submenu hidden group-hover:flex flex-col">
//           <li className="hover:bg-gray-600"><a href="/team" className="block px-4 py-2">Our Team</a></li>
//           <li className="hover:bg-gray-600"><a href="/history" className="block px-4 py-2">Our History</a></li>
//           <li className="hover:bg-gray-600"><a href="/mission" className="block px-4 py-2">Our Mission</a></li>
//         </ul>
//       </li>
//       <li className="group relative hover:bg-gray-700">
//         <a href="/services" className="block px-4 py-2">Services</a>
//         <ul className="submenu hidden group-hover:flex flex-col">
//           <li className="group relative hover:bg-gray-600">
//             <a href="/web-design" className="block px-4 py-2">Web Design</a>
//             <ul className="submenu hidden group-hover:flex flex-col">
//               <li className="hover:bg-gray-500"><a href="/ui-design" className="block px-4 py-2">User Interface Design</a></li>
//               <li className="hover:bg-gray-500"><a href="/ux-design" className="block px-4 py-2">User Experience Design</a></li>
//             </ul>
//           </li>
//           <li className="group relative hover:bg-gray-600">
//             <a href="/development" className="block px-4 py-2">Development</a>
//             <ul className="submenu hidden group-hover:flex flex-col">
//               <li className="hover:bg-gray-500"><a href="/web-development" className="block px-4 py-2">Web Development</a></li>
//               <li className="hover:bg-gray-500"><a href="/app-development" className="block px-4 py-2">Mobile App Development</a></li>
//             </ul>
//           </li>
//         </ul>
//       </li>
//       <li className="hover:bg-gray-700">
//         <a href="/portfolio" className="block px-4 py-2">Portfolio</a>
//       </li>
//       <li className="hover:bg-gray-700">
//         <a href="/contact" className="block px-4 py-2">Contact Us</a>
//       </li>
//     </ul>
//   );
// }

// export default Menu;



// // // Menu.js
// // import React from 'react';
// // import './Menu.css'; // Ensure this CSS file is updated for horizontal display

// // const Menu = () => {
// //   return (
// //     <nav className="navbar">
// //       <ul className="menu">
// //         <li><a href="/">Home</a></li>
// //         <li className="has-submenu">
// //           <a href="/services">Services</a>
// //           <ul className="submenu">
// //             <li className="has-submenu">
// //               <a href="/web-design">Web Design</a>
// //               <ul className="submenu">
// //                 <li><a href="/ui-design">UI Design</a></li>
// //                 <li><a href="/ux-design">UX Design</a></li>
// //               </ul>
// //             </li>
// //             <li><a href="/development">Development</a></li>
// //             <li><a href="/marketing">Marketing</a></li>
// //           </ul>
// //         </li>
// //         <li><a href="/about">About Us</a></li>
// //         <li><a href="/contact">Contact</a></li>
// //       </ul>
// //     </nav>
// //   );
// // }

// // export default Menu;


// // // Menu.js
// // import React from 'react';
// // import './Menu.css'; // Make sure to create a CSS file with this name

// // const Menu = () => {
// //   return (
// //     <ul className="menu">
// //       <li><a href="/">Home</a></li>
// //       <li>
// //         <a href="/about">About Us</a>
// //         <ul className="submenu">
// //           <li><a href="/team">Our Team</a></li>
// //           <li><a href="/history">Our History</a></li>
// //           <li><a href="/mission">Our Mission</a></li>
// //         </ul>
// //       </li>
// //       <li>
// //         <a href="/services">Services</a>
// //         <ul className="submenu">
// //           <li>
// //             <a href="/web-design">Web Design</a>
// //             <ul className="submenu">
// //               <li><a href="/ui-design">User Interface Design</a></li>
// //               <li><a href="/ux-design">User Experience Design</a></li>
// //             </ul>
// //           </li>
// //           <li>
// //             <a href="/development">Development</a>
// //             <ul className="submenu">
// //               <li><a href="/web-development">Web Development</a></li>
// //               <li><a href="/app-development">Mobile App Development</a></li>
// //             </ul>
// //           </li>
// //         </ul>
// //       </li>
// //       <li><a href="/portfolio">Portfolio</a></li>
// //       <li><a href="/contact">Contact Us</a></li>
// //     </ul>
// //   );
// // }

// // export default Menu;
