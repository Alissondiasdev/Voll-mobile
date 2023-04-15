import {VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './Componentes/Titulo';
import { EntradaTexto } from './Componentes/EntradaTexto';
import { useState } from 'react';

export default function Login() {
const [numSecao, setNumsecao] = useState(0)

const secoes = [{
  id: 1,
  titulo: 'Insira alguns dados básicos',
  entradatexto: [
    {
      id: 1,
      label: 'nome',
      placeholder: 'Digite seu nome completo',

    },
    {
      id: 2,
      label: 'Email',
      placeholder: 'Digite seu email',

    },
    
  ]
},
{
  id: 2,
  titulo: 'Agora, mais alguns dados sobre você:',
entradaTexto:[
  {
    id: 1,
    label: 'CEP',
    placeholder: 'Digite seu CEP',
  }
]
}
]
function avancarSecao () {
  setNumsecao(numSecao+1)
}

  return (<VStack flex={1} alignItems='center' p={5} justifyContent='center'>
    <Image source={Logo} alt='logo voll'/>
    <Titulo>
      {secoes[numSecao].titulo}
    </Titulo>
    <Box>
      {secoes[numSecao].entradatexto.map(entrada => {
        return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id}/>
      })}
      
    </Box>



    <Button onPress={() => avancarSecao()} w='100%' bg='blue.800' mt={10} borderRadius='lg'>
      Avançar
    </Button>
    

  </VStack>
    
  );
}
