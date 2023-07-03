import { Box, Button, Flex, Text ,ButtonGroup,Spacer,Grid,GridItem} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { baseUrl,fetchApi } from '@/utils/fetchAPI'
const Banner=({purpose,imageUrl,title1,title2,des1,des2,buttontext,linkname})=>(
  <Flex flexWrap="wrap" justifyContent="left" alignItems={"center"}  m="10">
    <Image src={imageUrl} width={500} height={300} alt='Banner'/>
    <Box p="5">
      <Text color={'gray.600'} fontSize={'sm'} fontWeight={'medium'}>{purpose}</Text>
      <Text color={'gray.500'} fontSize={'3xl'} fontWeight={'bold'}>{title1}<br/>{title2}</Text>
      <Text color={'gray.500'} fontSize={'lg'} paddingTop="3" paddingBottom="3">{des1}<br/>{des2}</Text>
      <Button  colorScheme='blue' size={"md"}>
        <Link href={linkname}>{buttontext}</Link>
        </Button>

    </Box>
  </Flex>
    

)
export default function Home({propertiesForRent,propertiesForSale}) {
  return (
    <>

    <Box>
     <div className="d">
      <Banner
      purpose="Rent a home"
      title1="Rental home for everyone"
      title2="Everyone"
      des1="Explore Apartments,Villas,Homes"
      des2="and more"
      buttontext="Explore Renting"
      linkname="/search?purpose=for-rent"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcNCvYt7aQT6fGjYESJNDv7_eLOQ91Or4Ew&usqp=CAU"      
      />
      <Banner
      purpose="Buy a home"
      title1="Find,buy own yours"
      title2="Dream home"
      des1="Explore Apartments,Villas,Homes"
      des2="and more"
      buttontext="Explore Buying"
      linkname="/search?purpose=for-rent"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcX3Ap7I1bbpHIXQLNzxustoWywn2sgkS9GQ&usqp=CAU"    
      />
      </div>
        {/* <div className='fl'>

        {propertiesForRent.map(((property)=><Property properties={property} key={property.id}/>))}
        </div>
    */}
    
      
     
      {/* <div className='fl'>
      {propertiesForSale.map(((property)=><Property properties={property} key={property.id}/>))}
      </div> */}
      </Box>
      </>

  )
}
export async function getStaticProps(){
  const propertyForSale= await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent= await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  return{
    props:{
      propertiesForRent:propertyForRent?.hits,
      propertiesForSale:propertyForSale?.hits,

    }
  }

}
