import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout'
import JoinPlan from "@/components/PlanPage/JoinPlan";
import LoginRequest from "@/components/AuthPage/LoginRequest";
import { isLoggedIn } from "@/services/auth";
import { useRouter } from 'next/router';

// 送出表單
const handleSubmit = async () => {

  event.preventDefault();

  // Form data
  const formData = new FormData(event.target);
  const jsonData = {};
  for (let [key, value] of formData.entries()) {
    jsonData[key] = value;
  }

  // Data Validation
  if (jsonData.option === "") {
    alert('請選擇方案！');
    return;
  }

  // Call API
  // use memberId = 1 just for testing
  const response = await fetch(`/api/addDonation/1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });

  if (response.ok) {
    alert('匯款通知信件已寄出！\n請至您的 email 確認信件，\n並於時間內完成匯款。');
    window.location.href = `/animals/animalsInfo?a_id=${jsonData.animalId}`;
  } else {
    alert("系統錯誤");
  }

  return;

};

export default function JoinAdopt() {
  const [isClient, setIsClient] = useState(false);

  // 選擇方案
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionLabel, setSelectedOptionLabel] = useState(null);
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOptionLabel(event.target.value.label);
    if (!selectedOption) {
      setChecked((prev) => !prev);
    }
  };

  // Call API
  const router = useRouter();
  const { a_id } = router.query;
  const [isLoading, setLoading] = useState(true);
  // GET 所有方案所有資訊 
  const [options, setOptions] = useState({});
  // GET 單一 User (所有)資訊
  const [user, setUser] = useState({});
  // GET 單一 Animal (所有)資訊
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    setIsClient(true);

    if (a_id) {
      async function fetchData() {
        try {
          // use memberId = 1 just for testing
          const response = await fetch(`/api/getJoiningDonatePlan/${a_id}/1`);
          const jsonData = await response.json();
          setOptions(jsonData.options);
          setUser(jsonData.user);
          setAnimal(jsonData.animal);
        } catch (error) { }
        setLoading(false);
      }
      fetchData();
    }
  }, [a_id]);
  // const options = [{ id: 1, label: '方案一', price: 100, duration: 1 },];
  // const user = { id: 33, email: 'b08705037@ntu.edu.tw', anonymous: true };
  // const animal = { id: 22, name: '小黑' };

  if (isLoading) {
    return;
  } else {
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

}