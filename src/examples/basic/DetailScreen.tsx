import React from "react";
import { Button, Text, View } from "react-native";

export default function DetailsScreen({ navigation, route }: any) {

  const name = route.params?.name

  console.log(name)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de detalhes</Text>
      <Button
        title="Ir para detalhes... de novo"
        onPress={() => navigation.push('details')}
      />

      <Button title="ir para home" onPress={() => navigation.navigate('home')} />
      <Button title="voltar uma tela" onPress={() => navigation.goBack()} />
      <Button
        title="ir para a primeira tela na stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}