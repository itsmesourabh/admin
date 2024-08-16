import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/config/firebaseConfig";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("AdminHomePage");
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <View >
    
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          height: 40,
          borderColor: "#ddd",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 15,
          paddingHorizontal: 10,
          fontSize: 16,
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          height: 40,
          borderColor: "#ddd",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 15,
          paddingHorizontal: 10,
          fontSize: 16,
        }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginPage;
