import { useColorMode } from  '../components/ui/color-mode'
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot, Stack, Text } from "@chakra-ui/react"
import { Button } from "antd"
import { useState } from "react"


const Demo = () => {
    const [value, setValue] = useState(["second-item"])

    const items = [
      { value: "first-item", title: "First Item", text: "Some value 1..." },
      { value: "second-item", title: "Second Item", text: "Some value 2..." },
      { value: "third-item", title: "Third Item", text: "Some value 3..." },
    ]
    
    const {toggleColorMode} = useColorMode()
     
    
  return (
    <Stack gap="4">
      <Text fontWeight="medium">Expanded: {value.join(", ")}</Text>
      <AccordionRoot value={value} onValueChange={(e) => setValue(e.value)}>
        {items.map((item, index) => (
          <AccordionItem key={index} value={item.value}>
            <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
            <AccordionItemContent>{item.text}</AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    <Button variant="outline" onClick = {toggleColorMode}>
        Toggle Mode
    </Button>
    </Stack>

    
  )
}
export default Demo

