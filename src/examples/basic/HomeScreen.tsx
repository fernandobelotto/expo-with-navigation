import React from "react";
import { View, Button, Text } from "react-native";

export default function HomeScreen({ navigation }: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela Inicial</Text>
        <Button
          title="Ir para detalhes"
          onPress={() => navigation.navigate('details', {
            name: 'fernando'
          })}
        />
      </View>
    );
  }