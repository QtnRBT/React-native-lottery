import { Dimensions, Image, View, Text } from "react-native";

import { theme } from "../theme.config.json";

function TicketComponent() {
  const screenWidth = Dimensions.get("window").width;
  const padding = theme.spacing.paddingHorizontal; // Adjust this based on your actual padding in ProfilePage
  const adjustedScreenWidth = screenWidth - Number(padding) * 2;

  const aspectRatio = 1468 / 840;
  const imageHeight = adjustedScreenWidth / aspectRatio;
  return (
    <View
      style={{
        width: adjustedScreenWidth,
        alignSelf: "center",
      }}
    >
      <Image
        source={require("../assets/ticket.png")}
        style={{
          width: "100%",
          height: imageHeight,
          resizeMode: "contain",
          position: "relative",
        }}
      ></Image>
    </View>
  );
}

export default TicketComponent;
