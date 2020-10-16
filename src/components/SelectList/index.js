import React from "react";
import {TouchableOpacity, Text, StyleSheet, View} from "react-native";
import PropTypes from "prop-types";

const SelectList = ({
    name,
    onPress,
    checked
}) => (
    <TouchableOpacity
        onPress={onPress}
        style={styles.container}
    >
        {
            checked == true ?
                <View style={styles.isTrue}></View> :
                <View style={styles.isFalse}></View>
        }
        <Text
            numberOfLines={1}
            width={'65%'}
            textAlign={'left'}
        >
            {name}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    isTrue: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'blue',
        marginRight: 5
    },
    isFalse: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'red',
        marginRight: 5
      },
      container: {
          flexDirection: 'row',
          marginBottom: 10,
          marginLeft: 10
      }
  });

SelectList.propTypes = {
    name: PropTypes.array.isRequired,
    onPress: PropTypes.func,
    checked: PropTypes.bool
};

export default SelectList;

