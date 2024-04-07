import React from 'react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

const TodoCard = ({id,title,status}) => {
  return (
    <VStack> 

      <h1>TODO</h1>
         <h2> Title:{title}</h2>
         <h4> Id:{id}</h4>
         <p>status:{status?"Completed":"Pending"}</p>
         <button>Edit</button>
         <button>Delete</button>
    </VStack>
  )
}

export default TodoCard