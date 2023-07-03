import Link from "next/link";
import Image from "next/image";
import { Box,Flex,Avatar,Text } from "@chakra-ui/react";
import {FaBed,FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from "millify";
import defaultphoto from '../components/default.jpeg';
const Property=({properties:{coverPhoto,price,rentFrenquency,rooms,title,baths,area,agency,isVerified,externalID}})=>(
    <Link href={`properties/${externalID}`} passhref>
       <Flex flexWrap={"wrap"} width={"5000"} justifyContent={"flex-start"} cursor={"pointer"} p={"5"} paddingTop={"0.5"} className="sm:flex-col mx-auto mt-3 p-2">

        <Box>
            <Image src={coverPhoto? coverPhoto.url:defaultphoto} width={"450"} height={"260"} alt="house"/>
        </Box>
        <Box w={"full"}>
            <Flex paddingTop={"2"} alignItems={"center"} justifyContent={"left"} gap={"2"} w={"full"}>
                <Flex alignItems={"center"}>
                    <Box paddingRight={"3"} color={"green.300"}>{isVerified&& <GoVerified/>}</Box>
                    <Text fontWeight={"bold"} fontSize={"lg"}>AED{millify(price)}{rentFrenquency&&`/${rentFrenquency}`}</Text>
                </Flex>
                <Box>
                    <Avatar size={"sm"}   src={agency?.logo?.url}/>
                </Box>
            </Flex>
            <Flex alignItems={"center"} p={"1"} justifyContent={"left"} gap={"2"} w={"250"} color={"blue.400"}>
                {rooms}<FaBed/>|{baths}<FaBath/>|{millify(area)}<BsGridFill/>|
            </Flex>
            <Text fontSize={"lg"}>
                {title.lenght>30? `${title.substring(0,30)}...`:title}
            </Text>

        </Box>


       </Flex>
        </Link>
    );
export default Property;    