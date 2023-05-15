import Image from "next/image"
import Business from '@/public/is-icon.png'
import Menkul from '@/public/gayrimenkul-icon.png'
import Miras from '@/public/miras.png'

export default function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white  ">
        <div className="mb-8 h-18">
        <h1 className="text-center border-b-4 border-slate-500 mb-8 p-2 mt-[-5rem] font-bold text-6xl mx-auto
        bg-gradient-to-r from-slate-600 via-zinc-700 to-amber-900 bg-clip-text text-transparent ">HİZMETLERİMİZ</h1>
        </div>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 rounded-lg">
            <div className="bg-white w-full shadow-xl shadow-slate-400 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200 ">
                <Image src={Business} alt="business" width={120} className=" mx-auto  bg-white"/>
                <h2 className="text-3xl mt-[-2rem] font-bold text-center py-4">İş Hukuku</h2>
                <p className="text-center font-medium">İş hukuku bağlamında işçi ve işveren müvekkillerimize, 
                bireysel ve toplu iş hukukundan iş sağlığı ve güvenliği ile sosyal güvenlik hukukuna uzanan 
                son derece geniş bir yelpazede hukuk hizmeti sunmaktayız.</p>
            </div>

            <div className="bg-white  w-full shadow-xl shadow-slate-400 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-200 ">
                <Image src={Menkul} alt="menkul" width={90} className=" mx-auto  bg-white"/>
                <h2 className="text-3xl  font-bold text-center py-4">Gayrimenkul Hukuku</h2>
                <p className="text-center font-medium">Müvekkillerimize ait gayrimenkuller ile alakalı doğan hukuki uyuşmazlıklarda aktif dava takibi sağlamaktadır. Ayrıca müvekkillerimizin mülkiyet haklarını kazanmadan önce de hukuki danışmanlık hizmetinde bulunarak hak kayıplarının önüne geçilmektedir. Üst hakkı, geçit hakkı, irtifak hakları, kat mülkiyeti ve kat irtifakı gibi konularda hizmet verilmektedir. Gayrimenkullerin kiralanması işlemlerinde de müvekkillerimize kiralama sözleşmelerinde hukuki yardım sağlanmaktadır.</p>
            </div>

        
            <div className="bg-white w-full shadow-xl shadow-slate-400 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200 ">
                <Image src={Miras} alt="miras" width={120} className=" mx-auto  bg-white"/>
                <h2 className="text-3xl mt-[-2rem] font-bold text-center py-4">Miras Hukuku</h2>
                <p className="text-center font-medium">Esas Hukuk Bürosu olarak vasiyetname ve miras sözleşmelerinin düzenlenmesi, veraset ve intikal işlemlerinin yürütülmesi, 
                mirasın reddi, tasarrufların iptali, tereke tespiti, izale-i şüyuu, ecri misil ve diğer miras uyuşmazlık
                 davalarına ilişkin avukatlık, arabuluculuk ve danışmanlık hizmetleri sunmaktadır </p>
            </div>
        </div>
    </div>
  )
}
