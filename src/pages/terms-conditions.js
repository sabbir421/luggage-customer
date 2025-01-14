import React from "react";

const TermsCondition = () => {
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
      <div style={titleStyle}>Luggagekeepers User Terms and Conditions</div>

      <p style={textStyle}>
        Thank you for choosing Luggagekeepers ("we", "us", "our")! These Terms and
        Conditions ("Terms") govern your use of the Luggagekeepers mobile application
        (the "App") and any services provided through the App. By accessing or
        using the App, you agree to be bound by these Terms.
      </p>

      <h3 style={sectionTitleStyle}>1. Account Registration:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          To use certain features of the App, you may be required to create an
          account. You agree to provide accurate, current, and complete
          information during the registration process.
        </li>
        <li style={textStyle}>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>2. Use of the App:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          You may use the App for personal, non-commercial purposes only. You
          agree not to use the App for any unlawful or prohibited purpose.
        </li>
        <li style={textStyle}>
          You agree to comply with all applicable laws, regulations, and
          third-party agreements when using the App.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>3. Booking and Payment:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          You may use the App to book services offered by third-party providers
          ("Providers"). All bookings are subject to availability and
          confirmation by the Provider.
        </li>
        <li style={textStyle}>
          Payment for services booked through the App will be processed securely
          through our integrated payment gateway. You agree to pay all fees and
          charges associated with your bookings.
        </li>
        <li style={textStyle}>
          <strong>Refunds and Cancellations:</strong> If a booking is canceled
          by either party (User or Provider), the User will be refunded the full
          amount paid for the booking with no additional fees deducted. Refunds
          will be issued to the original payment method within a reasonable
          timeframe.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>4. Prohibited Items Policy:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          Users are prohibited from storing certain items in luggage storage
          facilities booked through the App, including but not limited to
          hazardous materials, illegal substances, perishable goods, and items
          with sentimental or irreplaceable value.
        </li>
        <li style={textStyle}>
          Providers reserve the right to inspect and refuse storage of any items
          that violate this policy. Users found to be in violation of this
          policy may be subject to additional fees or penalties.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>5. User Content:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          You may have the opportunity to submit content, such as reviews or
          ratings, through the App. You agree not to submit any content that is
          unlawful, offensive, or infringes upon the rights of others.
        </li>
        <li style={textStyle}>
          By submitting content through the App, you grant Luggagekeepers a
          non-exclusive, royalty-free, perpetual, irrevocable, and fully
          sublicensable right to use, reproduce, modify, adapt, publish,
          translate, create derivative works from, distribute, and display such
          content.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>6. Intellectual Property:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          The App and its content, including but not limited to text, graphics,
          logos, images, and software, are protected by copyright, trademark,
          and other intellectual property laws.
        </li>
        <li style={textStyle}>
          You agree not to modify, reproduce, distribute, transmit, display, or
          create derivative works based on the App or its content without the
          prior written consent of Luggagekeepers.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>7. Disclaimer of Warranties:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          The App is provided on an "as is" and "as available" basis, without
          any warranties of any kind, either express or implied.
        </li>
        <li style={textStyle}>
          Luggagekeepers does not warrant that the App will be error-free,
          uninterrupted, secure, or free from viruses or other harmful
          components.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>8. Limitation of Liability:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          In no event shall Luggagekeepers be liable for any indirect, incidental,
          special, consequential, or punitive damages, including but not limited
          to loss of profits, data, or goodwill, arising out of or in connection
          with your use of the App.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>9. Governing Law and Dispute Resolution:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          These Terms shall be governed by and construed in accordance with the
          laws of the United Kingdom. Any disputes arising under these Terms
          shall be resolved through arbitration in accordance with the rules of
          the United Kingdom.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>10. Changes to Terms:</h3>
      <ul style={listStyle}>
        <li style={textStyle}>
          Luggagekeepers reserves the right to update or modify these Terms at any time
          without prior notice. Any changes to these Terms will be effective
          immediately upon posting on the App.
        </li>
      </ul>

      <h3 style={sectionTitleStyle}>11. Contact Us:</h3>
      <p style={textStyle}>
        If you have any questions or concerns about these Terms or our services,
        please contact us at support@Luggagekeepers.com
      </p>

      <p style={textStyle}>
        Thank you for using Luggagekeepers. By using the App, you acknowledge that you
        have read, understood, and agree to be bound by these Terms.
      </p>
    </div>
  );
};

export default TermsCondition;
