import React from "react";
import { Routes, Route } from "react-router-dom";

import Startpage from "@/components/start/Start";
import PreLogin from "@/components/prelogin/PreLogin";
import Login from "@/components/login/Login";
import CreateAccount from "@/components/createaccount/CreateAccount";
import EmailCheck from "@/components/emailcheck/EmailCheck";
import SetPassword from "@/components/setpassword/SetPassword";
import AfterSignup from "@/components/aftersignup/AfterSignup";
import FindPassword from "@/components/findpassword/FindPassword";
import ResetPassword from "@/components/resetpassword/ResetPassword";
import Main from "@/components/main/Main";
import Setting from "@/components/setting/Setting";
import SeeTPlist from "@/components/seetplist/SeeTPlist";
import SeeReply from "@/components/seetplist/SeeReply";
import Search from "@/components/search/Search";
import ChangeFlavor from "@/components/changeflavor/ChangeFlavor";
import Introduce from "@/components/introduce/Introduce";
import ReplyLetter from "@/components/modal/ReplyLetter";
import "./App.css";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Startpage />} />
      <Route path="/prelogin" element={<PreLogin />} />
      <Route path="/prelogin/login" element={<Login />} />
      <Route path="/prelogin/createaccount" element={<CreateAccount />} />
      <Route
        path="/prelogin/createaccount/emailcheck"
        element={<EmailCheck />}
      />
      <Route
        path="/prelogin/createaccount/emailcheck/setpassword"
        element={<SetPassword />}
      />
      <Route path="/aftersignup" element={<AfterSignup />} />
      <Route path="/aftersignup" element={<AfterSignup />} />
      <Route path="/findpassword" element={<FindPassword />} />
      <Route path="/findpassword/emailcheck" element={<EmailCheck />} />
      <Route
        path="/findpassword/emailcheck/resetpassword"
        element={<ResetPassword />}
      />
      <Route path="/main" element={<Main />} />
      <Route path="/main/:bingsooId" element={<Main />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/seetplist" element={<SeeTPlist />} />
      <Route path="/seetplist/seereply" element={<SeeReply />} />
      <Route path="/search" element={<Search />} />
      <Route path="/changeflavor" element={<ChangeFlavor />} />ㅇ
      <Route path="/introduce" element={<Introduce />} />
      <Route path="/ReplyLetter" element={<ReplyLetter />} />
    </Routes>
  );
};
