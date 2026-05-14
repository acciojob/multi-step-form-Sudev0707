import React from "react";

const Step = ({ 
  currentStep, 
  formData, 
  handleChange, 
  handleNext, 
  handlePrevious, 
  handleSubmit 
}) => {
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2>Step 1: Customer Details</h2>
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
            <h2>Step 2: Car Details</h2>
            <div>
              <label htmlFor="model">Model:</label>
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
                type="text"
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
            <h2>Step 3: Payment Details</h2>
            <div>
              <label htmlFor="card_info">Credit Card Number:</label>
              <input
                type="text"
                id="card_info"
                value={formData.card_info}
                onChange={handleChange}
                required
                placeholder="12 digit number"
              />
              <small>Credit card number must be exactly 12 digits long.</small>
            </div>
            <div>
              <label htmlFor="expiry_date">Expiration Date:</label>
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
  );
};

export default Step;