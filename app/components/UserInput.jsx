import React, { useState, useCallback } from'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput, 
    TouchableOpacity, 
} from 'react-native';
import Note from './Notes';


const UserInput = () => {
  
    return (
        <View>
            <View style={styles.footer}>
                <TextInput 
                    onChangeText={(userInput) => setInputVal(userInput) }
                    value={inputVal}
                    style={styles.textInput}
                    placeholder=">some text"
                    placeholderTextColor="#eee"
                    underlineColorAndroid="transparent">
                </TextInput>
            </View> 
            <TouchableOpacity onPress={addNote} style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserInput;

const styles = StyleSheet.create ({
    textInput: {
        alignSelf: 'stretch',
        color: '#fdd700',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
        fontSize: 32,
    },

    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 100,
        backgroundColor: '#3d3d3d',
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },


    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },

    addButtonText: {
        color: '#ffd700',
        fontSize: 26,
        fontWeight: "700",
    },
});