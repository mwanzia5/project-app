import React from 'react'
import {  Box, Center, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'


function Order() {
  return (
    <Flex align='center' justify='center'>
      <Stack>
        <Heading>
          order
        </Heading>
        <Box rounded={'lg'} bg={'white'} p={'7'}>
          <Stack>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input name='Title'placeholder='type'/>
            </FormControl>
            <FormControl>
              <FormLabel></FormLabel>
              <Input name='Title'placeholder='type'/>
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Order