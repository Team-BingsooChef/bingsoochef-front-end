import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/common/RootLayout";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";
import FindPasswordPage from "../pages/auth/FindPasswordPage";
import EmailCheckPage from "../pages/auth/EmailCheckPage";
import AfterSignUpPage from "../pages/auth/AfterSignUpPage";
import ChangeFlavorPage from "../pages/user/ChangeFlavorPage";
import SettingPage from "../pages/user/SettingPage";
import SeeToppnigListPage from "../pages/user/SeeToppingListPage";
import SearchPage from "../pages/user/SerachPage";
import SetPasswordPage from "../pages/auth/SetPasswordPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: ":bingsooId", // 동적 경로
        element: <HomePage />, // 동일한 페이지를 렌더링하거나 다른 컴포넌트를 설정할 수 있음
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "findpassword",
        element: <FindPasswordPage />,
      },
      {
        path: "emailcheck",
        element: <EmailCheckPage />,
      },
      {
        path: "aftersignup",
        element: <AfterSignUpPage />,
      },
      {
        path: "setpassword",
        element: <SetPasswordPage />,
      },
      {
        path: "setting",
        element: <SettingPage />,
      },
      {
        path: "seetoppinglist",
        element: <SeeToppnigListPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "changeflavor",
        element: <ChangeFlavorPage />,
      },
    ],
  },
]);

// 라우터를 렌더링하는 컴포넌트
export const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
