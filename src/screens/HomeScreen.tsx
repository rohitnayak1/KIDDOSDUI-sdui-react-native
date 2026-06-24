import React, {
  useCallback,
  useContext,
  useMemo,
} from "react";

import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";

import { FlashList } from "@shopify/flash-list";

import homepage from "../mocks/homepage.json";

import {
  CampaignContext,
  campaigns,
} from "../context/CampaignContext";

import { getComponent } from "../registry/ComponentRegistry";

import CartBadge from "../components/CartBadge";

const HomeScreen = () => {
  const {
    campaign,
    setCampaign,
  } = useContext(
    CampaignContext
  );

  const campaignConfig =
    useMemo(
      () =>
        campaigns[
          campaign
        ],
      [campaign]
    );

  const renderItem =
    useCallback(
      ({ item }: any) => {
        const Component =
          getComponent(
            item.type
          );

        return (
          <Component
            {...item}
          />
        );
      },
      []
    );

  const keyExtractor =
    useCallback(
      (item: any) =>
        item.id,
      []
    );

  const OverlayComponent =
    getComponent(
      campaignConfig
        .overlay.type
    );

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            campaignConfig
              .theme
              .background,
        },
      ]}
    >
      {/* Header */}

      <View
        style={styles.header}
      >
        <Text
          style={
            styles.logo
          }
        >
          Kiddo
        </Text>

        <CartBadge />
      </View>

      {/* Campaign Buttons */}

      <View
        style={
          styles.campaignRow
        }
      >
        <TouchableOpacity
          style={
            styles.campaignBtn
          }
          onPress={() =>
            setCampaign(
              "back_to_school"
            )
          }
        >
          <Text>
            School
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            styles.campaignBtn
          }
          onPress={() =>
            setCampaign(
              "summer_playhouse"
            )
          }
        >
          <Text>
            Summer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            styles.campaignBtn
          }
          onPress={() =>
            setCampaign(
              "mystery_gift"
            )
          }
        >
          <Text>
            Mystery
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main Feed */}

      <FlashList
        data={
          homepage.components
        }
        renderItem={
          renderItem
        }
        keyExtractor={
          keyExtractor
        }
        removeClippedSubviews
      />

      {/* Overlay */}

      <OverlayComponent
        animation_url={
          campaignConfig
            .overlay
            .animation_url
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
    },

    header: {
      flexDirection:
        "row",

      justifyContent:
        "space-between",

      alignItems:
        "center",

      paddingHorizontal: 16,
      paddingVertical: 10,
    },

    logo: {
      fontSize: 24,
      fontWeight: "700",
    },

    campaignRow: {
      flexDirection:
        "row",

      justifyContent:
        "space-evenly",

      marginBottom: 10,
    },

    campaignBtn: {
      backgroundColor:
        "#fff",

      paddingHorizontal: 12,

      paddingVertical: 8,

      borderRadius: 10,

      elevation: 2,
    },
  });