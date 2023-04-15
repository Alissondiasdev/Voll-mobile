

import Login from './src/Login';
import {NativeBaseProvider, StatusBar} from 'native-base'
import { TEMAS } from './src/estilos/Temas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[900]}/>
      <Login/>

    </NativeBaseProvider>
  );
}


