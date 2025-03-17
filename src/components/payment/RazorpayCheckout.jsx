import React from "react";

const RazorpayCheckout = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const openRazorpay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_yVz6GhSW16zUfT", // Replace with your Razorpay Key ID
      amount: 50000, // Amount in paise (₹500.00)
      currency: "INR",
      name: "Your Brand Name",
      description: "Test Payment",
      image: "https://yourlogo.com/logo.png", // Replace with your logo URL
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <h2>Razorpay UI Integration in React</h2>
      <button onClick={openRazorpay}>Pay with Razorpay</button>
    </div>
  );
};

export default RazorpayCheckout;
