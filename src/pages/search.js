import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex,Box,Text,Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
 const Search=()=>{
    const[searchfilter,setsearchfilter]=useState(false);
    const route=useRouter();
    return(
        <Box>
            <Flex cursor={"pointer"} bg={"gray.100"} borderBottom={"1px"}   borderColor={"gray.300"} p={"2"} 
            fontWeight={"black"} fontSize={"lg"} justifyContent={"center"} alignItems={"center"}
            onClick={()=>setsearchfilter((prevfilter)=>!prevfilter)}>
                <Text>Search filter is here</Text>
                <Icon paddingLeft={"2"} w={"7"} as={BsFilter}/>

            </Flex>
            {searchfilter&&<searchfilter/>}
        </Box>
    )
 }
 export default Search;