import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4">Privacy Policy for Chola Drives App</h1>
      <p className="mb-4">Last Updated: 25 July, 2024</p>
      <p className="mb-4">Welcome to Chola Drives App! This Privacy Policy is designed to help you understand how your personal information is collected, used, and safeguarded when you use our ride-sharing app. By accessing or using the Chola Drives App, you agree to the terms outlined in this Privacy Policy. We care about your privacy and the security of your personal information.</p>

      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>User Account Information:</strong> When you create an account, we collect your username, email address, password, and contact number.</li>
        <li><strong>Location Information:</strong> To provide nearby available passengers, we request and use your device's location permission. This helps in matching drivers with passengers effectively.</li>
        <li><strong>Camera and Storage Permission:</strong> We use your device's camera and storage permission to allow drivers to upload documents for verification purposes. This may include capturing and storing images of documents like driver's licences, vehicle registration, and other necessary documentation.</li>
      </ul>

      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Matching Drivers and Passengers:</strong> Your location information is used to match you with nearby passengers who need a ride. This ensures a smooth and efficient ride-sharing experience.</li>
        <li><strong>Account Management:</strong> We use your account information to manage your Chola Drives App account, including account authentication, security, and customer support.</li>
        <li><strong>Communication:</strong> We may use your email address and contact number to send you important updates, notifications, and information related to your rides and account.</li>
        <li><strong>Verification Process:</strong> The documents uploaded via camera and storage permissions are used solely for verifying the identity and eligibility of drivers. This helps maintain a secure and trustworthy platform.</li>
        <li><strong>Improvement of Services:</strong> We analyze user data to enhance and improve our app's functionality, user experience, and overall service quality.</li>
      </ul>

      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">Information Sharing and Security</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Third-Party Partners:</strong> We may share anonymized and aggregated data with third-party partners for analytics and statistical purposes.</li>
        <li><strong>Legal Compliance:</strong> We may disclose personal information if required by law or in response to a legal process.</li>
        <li><strong>Security Measures:</strong> We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.</li>
      </ul>

      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">Children's Privacy</h2>
      <p className="mb-4">Chola Drives App is intended for users who are 18 years of age and older. We do not knowingly collect personal information from individuals under the age of 18.</p>

      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">Updates to Privacy Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.</p>

      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">If you have any questions, concerns, or requests regarding your privacy or this Privacy Policy, please contact us at choladrives@gmail.com.</p>

      <p className="mb-4">Thank you for choosing Chola Drives App for your ride-sharing needs!</p>

      <div className="flex justify-center">
      </div>
    </div>
  );
};

export default PrivacyPolicy;
