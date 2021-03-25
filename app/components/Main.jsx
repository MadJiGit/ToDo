import React, { useState, useCallback } from'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput, 
    TouchableOpacity, 
    ScrollView,
} from 'react-native';
import Note from './Notes';


const Main = () => {
    const [notes, setNotes] = useState([]);
    const [inputVal, setInputVal] = useState('');

    const addNote = useCallback(() => {
        if (inputVal.length) {
            const d = new Date();
            const payload = {
                date: `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`,
                note: inputVal,
            }
            setNotes([payload, ...notes]);
            setInputVal('');
        }
    }, [notes, inputVal]);


    const onDelete = useCallback((index) => () => {
        notes.splice(index, 1); 
        setNotes([...notes]);
    }, [notes]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>ToDo</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {notes.map((item, index ) => (
                    <Note key={index} data={item} onDelete={onDelete(index)}  />
                ))}
            </ScrollView>
            <View style={styles.footer}>
                <TextInput 
                    onChangeText={(userInput) => setInputVal(userInput)}
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

export default Main;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#3d3d3d',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10, 
        borderBottomColor: '#ddd',
        paddingTop: 20,
    },

    headerText: {
        color: '#ffd700',
        fontSize: 36,
        padding: 26,
        fontWeight: "500",
    },

    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    
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

    addButtonText: {
        color: '#ffd700',
        fontSize: 26,
        fontWeight: "700",
    },
});