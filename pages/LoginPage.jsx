import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import axios from "axios";

const Login = () => {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");

  const pressLoginButton = () => {
    console.log("id:", id);
    console.log("password:", password);

    //서버로 json형식으로 보내려고 함
    const dataToSend = {
      id: id,
      password: password,
    }

    const serverURL = "서버주소";

    axios.post(serverURL, dataToSend)
      .then(response => {
        if (response.data.success) {
          console.log("로그인 성공!");
        } else {
          console.log("로그인 실패!");
          setid("");
          setpassword("");
        }
      })
      .catch(error => {
        console.error("에러 발생:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>id</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setid(text)}
        value={id}
        placeholder="아이디를 입력하세요"
      />

      <Text style={styles.label}>비밀번호</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setpassword(text)}
        value={password}
        placeholder="비밀번호를 입력하세요"
        secureTextEntry
      />

      <TouchableOpacity onPress={pressLoginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  label: {
    marginBottom: 7,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    backgroundColor: "#77EBC1",
    color: "white",
    textAlign: "center",
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    marginTop: 20,
  },
});

export default Login;
