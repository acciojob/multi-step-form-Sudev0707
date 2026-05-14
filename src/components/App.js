import React, { useState } from "react";
import Step from "./Step";
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

  return (
    <div>
      <div className="multi-step-form">
        <Step 
          currentStep={currentStep}
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default App;