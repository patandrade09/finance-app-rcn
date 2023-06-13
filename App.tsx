import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import SignUp from './src/views/SignUp';

const App = () => {
  return (
    <>
    <StatusBar/>
    <View>
      <SignUp/>
    </View>

    </>
      
  )
}

export default App
