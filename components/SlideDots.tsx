import { View } from 'react-native';

interface SlideDotsProps {
  total: number;
  currentIndex: number;
}

export function SlideDots({ total, currentIndex }: SlideDotsProps) {
  return (
    <View className="rounded-full bg-white/90 px-3 py-2 ">
      <View className="flex-row items-center justify-center space-x-1.5">
        {[...Array(total)].map((_, index) => (
          <View
            key={index}
            className={`h-1 rounded-full ${
              index === currentIndex ? 'w-6 bg-[#4CAF50]' : 'w-1.5 bg-[#4CAF50]/30'
            }`}
          />
        ))}
      </View>
    </View>
  );
}