import React from "react";
import { Box,Input,Button, HStack,Flex, Container} from '@chakra-ui/react';
import { BellIcon, CalendarIcon ,SearchIcon} from '@chakra-ui/icons';
import { Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navbar() {
    return (
      <div>

         
        Navbar

      <Box  px={4}>
           <Flex h={16} justifyContent={'space-between'}>
                    <HStack spacing='24px'>
                        <Button onClick={(addEventListener )}>
                          <SearchIcon/>
                        </Button>
                  
                 <HStack>
                     <Link to ={'/'}> Home</Link>
                     <Link to ={'/order'}>order</Link>
                 </HStack>
                 <Button>
                  <CalendarIcon/>
                 </Button>
            </HStack>
          </Flex>
   </Box>
      </div>
        
      
      
        
	);
};

export default Navbar;