import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "600",
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontWeight: "400",
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        by {subTitle}
      </Text>
    </View>
  );
};

export const Rilis = ({ rilis }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontWeight: "500",
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        Rilis {rilis}
      </Text>
    </View>
  );
};

const Bintang = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 25,
        height: 25,
        marginLeft: index === 0 ? 0 : 2,
      }}
    />
  );
};

export const RatingBintang = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      {
        data.bintang === 1
        ? [assets.star1].map((imgUrl, index) => (
          <Bintang imgUrl={imgUrl} index={index} key={`People-${index}`} />
        ))
        : data.bintang === 2
        ? [assets.star1, assets.star1].map((imgUrl, index) => (
          <Bintang imgUrl={imgUrl} index={index} key={`People-${index}`} />
        ))
        : data.bintang === 3
        ? [assets.star1, assets.star1, assets.star1].map((imgUrl, index) => (
          <Bintang imgUrl={imgUrl} index={index} key={`People-${index}`} />
        ))
        : data.bintang === 4
        ? [assets.star1, assets.star1, assets.star1, assets.star1].map((imgUrl, index) => (
          <Bintang imgUrl={imgUrl} index={index} key={`People-${index}`} />
        ))
        : [
          assets.star1,
          assets.star1,
          assets.star1,
          assets.star1,
          assets.star1,
        ].map((imgUrl, index) => (
          <Bintang imgUrl={imgUrl} index={index} key={`People-${index}`} />
        ))
      }
    </View>
  );
};

export const EndDate = ({ data }) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontWeight: "500",
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Durasi
      </Text>
      <Text
        style={{
          fontWeight: "600",
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        {data.duration}
      </Text>
    </View>
  );
};

export const SubInfo = ({ data }) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <RatingBintang data={data} />
      <EndDate data={data} />
    </View>
  );
};
