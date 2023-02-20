import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link as NLink,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  import Link from 'next/link';
  
  export default function PeopleCard({id,username,title,address}:any) {
   let {street,suite,city,zipcode}=address
    return (
        <div>
      <Center py={6}>

        <Box
        
        key={id}
        width={"300px"}
          maxW={'340'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
                'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
           
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
        {title}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
           {username}
          </Text>
          <span>{street},{suite},{city}</span>
  
          
  
          <Stack mt={8} direction={'row'} spacing={4} >
          
              <Link href={`people/${id}`}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
             Get Todos
            </Button>
                </Link>
          </Stack>
        </Box>
      </Center>
        </div>
    );
  }