import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Registeration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    // const[role,setRole] = useState('');
    const [sessionyear, setSessionYear] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [status, setStatus] = useState('')
    const [role, setRole] = useState('')


    const handleRegister = () => {
        if (!email || !password || !name || !role || !sessionyear || !password_confirmation) {
            setError('Please fill all fields correct.');
            return;
        }

        fetch('https://kinderapi.ebullientsoft.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                name,
                role,
                password_confirmation,
                status: "1",
                sessionyear,
            }),
        })
            .then(response => {
                if (response.ok) {
                    console.log("done")
                    //   navigation.navigate('Login');
                } else {
                    setError('Registration failed. Please try again later.');
                }
            })
            .catch(error => {
                setError('Network error. Please try again later.');
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register a new user</Text>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TextInput style={styles.input} placeholder="Name" onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="Password Confirmation" onChangeText={setPasswordConfirmation} secureTextEntry={true} />

            <Picker
                style={styles.picker}
                selectedValue={role}
                onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
            >
                <Picker.Item label="Role" />
                <Picker.Item label="Admin" value="Admin" />
                <Picker.Item label="Teacher" value="Teacher" />
                <Picker.Item label="Parent" value="Parent" />

            </Picker>
            <Picker
                style={styles.picker}
                selectedValue={sessionyear}
                onValueChange={(itemValue, itemIndex) => setSessionYear(itemValue)}
            >
                <Picker.Item label="Session Year" />
                <Picker.Item label="2021-2022" value="2021" />
                <Picker.Item label="2022-2023" value="2022" />
                <Picker.Item label="2023-2024" value="2023" />

            </Picker>
            {/* <TextInput style={styles.input} placeholder="sessionyear" onChangeText={setSessionYear} /> */}
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    picker: {
        // width: 357,
        // height: 40,
        backgroundColor: '#f5f5f5',
        // borderRadius: 2,
        // marginBottom: 10,
        // paddingLeft: 10,
        // borderColor: "#D3D3D3"
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    pickerItem: {
        // color: '#333',
        fontSize: 16,
    },
});

export default Registeration;