import { Text } from "native-base"
export function Titulo({children}){
    return(
        <Text fontSize='2xl' fontWeight='bold' color='gray.500' textAlign='center' mt={5}>
      {children}
    </Text>
    )
}