import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout'
import JoinPlan from "@/components/PlanPage/JoinPlan";
import LoginRegisterRequest from "@/components/AuthPage/LoginRegisterRequest";
import { isLoggedIn } from "@/services/auth";

export default function JoinAdopt() {

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      <Layout>
        {isLoaded && (
          <>
            {isLoggedIn() ? (
              <JoinPlan />
            ) : (
              <LoginRegisterRequest />
            )}
          </>
        )}
      </Layout>
    </div>
  );

}