import React from 'react';

const Contact = () => {

  return (
    <div className=" w-full ">
      <div className="flex flex-row justify-around items-center gap-30 mx-auto ">
      <div className="mt-5 p-4">
          <h2 className="text-2xl text-gray-800 font-bold dark:text-white">
            It's so easy to book a call
          </h2>
          <a href="https://calendly.com/chandreyeesengupta" target="_blank" rel="noopener noreferrer">
          <button className="mt-10 bg-gray-800 rounded-full px-6 py-3 text-white hover:bg-white hover:text-black">Book a Call</button>
        </a>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-20 text-2xl text-gray-800 font-bold dark:text-white">
            Or send us an email
          </h2>
       

        <div style={{ backgroundColor: 'rgba(255,255,255,0.8)' }} className="mt-5 p-4 relative z-10 border rounded-xl sm:mt-10 md:p-10 dark:bg-black dark:border-gray-700">
          <form>
            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium text-gray">
                Full name
              </label>
              <input
                type="text"
                id="hs-feedback-post-comment-name-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-white focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Full name"
                style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
              />
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-black">
                Email address
              </label>
              <input
                type="email"
                id="hs-feedback-post-comment-email-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Email address"
                style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
              />
            </div>

            <div>
              <label htmlFor="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium dark:text-black">
                Your Problem
              </label>
              <div className="mt-1">
                <textarea
                  id="hs-feedback-post-comment-textarea-1"
                  name="hs-feedback-post-comment-textarea-1"
                  rows="3"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Let me know what problms you face..."
                  style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                ></textarea>
              </div>
            </div>

            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white  disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gray-400 hover:text-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
