import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterPath } from "./path"; //경로 상수 가져옴
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
      }
    ]
  }
]);

// 라우터를 렌더링하는 컴포넌트
export const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
