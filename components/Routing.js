import Dashboard from "./Dashboard";
import Login from "./Login";
import { createStackNavigator } from '@react-navigation/stack';
import PaymentHistory from "../components/Payment/PaymentHistory";
import LeaveDetail from "../components/LeaveDetail/LeaveDetail";
import Leave from "../components/Leave/Leave";
import Home from "../components/Tabs/Home"
import PaymentGateway from "../components/PaymentGateway";
import AppointmentForm from "../components/Appointment/AppointmentForm";
import IssuedBooks from "../components/Books/IssuedBooks";
import OnlineClasses from "../components/online classes/OnlineClasses";
import MyDownloadFiles from "../components/MyDownloads/MyDownloadFiles";
import AttendanceCalendar from "../components/AttendanceCalendar";
import MarkAttendance from "../components/Teacher/MarkAttendance";
import Appointmentlist from "../components/Appointment/Appointmentlist";
import BookList from "../components/Books/BookList";
import  Settings  from "../components/Settings";
import Profile from "../components/Profile";
import ForgetPassword from "../components/ForgetPassword";
import HelpSupportForm from "../components/Help&Support/HelpandSupport";
import About from "../components/Help&Support/About";
import MenuItems from "../components/Tabs/MenuItems";

const Stack = createStackNavigator();

const Routing = () => {
  return (
    <>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyDownload" component={MyDownloadFiles} />
        <Stack.Screen name="OnlineClasses" component={OnlineClasses} />
        <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
        <Stack.Screen name="LeaveDetail" component={LeaveDetail} />
        <Stack.Screen name="Leave" component={Leave} />
        <Stack.Screen name="PaymentGateway" component={PaymentGateway} />
        <Stack.Screen name="AppointmentForm" component={AppointmentForm} />
        <Stack.Screen name="IssuedBooks" component={IssuedBooks} />
        <Stack.Screen name="AttendanceCalendar" component={AttendanceCalendar} />
        <Stack.Screen name="AppointmentList" component={Appointmentlist} />
        <Stack.Screen name="BookList" component={BookList} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ResetPassword" component={ForgetPassword} />
        <Stack.Screen name="HelpSupport" component={HelpSupportForm} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="MenuItems" component={MenuItems} />
      </Stack.Navigator>
    </>
  );
};
export default Routing