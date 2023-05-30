import React, { useEffect, useState } from "react";
import Layout from '@/components/Layout'
import ExtendPlan from "@/components/PlanPage/ExtendPlan"
import { isLoggedIn } from "@/services/auth";
import LoginRequest from "@/components/AuthPage/LoginRequest";

export default function extendAdopt() {
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
              <ExtendPlan />
            ) : (
              <LoginRequest/>
            )}
          </>
        )}
      </Layout>
    </div>
  );
}