import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { pYellow, pYellowPressed, pGreen, bH } from "../cssVariables";

const styles = StyleSheet.create({
  filtersContainer: {
    backgroundColor: pYellowPressed,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: pGreen,
  },
});

const Filters = ({ onChange, selections, sections }) => {
  return (
    <View style={styles.filtersContainer}>
      {sections.map((section, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => onChange(i)}
          style={[
            styles.button,
            {
              flex: 1 / sections.length,
              backgroundColor: selections[i] ? pYellowPressed : pYellow,
            },
          ]}
        >
          <View>
            <Text style={{ fontWeight: "500", color: bH }}>{section}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Filters;
