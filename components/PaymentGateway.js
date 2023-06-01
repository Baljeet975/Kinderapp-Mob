import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import RazorpayCheckout from 'react-native-razorpay';

const PaymentGateway = () => {

  // const handlePayment = async () => {
  //   var options = {
  //     description: 'Credits towards consultation',
  //     image: 'https://i.imgur.com/3g7nmJC.png',
  //     currency: 'INR',
  //     key: 'rzp_test_NYJco7SuPIwNLY',
  //     amount: '5000',
  //     // external: {
  //     //   wallets: ['paytm']
  //     // },
  //     name: 'foo',
  //     prefill: {
  //       email: 'ebs@razorpay.com',
  //       contact: '9191919191',
  //       name: 'Ebullient Soft'
  //     },
  //     theme: { color: '#F37254' }
  //   };

  //   try {
  //     const data = await RazorpayCheckout.open(options);
  //     alert(`Success: ${data.razorpay_payment_id}`);
  //   } catch (error) {
  //     alert(`Error: ${error.code} | ${error.description}`);
  //   }
  // };

  // const handleExternalWalletSelection = (data) => {
  //   alert(`External Wallet Selected: ${data.external_wallet}`);
  // };

  // RazorpayCheckout.onExternalWalletSelection(handleExternalWalletSelection);

  return (

    <View>
      <Text>Student Attendance</Text>

    </View>



    // <View style={styles.container}>
    //   <Text style={styles.heading}>Razorpay</Text>
    //   <TouchableOpacity onPress={handlePayment} style={styles.button}>
    //     <Text style={styles.buttonText}>Make Payment</Text>
    //   </TouchableOpacity>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F37254',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentGateway;
