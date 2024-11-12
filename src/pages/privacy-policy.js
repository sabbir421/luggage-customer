import React from "react";

const Privacy = () => {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    padding: "20px",
    maxWidth: "800px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    lineHeight: "1.6",
  };

  const titleStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const sectionTitleStyle = {
    color: "#444",
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const listStyle = {
    paddingLeft: "20px",
  };

  const textStyle = {
    color: "#555",
    marginBottom: "15px",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Doorap App Privacy Policy</div>

      <p style={textStyle}>
        Thank you for choosing Doorap ("we", "us", "our")! We are committed to
        protecting your privacy and providing you with a safe and secure
        experience when using our mobile application (the "App"). This Privacy
        Policy explains how we collect, use, and disclose your personal
        information when you use the App. By accessing or using the App, you
        agree to the terms of this Privacy Policy.
      </p>

      <h3 style={sectionTitleStyle}>1. Information We Collect:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          <strong>Personal Information:</strong> We may collect personal
          information that you provide directly to us, such as your name, email
          address, phone number, and payment information when you create an
          account or make a booking through the App.
        </li>
        <li style={textStyle}>
          <strong>Location Information:</strong> With your consent, we may
          collect your precise location data to provide you with location-based
          services, such as finding nearby service providers or displaying your
          current location on the map.
        </li>
        <li style={textStyle}>
          <strong>Usage Data:</strong> We may collect information about how you
          interact with the App, including your browsing activity, search
          queries, bookings, and preferences.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>2. How We Use Your Information:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          <strong>To Provide Services:</strong> We use your personal information
          to provide you with the services offered by the App, including
          facilitating bookings, processing payments, and improving the user
          experience.
        </li>
        <li style={textStyle}>
          <strong>To Communicate with You:</strong> We may use your contact
          information to send you important updates, notifications, and
          promotional offers related to the App.
        </li>
        <li style={textStyle}>
          <strong>To Improve Our Services:</strong> We use usage data to analyze
          trends, monitor the performance of the App, and identify areas for
          improvement.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>3. How We Share Your Information:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          <strong>With Service Providers:</strong> We may share your personal
          information with third-party service providers who assist us in
          providing the services offered by the App, such as payment processors
          and customer support providers.
        </li>
        <li style={textStyle}>
          <strong>For Legal Purposes:</strong> We may disclose your information
          to comply with applicable laws, regulations, legal processes, or
          government requests, or to protect the rights, property, or safety of
          Doorap, our users, or others.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>4. Data Security:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          We implement reasonable security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction.
        </li>
        <li style={textStyle}>
          All payment transactions are processed securely through our integrated
          payment gateway.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>5. Your Choices:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          <strong>Location Services:</strong> You can enable or disable location
          services through your device settings or within the App.
        </li>
        <li style={textStyle}>
          <strong>Communications:</strong> You can opt out of receiving
          promotional emails or push notifications from us by following the
          instructions provided in the communication.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>6. Children's Privacy:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          The App is not intended for use by individuals under the age of 18
          without parental consent. We do not knowingly collect personal
          information from individuals under the age of 18 without parental
          consent.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>7. Changes to Privacy Policy:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          We reserve the right to update or modify this Privacy Policy at any
          time. We will notify you of any changes by posting the revised policy
          on the App or through other means.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>8. Contact Us:</h3>
      <p style={textStyle}>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at support@doorap.com
      </p>

      <p style={textStyle}>
        Thank you for reading our Privacy Policy. By using the App, you
        acknowledge that you have read, understood, and agree to be bound by
        this Privacy Policy.
      </p>
    </div>
  );
};

export default Privacy;
