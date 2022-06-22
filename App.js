import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   board: {
      width: "90%",
      height: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   row: {
      display: "flex",
      flexDirection: "row",
      height: "30%",
      marginBottom: -60,
   },
   square: {
      marginVertical: 0,
      width: "30%",
      height: "75%",
      display: "flex",
      justifyContent: "center",
   },
   squareText: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: RFPercentage(8),
   },
   rightBorder: {
      borderRightWidth: 3,
   },
   bottomBorder: {
      borderBottomWidth: 3,
   },
});

function Square({ value, rightBorder, bottomBorder }) {
   return (
      <View
         style={[
            styles.square,
            rightBorder == true ? styles.rightBorder : "",
            bottomBorder == true ? styles.bottomBorder : "",
         ]}
      >
         <Text style={styles.squareText}>{value}</Text>
      </View>
   );
}

function Row({ rows }) {
   return (
      <View style={styles.row}>
         {rows.map(row => (
            <Square
               key={row.id}
               value={row.value}
               rightBorder={row.right}
               bottomBorder={row.bottom}
            />
         ))}
      </View>
   );
}

export default function App() {
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.board}>
            <Row
               rows={[
                  { id: 1, value: "O", right: true, bottom: true },
                  { id: 2, value: "X", right: true, bottom: true },
                  { id: 3, value: "O", right: false, bottom: true },
               ]}
            />
            <Row
               rows={[
                  { id: 4, value: "X", right: true, bottom: true },
                  { id: 5, value: "O", right: true, bottom: true },
                  { id: 6, value: "X", right: false, bottom: true },
               ]}
            />
            <Row
               rows={[
                  { id: 7, value: "O", right: true, bottom: false },
                  { id: 8, value: "X", right: true, bottom: false },
                  { id: 9, value: "O", right: false, bottom: false },
               ]}
            />
         </View>
      </SafeAreaView>
   );
}
