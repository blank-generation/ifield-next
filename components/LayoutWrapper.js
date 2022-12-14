import Footer from './Footer'
import Image from 'next/image'
import logo from 'public/assets/logoblack.png'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import imagesLoaded from 'imagesloaded'
import React from 'react'

const LayoutWrapper = ({ children }) => {
  const [menuActive, SetMenuActive] = useState(false)
  const [contactActive, SetContactActive] = useState(false)

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.

    const name = event.target.name.value
    const email = event.target.email.value
    const message = event.target.message.value
    sendMail(name, email, message)
  }

  async function sendMail(name, from, message) {
    const data = {
      name: name,
      from: from,
      message: message,
    }

    // Send the form data to our API and get a response.
    const response = await fetch('/api/sendMail', {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    console.log(result)
    alert(result.message)
    toggleContact()
  }

  const toggleMenu = () => {
    let ma = menuActive
    SetMenuActive(!ma)
  }
  const toggleContact = () => {
    let ca = contactActive

    SetContactActive(!ca)
  }
  const toggleContactAndMenu = () => {
    let ca = contactActive
    let ma = menuActive
    SetContactActive(!ca)
    SetMenuActive(!ma)
  }
  const toggleOffModals = (e) => {
    let ca = contactActive
    let ma = menuActive

    if (e.currentTarget)
      if (ma) {
        SetMenuActive(!ma)
      }

    if (ca) {
      SetContactActive(!ca)
    }
  }
  const ScrollContainer = useRef()
  const router = useRouter()
  let scroll = null
  useEffect(() => {
    async function getLocomotive() {
      console.log('getLoco')
      const Locomotive = (await import('locomotive-scroll')).default

      if (!scroll) {
        console.log('new scroll')
        scroll = new Locomotive({
          el: ScrollContainer.current,
          smooth: true,
          smoothMobile: true,
        })
      }
      scroll.update()
      // scroll.destroy()
      // if (document.readyState === 'loading') {
      //   // Loading hasn't finished yet
      //   document.addEventListener('DOMContentLoaded', function (e) {
      //     scroll.init()
      //     scroll.update()
      //   })
      // } else {
      //   // `DOMContentLoaded` has already fired
      //   scroll.init()
      //   scroll.update()
      // }
      // imagesLoaded(ScrollContainer, function (instance) {
      //   scroll.update()
      // })
    }

    const handleRouteChange = (url, { shallow }) => {
      scroll.destroy()
      SetMenuActive(false)
      SetContactActive(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    window.addEventListener('click', function (e) {
      if (
        !document.getElementById('main-nav').contains(e.target) &&
        !document.getElementById('navbar-burger').contains(e.target)
      ) {
        if (menuActive) {
          SetMenuActive(false)
        }
      }
    })
    getLocomotive()
  }, [router])

  function recursiveMap(children, fn) {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child) || typeof child.type == 'string') {
        return child
      }

      if (child.props.children) {
        child = React.cloneElement(child, {
          children: recursiveMap(child.props.children, fn),
        })
      }

      return fn(child)
    })
  }

  // Add props to all child elements.
  const childrenWithProps = recursiveMap(children, (child) => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (React.isValidElement(child)) {
      // Pass additional props here
      return React.cloneElement(child, { toggleContact: { toggleContact } })
    }

    return child
  })

  return (
    <div ref={ScrollContainer} key={router.asPath}>
      {/* ------------------------------ Navbar -------------------------------- */}
      <div className="w-full bg-white">
        <div className="mx-14 flex flex-row items-center justify-between py-4">
          <div className="hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="mx-2 h-7 w-7">
              <path
                fill="black"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="mx-2 h-7 w-7">
              <path
                fill="black"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </div>
          <div>
            <div className="cursor-pointer place-self-center text-white">
              <Link href={'/'}>
                <Image width="100" alt="logo" src={logo} />
              </Link>
            </div>
          </div>
          <div>
            <div className="text-black">
              {/* ------------------------- Menu Toggle button ---------------------------- */}
              <button
                className="navbar-burger z-60 group relative"
                id="navbar-burger"
                type="button"
                onClick={toggleMenu}
              >
                <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-white ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4">
                  <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
                    <div
                      className={
                        menuActive
                          ? 'h-[2px] w-7 origin-left rotate-[42deg] transform bg-black transition-all duration-300'
                          : 'h-[2px] w-7 origin-left transform rounded bg-black transition-all duration-300'
                      }
                    ></div>
                    <div
                      className={
                        menuActive
                          ? 'h-[2px] w-1/2 -translate-x-10 transform rounded bg-black transition-all duration-300'
                          : 'h-[2px] w-1/2 transform rounded bg-black transition-all duration-300'
                      }
                    ></div>
                    <div
                      className={
                        menuActive
                          ? 'h-[2.5px] w-7 origin-left -rotate-[42deg] transform bg-black transition-all duration-300'
                          : 'h-[2.5px] w-7 origin-left transform rounded bg-black transition-all duration-300'
                      }
                    ></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <aside
        id="main-nav"
        className="fixed top-[82px] right-0 z-50 ml-auto h-[90vh] w-[400px] max-w-0 overflow-hidden bg-white/50 text-black transition-all duration-700"
        style={menuActive ? { maxWidth: 400 } : { maxWidth: 0 }}
      >
        <div className="h-full px-16 py-16">
          <div className="playfair flex h-full flex-col justify-around text-3xl">
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/services'}>Services</Link>
            <Link href={'/projects'}>Projects</Link>
            <button type="button" className="text-left" onClick={toggleContactAndMenu}>
              Contact
            </button>
          </div>
        </div>
      </aside>

      <aside
        id="contact"
        className="fixed left-[50%] top-[50%] z-50 mx-auto ml-auto  w-[80%] -translate-x-1/2 -translate-y-1/2
         overflow-hidden bg-white text-black  transition-all duration-700 md:w-[600px] "
        style={contactActive ? { top: '50%', zIndex: 70 } : { top: -200, zIndex: -1 }}
      >
        <div className="m-auto my-auto flex h-[80%] w-[80%] flex-col gap-4 text-[14px]">
          <div className="flex flex-row justify-between text-2xl">
            <h2 className="playfair pt-4 text-4xl">Contact Us</h2>
            <button className="" onClick={toggleContact}>
              x
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="my-auto flex flex-col justify-around">
              <input
                type="text"
                id="name"
                placeholder="Name"
                required
                className="flex-1 border-0 border-b-2 border-gray-400 py-2 text-gray-600 
                placeholder-gray-400 outline-none
                focus:border-green-400 focus:required:border-pink-500 focus:required:ring-pink-500 "
              ></input>

              <input
                type="text"
                id="email"
                placeholder="email@address.com"
                required
                className="flex-1 border-0 border-b-2 border-gray-400 py-2 text-gray-600 
                placeholder-gray-400 outline-none
                focus:border-green-400 focus:required:border-pink-500 focus:required:ring-pink-500 "
              ></input>

              <input
                type="text"
                id="message"
                placeholder="Message"
                required
                className="h-[80px] border-0 border-b-2 border-gray-400 py-2 
                text-gray-600 placeholder-gray-400
                outline-none focus:border-green-400 focus:required:border-pink-500 focus:required:ring-pink-500 "
              ></input>
              <input
                type="submit"
                className="mt-4 mb-4 inline-block w-32 rounded-full border-2 border-red-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-red-600 transition duration-150 ease-in-out content-[Submit] hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              ></input>
            </div>
          </form>
          <div className="my-auto mb-8 flex flex-row gap-2">
            <p>
              5th Fl, Building A, Daxin Industrial Park No.3, Kaifa Dong RD, Xishan Village, Luopu,
              Panyu District, <br />
              Guangzhou, Peoples Republic of China <br /> <br />
              +86-20-39232167 / 39232577 / 39232657 <br />
              info@ifield.com.cn
            </p>
            <p className="grow">
              Monday - Friday: 9:00 AM - 6:00 PM <br /> <br />
              Saturday - Sunday: 9:00 AM - 12:00 PM
            </p>
          </div>
        </div>
      </aside>

      <main className="overflow-hidden" onClick={toggleOffModals}>
        {childrenWithProps}
      </main>

      <Footer />
    </div>
  )
}

export default LayoutWrapper
