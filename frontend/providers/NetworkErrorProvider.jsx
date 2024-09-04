import React, { useEffect, useState } from "react";
import NetworkError from "@/pages/network-error";

function NetworkErrorProvider({ children }) {
  const [networkError, setNetworkErrorState] = useState(false);

  useEffect(() => {
    const checkNetwork = async () => {
      console.log("Checking network...");
      try {
        const response = await fetch(
          `https://www.google.com?cacheBust=${Date.now()}`
        );
        console.log("Response:", response);
        if (!response.ok) {
          setNetworkErrorState(true);
        } else {
          setNetworkErrorState(false);
        }
      } catch (error) {
        console.log("Error:", error);
        setNetworkErrorState(true);
      }
    };

    checkNetwork();
  }, []);

  if (networkError === null) {
    return <Loading />;
  } else if (!networkError) {
    return <NetworkError />;
  } else if (networkError) {
    return <React.Fragment>{children}</React.Fragment>;
  }
}

export default NetworkErrorProvider;
