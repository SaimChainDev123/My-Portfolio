import Navbar from "./components/navbar";

export default function Home() {
  return (
<main className="lg:h-screen h-screen bg-center bg-cover " style={{backgroundImage: "url(bg-2.jpg)"}}>
 <div>
  <Navbar></Navbar>
  {/* <Footer></Footer> */}
 </div>
 <div className="">
        <div id="title" className="    lg:pt-80 md:pt40 pt-72 pl-7 lg:pl-40 md:pl-20">
                <h1 className="text-gray-200 inline text-[27px]     fsc lg:text-5xl font-mono">Welcome To My World <span className=" text-blue-500"> <br />
                 Saim Chain </span> <span className="text-red-500">Dev</span></h1><br />
                 <p className="text-gray-200 lg:text-[16px]  inline text-[10px]"> Welcome to My Portfilio Website using to make it Next js,Typescript and <br />  Tailwind CSS </p>
        </div>
</div>
{/* <div>
  <h1 className="text-gray-200 font-mono lg:text-3xl relative inline lg:left-40 left-5 top-[280px] lg:top-[600px] font-bold">Social</h1>
</div>
<div>
  <img src="/github_PNG40.png" alt="" />
</div> */}


  
</main>
    
  );
}
