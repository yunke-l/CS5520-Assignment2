import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import GlobalStyles from '../styles/StylesHelper';
import colors from '../styles/colors';

const Checkbox = ({ checked, onChange }) => {
  const toggleCheckbox = () => {
    onChange(!checked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View
        style={GlobalStyles.checkboxContainer}
      >
        <View
          style={[
            GlobalStyles.checkbox,
              { backgroundColor: checked ? colors.checkboxSelected : colors.checkboxUnselected } 
          ]}
      >
          {checked && (
            <Text
              style={GlobalStyles.checkboxSelected}
            >
              ✓
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};


export default Checkbox;