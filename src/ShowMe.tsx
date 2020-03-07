
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { retrieveData, storeData } from './storage';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from './navigation';

export default function ShowMe() {
  const { navigate } = useNavigation()
  const [downItems, updateDownItems] = useState([])
  const [refreshing, updateRefrehing] = useState(false)

  useEffect(() => {
	  showItems()
  }, [])

  const showItems = async () => {
	  updateRefrehing(true)
	const retrievedDownItems = await retrieveData()
	updateDownItems(retrievedDownItems.map((item: string, index: number) => ({item, key: String(index)})))
	updateRefrehing(false)
  }

  const clear = async () => {
	  await storeData([])
	  showItems()
  }


  return (
		<SafeAreaView style={styles.container}>
		<FlatList
		refreshing={refreshing}
		onRefresh={clear}
        data={downItems}
        renderItem={({ item }) => <Text style={styles.item}> {item.item}</Text>}
      />

        <TouchableOpacity hitSlop={{top: 20, bottom: 20, left: 50, right: 50}} style={styles.goBack} onPress={() => navigate(Routes.add)}><Text style={styles.backText}>Back</Text></TouchableOpacity>
		</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
	justifyContent: 'center',
	paddingTop: 50
  },
  item: {
	  fontSize: 30
  },
  goBack: {
    padding: 25,
    marginBottom: 15 

  },
  backText: {
    fontSize: 18,
    color: 'grey'
  }
});
