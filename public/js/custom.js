// 这里编写自定义js脚本；将被静态引入到页面中
// document.getElementById('draggableBox').style.left = '0px'
//
//
// document.getElementById('draggableBox').style.top = ''
// document.addEventListener("DOMContentLoaded", function() {
//   let link = document.querySelector('.menu-link.pl-2.pr-4.tracking-widest.pb-1');
//
//   if (link) {
//     link.childNodes.forEach(function(node) {
//       if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() === "友情链接") {
//         node.nodeValue = "Links";
//       }
//     });
//   }
// });

// const isDarkMode = () => {
//   const htmlElement = document.getElementsByTagName('html')[0]
//   return htmlElement.classList.contains('dark')
// }

// create the contact form and add it to the above page.
// import React, { useState } from "react";
//
// const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint
//
// const ContactForm = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     const inputs = e.target.elements;
//     const data = {};
//
//     for (let i = 0; i < inputs.length; i++) {
//       if (inputs[i].name) {
//         data[inputs[i].name] = inputs[i].value;
//       }
//     }
//
//     fetch(FORM_ENDPOINT, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Form response was not ok');
//         }
//
//         setSubmitted(true);
//       })
//       .catch((err) => {
//         // Submit the form manually
//         e.target.submit();
//       });
//   };
//
//   if (submitted) {
//     return (
//       <>
//         <div className="text-2xl">Thank you!</div>
//         <div className="text-md">We'll be in touch soon.</div>
//       </>
//     );
//   }
//
//   return (
//     <form
//       action={FORM_ENDPOINT}
//       onSubmit={handleSubmit}
//       method="POST"
//     >
//       <div className="mb-3 pt-0">
//         <input
//           type="text"
//           placeholder="Your name"
//           name="name"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-3 pt-0">
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-3 pt-0">
//         <textarea
//           placeholder="Your message"
//           name="message"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-3 pt-0">
//         <button
//           className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//           type="submit"
//         >
//           Send a message
//         </button>
//       </div>
//     </form>
//   );
// };
//
// export default ContactForm;
