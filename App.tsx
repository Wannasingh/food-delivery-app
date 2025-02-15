import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import './global.css';
import { SlideDots } from './components/SlideDots';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './screens/Login';

const Stack = createNativeStackNavigator();

const slides = [
  {
    image: require('./assets/onboarding.png'),
    title: 'Bring Happiness Local\nFood with Freshgo',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    image: require('./assets/onboarding.png'),
    title: 'Quick Delivery At\nYour Doorstep',
    description: 'We deliver your food as soon as possible to your doorstep.',
  },
  {
    image: require('./assets/onboarding.png'),
    title: 'Best Quality Food\nGuaranteed',
    description: 'We ensure the best quality food and fresh ingredients for you.',
  },
];

function OnboardingScreen({ navigation }: any) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        scrollViewRef.current?.scrollTo({
          x: screenWidth * (currentIndex + 1),
          animated: true,
        });
        setCurrentIndex(currentIndex + 1);
      } else {
        scrollViewRef.current?.scrollTo({
          x: 0,
          animated: true,
        });
        setCurrentIndex(0);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.round(contentOffset.x / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="h-[10%]">
        {slides.map((slide, index) => (
          <Image key={index} source={slide.image} className="h-full w-screen object-cover" />
        ))}
      </ScrollView>

      {/* Replace old Pagination Dots with new component */}
      <View className="absolute bottom-[50%] left-0 right-0 flex items-center justify-center">
        <SlideDots total={slides.length} currentIndex={currentIndex} />
      </View>

      <View className="flex-1 px-6 pt-10">
        <Text className="mb-3 text-[28px] font-bold leading-tight text-black">
          {slides[currentIndex].title}
        </Text>
        <Text className="mb-16 text-base leading-6 text-gray-500">
          {slides[currentIndex].description}
        </Text>
        <View className="mb-12 flex-row justify-between space-x-4">
          <TouchableOpacity 
            className="w-[45%] rounded-full bg-black py-4"
            onPress={() => navigation.navigate('Login')}>
            <Text className="text-center text-base font-semibold text-white">Skip tour</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[45%] rounded-full bg-[#4CAF50] py-4">
            <Text className="text-center text-base font-semibold text-white">Get started</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-center">
          <Text className="text-base text-gray-600">Already have account? </Text>
          <TouchableOpacity>
            <Text className="text-base font-semibold text-[#4CAF50]">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mx-auto mb-2 h-1 w-32 rounded-full bg-gray-200" />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
