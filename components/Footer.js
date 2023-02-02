import Link from './Link'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <a href="#" target="_blank" class="float">
        <span class="tool" data-tip="Donwload Brochure" tabindex="1">
          <svg
            class="my-float"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M13 12h3l-4 4-4-4h3V8h2v4zm2-8H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z" />
          </svg>
        </span>
      </a>
      <footer>
        <div className="h-600px w-full" data-scroll-section>
          <hr className="m-8 mx-auto w-[80%] border-t-2 border-red-700" />
          <div className="mx-auto flex flex-col text-[14px] md:w-[70%] md:flex-row">
            <div className="mx-auto flex max-w-[75%] flex-col justify-around gap-4 p-4">
              <Image
                src="/assets/logoblack.png"
                width="150"
                height="300"
                alt="logo"
                className="mb-4"
              />
              <div className="flex flex-row items-center gap-2">
                <Image src="/assets/phone.png" width="30" height="30" alt="phone icon" />
                <p>+86-20-39232167 / 39232577 / 39232657 </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image src="/assets/mail.png" width="30" height="30" alt="mail icon" />
                <p>info@ifield.com.cn</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image src="/assets/location.png" width="30" height="30" alt="location icon" />
                <p>
                  5th Fl, Building A, Daxin Industrial Park, No.3 Kaifa Dong RD, Xishan Village,
                  Luopu, Panyu District, Guangzhou, Peoples Republic of China
                </p>
              </div>
            </div>
            <div className="mx-auto flex flex-col justify-around gap-4 p-4">
              <h2>Subscribe to our newsletter to stay updated</h2>
              <div className="flex flex-row">
                <input className=" relative mx-0 mb-0 rounded" type="text"></input>
                <button className="font-Inter w-[154px] rounded-[0px_4px_4px_0px] bg-[rgb(58,79,57)] text-center text-white ">
                  Subscribe
                </button>
              </div>
              <div className="flex justify-around">
                <a>Home</a>
                <a>About Us</a>
                <a>Projects</a>
                <a>Services</a>
                <a>Contact</a>
              </div>
              <div>
                <Image src="/assets/pattern3.png" width="300" height="30" alt="pattern" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
