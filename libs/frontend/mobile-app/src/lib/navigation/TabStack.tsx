import { NowPlayingScreen } from '../features/home/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { MyWatchlist } from './MyWatchlist'
import { Button, Center, Text } from 'native-base'
import { useAuthenticatedUser } from '../providers/AuthenticationProvider'

export type HomeStackTabs = {
  MyWatchlist: undefined
  NowPlaying: undefined
  Settings: undefined
}
const Tabs = createBottomTabNavigator<HomeStackTabs>()

export function TabNavigation() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
      }}
    >
      <Tabs.Screen
        name="NowPlaying"
        component={NowPlayingScreen}
        options={{
          headerTitle: 'Now Playing Movies',
          title: 'Now Playing',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="filmstrip"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="MyWatchlist"
        component={MyWatchlist}
        options={{
          headerTitle: 'My Watchlist',
          title: 'My Watchlist',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="movie-filter" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: 'Settings',
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

function Settings() {
  const { setUser } = useAuthenticatedUser()
  return (
    <Center flex={1}>
      <Button
        onPress={() => {
          setUser({ hasUser: false })
        }}
      >
        <Text>Sign out</Text>
      </Button>
    </Center>
  )
}
