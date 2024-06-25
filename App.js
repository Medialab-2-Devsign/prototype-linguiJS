import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { t, Trans } from "@lingui/macro";

export default function App() {
  const { i18n } = useLingui();
  const availableLocales = ["en", "nl", "tr"];
  const changeLocale = () => {
    console.log("button pressed");
  };

  return (
    <I18nProvider i18n={i18n} defaultComponent={Text}>
      <View style={styles.container}>
        <Text>Lets put up some text here:</Text>
        <Text>welcome text</Text>
        <Text>And a date formatted according to the chosen localization:</Text>
        <Text>date</Text>
        <Button onPress={changeLocale} title={t(i18n)`Change language to NL`} />
        <StatusBar style="auto" />
      </View>
    </I18nProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
