import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

const Home = () => {

    const passwordGenerator = () => {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
        const quantityChars = document.querySelector(".quantityChars").value;
        let passwordArray = [];
        const passwordTitle = document.querySelector(".passwordTitle");
        const boxPassword = document.querySelector(".boxPassword");

        if (quantityChars && passwordTitle.innerText == "") {
            passwordTitle.innerText = "Senha gerada:";
            boxPassword.style.borderColor = "royalblue";
        }

        for(let i=0; i < quantityChars; i++) {
            let randNumber = Math.floor(Math.random() * chars.length);
            let char = chars[randNumber];

            passwordArray.push(char)
        }

        const password = String(passwordArray).replace(/,/g, "");

        document.querySelector(".passwordGerate").innerText = `${password}`;
    }

    return(
        <Flex
            justify="center"
            alignItems="center"
            direction="column"
            height="100%"
        >
            <Flex
                justify="center"
                alignItems="center"
                direction="column"
                mt="200px"
            >
                <Text
                    color="#5367a3      "
                    fontSize="18px"
                    fontWeight="600"
                    alignSelf="start"
                    fontFamily="Arial"
                >
                    quantidade de caractéres: 
                </Text>
                <Input 
                    color="royalblue"
                    type="number"
                    borderColor=""
                    border="1px solid royalblue"
                    className="quantityChars"

                    _hover={{

                    }}
                />
                               
                <Button
                    mt="20px"
                    width="330px"
                    backgroundColor="royalblue"
                    color="#fff"
                    onClick={passwordGenerator}

                    _hover={{
                        backgroundColor:"#2a438f"
                    }}
                >
                    Gerar senha
                </Button>
            </Flex>

            <Box
                className="passwordContainer"
                maxW="80%"
                height="30px"
                mt="30px"
            >
                <Text
                    className="passwordTitle"
                    color="#2a438f"
                    textAlign="center"
                    fontSize="20px"
                    fontWeight="bold"
                    fontFamily="Poppins"
                >

                </Text>
                
                <Box
                    className="boxPassword"
                    textAlign="center"
                    padding="10px"
                    border="1px solid #fff"
                    borderRadius="4px"
                    mt="5px"
                >
                    <Text
                        textAlign="center"
                        className='passwordGerate'
                        color="#2a438f"
                    >
                    
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};

export default Home;