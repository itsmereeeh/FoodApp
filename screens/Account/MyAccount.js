import React from "react";
import { View, ScrollView, Image } from "react-native";

import { Header, IconButton, TextButton, InfoItem } from "../../components";
import { COLORS, SIZES, icons } from "../../constants";

const MyAccount = ({ navigation }) => {
  function renderHeader() {
    return (
      <Header
        title="MY Profile"
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
      />
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 120,
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            flexDirection: "row",
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Update"
          onPress={() => navigation.navigate("MyAccountEdit")}
        />
      </View>
    );
  }

  function renderProfile() {
    return (
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <Image
          source={icons.pic}
          style={{ width: 120, height: 120, borderRadius: 100 }}
        />
      </View>
    );
  }

  function renderSectionOne() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        <InfoItem label="Full Name" value="Mary Fontillas" />

        <InfoItem label="Phone Number" value="111-222-3333" />

        <InfoItem
          label="Adress"
          value="Novaliches, Quezon City"
          withDivider={false}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeader()}

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
        }}
      >
        {renderProfile()}

        {renderSectionOne()}
        {renderFooter()}
      </ScrollView>
    </View>
  );
};

export default MyAccount;
