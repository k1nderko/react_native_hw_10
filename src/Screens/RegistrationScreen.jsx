import React from "react";
import { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Title } from "../components/Title";
import { AddPhoto } from "../components/AddPhoto";
import { Background } from "../components/Background";
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { ShowPassword } from "../components/ShowPassword";
import { KeyboardWrapper } from "../components/KeyboardWrapper";

export const RegistrationScreen = () => {
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
      case "login":
        return focusedInput === "login"
          ? [styles.input, styles.inputFocused]
          : styles.input;
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

  return (
    <Background>
      <KeyboardWrapper style={{ paddingTop: 147 }}>
        <AddPhoto />
        <View style={styles.wrapper}>
          <Title title={"Реєстрація"} />
          <View style={styles.inputWrapper}>
            <View>
              <TextInput
                style={getInputStyle("login")}
                onFocus={() => handleFocus("login")}
                onBlur={handleBlur}
                placeholder={"Логін"}
                name="login"
              />
            </View>
            <View>
              <TextInput
                style={getInputStyle("email")}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                placeholder={"Адреса електронної пошти"}
                name="email"
              />
            </View>
            <View style={(position = "relative")}>
              <TextInput
                style={getInputStyle("password")}
                onFocus={() => handleFocus("password")}
                onBlur={handleBlur}
                placeholder={"Пароль"}
                name="password"
                secureTextEntry={!showPassword}
              />
              <ShowPassword
                onPress={() => setShowPassword((prevState) => !prevState)}
              />
            </View>
          </View>
          <Button title="Зареєстуватися" />
          <Link>Вже є акаунт? Увійти</Link>
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
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 66,
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
    lineHeight: 18.75,
    backgroundColor: "#F6F6F6",
    fontWeight: "400",
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
});

