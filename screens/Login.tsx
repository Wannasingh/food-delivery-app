import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export function Login() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1"
          contentContainerClassName="flex-grow">
          <View className="flex-1 px-6 pt-4">
            {/* Top Navigation */}
            <View className="flex-row items-center justify-between py-4">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="flex-row items-center space-x-2">
                <AntDesign name="arrowleft" size={20} color="#374151" />
                <Text className="text-base font-medium text-gray-600">Back</Text>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full bg-gray-50 px-4 py-2">
                <Text className="text-base font-medium text-gray-900">Sign up</Text>
              </TouchableOpacity>
            </View>

            {/* Form Section */}
            <View className="mt-8 space-y-12">
              {/* Email Input */}
              <View className="rounded-2xl bg-blue-500 px-4">
                <TextInput
                  className="bg-blue-500·text-lg·text-gray-900·h-16"
                  placeholder="email"
                  keyboardType="email-address"
                  placeholderTextColor="#9CA3AF"
                  autoCapitalize="none"
                />
              </View>

              {/* Password Input */}
              <View className="rounded-2xl bg-gray-50 px-4">
                <TextInput
                  className="h-16 text-lg text-gray-900"
                  placeholder="password"
                  secureTextEntry
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            </View>

            {/* Bottom Section */}
            <View className="mt-10 space-y-4">
              {/* Login Button */}
              <TouchableOpacity
                className="h-14 items-center justify-center rounded-xl bg-[#4262FF] shadow-sm"
                activeOpacity={0.9}>
                <Text className="text-center text-lg font-semibold text-blue-500">Login</Text>
              </TouchableOpacity>

              {/* Magic Link Button */}
              <TouchableOpacity
                className="h-14 rounded-xl border border-gray-200 bg-white shadow-sm"
                activeOpacity={0.8}>
                <View className="h-full flex-row items-center justify-center space-x-3">
                  <AntDesign name="star" size={18} color="#374151" />
                  <View>
                    <Text className="text-center text-base font-medium text-gray-900">
                      Get Magic link
                    </Text>
                    <Text className="text-center text-xs text-gray-500">no password needed</Text>
                  </View>
                </View>
              </TouchableOpacity>

              {/* Social Login Section */}
              <View className="mt-8 space-y-6">
                <Text className="text-center text-sm font-medium text-gray-500">
                  or continue with:
                </Text>

                <View className="flex-row justify-between px-1">
                  <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                    <AntDesign name="google" size={20} color="#374151" />
                  </TouchableOpacity>
                  <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                    <FontAwesome6 name="slack" size={20} color="#374151" />
                  </TouchableOpacity>
                  <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                    <AntDesign name="windows" size={20} color="#374151" />
                  </TouchableOpacity>
                  <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                    <FontAwesome6 name="facebook" size={20} color="#374151" />
                  </TouchableOpacity>
                  <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                    <FontAwesome6 name="key" size={20} color="#374151" />
                  </TouchableOpacity>
                  <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                    <FontAwesome6 name="apple" size={20} color="#374151" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Region Link */}
              <TouchableOpacity className="mt-12">
                <View className="flex-row items-center justify-center space-x-2">
                  <AntDesign name="login" size={18} color="#6B7280" />
                  <Text className="text-sm font-medium text-gray-500">
                    Sign in to a different region or private organization
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
