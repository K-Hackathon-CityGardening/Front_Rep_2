import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, SafeAreaView } from "react-native";

const loginpage = () => {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");

  const login = () => {
    console.log("id:", id);
    console.log("password:", password);
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

      <TouchableOpacity onPress={login}>
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

export default loginpage;
