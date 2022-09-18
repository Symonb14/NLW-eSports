import { StatusBar } from "react-native";

import {useRef, useEffect} from 'react'

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'

import {Subscription} from 'expo-modules-core'

import * as Notifications from 'expo-notifications';

import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";

import './src/services/notifcationConfigs';
import {GetPushNotificationToken}  from './src/services/getPushNotificationToken';

export default function App() {

  const getNotificationListenner = useRef<Subscription>();
  const responseNotificationListenner = useRef<Subscription>();

  useEffect(() => {
    GetPushNotificationToken();
  })

  useEffect(() => {
    getNotificationListenner.current = Notifications.addNotificationReceivedListener(notifications => {

    });

    responseNotificationListenner.current = Notifications.addNotificationResponseReceivedListener(response => {

    })

    return () => {
      if(getNotificationListenner.current && responseNotificationListenner.current) {
        Notifications.removeNotificationSubscription(getNotificationListenner.current);
        Notifications.removeNotificationSubscription(responseNotificationListenner.current);
      }
    }
  }, [])

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}

