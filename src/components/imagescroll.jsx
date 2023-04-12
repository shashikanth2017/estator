import { Box,Spacer,Flex ,Icon} from "@chakra-ui/react";
import Image from "next/image";
import { useContext } from "react";
import { ScrollMenu,VisibilityContext } from "react-horizontal-scrolling-menu/dist/types";
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
const leftArrow=()=>{
    const {scrollPrev}=useContext(VisibilityContext)
    return(
        <Flex justifyContent={"center"} alignItems={"center"} marginRight={"1"}>
            <Icon
            as={FaArrowAltCircleLeft}
            onClick={()=>scrollPrev()}
            fontSize={"2xl"}
            cursor={"pointer"}
            />

        </Flex>
    )
}
const rightArrow=()=>{
    const {scrollNext}=useContext(VisibilityContext)
    return(
        <Flex justifyContent={"center"} alignItems={"center"} marginRight={"1"}>
            <Icon
            as={FaArrowAltCircleRight}
            onClick={()=>scrollNext()}
            fontSize={"2xl"}
            cursor={"pointer"}
            />

        </Flex>
    )
}





export default function ImageSroll({ datas }) {
    return (
      <ScrollMenu LeftArrow={leftArrow} RightArrow={rightArrow} style={{ overflow: 'hidden' }} >
        {datas.map((item) => (
          <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
            <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
          </Box>
        ))}
      </ScrollMenu>
    );
  }
  
