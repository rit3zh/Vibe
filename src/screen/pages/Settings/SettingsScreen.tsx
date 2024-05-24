// @Constant

// @DevKit
import {
  ICardProps,
  List,
  IActionProps,
  ISwitchProps,
  Button,
  IButtonProps,
  IItemProps,
} from "react-native-ui-devkit";

// @Components
import {
  CustomDescriptiveText,
  GradientView,
  HeaderText,
  ProfileComponent,
} from "@/components/index";
import {
  AppRegistry,
  Appearance,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function SettingsScreen(): JSX.Element {
  Appearance.setColorScheme("light");
  const _profile: Array<ICardProps & IActionProps> = [
    {
      component: <ProfileComponent />,
      chevron: false,

      style: {
        height: 90,
        justifyContent: "center",
        backgroundColor: "#1f1f1f",
      },
      onPress: () => {},
    },

    {
      title: "Profile Card",
      color: { title: "white", description: "#1f1f1f" },
      onPress: async () => {},
      chevron: false,
      component: (
        <>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Ionicons name="chevron-forward" color={"gray"} size={16} />
          </View>
        </>
      ),
      icon: {
        name: "sparkles",
        type: "ionicons",
        backgroundColor: "#1f1f1f",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: "#1f1f1f",
      },
    },
  ];

  const _notifications: Array<IActionProps & ISwitchProps & IItemProps> = [
    {
      title: "Email Notification",
      color: { title: "white", description: "#1f1f1f" },
      switch: {
        value: true,
        disabled: false,
        onValueChange: () => {},
      },
      onPress: async () => {},
      icon: {
        name: "mail",
        type: "ionicons",
        backgroundColor: "#12b01c",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: "#1f1f1f",
      },
    },

    {
      title: "In App Notifications",
      color: { title: "white", description: "#1f1f1f" },
      switch: {
        value: true,
        disabled: false,
        onValueChange: () => {},
      },
      onPress: async () => {},
      icon: {
        name: "open-in-app",
        type: "material-community",
        backgroundColor: "#38a165",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: "#1f1f1f",
      },
    },

    {
      title: "Push Notifications",
      color: { title: "white", description: "#1f1f1f" },
      switch: {
        value: true,
        disabled: false,
        onValueChange: () => {},
      },
      onPress: async () => {},
      icon: {
        name: "notifications",
        type: "ionicons",
        backgroundColor: "#37a148",
        size: 20,
        color: "#fafafa",
      },
      style: {
        backgroundColor: "#1f1f1f",
      },
    },

    {
      title: "Sound",
      color: { title: "white", description: "#1f1f1f" },
      component: (
        <>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Ionicons name="chevron-forward" color={"gray"} size={16} />
          </View>
        </>
      ),
      chevron: false,
      onPress: async () => {},
      icon: {
        name: "musical-notes",
        type: "ionicons",
        backgroundColor: "#ff3b30",
        size: 20,
        color: "#fafafa",
      },
      style: {
        backgroundColor: "#1f1f1f",
      },
    },
  ];

  const _list: Array<IActionProps & ISwitchProps & IItemProps> = [
    {
      title: "Language",
      color: { title: "white" },

      component: (
        <>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Ionicons name="chevron-forward" color={"gray"} size={16} />
          </View>
        </>
      ),
      chevron: false,
      onPress: async () => {},
      icon: {
        name: "globe-outline",
        type: "ionicons",
        backgroundColor: "#ff9500",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: "#1f1f1f",
      },
    },

    {
      title: "Dark Mode",
      color: { title: "white", description: "#1f1f1f" },
      switch: {
        value: true,
        disabled: false,
        onValueChange: () => {},
      },
      onPress: async () => {},
      icon: {
        name: "moon",
        type: "ionicons",
        backgroundColor: "#007aff",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: "#1f1f1f",
      },
    },

    {
      title: "Music",
      color: { title: "white", description: "#1f1f1f" },
      onPress: async () => {},
      icon: {
        name: "musical-note",
        type: "ionicons",
        backgroundColor: "#ec1831",
        size: 20,
        color: "white",
      },
      component: (
        <>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Ionicons name="chevron-forward" color={"gray"} size={16} />
          </View>
        </>
      ),
      chevron: false,
      style: {
        backgroundColor: "#1f1f1f",
      },
    },
  ];

  const _button: IButtonProps = {
    title: "Logout",
    onPress: () => {},
    style: {
      backgroundColor: "#1f1f1f",
    },
  };

  const _resources: Array<IActionProps & ISwitchProps & IItemProps> = [
    {
      title: "Help",
      color: { title: "white", description: "#1f1f1f" },
      component: (
        <>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Ionicons name="chevron-forward" color={"gray"} size={16} />
          </View>
        </>
      ),
      chevron: false,
      onPress: async () => {},
      icon: {
        name: "help",
        type: "ionicons",
        backgroundColor: "#6f6f6f",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: "#1f1f1f",
      },
    },

    {
      title: "About",
      color: { title: "white", description: "#1f1f1f" },
      component: (
        <>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Ionicons name="chevron-forward" color={"gray"} size={16} />
          </View>
        </>
      ),
      chevron: false,
      onPress: async () => {},
      icon: {
        name: "information-circle-outline",
        type: "ionicons",
        backgroundColor: "#6f6f6f",
        size: 23,
        color: "white",
      },
      style: {
        backgroundColor: "#1f1f1f",
      },
    },

    {
      title: "Github",
      color: { title: "white", description: "#1f1f1f" },
      component: (
        <>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Ionicons name="chevron-forward" color={"gray"} size={16} />
          </View>
        </>
      ),
      chevron: false,
      onPress: async () => {},
      icon: {
        name: "github",
        type: "antdesign",
        backgroundColor: "#1f1f1f",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: "#1f1f1f",
      },
    },
  ];
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <GradientView theme="dark">
          {/* <HeaderText text="Profile" /> */}
          <TouchableWithoutFeedback>
            <List data={_profile} marginTop={false} />
          </TouchableWithoutFeedback>
          {/* <HeaderText text="Preference" /> */}
          <List data={_list} />
          {/* <HeaderText text="Notifications" /> */}
          <List data={_notifications} />
          {/* <HeaderText text="Resources" /> */}
          <List data={_resources} />
          <Button data={_button} destructive={true} />
          <CustomDescriptiveText content={"Made with the ❤️ of Ritesh"} />
        </GradientView>
      </ScrollView>
    </>
  );
}
