import React from 'react'
import { useState } from 'react';
import {  Box, InputLeftElement, Flex, FormControl, FormLabel, Heading, Input, InputGroup, Stack, Textarea, Button } from '@chakra-ui/react'


const initialData = {
    type:'',
    description:'',
    size:'',
    date:'',


}

 
function Order() {

  const [formData,setFormData]= useState(initialData);

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  console.log(formData)
  return (
    <Flex align='center' justify='center'>
      <Stack>
        <Heading>
          order
        </Heading>
        <Box rounded={'lg'} bg={'white'} p={'7'}>
          <Stack>
            <FormControl>
              <FormLabel>Cake type</FormLabel>
              <Input name='type'placeholder='select a category'
              value={formData['type']}
              onChange={handleChange}
              />
              </FormControl>
            <FormControl>
              <FormLabel>Cake description</FormLabel>
              <Textarea name='description'placeholder='description'
                value={formData['description']}
                onChange={handleChange}
                />
           </FormControl>
            <FormControl>
              <FormLabel>Size</FormLabel>
              <InputGroup>

              <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              fontSize='1.2em'
              children='kg'
            />
              <Input  name = 'size'placeholder='1'
               value={formData['size']}
               onChange={handleChange}
              />
              </InputGroup>
              
            </FormControl>
           
          
            <FormControl>
              <FormLabel>Pick up/Delivery</FormLabel>
              <Input
					type="date"
					required
					name="date"
          value={formData['date']}
          onChange={handleChange}
				/>

            </FormControl>
            <Stack>
              <Button>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Order