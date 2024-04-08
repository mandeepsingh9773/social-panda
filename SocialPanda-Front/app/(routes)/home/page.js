"use client";
import React, { useEffect, useState } from "react";
import Banner from "./_components/Banner";
import { useUser } from "@clerk/nextjs";

function Home() {
  const { user } = useUser();

  return <div className="p-5 px-10">{!user && <Banner />}</div>;

}

export default Home;
