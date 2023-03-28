/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import { Alert, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

function Home({ navigation }): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, styles.container]}>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.shareContainer} onPress={() => Alert.alert('Paylaş')}>
                <Feather name="upload" size={21} color="#763ac7" />
                <Text style={styles.shareText}>Paylaş</Text>
            </TouchableOpacity>
            <View style={styles.balanceArea}>
              <Text style={styles.title}>Hadi Bakiyem</Text>
              <Entypo name="chevron-right" size={18} color="#763ac7" style={{marginLeft: 1, marginTop: -1}} />
            </View>
              <View style={styles.balanceContainer}>
                  <Text style={styles.balanceText}>₺1298</Text>
                  <Text style={styles.balanceText2}>,83</Text>
              </View>
              <View style={styles.transactionsContainer}>
                <TouchableOpacity style={styles.baseTransactionItemContainer} activeOpacity={0.8} 
                    onPress={() => Alert.alert('Para Yükle')}>
                  <View style={[styles.baseTransactionItem]}>
                    <AntDesign name="plus" size={18} color="white" />
                  </View>
                  <Text style={styles.transactionItemText}>Para Yükle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.baseTransactionItemContainer}  activeOpacity={0.8} 
                    onPress={() => Alert.alert('Para Gönder')}>
                    <View style={[styles.baseTransactionItem]}>
                      <AntDesign name="arrowup" size={18} color="white" />
                    </View>
                  <Text style={styles.transactionItemText}>Para Gönder</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.baseTransactionItemContainer}  activeOpacity={0.8} 
                    onPress={() => Alert.alert('Para Çek')}>
                    <View style={[styles.baseTransactionItem]}>
                      <AntDesign name="arrowdown" size={18} color="white" />
                    </View>
                  <Text style={styles.transactionItemText}>Para Çek</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.accountStatementContainer} activeOpacity={0.8} 
                  onPress={() => navigation.navigate('AccountStatement')}>
                <Text style={styles.accountStatementText}>Hesap Hareketleri</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.fastTransactions}>
            <View style={styles.fastTransactionRow}>
              <View style={styles.fastTransactionCell}>
                  <MaterialCommunityIcons name="crown" size={24} color="#763ac7" style={{marginLeft: -6}} />
                <Text style={[styles.cellText, { marginLeft: 8}]}>Hadi Gold Dünyası</Text>
              </View>
              <View style={styles.fastTransactionCell}>
                  <AntDesign name="creditcard" size={21} color="#763ac7" />
                  <Text style={styles.cellText}>Hadi Kart Ekle</Text>
              </View>
            </View>
            <View style={styles.fastTransactionRow}>
              <View style={styles.fastTransactionCell}>
                  <FontAwesome5 name="file-invoice" size={18} color="#763ac7" />
                  <Text style={[styles.cellText]}>Fatura Öde</Text>
              </View>
              <View style={styles.fastTransactionCell}>
                  <Ionicons name="md-infinite-sharp" size={22} color="#763ac7" />
                  <Text style={styles.cellText}>Talimat Oluştur</Text>
              </View>
            </View>
          </View>
          <View style={styles.creditContainer}>
            <View style={styles.textArea}>
              <Text style={styles.creditTitle}>Hadi Veresiye</Text>
              <Text style={styles.creditDesc}>A101'lerde faizsiz, masrafsız Veresiye imkanı Nisan'da sizinle!</Text>
            </View>
            <View style={styles.actionArea}>
              <TouchableOpacity style={styles.knowLimitContainer} activeOpacity={0.8} 
                  onPress={() => Alert.alert('Limitini Öğren')}>
                <Text style={styles.limitText}>Limitini Öğren</Text>
              </TouchableOpacity>
              <Text style={styles.tomText}>TOM Finansman A.Ş.</Text>
            </View>
          </View>
          <TouchableOpacity style={{marginTop: 36, alignItems: 'center'}} onPress={() => navigation.navigate('DifferentStack')}>
            <Text>Diğer Stack</Text>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
//#763ac7
const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 36,
    paddingVertical: 12
  },
  cardContainer: {
    flex: 1,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 12,
    shadowColor: '#9E9E9E',
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 6,
    position: 'relative'
  },
  title: {
    fontSize: 11,
    color: Colors.darker,
    fontWeight: '500'
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  balanceText: {
    fontSize: 24,
    marginTop: 4,
    color: Colors.darker
  },
  balanceText2: {
    fontSize: 16,
    marginTop: 11,
    color: Colors.darker
  },
  transactionsContainer: {
    marginTop: 12,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  baseTransactionItemContainer: {
    alignItems: 'center'
  },
  baseTransactionItem: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#763ac7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  transactionItemText: {
    fontSize: 11,
    marginTop: 3,
    color: Colors.darker
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#EEEEEE',
    marginTop: 14
  },
  accountStatementContainer: {
    paddingTop: 10,
    marginLeft: 8
  },
  accountStatementText: {
    fontSize: 11,
    color: '#763ac7',
    fontWeight: '500'
  },
  fastTransactions: {
    flex: 1,
    height: 100,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 4,
    backgroundColor: 'white',
    shadowColor: '#9E9E9E',
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 6
  },
  fastTransactionRow: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  fastTransactionCell: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRightColor: '#EEEEEE',
    borderRightWidth: 0.7,
    borderStyle: 'solid',
    paddingHorizontal: 16
  },
  cellText: {
    color: Colors.darker,
    fontWeight: '400',
    fontSize: 11,
    marginLeft: 12
  },
  creditContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    shadowColor: '#9E9E9E',
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 6
  },
  textArea: {
    flex: 1,
    justifyContent: 'center'
  },
  creditTitle: {
    fontSize: 13,
    color: 'black',
    fontWeight: '400'
  },
  creditDesc: {
    fontSize: 11
  },
  actionArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  knowLimitContainer: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    maxWidth: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#689F38',
    borderRadius: 6
  },
  limitText: {
    color: 'white',
    fontSize: 10
  },
  tomText: {
    fontSize: 7,
    marginTop: 2,
    marginRight: 4,
    fontWeight: '500'
  },
  balanceArea: {
    flexDirection: 'row'
  },
  shareContainer: {
    position: 'absolute',
    right: 12,
    top: 10,
    alignItems: 'center'
  },
  shareText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#763ac7'
  }
});

export default Home;
