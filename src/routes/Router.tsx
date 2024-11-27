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


const router = createBrowserRouter([
  { 
    path: RouterPath.root, 
    element: <RootLayout />, 
    children: [
      {
        path: RouterPath.home,
        element: <HomePage />,
      },
      {
        path: RouterPath.login,
        element: <LoginPage />,
      },
      {
        path: RouterPath.signup,
        element: <SignUpPage />,
      },
      {
        path: RouterPath.findpassword,
        element: <FindPasswordPage />,
      },
      {
        path: RouterPath.emailcheck,
        element: <EmailCheckPage />,
      },
      {
        path: RouterPath.aftersignup,
        element: <AfterSignUpPage />,
      },
      {
        path: RouterPath.changeflavor,
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
