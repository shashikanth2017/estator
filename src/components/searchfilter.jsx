import { useEffect,useState } from "react";
import { Box,Flex,Button,Icon,Select,Text,Input,Spinner } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import {MdCancel} from "react-icons/md"
import Image from "next/image";
import { filterData,getFilterValues } from "@/utils/filterdata";

 

const Searchfilter=()=>{
    const[filter,setfilter]=useState(filterData);
    const router=useRouter();
    const searchprop=(filtervalues)=>{
        const path=router.pathname;
        const{query}=router;
        const values=getFilterValues(filtervalues)
        values.forEach((item)=>{query[item.name]=item.value})
        router.push({pathname:path,query})
    
    }
  
    return(
        <Flex bg={"gray.100"} p={"4"} justifyContent={"center"} flexWrap={"wrap"} borderTop={"0px"}>
            {filter.map((filters)=>
            (<Box key={filters.queryName}>
                <Select
                placeholder={filters.placeholder}
                w={"fit-content"}
                p={"2"} 
                onChange={(e)=>searchprop({[filters.queryName]:e.target.value})}>
                    {filters?.items?.map((item)=>(<option value={item.value} key={item.value}>{item.name}</option>))}

                </Select>


            </Box>))}

        </Flex>
    )
}
export default Searchfilter;
