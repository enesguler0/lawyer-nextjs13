import Image from 'next/image'
import Lawyer from '@/public/lawyer-1.jpg'


export default function Info() {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <Image src={Lawyer} width={550} className='mx-auto my-4' />
            <div className='flex flex-col justify-center'> 
                <p className=' text-[#240811] font-bold'>HUKUKUN HER ALANINDA HİZMET</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Esas Hukuk Hakkında</h1>
                <p>ESAS HUKUK AVUKATLIK VE HUKUK BÜROSU; Bolu’da kurulmuş olup yerli ve yabancı müvekkillerine en iyi şekilde hizmet sunmayı hedeflemektedir.
                Hukuki sorunlar karşısında güvenilir bir çözüm arıyorsanız, Esas Hukuk Bürosu olarak yanınızdayız. </p>
                <button className='bg-black text-[#02c71cb2] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3 '>İLETİŞİM İÇİN</button>
            </div>
            

        </div>
    </div>
    
  )
}
