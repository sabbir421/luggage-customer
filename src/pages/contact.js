// import React, { useState } from 'react';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission, e.g., send data to a server or an API endpoint
//         console.log('Form data:', formData);
//     };

//     return (
//         <div className="flex flex-col items-center p-4 md:p-8">
//             <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
//             <p className="text-center mb-8 max-w-xl">
//                 If you have any questions or concerns, feel free to contact us. We would love to hear from you.
//             </p>

//             <form
//                 onSubmit={handleSubmit}
//                 className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
//             >
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Name
//                     </label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="subject" className="block text-sm font-medium mb-2">
//                         Subject
//                     </label>
//                     <input
//                         type="text"
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                         Message
//                     </label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         rows="5"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                     ></textarea>
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
//                 >
//                     Send Message
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Contact;

import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-xl rounded-2xl max-w-lg p-8 md:p-12 text-center transform hover:scale-105 transition-all duration-500 ease-in-out">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Have questions or need assistance? We're here to help! Reach out and we'll get back to you as soon as possible.
                </p>
                <p className="text-2xl font-semibold">
                    <a href="mailto:support@doorap.com" className="text-purple-600 hover:text-purple-800 underline decoration-dotted decoration-purple-400 hover:decoration-wavy transition-all">
                        support@doorap.com
                    </a>
                </p>
                <div className="mt-10">
                    <p className="text-gray-500 italic">We look forward to hearing from you!</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;

