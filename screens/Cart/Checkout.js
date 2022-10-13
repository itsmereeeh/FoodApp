import React from "react";
import { View, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RadioButton } from "react-native-paper";

import {
  Header,
  IconButton,
  FormInput,
  CardItem,
  FooterTotal,
} from "../../components";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";

const Checkout = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [checked, setChecked] = React.useState("first");

  React.useEffect(() => {
    let { selectedCard } = route.params;

    setSelectedCard(selectedCard);
  }, []);

  // Handler

  function selectCardHandler(item) {
    console.log(item);
    setSelectedCard(item);
  }

  // Render

  function renderHeader() {
    return (
      <Header
        title="CHECKOUT"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <View
            style={{
              width: 40,
            }}
          />
        }
      />
    );
  }
  function renderMyCards() {
    return (
      <View>
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `MyCard-${item.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
            />
          );
        })}
      </View>
    );
  }
  function renderDeliveryAddr() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Delivery Address</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}
        >
          <Image
            source={icons.location1}
            style={{
              width: 40,
              height: 40,
            }}
          />

          <Text
            style={{
              marginLeft: SIZES.radius,
              width: "85%",
              ...FONTS.body3,
            }}
          >
            Novaliches, Quezon City{" "}
          </Text>
        </View>
        <Text style={{ ...FONTS.h3, marginTop: 30 }}>Delivery Method</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}
        >
          <View>
            <RadioButton
              value="Door Delivery"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />

            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderFooter() {
    return (
      <FooterTotal
        subTotal={37.97}
        shippingFee={0.0}
        total={337.97}
        onPress={() => navigation.replace("Success")}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}

      {/* Cards */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}
      >
        {/* My Cards */}
        {renderMyCards()}

        {/* Delivery Address */}
        {renderDeliveryAddr()}
      </KeyboardAwareScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default Checkout;
