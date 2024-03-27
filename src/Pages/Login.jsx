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
    <Box>
      <Box>
        <Box>{isLogin ? <LoginForm /> : <SignupForm />}</Box>

        <Box w={"100%"}>
          {isLogin ? (
            <>
              <Text padding={"20px"} textAlign={"center"}>
                Don't Have an Account
              </Text>
              <Button
                display={"block"}
                margin={"auto"}
                onClick={() => setIsLogin(false)}
              >
                Register
              </Button>
            </>
          ) : (
            <>
              <Text padding={"20px"} textAlign={"center"}>
                Already Have an Account
              </Text>
              <Button
                display={"block"}
                margin={"auto"}
                onClick={() => setIsLogin(true)}
              >
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
