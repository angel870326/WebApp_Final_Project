import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout'
import { title } from "@/styles/jss/animal-cloud-adoption.js";
import AccountInfoEdit from '@/components/AccountPage/AccountInfoEdit'
import { isLoggedIn } from "@/services/auth";
import LoginRegisterRequest from "@/components/AuthPage/LoginRegisterRequest";

export default function AccountEditPage() {

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Layout>
      {isLoaded && (
        <>
          {isLoggedIn() ? (
            <>
              <h1 style={title}>我的頁面</h1>
              <AccountInfoEdit />
            </>
          ) : (
            <LoginRegisterRequest />
          )}
        </>
      )}
    </Layout>
  );

}