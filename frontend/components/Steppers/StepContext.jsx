import React, { useState } from "react";
import App from "../../pages/_app";
export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setCurrentStepState] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const setCurrentStep = (newStep) => {
    setCurrentStepState(newStep);
  };

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
