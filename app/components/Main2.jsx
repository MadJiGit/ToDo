import React, { useContext, useState, useCallback } from'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
} from 'react-native';

import { UserContext } from "./Context";

const Main2 = () => {

    const userContext = useContext(UserContext);
    const { users, selectedUser, setSelectedUser } = usersContext;

    return (
        
        <View style={styles.container}> 
            <Text style={styles.headerText}>Helooo</Text>
            <TouchableOpacity onPress={() => setSelectedUser(user)} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>X</Text>
            </TouchableOpacity>
        </View>
        
    );
};

export default Main2;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        color: '#ffd700',
        fontSize: 36,
        padding: 26,
        fontWeight: "500",
    },

    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eb3148',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },

    noteDeleteText: {
        color: 'white',
        fontWeight: "700",
        fontSize: 24,
    },
});