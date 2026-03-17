

import { useState } from "react"
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text } from "react-native"


export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [tentaivas, atualizarTentativas] = useState(0);

  const bloqueado = teantivas >=5;



  function login(email, senha) {
    if(email === "adm@gmail.com" && senha === "super"){
      setAutenticado(true)
    }else {
      setAutenticado(false)
    }
  }
  
  const url = autenticado === true
    ? "https://static.wikia.nocookie.net/disney/images/b/b7/Profile_-_Stitch.jpg"
    : "https://imagedelivery.net/8uD0Ucf2NIsjxq_at3fMVw/73d4ebf7-04ec-4e67-08e8-5ebd2788d300/public"
   
  return (
    <View style={styles.container}>
      <Image
        width={100}
        height={100}
        source={{
          uri: url
        }}
        style={styles.logo}
      />

    <View style={{ backgroundColor: 'red', borderRadius: 12, paddingHorizontal: 24, paddingVertical: 8 }}>
     <Text style={{ color: 'black' }}>Você está autenticado</Text>
    </View>

    {!autenticado && (
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={(texto) => setEmail(texto)}
      />

    )}
    {!autenticado && (
      <TextInput
        style={styles.input}
        placeholder="senha"
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
        secureTextEntry
      />
   )}
  {!autenticado && (
  <TouchableOpacity
        style={styles.button}
        onPress={() => login(email, senha)}
      >
        <Text style={styles.texto}>Entrar</Text>
      </TouchableOpacity>
   )}
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32
  },
  logo: {
    borderRadius: "100%",
    marginBottom: 42,
    width: 100,
    height: 100
  },
  input: {
    backgroundColor: "#e874351f",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginTop: 12,
    width: "100%"
  },
  button: {
    backgroundColor: "#e874351f",
    padding: 16,
    marginTop: 100,
    borderRadius: 100,
    paddingHorizontal: 68
  },
  texto: {
    color: "#00000",
    fontSize: 18
  }
})
