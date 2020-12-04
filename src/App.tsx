import React from 'react';
import { View, Text } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Hello World</Text>
    </View>
  );
};

export default App;
