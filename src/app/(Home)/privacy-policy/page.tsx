import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-primary text-white py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-primary font-bold">Privacy Policy</h1>
          <p className="mt-4 opacity-90 max-w-2xl">
            We respect your privacy and are committed to protecting your personal data.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <section className="bg-primaryPro p-6 md:p-8 rounded-lg shadow">
            <h2 className="text-2xl font-primary font-semibold text-primary mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            <p className="text-gray-700">
              Last updated: March 13, 2025
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-primary font-semibold text-primary mb-6 border-b border-accent pb-2">Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-primary text-primary mb-3">Personal Data</h3>
                <p className="text-gray-700">
                  While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to:
                </p>
                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Usage Data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-primary text-primary mb-3">Usage Data</h3>
                <p className="text-gray-700">
                  We may also collect information on how the service is accessed and used. This data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-primaryPro p-6 md:p-8 rounded-lg shadow">
            <h2 className="text-2xl font-primary font-semibold text-primary mb-6">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the collected data for various purposes:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-primary text-primary mb-2">Service Provision</h3>
                <p className="text-gray-700">To provide and maintain our service, including monitoring the usage of our service.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-primary text-primary mb-2">Account Management</h3>
                <p className="text-gray-700">To manage your registration and account as a user of the service.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-primary text-primary mb-2">Communication</h3>
                <p className="text-gray-700">To contact you by email or other electronic communications regarding updates or informative communications.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-primary text-primary mb-2">Security</h3>
                <p className="text-gray-700">To protect our service and ensure the security of your personal information.</p>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-primary font-semibold text-primary mb-6 border-b border-accent pb-2">Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
            </p>
            <p className="text-gray-700">
              We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our service, or we are legally obligated to retain this data for longer time periods.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-primaryPro p-6 md:p-8 rounded-lg shadow">
            <h2 className="text-2xl font-primary font-semibold text-primary mb-6">Your Rights</h2>
            <p className="text-gray-700 mb-6">
              You have certain data protection rights. Our aim is to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span>1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-primary text-primary">The right to access</h3>
                  <p className="text-gray-700">You have the right to request copies of your personal data from us.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span>2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-primary text-primary">The right to rectification</h3>
                  <p className="text-gray-700">You have the right to request that we correct any information you believe is inaccurate.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span>3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-primary text-primary">The right to erasure</h3>
                  <p className="text-gray-700">You have the right to request that we erase your personal data, under certain conditions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Us */}
          <section className="border border-accent rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-primary font-semibold text-primary mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-primaryPro p-4 rounded inline-block">
              <div className="flex items-center space-x-2 text-primary font-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:privacy@example.com" className="hover:underline">privacy@example.com</a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container text-center">
          <p className="font-primary">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <p className="mt-2 text-sm opacity-75">This privacy policy was last updated on March 13, 2025.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;