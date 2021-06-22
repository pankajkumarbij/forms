import React, {useState} from 'react';
import {StyleSheet, Media, Text, View} from 'react-native';
import {Card, Button, TextInput} from 'react-native-paper';

export default function Home() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mn, setMn] = useState("");

    function submitForm(){
        console.log("name: "+name);
        console.log("email: "+email);
        console.log("Mobile No: "+mn);
    }

    return (
        <View style={styles.container}>
            <Card style={styles.cards}>
                <Card.Title title="Insert Form Data"/>
                <Card.Content>
                    <TextInput
                        label="Name"
                        mode="outlined"
                        value={name}
                        onChangeText={name => setName(name)}
                    />
                    <TextInput
                        label="Email"
                        mode="outlined"
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                    <TextInput
                        label="Mobile No"
                        mode="outlined"
                        value={mn}
                        onChangeText={mn => setMn(mn)}
                    />
                    <Button icon="upload" mode="outlined" onPress={() => submitForm()} style={styles.submitbutton}>
                        Insert Data
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cards:{
        width: '80%',
    },
    submitbutton: {
        marginTop: 7,
    }

});
