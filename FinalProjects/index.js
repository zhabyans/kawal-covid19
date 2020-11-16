import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import Beranda from './Home';
import Detail from './Detail';
import Update from './Update';
import About from './About';
import Profile from './Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { connect } from 'react-redux';


const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const UpdateStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const LoginStack = createStackNavigator()
const AboutStack = createStackNavigator()

const AboutStackScreen = ({ navigation }) => (
    <AboutStack.Navigator screenOptions={{
    }}>
        <AboutStack.Screen name="About"
            component={About}
            options={{
                title: 'Tentang Pengembang',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#4CAF50'
                },
                headerLeft: () => <Icon name='menu' style={{ color: 'white', padding: 14, fontSize: 25 }} onPress={() => navigation.toggleDrawer()} />

            }}
        />
    </AboutStack.Navigator>
)

const LoginStackScreen = () => (
    <LoginStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <LoginStack.Screen name="Login"
            component={Login}
        />
        <LoginStack.Screen name="Beranda"
            component={TabStack}
        />
    </LoginStack.Navigator>
)


const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile"
            options={{
                title: 'Profil Anda',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#4CAF50'
                },
                headerLeft: () => <Icon name='menu' style={{ color: 'white', padding: 14, fontSize: 25 }} onPress={() => navigation.toggleDrawer()} />

            }}
            component={Profile}
        />
    </ProfileStack.Navigator>
)

const UpdateStackScreen = ({ navigation }) => (
    <UpdateStack.Navigator>
        <UpdateStack.Screen name="Update"
            options={{
                title: 'Covid19 Terkini',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#4CAF50'
                },
                headerLeft: () => <Icon name='menu' style={{ color: 'white', padding: 14, fontSize: 25 }} onPress={() => navigation.toggleDrawer()} />

            }}
            component={Update}
        />
    </UpdateStack.Navigator>
)

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Beranda" options={{
            title: 'Berita Terkini',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#4CAF50'
            },
            headerLeft: () => <Icon name='menu' style={{ color: 'white', padding: 14, fontSize: 25 }} onPress={() => navigation.toggleDrawer()} />
        }} component={Beranda} />
        <HomeStack.Screen name='detail' options={{
            title: 'Detail Berita',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#4CAF50'
            },
        }} component={Detail} />

    </HomeStack.Navigator>
)

const TabStack = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Beranda') {
                    iconName = focused ? 'home-outline' : 'home-outline';
                } else if (route.name === 'Update') {
                    iconName = focused ? 'analytics-outline' : 'analytics-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person-outline' : 'person-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 14
            }
        }}
    >
        <Tab.Screen name='Beranda' component={HomeStackScreen} />
        <Tab.Screen name='Update' component={UpdateStackScreen} />
        <Tab.Screen name='Profile' component={ProfileStackScreen} />
    </Tab.Navigator>
)

const Index = (props) => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen options={() => ({ drawerIcon: () => null, drawerLabel: () => null, title: () => null })} name="Login" component={LoginStackScreen} />
                    <Drawer.Screen name="Beranda" component={TabStack} />
                    <Drawer.Screen name="About" component={AboutStackScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

const mapStateToProps = (nilai) => {
    return {
        isLogin: nilai.isLogin
    };
};

export default connect(mapStateToProps)(Index)
