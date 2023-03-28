/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';

function AccountStatement({ navigation }): JSX.Element {

  return (
   <View style={{margin: 36, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hesap hareketleri</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{marginTop: 24}}>
         <Text>Geri</Text>
      </TouchableOpacity>
   </View>
  );
}


export default AccountStatement;
