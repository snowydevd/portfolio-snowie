"use client"
import { useState } from 'react'


export default function ContactForm() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [business, setBusiness] = useState("");

    // SELECCION DE SERVICIO
    const [service, setService] = useState("")

    const services = [
      {
        label: 'Ninguno',
        stock: true,
      },

      {
        label: 'Basico',
        stock: true,
      },

      {
        label: 'Avanzado',
        stock: false,
      },
    ]

    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // console.log("Full name: ", fullname);
      // console.log("Email: ", email);
      // console.log("Message: ", message);
  
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          business,
          email,
          service,
          message,
        }),
      });
  
      const { msg, success } = await res.json();
      setError(msg);
      setSuccess(success);
  
      if (success) {
        setFullname("");
        setEmail("");
        setBusiness("");
        setService("")
        setMessage("");
      }
    };
  

  return (
    <main className='w-full lg:w-2/4'>
         <form method="POST" className='w-full p-5 text-white'>
            {/* FULL NAME */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="fullname">Full Name</label>
                <input className=' bg-transparent border-2 border-slate-700 rounded-lg text:xs lg:text-l p-2 text-white' onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" id='fullname' name='fullname' required />
            </div>
            {/* BUSINESS */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="businessName">Business name</label>
                <input className=' bg-transparent border-2 border-slate-700 rounded-lg text-l p-2' type="text" onChange={(e) => setBusiness(e.target.value)} value={business} id='businessName' name='businessName' placeholder='optional'/>
            </div>
            {/* EMAIL */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="email">E-mail</label>
                <input className=' bg-transparent border-2 border-slate-700 rounded-lg text-l p-2' type="email" onChange={(e) => setEmail(e.target.value)} value={email} id='email' name='email' placeholder='example@mail.com' required/>
            </div>
                {/* MESSAGE */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="message">Message</label>
                <textarea className=' bg-transparent border-2 border-slate-700 rounded-lg text-l h-28 min-h-[32px] max-h-48 p-2' onChange={(e) => setMessage(e.target.value)} value={message} id='message' name='message' placeholder='type your message here' required/>
            </div>
            
            {/* SUBMIT BTN */}
            <div className='m-5'>
                <button onClick={handleSubmit} className='bgColorAltItem p-2 rounded-lg font-bold bg-slate-800 hover:bg-slate-950 duration-200 w-full' type='submit'>Enviar</button>
            </div> 

            

            <div className='w-full flex justify-center'>
              <div className="w-3/4 bg-violet-800  flex flex-col text-center rounded-lg">
                {error &&
                  error.map((e) => (
                    <div key={e}
                      className={`${
                        success ? "text-white bg-green-700 rounded-lg" : "text-white bg-red-800"
                      } px-5 py-2`}
                    >
                      {e}
                    </div>
                  ))}
              </div>
            </div>
            
        </form>

        

    </main>
  )
}
