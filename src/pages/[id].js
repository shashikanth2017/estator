import { Box,Flex,Spacer,Text,Avatar } from "@chakra-ui/react";
import { FaBath,FaBed } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { baseUrl,fetchApi } from "@/utils/fetchAPI";
import Imagescroll from "@/components/imagescroll";
const Propertydetails=({properties:{price,rentFrequency,rooms,title,baths,area,agency,isVerified,description,type,purpose,furnishingStatus,amenities,photos}})=>(
    <Box maxWidth={"1000px"} margin={"auto"} p={"4"}>
        {photos&&<Imagescroll datas={photos}/>}

    </Box>
);

export default Propertydetails;


export async function getServerSideProps({params:{id}}){
const data=await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)
return{
    props:{
        properties:data
    }
}

}
