import React from 'react'
import Navbar from '../components/Nav'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { appearNavRedux, hiddeNav, stateNav } from '../features/nav/navSlice'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '../components/Footer'
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function Home() {

  const stateNavNow = useSelector(stateNav)
  const dispatch = useDispatch()
  const [selectedId, setSelectedId] = useState(null)
  const [ubicacion, setUbicacion] = useState(null)

  const handleUbicacion = (id) => {
    setUbicacion(ubicaciones.find((ubi) => ubi.id = id))
  }

  const ubicaciones = [
    {
      id: 1,
      title: '121 Rock Street, 21 Avenue',
      map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d72442.40679467558!2d-80.15134811573984!3d25.750783027075727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1713939647420!5m2!1ses!2sar"
    },
    {
      id: 2,
      title: 'Nueva York, NY 92103-9000',
      map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d72442.40679467558!2d-80.15134811573984!3d25.750783027075727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1713939647420!5m2!1ses!2sar"
    },
    {
      id: 3,
      title: 'Nueva York, NY 446-1000',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d273937.56162801915!2d-73.97800271078036!3d40.660503382256636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1713842939640!5m2!1ses!2sar'
    },
    {
      id: 4,
      title: '104 ST Breckmon',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361329033!2d-74.30933820251501!3d40.69753995243349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1713842812026!5m2!1ses!2sar'
    }
  ]
  return (
    <section>
      <Navbar ></Navbar>
      <section style={{ background: 'black' }}
        className={stateNavNow ? 'hidden' : 'bg-black pt-[14vh] md:pt-[10.5vh] lg:pt-[11vh] xl:pt-[7.5vh]'}>
        <div style={{
          backgroundImage: 'url(/img/bg-contacto.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} className='min-h-[25vh] lg:min-h-[50vh]'>
          <div className='text-center pt-10 md:pt-5 lg:pt-20 xl:pt-[10%]'>
            <h1 className='text-xl font-black'>Servicio de contacto de SkyLevel</h1>
            <h5 className='underline'>¿Como podemos ayudar?</h5>
          </div>
        </div>
        <div className='bg-white py-10'>
          <h1 className='text-center text-xl py-5 font-black'>Podemos ayudarte con lo siguiente:</h1>
          <div className='flex flex-wrap items-center justify-center'>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3  m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px] lg:m-2'>
              <h1 className='text-center font-black lg:text-2xl'>Cuenta y seguridad</h1>
              <i className="fa-solid fa-user-lock lg:text-3xl"></i>
            </div>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3 m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px]  lg:m-2'>
              <h1 className='text-center font-black lg:text-2xl'>PC</h1>
              <i className="fa-solid fa-laptop lg:text-3xl"></i>
            </div>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3  m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px] lg:m-2'>
              <h1 className='text-center font-black lg:text-2xl'>Pagos y rembolsos</h1>
              <i className="fa-solid fa-credit-card lg:text-3xl"></i>
            </div>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3 m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px] lg:m-2'>
              <h1 className='text-center font-black lg:text-2xl'>Reparaciones</h1>
              <i className="fa-solid fa-wrench lg:text-3xl"></i>
            </div>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3 m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px] lg:m-2 '>
              <h1 className='text-center font-black lg:text-2xl'>Seguridad</h1>
              <i className="fa-solid fa-shield-halved lg:text-3xl"></i>

            </div>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3  m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px] lg:m-2'>
              <h1 className='text-center font-black lg:text-2xl'>Envios</h1>
              <i className="fa-solid fa-truck lg:text-3xl"></i>
            </div>
          </div>

        </div>

        <section>

          <div style={{ background: '#d1d1d1' }}
            className='py-10 lg:flex lg:justify-evenly'
          >
            <div className='max-[600px]:w-[80%] m-auto bg-white lg:w-[50%] lg:m-0'>
              <form className='flex flex-col items-center justify-center py-5 rounded-md'>
                <h1 className='text-2xl py-5 text-orange-500'>CONTACTENOS</h1>
                <div className='flex flex-col w-[92%] mx-auto'>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="text" placeholder='Enter yourn Name' className='border-b border-orange-500' />
                </div>
                <div className='flex flex-col w-[92%] mx-auto my-8'>
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" placeholder='Enter a valid email adress' className='border-b border-orange-500' />
                </div>
                <div className='flex flex-col w-[92%] mx-auto'>
                  <label htmlFor="message">Message</label>
                  <input type="text" name="message" placeholder='' className='border-b border-orange-500 h-[100px]' />
                </div>
                <div className='flex my-3'>
                  <input type="checkbox" name="terms" id="" required />
                  <h5>I accept the <span className='text-cyan-400'>Terms of Service</span></h5>
                </div>
                <button className='w-[90%] mx-auto text-white bg-orange-500 py-3 rounded-md'>ENTREGAR</button>
              </form>
            </div>
            <div className='flex flex-col items-center justify-center text-center py-10'>
              <div className='flex flex-col'>
                <h1 className='text-orange-500 font-black text-1xl mx-5 lg:text-2xl'>LLAMANOS</h1>
                <p className='text-white font-black'>+42 4242 523</p>
                <p className='text-white font-black'>+42 4241 341</p>
              </div>
              <div className='flex flex-col my-10'>
                <h1 className='text-orange-500 font-black text-1xl mx-5 lg:text-2xl'>LOCALIZACION</h1>
                <p className='text-white font-black'>121 Rock Street, 21 Avenue,</p>
                <p className='text-white font-black'>Nueva York, NY 92103-9000</p>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-orange-500 font-black text-1xl mx-5 lg:text-2xl'>NUESTROS MEJORES SERVICIOS</h1>
                <p className='text-white font-black'>Autoaprendizaje</p>
                <p className='text-white font-black'>Cursos en línea</p>
                <p className='text-white font-black'>Desafíate a ti mismo</p>
              </div>
            </div>
          </div>

        </section>

        <section>
          <div>
            <div className='bg-white py-5'>
              <h1 className='text-center py-3 text-2xl font-semibold'>Preguntas Frencuentes</h1>
              <div className='w-1/2 mx-auto'>
                <Accordion className='text-black font-semibold'>
                  <AccordionItem key="1" aria-label="Accordion 1" title="Quienes somos?" className='p-2 rounded-xl' style={{ background: 'rgba(128, 128, 128, 0.2)' }}>
                    <h1 className='font-normal'>
                      Sky-Level es una empresa líder en tarjetas madre, tarjetas gráficas, laptops, hardware de juegos y sistemas de alto rendimiento. ¡Nos apasiona unirnos a los jugadores para desafiar los límites sin miedo y luchar mientras nos elevamos a la gloria máxima!
                    </h1>
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title="Donde ubicarnos?" className='my-4 p-2 rounded-xl' style={{ background: 'rgba(128, 128, 128, 0.2)' }}>
                    <h1 className='font-normal'>
                      Podes ubicarnos en nuestas sucursales ubicadas en 121 Rock Street, 21 Avenue o Nueva York, NY 92103-9000
                    </h1>
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Accordion 3" title="Como comunicarse?" className='p-2 rounded-xl' style={{ background: 'rgba(128, 128, 128, 0.2)' }}>
                    <h1 className='font-normal'>
                      Podes completar el formulario de la parte superior , <br /> o llamar al +42 4242 523 o +42 4241 341
                    </h1>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className='bg-white relative pb-10'>
            <h1 className='text-center py-3 text-2xl font-semibold'>Ubicaciones:</h1>
            <div className='flex w-[90%]  mx-auto'>
              {ubicaciones.map(item => (
                <motion.div style={{
                  border: '1px solid rgba(166,166,166,0.57)',
                  boxShadow: ' 0px 1px 12px 2px rgba(71,71,71,1)',
                  background: 'rgba(128, 128, 128, 0.2)'
                }} key={item.id} className='cursor-pointer bg-gray-500 flex flex-col items-center justify-center w-[20%] mx-5 p-2 rounded-md ' layoutId={item.id} onClick={() => {
                  setSelectedId(item.id)
                  handleUbicacion(item.id)
                }}>
                  <motion.h2>{item.title}</motion.h2>
                </motion.div>
              ))}
            </div>

            <div className='w-[90%] mx-auto py-9'>

              <AnimatePresence>
                {selectedId && (
                  <motion.div layoutId={selectedId}>

                    <div className='h-[60vh]' style={{
                       border: '1px solid rgba(166,166,166,0.57)',
                       boxShadow: ' 0px 1px 12px 2px rgba(71,71,71,1)',
                    }}>
                    {
                      ubicacion && <iframe src={ubicacion.map} className='w-[100%] h-[100%]'  loading="lazy" ></iframe>
                    }
                    </div>

                    <motion.button className='bg-neutral-500 text-white p-4 rounded-b-xl' onClick={() => {
                      setSelectedId(null)
                      setUbicacion(null)
                    }}>
                      BORRAR
                    </motion.button>


                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </section>
      <Footer></Footer>
    </section>
  )
}
