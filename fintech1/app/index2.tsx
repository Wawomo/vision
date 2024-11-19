import { View, Text, Touchable, StyleSheet, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MyStyles } from "@/constants/Styles";
import ParallaxScrollView from "@/components/navi/ParallaxScrollView";

const index2 = () => {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("../assets/images/exchange.jpg")}
          style={styles.exchange}
        />
      }
    >
      <View>
        <Text style={styles.header}>Simplify your payments and transfers?</Text>
      </View>
      <Text>welcome to the future</Text>
      <View style={styles.buttons}>
        <Link href={"/login"} asChild>
          <TouchableOpacity>
            <Text
              style={[
                MyStyles.myButton,
                {
                  flex: 1,
                  backgroundColor: "#AAAAAA",
                  fontSize: 22,
                  fontWeight: "500",
                },
              ]}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={"/sign-up"}
          style={[MyStyles.myButton, { flex: 1, backgroundColor: "#fff" }]}
          asChild
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ParallaxScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "black",
  },
  exchange: {
    height: 350,
    width: 360,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
export default index2;
