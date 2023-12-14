import React from "react";
import { Box,Input,Button, HStack,Flex} from '@chakra-ui/react';
import { BellIcon, CalendarIcon ,SearchIcon} from '@chakra-ui/icons';


function Navbar() {
    return (

      
 
        <Box >
        <Flex h={16} justifyContent={'space-between'}>
          <Button>
        <BellIcon/>
        </Button>
        <Input
           placeholder="What are you looking"
           size="md"
        />
    <Button >
      <SearchIcon/>
    </Button>
</Flex>
        </Box>
     

      
        
	);
};

export default Navbar;