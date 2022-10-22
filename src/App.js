import React, { useState } from 'react';

import { Box,Button, Flex, Heading, Image, List, ListItem, Stack, Text} from "@chakra-ui/react";
function App(){
  const[gamestarted,setgamestarted]=useState(false)
  const[selectednumber,setselectednumber]=useState();
 const[dice,setdice]=useState(1);
 const[error,seterror]=useState(null);
 const[score,setscore]=useState(0);
 

  const numbers=[1,2,3,4,5,6]

  const gameStartedHandler=()=>{
    setgamestarted(true)
  }
  console.log(selectednumber)

  const onclicknumber=(value)=>{
    setselectednumber(value);
    seterror(null);
  }

  const genRandomnumber=()=>{
    if(selectednumber){
    const genNo=Math.ceil(Math.random()*6);
    setdice(genNo);
    if(selectednumber===genNo){
      setscore(prev=>prev+genNo)
    }else{
      setscore(prev=>prev-2);
    }
    }else{
      seterror("Please Select a Number");
    }
    
  }
  return(
    <>
    {
      gamestarted ?(
        <>
        <Stack justify="center" align="center" maxW="1300px" max="auto" h="100vh">
          <Heading as="h1" color={error?"red":"black"} fontSize="6xl">{error?error:"Select Number"}</Heading><Flex pb="16">{
            numbers.map((value)=>(
              <Flex justify="center" align="center" h="50px" w="50px" bg={selectednumber===value?"green":"blackAlpha.400"}
              color="white" fontSize="2xl" key={value} margin={4} borderRadius="2px" onClick={()=>onclicknumber(value)}>{value}</Flex>
              
            )

            )
          }
          </Flex>
          <Box onClick={genRandomnumber}>
          <Image src={`./dice/dice${dice}.png`}/>
          </Box>
        <Text as="p" fontSize={20}>Click on dice to roll</Text>
        <Text fontSize={25} color={score>0?"green":"red"} fontWeight="bold">{score}</Text>
        <Text fontSize={25} fontWeight="bold">Total Score</Text>
        <Button onClick={()=>setscore(0)}>Reset Score</Button>
        </Stack>
        <Stack maxW="900px" mx="auto"  >
          <Heading as="h2">Game Rules:-</Heading>
          <List>
            <ListItem>Select number any number.</ListItem>
            <ListItem>Click on dice image to roll it.</ListItem>
            <ListItem>Select number is equal to obtained dice result then you will get same point on the dice.</ListItem>
          </List>
        </Stack>
        </>
      ):(
    
    <Flex justify="center" align="center">
      <Image  height="50%" src="./dice/dices.png"/>
      <Stack >
        <Heading fontSize="7xl" as="h1">The Dice Game</Heading>
        <Button alignSelf="flex-end" bg="black"color="white" _hover={{bg:"grey"}} onClick={gameStartedHandler} >Start Game</Button>
      </Stack>
    </Flex>
    
      )}
      </>
  )
}
export default App;




    
    
  