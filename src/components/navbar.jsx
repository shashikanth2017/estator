import Link from "next/link";
import { Menu,MenuButton,MenuList,MenuItem,IconButton,Flex,Box,Spacer } from "@chakra-ui/react";
import {FcMenu,FcHome,FcAbout} from 'react-icons/fc';
import { BsSearch } from "react-icons/bs";
import {MoonIcon} from "@chakra-ui/icons"
import {Fikey} from 'react-icons/fi';
 const Navbar=()=>(
    <Flex p={"2"} borderBottom={"1px"} borderColor={"gray.300"}>
        <Box fontSize={"3xl"} color={"gray.500"} fontWeight={"bold"} marginLeft={"10"}>
            <Link href={"/"} paddingleft={"2"}>Estator <MoonIcon/></Link>
        </Box> 
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} varient="outlined" color={"red"} />
                <MenuList>
                    <Link href={"/"} passhref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href={"/search"} passhref>
                        <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                    </Link>
                    <Link href={"/search?purpose=for-sale"} passhref>
                        <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href={"/search?purpose=for-rent"} passhref>
                        <MenuItem icon={<FcAbout/>}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>

        </Box>

    </Flex>
 );
 export default Navbar;