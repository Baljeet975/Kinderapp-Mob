import { Link } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import Leave from "../Leave/Leave";
import Icon from "react-native-vector-icons/MaterialIcons";

const MenuItems = ({ navigation }) => {
  const handleAttendance = () => {
    navigation.navigate("AttendanceCalendar");
  };
  const handleLeave = () => {
    navigation.navigate("Leave");
  };
  const handleleavedetail = () => {
    navigation.navigate("LeaveDetail");
  };
  const handlePaymentHistory = () => {
    navigation.navigate("PaymentHistory");
  };
  const handleLogout = () => {
    navigation.navigate("Login");
  };
  const handlePayment = () => {
    navigation.navigate("PaymentGatway");
  };
  const handleAppointment = () => {
    navigation.navigate("AppointmentForm");
  };

  const handleIssuedBooks = () => {
    navigation.navigate("IssuedBooks");
  };

  const handleclasses = () => {
    navigation.navigate("OnlineClasses");
  };

  const handledownloads = () => {
    navigation.navigate("MyDownload");
  };
  const handlemarkattendance = () => {
    navigation.navigate("MarkAttendance");
  };

  const handleListAppointment = () => {
    navigation.navigate("AppointmentList");
  };

  const handleBooks = () => {
    navigation.navigate("BookList");
  };

  async function removeToken() {
    try {
      await AsyncStorage.removeItem("token");
      console.log("Token removed from local storage");
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error removing token from local storage:", error);
    }
  }

  return (
    <GestureHandlerRootView>
      <View style={styles.view}>
        <ScrollView>
          <TouchableOpacity onPress={handleAttendance}>
            <Card style={styles.card1}>
              <Card.Title
                title="Attendance"
                left={(props) => <Icon name="people" size={30} color="#000" />}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLeave}>
            <Card style={styles.card2}>
              <Card.Title
                title="Apply Leave"
                left={(props) => (
                  <Icon name="bookmark" size={30} color="#000" />
                )}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleleavedetail}>
            <Card style={styles.card3}>
              <Card.Title
                title="Leave Details"
                left={(props) => (
                  <Icon name="event-note" size={30} color="#000" />
                )}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePaymentHistory}>
            <Card style={styles.card3}>
              <Card.Title
                title="Fee Payment History"
                left={(props) => <Icon name="history" size={30} color="#000" />}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePayment}>
            <Card style={styles.card3}>
              <Card.Title
                title="Online Payment"
                left={(props) => (
                  <Icon name="credit-card" size={30} color="#000" />
                )}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleclasses}>
            <Card style={styles.card3}>
              <Card.Title
                title="Online Classes"
                left={(props) => <Icon name="laptop" size={30} color="#000" />}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAppointment}>
            <Card style={styles.card3}>
              <Card.Title
                title="Fix Appointment"
                left={(props) => <Icon name="event" size={30} color="#000" />}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleListAppointment}>
            <Card style={styles.card1}>
              <Card.Title
                title="My Appointments"
                left={(props) => <Icon name="list" size={30} color="#000" />}
              />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleIssuedBooks}>
            <Card style={styles.card3}>
              <Card.Title
                title="Issued Books"
                left={(props) => <Icon name="book" size={30} color="#000" />}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBooks}>
            <Card style={styles.card3}>
              <Card.Title
                title="Books"
                left={(props) => <Icon name="book" size={30} color="#000" />}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handledownloads}>
            <Card style={styles.card3}>
              <Card.Title
                title="My Download"
                left={(props) => (
                  <Icon name="cloud-download" size={30} color="#000" />
                )}
              />
            </Card>
          </TouchableOpacity>
          <Card style={styles.card3}>
            <Card.Title
              title="Resources"
              left={(props) => <Icon name="folder" size={30} color="#000" />}
            />
          </Card>
          <Card style={styles.card3}>
            <Card.Title
              title="Planners"
              left={(props) => (
                <Icon name="date-range" size={30} color="#000" />
              )}
            />
          </Card>
          <Card style={styles.card3}>
            <Card.Title
              title="Gallaries"
              left={(props) => (
                <Icon name="photo-library" size={30} color="#000" />
              )}
            />
          </Card>
          <TouchableOpacity onPress={removeToken}>
            <Card style={styles.card11}>
              <Card.Title
                title="Logout"
                left={(props) => <Icon name="logout" size={30} color="#000" />}
              />
            </Card>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  view: {
    // marginBottom: 10,
  },
  card: {
    // backgroundColor:"black",
    height: 300,
    width: 360,
  },
  card1: {
    marginTop: 10,
  },
  card2: {
    marginTop: 10,
  },
  card3: {
    marginTop: 10,
  },
  card10: {
    marginTop: 10,
    marginBottom: 10,
  },
  card11: {
    marginTop: 10,
    // marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default MenuItems;
