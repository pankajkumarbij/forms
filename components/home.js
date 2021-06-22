import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Button, TextInput, DataTable} from 'react-native-paper';

export default function Home() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mn, setMn] = useState("");
    const [data, setData] = useState();
    const [isupdate, setIsupdate] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/api/post/display/', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => setData(data));
    }, [data]);

    function submitForm(){
        fetch('http://localhost:5000/api/post/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:name,
                email:email,
                mobile_no:mn
            })
        })
        .then(res => res.json())
        .then(data => console.log(data)); 
        setName("");
        setEmail("");
        setMn("");
        setIsupdate("");
    }

    function deleteData(id){
        fetch(`http://localhost:5000/api/post/deleteUser/${id}/`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => console.log(data)); 
    }

    function updateData(id){
        fetch(`http://localhost:5000/api/post/display/${id}/`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then((data) => {
            setName(data[0].name);
            setEmail(data[0].email);
            setMn(data[0].mobile_no);
        })
        setIsupdate(data[0]._id);
    }

    function updateForm(){
        fetch(`http://localhost:5000/api/post/updateUser/${isupdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:name,
                email:email,
                mobile_no:mn
            })
        })
        .then(res => res.json())
        .then(data => console.log(data)); 
        setName("");
        setEmail("");
        setMn("");
        setIsupdate("");
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
                    {isupdate==="" ? 
                        <Button icon="upload" mode="outlined" onPress={() => submitForm()} style={styles.submitbutton}>
                            Insert Data
                        </Button>
                        :
                        <Button icon="circle-edit-outline" mode="outlined" onPress={() => updateForm()} style={styles.submitbutton}>
                            Update Data
                        </Button>
                    }
                    
                </Card.Content>
            </Card>
            <DataTable style={styles.table}>
                <DataTable.Header>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title>Email</DataTable.Title>
                    <DataTable.Title>Mobile No</DataTable.Title>
                    <DataTable.Title>Delete</DataTable.Title>
                    <DataTable.Title>Update</DataTable.Title>
                </DataTable.Header>
                {data &&
                    data.map((item)=>{
                        return (
                            <DataTable.Row key={item._id}>
                                <DataTable.Cell>{item.name}</DataTable.Cell>
                                <DataTable.Cell>{item.email}</DataTable.Cell>
                                <DataTable.Cell>{item.mobile_no}</DataTable.Cell>
                                <DataTable.Cell><Button icon="delete" mode="outlined" onPress={() => deleteData(item._id)}>Delete</Button></DataTable.Cell>
                                <DataTable.Cell><Button icon="circle-edit-outline" mode="outlined" onPress={() => updateData(item._id)}>Update</Button></DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                }
            </DataTable>
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
    table:{
        width: '80%',
        marginTop: '3%'
    },
    submitbutton: {
        marginTop: 7,
    }

});
