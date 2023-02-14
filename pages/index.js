// import GlobeSection from '@/components/GlobeSection'
// import Vision from '@/components/Vision'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import { useRef, useEffect } from 'react'
import Image from 'next/image'
import CountUp from 'react-countup'
import Link from 'next/link'

export default function Home({ toggleContact }) {
  return (
    <>
      {/* ------------------------------------ HERO ----------------------------- */}
      <div
        className="relative h-auto w-full md:h-[90vh] "
        // style={{
        //   backgroundImage: 'url("/assets/Rectangle 45.png")',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
        // }}
        id="heroBG"
        // onMouseMove={mouse_position}
        data-scroll-section
      >
        <div className="bg-black">
          <div className=" absolute  top-[30%] z-50 md:top-[25vh]">
            <h1 className="playfair pointer-events-none m-10 my-auto text-left text-[2.6rem] leading-tight text-white md:text-[5vw]">
              FF&E Manufacturing <br />
              Turnkey Solutions
            </h1>

            <div className=" z-50 m-10 w-fit cursor-pointer">
              <button className="btn " onClick={toggleContact.toggleContact}>
                <Link href={'/contact'}>Get in touch</Link>
              </button>
            </div>
          </div>
        </div>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={'fade'}
          modules={[EffectFade, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-black">
              <Image
                className="relative z-[0] h-[90vh] w-full object-cover opacity-[0.7] "
                src="/assets/hero/hero (1).png"
                alt="marriot 1"
                width={1080}
                height={1620}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-black">
              <Image
                className="relative z-[0] h-[90vh] w-full object-cover opacity-[0.7]"
                src="/assets/hero/hero (2).png"
                alt="crowne 1"
                width={1080}
                height={1620}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-black">
              <Image
                className=" relative z-[0] h-[90vh] w-full object-cover opacity-[0.7]"
                src="/assets/hero/hero (3).png"
                alt="surat 1"
                width={1080}
                height={1620}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <!------------------------------ The I-Field Advantage --------------------------------------> */}

      <div className="relative" data-scroll-section>
        {/*<!-------------------Mobile title------------------->*/}
        <div className="flex bg-black align-middle md:hidden">
          <div className="playfair mb-8 py-6 pl-[10%] font-serif text-[2.4rem] text-white md:text-[4vw] ">
            Our Distinction
          </div>
          <div className="my-auto h-1 w-full bg-red-900"></div>
        </div>

        <div className="flex w-full flex-col bg-black md:w-[90vw]  md:flex-row md:pt-[10%] lg:pt-8">
          <Image
            className="relative h-[100vh] w-[100vw] object-cover md:top-[12vh] md:w-[50vw]"
            src="/assets/7.png"
            alt="hotel lobby"
            width={500}
            height={1000}
          />
          <div className="mx-14  mt-[20%] w-[80%] items-center text-xl text-white">
            <div className="align-items-center absolute top-[10vw] right-[6vw] hidden w-[50%] align-middle md:flex">
              <div className="playfair mb-4 font-serif text-[4vw] leading-snug text-white ">
                Our Distinction
              </div>
              <div className="my-auto h-1 w-[28%] bg-red-900"></div>
            </div>
            <div className=" bg-black text-[16px]">
              <div>
                We are a team of industry experts offering deluxe turnkey solutions for FF&E
                manufacture, supply, and installation. Established and operated by hotel owners and
                industry experts, our end-to-end services ensure high client satisfaction around the
                globe.
              </div>
              <div className="mt-8 text-xl">
                Our core principle is to provide the best in products, prices, efficiency, and
                customer service, and that's the I-Field advantage.
              </div>
              <button className="mt-8 mb-8 h-12 w-48 bg-yellow-400 text-center text-black">
                <Link href={'/about'}>Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*<!---------------------------- Process ------------------------------------>*/}

      {/* <!------------------------------------------- Impact -------------------------------------> */}
      <div className="static min-h-[100vh] w-[100%] overflow-hidden bg-white" data-scroll-section>
        <div className="relative mx-auto mt-20 min-h-[55vh] w-[100vw] bg-black md:w-[70%]">
          <div className="mt-[140px] mb-2 flex items-center  py-[24px]">
            <div className="h-1 w-[20%] bg-red-900 "></div>
            <div className="playfair pl-[1%] text-[2.4rem] text-white md:text-[4vw]">
              Our Process
            </div>
          </div>
          {/* <div className=" top-16 left-10 h-1 w-[35%] bg-red-900"></div>
          <div className="playfair  top-10 left-[40%] text-[2.4rem] text-white md:text-[4vw]">
            Our Impact
          </div> */}
          <div className=" top-[35%] left-[25%] mx-auto my-auto w-[50%] text-xl text-white">
            I-Field is equipped with expert teams and world-class infrastructure to handle every
            aspect of our clients' FF&E needs in-house. Every project is customized, in
            collaboration with luxury designers.
          </div>
          <div className="-left-[20%] top-[30%] z-10 mx-auto hidden min-h-[80%] w-[40%] items-center bg-yellow-400 px-10 pt-20 pb-20 text-left text-xl md:absolute md:flex">
            We completely handle the process from logistics and design, to sourcing and production,
            to shipping and installation. Our quality control is unmatched.
          </div>
          {/* <div
            className="relative mt-8 flex flex-row flex-wrap justify-center gap-[12px] pb-[36px]
          md:left-[25%] md:w-[50vw] md:justify-start"
          > */}
          <div className=" relative mx-[12px] mr-[26px] mt-8 grid grid-cols-2 gap-2 pb-[36px] md:left-[25%] md:mx-0 md:w-[50vw] lg:grid-cols-4">
            <div
              className="w-30 h-30 z-20 flex flex-col items-center  p-2 shadow-xl transition
            duration-700 ease-in-out hover:scale-110"
            >
              <Image
                width={65}
                height={65}
                className="m-auto invert filter"
                src="/assets/fiedl.png"
                alt="ok"
              />
              <div className="m-4 w-[100px] text-center text-sm text-white">
                Field <br />
                Experts
              </div>
            </div>
            <div className="w-30 h-30 z-20 flex flex-col items-center p-2 shadow-xl transition duration-700 ease-in-out hover:scale-110">
              <Image
                width={65}
                height={65}
                className="m-auto invert filter"
                src="/assets/turnkey.png"
                alt="ok"
              />
              <div className="m-4 w-[100px] text-center text-sm text-white">Turnkey Solutions</div>
            </div>
            <div className="w-30 h-30 z-20 flex flex-col items-center p-2 shadow-xl transition duration-700 ease-in-out hover:scale-110">
              <Image
                width={65}
                height={65}
                className="m-auto invert filter"
                src="/assets/global.png"
                alt="ok"
              />
              <div className="m-4 w-[100px] text-center text-sm text-white">Global Coverage</div>
            </div>
            <div className="w-30 h-30 z-20 flex flex-col items-center p-2 shadow-xl transition duration-700 ease-in-out hover:scale-110">
              <Image
                width={65}
                height={65}
                className="m-auto invert filter"
                src="/assets/quality.png"
                alt="ok"
              />
              <div className="m-4 w-[100px] text-center text-sm text-white">Unmatched Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--------------------------------------- Projects-------------------------------------------- --> */}
      <div className="projectContainer" data-scroll-section>
        <div className="flex items-center justify-center gap-2">
          <div className="playfair pl-[10%] text-[2.4rem] md:text-[4vw]">Our Projects</div>
          <div className="h-1 w-64 bg-red-900"></div>
        </div>
        <div className="px-[10%] py-[24px] text-center text-xl">
          All our projects are highly customized for the client, but each one has the I-Field stamp
          of unmatched quality.
        </div>
        <div className="pt-[64px] md:pb-[64px]">
          <Swiper className="swiper mx-16" navigation={true} modules={[Navigation]}>
            {/* <!-- Additional required wrapper --> */}
            {/* <!-- Slides --> */}
            <SwiperSlide className="swiper-slide w-full overflow-hidden">
              <div className="relative h-full pb-[36px] ">
                <div className="absolute  left-[12%] text-6xl text-gray-400 md:top-[8%]">01</div>
                <div className="flex h-full flex-col xl:flex-row">
                  <div className="flex h-full grow-0 items-start">
                    <Image
                      width={500}
                      height={500}
                      className="z-[100] mt-[18%] w-[50vw] min-w-[230px] max-w-[400px] object-contain"
                      src="/assets/projects/hilton chad2.png"
                      alt=""
                    />
                    <Image
                      width={500}
                      height={500}
                      className=" ml-[-10%] w-[60vw]  min-w-[260px] max-w-[500px] object-contain"
                      src="/assets/projects/hilton chad.png"
                      alt=""
                    />
                  </div>

                  <div className="p-8">
                    <div className="playfair pb-8 text-4xl">Marriott Hotel Ikeja</div>
                    <div>
                      The gorgeous Lagos Marriott Hotel Ikeja is one of our proudest achievements.
                      This 250-key project includes 200 standard rooms, presidential and vice
                      presidential suites, a specialty restaurant, and an azure pool bar. This hotel
                      became an iField project because the Marriott Office in the UK recommended our
                      services to the owners at the SIFAX group. It continues to be an icon in the
                      hospitality industry in its region.
                    </div>
                    <div className="mt-8 mb-8 flex">
                      <button className="btn">
                        <Link href={'/projects/marriot-lagos'}>View Project</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-full overflow-hidden">
              <div className="relative h-full pb-[36px] ">
                <div className="absolute  left-[12%] text-6xl text-gray-400 md:top-[8%]">02</div>
                <div className="flex h-full flex-col xl:flex-row">
                  <div className="flex h-full grow-0 items-start">
                    <Image
                      width={500}
                      height={500}
                      className="z-[100] mt-[18%] w-[50vw] min-w-[230px] max-w-[400px] object-contain"
                      src="/assets/projects/nairobi crowne plaza.png"
                      alt=""
                    />
                    <Image
                      width={500}
                      height={500}
                      className=" ml-[-10%] w-[60vw]  min-w-[260px] max-w-[500px] object-contain"
                      src="/assets/projects/nairobi crowne plaza3.png"
                      alt=""
                    />
                  </div>

                  <div className="p-8">
                    <div className="playfair pb-8 text-4xl">Crowne Plaza</div>
                    <div>
                      The Crowne Plaza in Nairobi was worked on by our international team, and
                      covered 144 keys. Its stunning bespoke ringed chandelier was installed by
                      iField experts. With rings going up to 3m in diameter, it brings out the
                      luminous luxury of this marvellous hotel. We also created magic glass screens
                      that switch between frosted and transparent at the touch of a button.
                    </div>
                    <div className="mt-8 mb-8 flex">
                      <button className="btn">
                        <Link href={'/projects/crowne-plaza-nairobi'}>View Project</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-full overflow-hidden">
              <div className="relative h-full pb-[36px] ">
                <div className="absolute  left-[12%] text-6xl text-gray-400 md:top-[8%]">03</div>
                <div className="flex h-full flex-col xl:flex-row">
                  <div className="flex h-full grow-0 items-start">
                    <Image
                      width={500}
                      height={500}
                      className="z-[100] mt-[18%] w-[50vw] min-w-[230px] max-w-[400px] object-contain"
                      src="/assets/projects/marriot gujarat2.png"
                      alt=""
                    />
                    <Image
                      width={500}
                      height={500}
                      className=" ml-[-10%] w-[60vw]  min-w-[260px] max-w-[500px] object-contain"
                      src="/assets/projects/marriot gujarat.png"
                      alt=""
                    />
                  </div>

                  <div className="p-8">
                    <div className="playfair pb-8 text-4xl">Marriott Hotel Surat</div>
                    <div>
                      The Marriott Hotel in Surat was built on the bones of the Taj hotel. iField
                      handled this transformation, handling 209 keys. 3D printing effects were used
                      to make headboards, and glass sliding doors with a mirror on one side made
                      each room feel spacious and unique. This project took place while the hotel
                      was already operational, and was implemented in seamless phases, ensuring that
                      the hotel guests were undisturbed.
                    </div>
                    <div className="mt-8 mb-8 flex">
                      <button className="btn">
                        <Link href={'/projects/marriot-gujarat'}>View Project</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <!-------------------------- Achievements ----------------------------> */}
      <div className="mt-4 mb-8 h-full w-full  bg-white" data-scroll-section>
        <div className="">
          <div className="mx-auto flex w-full flex-col items-center justify-around">
            <div className="m-8 flex w-full flex-col justify-center gap-[36px] text-center md:flex-row md:gap-[12%]">
              <div className="playfair text-5xl ">
                <CountUp duration={5} end={20} enableScrollSpy scrollSpyDelay={1000} />
                <div className="montserrat mt-2 text-lg">Countries</div>
              </div>
              <div className="playfair text-5xl ">
                <CountUp duration={5} end={60} enableScrollSpy scrollSpyDelay={1000} />+
                <div className="montserrat mt-2 text-lg">Projects Completed</div>
              </div>
              <div className="playfair text-5xl ">
                <CountUp duration={5} end={390} enableScrollSpy scrollSpyDelay={1000} />
                <div className="montserrat mt-2 text-lg">Global staff</div>
              </div>
            </div>
            <div className="m-8 flex  w-full  flex-col items-center justify-center gap-[36px] text-center md:mr-16 md:flex-row md:gap-[18%]">
              <div className="playfair  text-5xl ">
                <CountUp
                  duration={5}
                  end={20000}
                  enableScrollSpy
                  scrollSpyOnce
                  seperator={','}
                  scrollSpyDelay={1000}
                />
                m²
                <div className="montserrat mt-2 text-lg">
                  Factory with <br />
                  end to end capacity
                </div>
              </div>
              <div className="playfair text-5xl ">
                <CountUp duration={5} end={20} enableScrollSpy scrollSpyDelay={1000} />
                <div className="montserrat mt-2 text-lg">Years</div>
              </div>
            </div>
            <div className="m-8 flex w-full flex-col justify-center gap-[48px] text-center align-middle md:flex-row md:items-baseline md:gap-[2%] ">
              <div className="flex w-full flex-col items-center justify-center text-center">
                <Image src="/assets/aahoa.png" alt="aahoa member" width={150} height={150} />
                <p className="mt-4">
                  Member of <br />
                  American Association of Hotels
                </p>
              </div>
              <div className="flex w-full flex-col items-center justify-center text-center">
                <Image src="/assets/cfa.png" alt="cfa member" width={150} height={150} />
                <p className="mt-4">
                  {' '}
                  Member of <br />
                  China Furniture Association{' '}
                </p>
              </div>
              <div className="flex w-full flex-col items-center justify-center text-center">
                <Image src="/assets/chambers.png" alt="cfa member" width={150} height={150} />
                <p className="mt-4">
                  {' '}
                  Member of <br />
                  Dubai Chambers{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------- Clients -------------------------------- */}
      <div data-scroll-section>
        <div className="flex items-center justify-center gap-2">
          <div className="playfair pl-[10%] text-[2.4rem] md:text-[4vw]">Our Clients</div>
          <div className="h-1 w-64 bg-red-900"></div>
        </div>
        <div class="mx-auto flex h-full w-[90%] flex-wrap justify-evenly gap-4" id="clients">
          <Image
            src="/assets/clients/1.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/3.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/2.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/4.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/5.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/6.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/7.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/8.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/9.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/10.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/11.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/12.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/13.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/14.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/15.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/16.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/17.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/18.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/19.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/20.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/21.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/22.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/23.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
          <Image
            src="/assets/clients/24.png"
            className="aspect-auto w-36"
            height={36}
            width={36}
            alt="client"
          ></Image>
        </div>
      </div>
    </>
  )
}
