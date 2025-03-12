import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-[#234e52] to-[#1a6e74] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-[#E8F6F3] max-w-3xl mx-auto">
            Join our community of passionate learners and expert tutors to
            achieve your educational goals.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex-1 max-w-md">
            <div className="bg-[#234e52] py-4">
              <h3 className="text-center text-xl font-bold text-white">
                Sign Up as a Student
              </h3>
            </div>
            <div className="p-6 text-center">
              <div className="mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-[#234e52]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14v7"
                  />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                Access expert tutors, comprehensive resources, and personalized
                learning plans to achieve your goals.
              </p>
              <a
                href="#register-student"
                className="inline-block bg-[#234e52] hover:bg-[#1a3c3f] text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Get Started Now
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex-1 max-w-md">
            <div className="bg-[#2a6064] py-4">
              <h3 className="text-center text-xl font-bold text-white">
                Register as a Tutor
              </h3>
            </div>
            <div className="p-6 text-center">
              <div className="mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-[#2a6064]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                Share your expertise, build your teaching portfolio, and earn
                competitive rates with flexible scheduling.
              </p>
              <a
                href="#register-tutor"
                className="inline-block bg-[#2a6064] hover:bg-[#234e52] text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#E8F6F3] text-lg">
            Have questions?{" "}
            <a
              href="#contact"
              className="font-medium underline hover:text-white transition duration-300"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
