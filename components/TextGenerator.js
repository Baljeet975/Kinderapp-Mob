import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,TextInput  } from 'react-native';
import axios from 'axios';


const TextGenerator = () => {
    const [generatedText, setGeneratedText] = useState('');
    const [inputText, setInputText] = useState('');

    const generateText = async () => {
        const prompt = inputText;
        const apiKey = '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';
        const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

        try {
            const response = await axios.post(apiUrl, {
                prompt,
                max_tokens: 50,
                temperature: 0.5,
                n: 1,
                // stop: '\n',
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            });

            const generatedText = response.data.choices[0].text;
            setGeneratedText(generatedText);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Text Generator with ChatGPT AI</Text>
            <TextInput
                type="text"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
            />
            <Button title="Generate Text" onPress={generateText} />

            <View>
            <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        value={generatedText}
      />

                {/* <Text>{generatedText}</Text> */}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    generatedText: {
        marginTop: 20,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    input1:{
        height:40,
        width:500
    },
    input: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:400,
      },
});

export default TextGenerator;
