import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import StyleHelper from "../StyleHelper";

const Checkbox = ({ label, checked, onChange }) => {
  const toggleCheckbox = () => {
    onChange(!checked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View
        style={StyleHelper.checkboxContainer}
      >
        <View
          style={[
              StyleHelper.checkbox,
              { backgroundColor: checked ? "#007FFF" : "transparent" } // Use an array to apply multiple styles
          ]}
      >
          {checked && (
            <Text
              style={StyleHelper.checkboxSelected}
            >
              ✓
            </Text>
          )}
        </View>
        <Text style={StyleHelper.checkboxLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const StyleHelper = StyleSheet.create({
    // checkbox component styles
    checkboxContainer:{
        flexDirection: "row",
        alignItems: "center",
      },
      checkbox:{
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 3,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
      },
        
      checkboxLabel: {
        color: "blue",
        fontSize: 15,
      },
      checkboxSelected: {
        color: "white",
        fontWeight: "bold",
      },
});

export default Checkbox;