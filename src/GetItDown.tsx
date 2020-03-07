import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { appendData, retrieveData } from './storage';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Routes } from './navigation';

export default function GetItDown() {
  const { navigate } = useNavigation()

  const [newDownItem, updateNewDownItem] = useState('')

  const submitNewDownItem = (item: string) => {
    updateNewDownItem('')
    appendData(item)
  }

  const handleSubmit = (e: any) => {
      submitNewDownItem(newDownItem)
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>
        <TextInput style={styles.newDownItem} onSubmitEditing={handleSubmit} placeholder="get it down..." enablesReturnKeyAutomatically autoFocus value={newDownItem} onChangeText={updateNewDownItem}></TextInput>
</ScrollView>

        <TouchableOpacity hitSlop={{top: 20, bottom: 20, left: 50, right: 50}} style={styles.showDownItems} onPress={() => navigate(Routes.display)}><Text style={styles.showDownItemsText}>Show My Items</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newDownItem: {
    fontSize: 30,
    marginBottom: 80
  },
  showDownItems: {
    padding: 25,
    marginBottom: 15 
  },
  showDownItemsText: {
    fontSize: 18,
    color: 'grey'
  }
});
