import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({

    first_name: '',
    last_name: '',

    model: '',
    car_price: '',

    card_info: '',
    expiry_date: ''
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully! Check console for data.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2>Customer Details</h2>
            <div>
              <label htmlFor="first_name">First Name:</label>
              <input
                type="text"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="last_name">Last Name:</label>
              <input
                type="text"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2>Car Details</h2>
            <div>
              <label htmlFor="model">Car Model:</label>
              <input
                type="text"
                id="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="car_price">Car Price:</label>
              <input
                type="number"
                id="car_price"
                value={formData.car_price}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2>Payment Details</h2>
            <div>
              <label htmlFor="card_info">Card Information:</label>
              <input
                type="text"
                id="card_info"
                value={formData.card_info}
                onChange={handleChange}
                required
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div>
              <label htmlFor="expiry_date">Expiry Date:</label>
              <input
                type="text"
                id="expiry_date"
                value={formData.expiry_date}
                onChange={handleChange}
                required
                placeholder="MM/YY"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <div className="multi-step-form">
        <div className="step-indicator">
          Step {currentStep} of 3
        </div>
        <form onSubmit={handleSubmit}>
          {renderStep()}

          <div className="button-group">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="prev-button"
              >
                Previous
              </button>
            )}

            {currentStep < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="next-button"
              >
                Next
              </button>
            )}

            {currentStep === 3 && (
              <button
                type="submit"
                className="submit-button"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;