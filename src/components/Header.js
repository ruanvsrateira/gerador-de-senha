import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';

const Header = () => {

    useEffect(() => {
        const theme = localStorage.getItem("chakra-ui-color-mode");

        if (theme == "dark") {
            localStorage.setItem("chakra-ui-color-mode", "light");
        }
    }, []);

    return(
        <Flex
            alignItems="center"
            justify="space-between"
            margin="auto"
            width="100%"
            padding="0px 30px"
            height="70px"
            background="royalblue"
        >
            <Text
                fontFamily="Poppins"
                fontSize="25px"
                color="#fff"
                fontWeight="300"
            >
                Projeto Gerador de senha
            </Text>

            <Flex
                width="170px"
                justify="space-between"
                align="center"
            >
            </Flex>
        </Flex>
    );
};

export default Header;