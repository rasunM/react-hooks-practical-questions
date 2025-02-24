import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dashboard from './dashboard';
import {DashboardContext} from './context';

export interface User {
  isSubscribed: boolean;
  name: string;
}

function UseContextPractice() {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'You',
  });
  return (
    <View style={styles.container}>
      <DashboardContext.Provider value={user}>
        <Dashboard/>
      </DashboardContext.Provider>
    </View>
  );
}

export default UseContextPractice;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
