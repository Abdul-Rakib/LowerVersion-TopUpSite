import React, { useEffect, useState } from "react";
import CardsScroller from "../../components/card/CardsScroller";
import Carousel from "./Carousel";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import CardsGrid from "../../components/card/CardsGrid";
import { useGetProducts } from "../../hooks/useGetProducts";

const HomePage = () => {
  const { getAccessTokenSilently } = useAuth0();
  

  const {getProducts,isLoading,games,trending,ott} = useGetProducts();
  useEffect(()=>{
    async function fetch(){
      await getProducts();
    }
    fetch();
  },[])

  

  // const callUnProtected = async() =>{
  //   const response = await fetch(`http://localhost:3001/show`,{
  //     method:"GET"
  //   })
  // }

  // const callProtected = async() =>{
  //   try{
  //   const token = await getAccessTokenSilently();
  //   console.log(token);

  //   // const response = await fetch(`http://localhost:3001/protected`,{
  //   //   method:"GET",
  //   //   headers: { Authorization: `Bearer ${token}` },
  //   // })

  //   const response = await axios.get('http://localhost:3001/protected',{
  //     headers : {
  //       authorization : `Bearer ${token}`,
  //     }
  //   })
  // }catch(err){
  //   console.log(err.message);
  // }
  // }
  return (
    <>
    {!isLoading && <div className="mt-[5rem] lg:mx-[6rem] mx-[1rem] flex flex-col gap-3">
        <Carousel />
        {/* <button onClick={callUnProtected}>Protected</button>
       <button onClick={callProtected}>Not Protected</button> */}
        <div className="mt-5 flex flex-col gap-4">

          <div>
            <div className="font-[800] text-white md:text-[2rem] text-[1.5rem]">
              Trending
            </div>
            <CardsScroller data = {trending}/>
          </div>

          <section id="games">
            <div className="font-[800] text-white  md:text-[2rem] text-[1.5rem]">
              Games
            </div>
            <CardsGrid data = {games}/>
          </section>

          <section id="ott">
            <div className="font-[800] text-white  md:text-[2rem] text-[1.5rem]">
              OTT
            </div>
            <CardsGrid data = {ott}/>
          </section>
       
       
        </div>

        


      </div>}
      
    </>
  );
};

export default HomePage;