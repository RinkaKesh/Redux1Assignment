import React from 'react'
import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
// import { Stack, HStack, VStack } from '@chakra-ui/react'



const AddTodo = ({ handleAdd }) => {
  const [text, setText] = useState(" ")
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={() => {
        handleAdd(text)
        setText(" ")
      }}
      >Add</Button>

    </div>
  )
}

export default AddTodo