import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignupForm from "../Components/SignUpForm";
import { Box, Button, Link, Text } from "@chakra-ui/react";
function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Box className="container">
      <Box className={`card ${isLogin ? "login" : "signup"}`}>
        <Box className="inner-box">
          {isLogin ? <LoginForm /> : <SignupForm />}
        </Box>

        <Box className="w-2/5 m-auto  flex flex-col items-center ">
          {isLogin ? (
            <>
              <Text className="w-fit p-5">Don't Have an Account</Text>
              <Button className="w-fit" onClick={() => setIsLogin(false)}>
                Register
              </Button>
            </>
          ) : (
            <>
              <Text className="p-5">Already Have an Account</Text>
              <Button className="w-fit" onClick={() => setIsLogin(true)}>
                Login
              </Button>
            </>
          )}
        </Box>
        {/* </Button> */}
      </Box>
    </Box>
  );
}

export default Login;
