import Footer from "../components/footer"
import Navbar from "../components/navbar"
export default function About (){

return(
<main>
<Navbar></Navbar>
{/* <Footer></Footer> */}
<div className="bg-cover h-screen " style={{backgroundImage: "url(bg-2.jpg)"}}>
                 <h1 className=" text-white font-mono lg:text-4xl relative lg:left-20 inline lg:top-52 md:top-36 md:left-24 sm:top-24 top-52 left-8 font-bold text-2xl">About Me;</h1>
                 <span className="text-white relative top-72 md:left-24 left-2 font-mono">Hey i'Am Saim Hassam From Karachi And I a'm study in Governor House It Program in Karachi Now I am Front on <br />Focused Web Developer 
                    My Development Name is Saim Chain Dev, </span>              
</div>
</main>
    )
}