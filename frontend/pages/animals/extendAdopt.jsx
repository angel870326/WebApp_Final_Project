import React, { useEffect, useState } from "react";
import Layout from '@/components/Layout'
import ExtendPlan from "@/components/PlanPage/ExtendPlan"
import { isLoggedIn } from "@/services/auth";
import LoginRegisterRequest from "@/components/AuthPage/LoginRegisterRequest";

export default function ExtendAdopt() {

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
                            <ExtendPlan />
                        ) : (
                            <LoginRegisterRequest />
                        )}
                    </>
                )}
            </Layout>
        </div>
    );

}