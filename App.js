import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import StackNavigator from './StackNavigator';
import { MovieContext } from './Context';
// import { StripeProvider } from "@stripe/stripe-react-native";


export default function App() {
  return (
    <>
      <MovieContext>
        {/* <StripeProvider publishableKey="pk_test_51MziaeSCw49QA16kz6sXsC2737XeJSYj2rgLbx31P5aBqv44bmL673cSZSscpY6dIRrrFqseAoSw8n1nTGxZrYMU00vidESL9i"> */}
        <StackNavigator />
        <StatusBar style="auto" />
        {/* </StripeProvider> */}
      </MovieContext>
    </>
  );
}

const styles = StyleSheet.create({});
