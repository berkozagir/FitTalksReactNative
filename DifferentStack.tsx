/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';

function DifferentStack({ navigation }): JSX.Element {

  return (
   <View style={{margin: 36, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Farklı Stack</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 24}}>
         <Text>Geri</Text>
      </TouchableOpacity>
   </View>
  );
}


export default DifferentStack;
