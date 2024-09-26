// import { ThemeProvider } from "@emotion/react";

// import { useRouter } from "next/router";
// import { GoogleAnalytics } from "nextjs-google-analytics";

// import firebaseConfig from "@/firebase/config";

// import GlobalProvider from "@/providers/GlobalProvider";
// import theme from "@/theme/theme";

// import "@/styles/globals.css";
// import NetworkErrorProvider from "@/providers/NetworkErrorProvider";

// import { useContext, useEffect, useState } from "react";
// import Onboarding from "@/components/Onboarding/Onboarding";
// import FirstStep from "@/components/Steppers/FirstStep";
// import SecondStep from "@/components/Steppers/SecondStep";
// import { Stepper, Step, StepLabel } from "@mui/material";
// import { multiStepContext } from "@/components/Steppers/StepContext";
// import StepContext from "@/components/Steppers/StepContext";

// const App = ({ Component, pageProps }) => {
//   const { currentStep, finalData } = useContext(multiStepContext, { currentStep: 1 }) || {};
//   console.log(multiStepContext);
//   console.log('Current step:', currentStep);

//   // const getLayout = Component.getLayout || ((page) => page);
//   const { query } = useRouter();
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // useEffect(() => {
//   //   console.log("Current step updated:", currentStep);
//   // }, [currentStep]);

//   const showStep = () => {
//     console.log('Current step:', currentStep);
//     if (currentStep === 1) {
//       return <FirstStep />;
//     } else if (currentStep === 2) {
//       return <SecondStep />;
//     } else {
//       return <div>Invalid step</div>;
//     }
//   };
 

//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalProvider>
//         {/* <Onboarding /> */}
//         {isClient && (
//           // <Onboarding />
//           <>
//             <div className="center-stepper" >
//               <Stepper
//                 style={{ width: "18%", marginLeft: "auto", marginRight: "auto" }}
//                 activeStep={currentStep - 1}
//                 orientation="horizontal"
//               >
//                 <Step>
//                   <StepLabel></StepLabel>
//                 </Step>
//                 <Step>
//                   <StepLabel></StepLabel>
//                 </Step>
//               </Stepper>
//               {/* {currentStep === 1 ? <FirstStep /> : <SecondStep />}
//               {console.log(currentStep)} */}
//             </div>
//             {showStep(currentStep)}
//             <StepContext >
//               <FirstStep />
//               <SecondStep />
//             </StepContext>
//           </>

//           // <NetworkErrorProvider>
//           //   <GoogleAnalytics
//           //     trackPageViews
//           //     gaMeasurementId={firebaseConfig.measurementId}
//           //   />
//           //   {getLayout(<Component {...pageProps} />, query)}
//           // </NetworkErrorProvider>
//         )}
//       </GlobalProvider>
//     </ThemeProvider>
//   );
// };


// export default App;

import { ThemeProvider } from '@emotion/react';

import { useRouter } from 'next/router';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import firebaseConfig from '@/firebase/config';

import GlobalProvider from '@/providers/GlobalProvider';
import theme from '@/theme/theme';

import '@/styles/globals.css';
import NetworkErrorProvider from '@/providers/NetworkErrorProvider';

import withLayoutRedirect from '@/hoc/onboarding/withLayoutRedirect';

import { useEffect, useState } from 'react';

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  const { query, pathname } = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); 

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderComponent = () => {
    // console.log('Current step:', currentStep);
    // if(currentStep === 1 ) {
    //   console.log('Rendering signup and signin pages');
    //   return getLayout(<Component {...pageProps} />, query);
    // } else {
    //   console.log('Rendering onboarding step pages');
    //   return withLayoutRedirect(Component, pageProps, pathname);
    // }

    return withLayoutRedirect(Component, pageProps, pathname);

  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        {isClient && (
          <NetworkErrorProvider>
            <GoogleAnalytics
              trackPageViews
              gaMeasurementId={firebaseConfig.measurementId}
            />
                {renderComponent()}
             {/* {withLayoutRedirect(Component, pageProps, pathname)} */}
            {/* {getLayout(<Component {...pageProps} />, query)} */}
          </NetworkErrorProvider>
        )}
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;