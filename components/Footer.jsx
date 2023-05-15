
export default function Footer() {
  return (
    <div>
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300">
        <div >
            <h1 className="flex max-w-sm text-3xl font-bold mb-4 text-[#9efff2]">
                Esas Hukuk
            </h1>
            <iframe className="w-[500px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48371.11384280771!2d31.6149705!3d40.735743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d3fd82c8bdb63%3A0x30cb3b07a6359916!2sEsas%20Hukuk%20%26%20Dan%C4%B1%C5%9Fmanl%C4%B1k%20Av.%20Emre%20G%C3%9CLER%20-%20Av.%20Sefa%20YAMAN!5e0!3m2!1str!2str!4v1684132972277!5m2!1str!2str" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="ml-3">
            <div className="border-2 mt-8 m-4 p-2 shadow-sm shadow-gray-600 rounded-lg pl-6">
                <h2 className="flex w-full text-3xl font-mono mb-4 text-[#fbfffe] ">Adres</h2>
                <p >Tabaklar Mahallesi, Eflatun Sokak
                Gökçe İşhanı No:1/25 <br /> BOLU/Merkez</p>   
            </div>

            <div className="border-2 mt-8 m-4 p-2 shadow-sm shadow-gray-600 rounded-lg pl-6">
               <address>
                    <h3 className="flex w-full text-3xl font-mono mb-4 text-[#fbfffe] ">Telefon</h3> 
                    <a href="tel:03742177217">0374 217 7 217</a> <br />
                    <a href="tel:05326571614">0532 657 16 14</a>
                </address> 
                
            </div>
            <div className="border-2 mt-8  m-4 p-2 shadow-sm shadow-gray-600 rounded-lg pl-6">
                <address >
                    <h4 className="flex w-full text-3xl font-mono mb-4 text-[#fbfffe] ">Email</h4>
                    <a href="mailto:esashukukbolu@gmail.com"> esashukukbolu@gmail.com</a>

                </address>
                
                
            </div>
               
        </div>
 

    </div>
        <div className="w-full  mx-auto text-center flex flex-col justify-center text-gray-400 mb-4 ">
            <p className="text-sm">Copyright 2023 Esas Hukuk. Designed by Enes. All rights reserved. &#169;</p>
        </div>
    </div>
  )
}
