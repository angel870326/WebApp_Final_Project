const setUser = (userId) => {
  window.localStorage.setItem("gatsbyUser", userId);
}

export const getUser = () => {
  if (window.localStorage.getItem("gatsbyUser")) {
    return window.localStorage.getItem("gatsbyUser");
  }
  else {
    return 0;
  }
}

export const handleLogin = async (formData) => {

  const jsonData = {};
  for (let [key, value] of formData.entries()) {
    jsonData[key] = value;
  }

  // Call API
  const response = await fetch('/api/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });

  const responseBody = await response.json();
  switch (responseBody.result) {
    case "Wrong password":
      setUser(responseBody.userId);
      alert('帳號或密碼錯誤！');
        break;
    case "Wrong username":
      setUser(responseBody.userId);
      alert('帳號或密碼錯誤！');
        break;
    case "Success":
      setUser(responseBody.userId);
      alert("登入成功！");
      window.location.href = '/';
        break;
    default:
      setUser(0);
      alert("系統錯誤");
      break;
  }

}

export const logout = () => {
  setUser(0);
  alert("登出成功！");
  window.location.href = '/';
}

export const isLoggedIn = () => {
  if (getUser() == 0) {
    return false;
  } else {
    return true;
  }
}