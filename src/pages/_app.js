import '@/styles/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layout"
import Router from "next/router";
import Head from "next/head";
import { NProgress } from "nprogress";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function App({ Component, pageProps }) {

  return( 
    <>
    
    <ChakraProvider>
      <Navbar/>
      <div>
  
      <Component {...pageProps} />  
      </div>
      {/* <Layout/> */}
      <Footer/>

    </ChakraProvider>
   
  
  </>)
}
