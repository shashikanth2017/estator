import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex,Box,Text,Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import Searchfilter from "@/components/searchfilter";
import Property from "@/components/property";
import noresult from "../components/noresult.jpg"
import { baseUrl, fetchApi } from "@/utils/fetchAPI";
 const Search=({proper,prop,pro})=>{
    const[searchfilter,setsearchfilter]=useState(false);
    const route=useRouter();
    return(
              <>  
        <Box>
            <Flex cursor={"pointer"} bg={"gray.100"} borderBottom={"1px"}   borderColor={"gray.300"} p={"2"} 
            fontWeight={"black"} fontSize={"lg"} justifyContent={"center"} alignItems={"center"} className="sm:w-auto mx-auto"
            onClick={()=>setsearchfilter((prevfilter)=>!prevfilter)} >
                <Text>Search filter is here</Text>
                <Icon paddingLeft={"2"} w={"7"} as={BsFilter}/>

            </Flex>
            {searchfilter&&<Searchfilter/>}
            <Text fontSize={"2xl"} p={"4"} fontWeight={"bold"} alignItems={"center"} alignContent={"center"}> Properties {route.query.purpose}</Text>
          <div className="dis">
            {/* {(route.query.purpose=="for-sale")?prop?.map(((property)=><Property properties={property} key={property.id}/>)):pro?.map(((property)=><Property properties={property} key={property.id}/>))} */}
            </div>
            <section className="grid grid-cols-4 space-x-3 items-center mx-auto justify-center mt-10">
            {/* <Flex> */}
            {proper.map(((property)=><Property properties={property} key={property.id}/>))}
            {/* </Flex> */}
            </section>
            
            {proper.length===0 &&(<Flex alignContent={"center"} alignItems={"center"} flexDirection={"column"} marginTop={"5"} marginBottom={"5"}>
                <Image alt="No Result" src={noresult} width={"200"} height={"300"}/>
                <Text fontWeight={"bold"} color={"black"}>No Results Found!</Text>
            </Flex>)}
        </Box>
        </>
    )
 }
 export default Search;
 export async function getServerSideProps({query}){
    const purpose=query.purpose||"for-rent";
    const rentFrequency=query.rentFrequency ||'yearly';
    const minPrice=query.minPrice||'0';
    const maxPrice=query.maxPrice||'1000000';
    const bathsMin=query.bathsMin||'0';
    const areaMax=query.areaMax||'35000';
    const roomsMin=query.roomsMin||'0';
    const sort=query.sort||'price-desc';
    const locationExternalIDs=query.locationExternalIDs||'5002';
    const categoryExternalIDs=query.categoryExternalIDs||'4';
    // const propertyForRent= await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=20`)
    // const propertyForSale= await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=20`)

    const data= await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalIDs=${categoryExternalIDs}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`)
 
    return{
      props:{
        proper:data?.hits,
        // prop:propertyForRent?.hits,
        // pro:propertyForSale?.hits
  
      }
    }
  
  }