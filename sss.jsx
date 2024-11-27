import React from "react";
import { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Title } from "../components/Title";
import { Background } from "../components/Background";
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { ShowPassword } from "../components/ShowPassword";
import { KeyboardWrapper } from "../components/KeyboardWrapper";

export const LoginScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const getInputStyle = (inputName) => {
    switch (inputName) {
      case "email":
        return focusedInput === "email"
          ? [styles.input, styles.inputFocused]
          : styles.input;
      case "password":
        return focusedInput === "password"
          ? [styles.input, styles.inputFocused]
          : styles.input;
      default:
        return styles.input;
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <Background>
      <KeyboardWrapper style={{ paddingTop: 273 }}>
        <View style={styles.wrapper}>
          <Title title={"Увійти"} />
          <View style={styles.inputWrapper}>
            <View>
              <TextInput
                style={getInputStyle("email")}
                onChangeText={formik.handleChange("email")}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                value={formik.values.email}
                placeholder={"Адреса електронної пошти"}
                name="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <Text style={styles.baseErrorTextStyle}>
                  {formik.errors.email}
                </Text>
              ) : null}
            </View>
            <View style={(position = "relative")}>
              <TextInput
                style={getInputStyle("password")}
                onChangeText={formik.handleChange("password")}
                onFocus={() => handleFocus("password")}
                onBlur={handleBlur}
                value={formik.values.password}
                placeholder={"Пароль"}
                name="password"
                secureTextEntry={!showPassword}
              />
              {formik.touched.password && formik.errors.password ? (
                <Text style={styles.baseErrorTextStyle}>
                  {formik.errors.password}
                </Text>
              ) : null}
              <ShowPassword
                onPress={() => setShowPassword((prevState) => !prevState)}
              />
            </View>
          </View>

          <Button onPress={formik.handleSubmit} title="Увійти" />
          <Link>
            Немає акаунту? <Text style={styles.linkText}>Зареєструватися</Text>
          </Link>
        </View>
      </KeyboardWrapper>
    </Background>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 132,
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 43,
    gap: 16,
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingLeft: 16,
    paddingHorizontal: 16,
    color: "#212121",
    fontFamily: "rb-regular",
    fontSize: 16,
    lineHeight: 16,
    backgroundColor: "#F6F6F6",
    fontWeight: "700",
    borderWidth: 1,
    borderColor: "#F6F6F6",
  },
  inputFocused: { borderColor: "#FF6C00" },
  baseErrorTextStyle: {
    color: "#FF6C00",
    fontSize: 16,
    fontFamily: "rb-regular",
    fontWeight: "700",
  },
  linkText: {
    textDecorationLine: "underline",
  },
});