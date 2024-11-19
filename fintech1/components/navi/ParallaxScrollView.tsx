import { PropsWithChildren, ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useScrollViewOffset,
  useAnimatedRef,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

const HEADER_HEIGHT = 350;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
}>;
export default function ParallaxScrollView({ headerImage, children }: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 1.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: "white" },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
        </Animated.View>
      </Animated.ScrollView>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 350,
    overflow: "hidden",
  },
  content: {
    flex: 20,
    padding: 15,
    gap: 50,
    overflow: "visible",
  },
});
