import React, {use, useContext} from 'react';
import {User} from '.';
import {Text, View} from 'react-native';
import {DashboardContext, useUserContext} from './context';

export function Sidebar() {
  const user = useUserContext();

  return (
    <View>
      <Text>User Name: {user.name}</Text>
      <Text>
        Subscription Status:
        {user.isSubscribed ? ' Subscribed' : ' Not a Subscriber'}
      </Text>
    </View>
  );
}

interface ProfileProps {
  user: User;
}

export function Profile() {
  const user = useUserContext();
  return (
    <View>
      <Text>Profile:{user.name}</Text>
    </View>
  );
}
