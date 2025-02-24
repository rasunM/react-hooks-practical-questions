import React from 'react';
import {View} from 'react-native';
import {Profile, Sidebar} from './components';

function Dashboard() {
  return (
    <View>
      <Sidebar />
      <Profile />
    </View>
  );
}

export default Dashboard;
