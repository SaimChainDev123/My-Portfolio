import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Home from "../page"

export default function Skills(){
    return(
      <main className="h-screen w-screen">
        <Navbar></Navbar>
            
          <div className=" h-full w-full bg-cover" style={{backgroundImage: "url(/bg-2.jpg)"}}>
            <div>
                <h1 className=" text-gray-200 font-mono text-[20px] px-8 top-36 font-bold lg:text-3xl relative lg:top-52 lg:px-32">Skills:-
                </h1>
            </div>
            <div className="">
               
                <h2 className="text-gray-200 font-mono top-52 px-3 font-bold lg:text-2xl relative lg:top-64 lg:px-44">Basic Skills:</h2>
            <hr  className="relative top-44"/>
            {/* <hr className="relative top-80"/>     */}
                <div className="relative lg:top-72 lg:px-56 px-9 top-56 flex lg:gap-44 gap-4">

                  <a href="https://www.w3schools.com/html/html_intro.asp  "target="https://www.w3schools.com/html/html_intro.asp">  <img src="/html.png" alt="HTML" className="lg:h-48 h-24 "/></a>
                  <a href=" https://www.w3schools.com/Css/css_intro.asp "target="https://www.w3schools.com/Css/css_intro.asp">  <img src="/css.png" alt="HTML" className="  lg:h-56 h-32 relative -top-5  "/></a>
                  <a href="https://www.w3schools.com/whatis/whatis_js.asp  "target="https://www.w3schools.com/whatis/whatis_js.asp">  <img src="/js.png" alt="HTML" className="lg:h-40 h-20 top-3 relative  "/></a>
                </div >
              
                
                <h2 className="text-gray-200 font-mono font-bold px-3 lg:text-2xl text-[5px]relative lg:top-64 top-56 relative lg:px-44">Advance Skills:</h2>
                    <div className="relative lg:top-80 lg:px-64 flex lg:gap-44 gap-10 top-60 px-9">
                    <a href="https://www.w3schools.com/whatis/whatis_react.asp "target="https://www.w3schools.com/whatis/whatis_react.asp">  <img src="/react.png" alt="HTML" className="lg:h-40  h-20 lg:top-7 relative  "/></a>
                    <a href="https://www.w3schools.com/typescript/typescript_intro.php "target="https://www.w3schools.com/typescript/typescript_intro.php">  <img src="/ts.png" alt="HTML" className="lg:h-40  h-20 relative  "/></a>
                    <a href="https://www.w3schools.com/whatis/whatis_js.asp  "target="https://www.w3schools.com/whatis/whatis_js.asp">  <img src="/tailwind.png" alt="HTML" className="lg:h-40  h-20 relative  "/></a>
    
                    </div>
                    {/* <a href="https://www.w3schools.com/whatis/whatis_js.asp  "target="https://www.w3schools.com/whatis/whatis_js.asp">  <img src="/next.svg" alt="HTML" className="h-16 top-96 left-96 px-44 relative  "/></a> */}

            </div>
            
        </div>
      </main>
    )
}