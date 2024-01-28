'use client'
import { Card, Text } from "@nextui-org/react";
import Image from "next/image";
import button from '../assets/button.svg'
import React from 'react'
import { useRouter } from 'next/router';

const CustomCard = ({CardName, Description}) => {
 
  return (
    <div style={{width:'360px'}} className= " bg-gray-800 text-white text-center text-xl ml-10 p-5 rounded-3xl hover:shadow-white hover:shadow-md">
      <h1 className="font-bold">{CardName}</h1>
      <br />
      <div className="flex mt-2 flex-row justify-center gap-2 text-sm">
        {Description}
      </div>
    </div>
  );
}

export default CustomCard;
