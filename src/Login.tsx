import {VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './Componentes/Titulo';
import { EntradaTexto } from './Componentes/EntradaTexto';
import { Botao } from './Componentes/Botao';

export default function Login() {
  return (<VStack flex={1} alignItems='center' p={5} justifyContent='center'>
    <Image source={Logo} alt='logo voll'/>
    <Titulo>
      Faça login em sua conta
    </Titulo>
    <Box>
      <EntradaTexto label='Email' placeholder='Insira seu endereço de email'/>
      <EntradaTexto label='Senha' placeholder='Insira sua senha'/>
    </Box>
    <Botao>
      Entrar
    </Botao>
    <Link href='#' mt={2}>
    Esqueceu sua senha?
    </Link>
    <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
      <Text>Ainda não tem cadastro?</Text>
      <TouchableOpacity>
        <Text color='blue.500'>
          Faça seu cadastro!
        </Text>
      </TouchableOpacity>
    </Box>

  </VStack>
    
  );
}
