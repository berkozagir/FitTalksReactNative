/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

function App(): JSX.Element {
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
              <Text style={styles.title}>Hadi Bakiyem</Text>
              <View style={styles.balanceContainer}>
                  <Text style={styles.balanceText}>₺1298</Text>
                  <Text style={styles.balanceText2}>,83</Text>
              </View>
              <View style={styles.transactionsContainer}>
                <TouchableOpacity style={styles.baseTransactionItemContainer} activeOpacity={0.8} 
                    onPress={() => Alert.alert('Para Yükle')}>
                  <View style={[styles.baseTransactionItem]} />
                  {/* <Icon name="back" size={30} color="#900" /> */}
                  <Text style={styles.transactionItemText}>Para Yükle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.baseTransactionItemContainer}  activeOpacity={0.8} 
                    onPress={() => Alert.alert('Para Gönder')}>
                  <View style={[styles.baseTransactionItem]} />
                  <Text style={styles.transactionItemText}>Para Gönder</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.baseTransactionItemContainer}  activeOpacity={0.8} 
                    onPress={() => Alert.alert('Para Çek')}>
                  <View style={[styles.baseTransactionItem]} />
                  <Text style={styles.transactionItemText}>Para Çek</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.accountStatementContainer} activeOpacity={0.8} 
                  onPress={() => Alert.alert('Hesap Hareketleri')}>
                <Text style={styles.accountStatementText}>Hesap Hareketleri</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.fastTransactions}>
            <View style={styles.fastTransactionRow}>
              <View style={styles.fastTransactionCell}>
                <Text style={styles.cellText}>Hadi Gold Dünyası</Text>
              </View>
              <View style={styles.fastTransactionCell}>
                  <Text style={styles.cellText}>Hadi Kart Ekle</Text>
              </View>
            </View>
            <View style={styles.fastTransactionRow}>
              <View style={styles.fastTransactionCell}>
                  <Text style={styles.cellText}>Fatura Öde</Text>
              </View>
              <View style={styles.fastTransactionCell}>
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
    elevation: 6
  },
  title: {
    fontSize: 11,
    color: Colors.darker
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
    backgroundColor: '#763ac7'
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
    paddingTop: 10
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
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#EEEEEE',
    borderRightWidth: 0.7,
    borderStyle: 'solid'
  },
  cellText: {
    color: Colors.darker,
    fontWeight: '400',
    fontSize: 11
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
  }
});

export default App;
