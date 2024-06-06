import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import SplashScreen from "./(splash)/splashScreen";
import LandingScreen from "./(splash)/landingScreen";
import LoginOverlay from "./(splash)/loginOverLay";
import TabBar from "./(home)/bottomNavigation";
import HomeScreen from "./(home)/homeScreen";
import { HeaderLeft, HeadTitle, HeaderRight } from "@/components/Headers";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={"Shipments"}
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffff",
          shadowColor: "transparent",
          elevation: 0,
        },
        headerTintColor: "#000",
        headerTitle: () => <HeadTitle />,
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen name="Shipments" component={HomeScreen} />
      <Stack.Screen name="Scan" component={HomeScreen} />
      <Stack.Screen name="Wallet" component={HomeScreen} />
      <Stack.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="(splash)/splashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(splash)/landingScreen"
          component={LandingScreen}
          options={{
            headerShown: false,
            transitionSpec: {
              open: {
                animation: "timing",
                config: {
                  duration: 500, // Adjust duration as needed
                },
              },
              close: {
                animation: "timing",
                config: {
                  duration: 500, // Adjust duration as needed
                },
              },
            },
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                opacity: current.progress,
              },
            }),
          }}
        />
        <Stack.Screen
          name="(splash)/loginOverlay"
          component={LoginOverlay}
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="(home)/bottomNavigation"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
