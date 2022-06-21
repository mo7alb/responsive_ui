import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
   return (
      <SafeAreaView style={styles.container}>
         <Board />
      </SafeAreaView>
   );
}

function Board() {
   return (
      <View style={styles.board}>
         <View style={styles.row}>
            <Square value={"x"} rightBorder={true} bottomBorder={true} />
            <Square value={"x"} rightBorder={true} bottomBorder={true} />
            <Square value={"x"} rightBorder={false} bottomBorder={true} />
         </View>
         <View style={styles.row}>
            <Square value={"x"} rightBorder={true} bottomBorder={true} />
            <Square value={"x"} rightBorder={true} bottomBorder={true} />
            <Square value={"x"} rightBorder={false} bottomBorder={true} />
         </View>
         <View style={styles.row}>
            <Square value={"x"} rightBorder={true} bottomBorder={false} />
            <Square value={"x"} rightBorder={true} bottomBorder={false} />
            <Square value={"x"} rightBorder={false} bottomBorder={false} />
         </View>
      </View>
   );
}

function Square({ value, rightBorder, bottomBorder }) {
   return (
      <View
         style={[
            styles.square,
            rightBorder ? styles.rightBordered : "",
            bottomBorder ? styles.bottomBordered : "",
         ]}
      >
         <Text adjustsFontSizeToFit={true} style={styles.value}>
            {value}
         </Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
   board: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: "85%",
      height: "85%",
   },
   square: {
      width: "33%",
      paddingBottom: "8%",
      paddingTop: "5%",
   },
   row: {
      display: "flex",
      flexDirection: "row",
   },
   value: {
      fontSize: 60,
      fontWeight: "bold",
      textAlign: "center",
   },
   rightBordered: {
      borderRightWidth: 7,
   },
   bottomBordered: {
      borderBottomWidth: 7,
   },
});
