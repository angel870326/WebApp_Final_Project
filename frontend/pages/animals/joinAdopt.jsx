import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import JoinPlan from "@/components/PlanPage/JoinPlan";
import { isLoggedIn } from "@/services/auth";
import LoginRequest from "@/components/AuthPage/LoginRequest";

export default function joinAdopt() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Layout>
        {isClient && (
          <>
            {isLoggedIn() ? (
              <JoinPlan />
            ) : (
              <LoginRequest/>
            )}
          </>
        )}
      </Layout>
    </div>
  );
}
