import { useState } from "react";

import { useRoute } from "next/router";

import ROUTES from "@/constants/routes";

import Welcome from "@/templates/Welcome";

const WelcomeScreen = () => {
  const router = useRoute();

  router.push(ROUTES.WELCOME);

  return (
    <>
      <Welcome />
    </>
  );
};

// WelcomeScreen.getLayout = function getLayout(page) {
//   return <AuthLayout isAuthScreen>{page}</AuthLayout>;
// };

// WelcomeScreen.route = ROUTES.WELCOME;

export default WelcomeScreen;
