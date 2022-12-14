import { Flex, Text } from "@chakra-ui/react";
import FormField from "./componetns/FormField";
import FormButton from "./componetns/FormButton";
import FormLink from "./componetns/FormLink";
import Form from "./componetns/Form";
import { useEffect, useState } from "react";
import { AuthServices } from "./AuthServices";
import { useFormik } from "formik";
import FormMessage from "./componetns/FormMessage";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

import { theme } from "../../config/theme.config";
import { useNavigate } from "react-router";

const Signin = () => {
  const clientId = `1059713289873-mnr4ecn113umdpe68k2a9but136dnde6.apps.googleusercontent.com`;
  const navigate = useNavigate();

  const [status, setStatus] = useState({ message: "", error: false });
  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, [clientId]);

  const handleLoginSuccess = (data: any) => {
    AuthServices.createSession(data);
    if (data.error) setStatus({ error: data.error, message: data.message });
    else {
      AuthServices.createSession(data);
      window.location.reload();
    }
    setTimeout(() => {
      setStatus({ error: false, message: "" });
    }, 5000);
  };

  const handleGoogleLogin = (data: any) => {
    const tokenData = {
      token: data.tokenId,
      name: data.profileObj.givenName,
      avatarUrl: data.profileObj.imageUrl,
    };
    AuthServices.loginGoogle(tokenData)
      .then((res: any) => {
        console.log(res);
        if (!res.data.error) {
          AuthServices.createSession(res.data);
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLoginFailure = () => {
    setStatus({ error: true, message: "Internal Server Errror" });
  };

  const form = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: (values: any) => {
      AuthServices.login(values)
        .then((res: any) => handleLoginSuccess(res.data))
        .catch((err: any) => {
          console.log(err);
          handleLoginFailure();
        });
    },
  });

  return (
    <Form>
      <Text color={theme.primaryTextColor} fontSize={{ base: "4xl" }}>
        Login
      </Text>
      <FormMessage message={status.message} error={status.error} />
      <FormField
        name="username"
        placeHolder="Username / email"
        value={form.values.username}
        onChange={form.handleChange}
        label="email"
        type="email"
        isRequired={true}
      />
      <FormField
        name="password"
        placeHolder="Password"
        value={form.values.password}
        onChange={form.handleChange}
        label="password"
        type="password"
        isRequired={true}
      />
      <Flex py={{ base: "2" }} justifyContent={"flex-end"}>
        <FormLink action={() => null} label="Forgot Password?" />
      </Flex>
      <Flex
        rowGap={"1rem"}
        direction={"column"}
        alignItems="center"
        justifyContent={"center"}
      >
        <FormButton onClick={() => form.handleSubmit()} label="Sign in" />
        <Text fontWeight={"bolder"}>OR</Text>
        <GoogleLogin
          style={{ width: "100%" }}
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={handleGoogleLogin}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              className="google_login_button"
            >
              Login with Google
            </button>
          )}
        />
        <FormLink
          action={() => navigate("/signup")}
          label="Don't have account? Signup"
        />
      </Flex>
    </Form>
  );
};

export default Signin;
