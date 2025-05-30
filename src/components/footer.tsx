import Image from "next/image";

import GermarnCard from "@/assets/icons/germarn-card";

import Capresso from "@/assets/images/capresso.png";
import Dasscomm from "@/assets/images/dasscom.png";
import Evolis from "@/assets/images/evolis.png";
import Matica from "@/assets/images/matica.png";
import Zebra from "@/assets/images/zebra.png";
import Linkedin from "@/assets/images/Linkedin.png";
import Instagram from "@/assets/images/Instagram.png";
import Titok from "@/assets/images/TikTok.png";
import Xing from "@/assets/images/Xing.png";
import Facebook from "@/assets/images/Facebook.png";
import Socialmedia from "@/assets/icons/socialmedia";
import UnionIcon from "@/assets/icons/union";

const Footer = () => {
  return (
    <div className='w-full px-[96px] flex flex-col'>
      <div className='w-full flex flex-col   border-t border-t-[1px] border-t-[#DADFE7] '>
        <div className='w-full flex-col py-[40px] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[240px] flex justify-center items-center gap-[32px]'>
          <div className='text-[#000000] text-[12px] font-bold leading-[120%] tracking-[0] uppercase '>
            We are official partners for
          </div>
          <div className='opacity-70 flex '>
            <Image src={Capresso} alt='' className='opacity-60' />
            <Image src={Dasscomm} alt='' className='opacity-60' />
            <Image src={Matica} alt='' className='opacity-60' />
            <Image src={Evolis} alt='' className='opacity-60' />
            <Image src={Zebra} alt='' className='opacity-60' />
          </div>
        </div>
      </div>
      <div className='w-full px-[144px] flex flex-col gap-[48px] pb-[64px] rounded-lg bg-[#DADFE7]'>
        <div className='flex justify-between items-end h-[104px]'>
          <GermarnCard />
          <div className='flex gap-[16px]'>
            <Image src={Linkedin} alt='' />
            <Image src={Facebook} alt='' />
            <Image src={Instagram} alt='' />
            <Image src={Titok} alt='' />
            <Image src={Xing} alt='' />
          </div>
        </div>
        <div className='flex justify-between '>
          <div className='flex flex-col gap-[16px] w-[520px]'>
            <div className='text-[#000000] text-[12px] font-bold leading-[120%] tracking-[0] uppercase '>
              About Us
            </div>
            <div className='text-[#6D727B] text-[14px] font-medium leading-[140%] tracking-[0]'>
              We, <strong>GERMANCARD Technologies GmbH</strong>, are a special
              printing company based in Kerpen near Cologne and have specialized
              in the production of plastic cards, RFID cards and customer cards
              in the form of a check card up to special formats.
            </div>
          </div>
          <div className='flex gap-[32px]'>
            <div className='flex flex-col gap-[16px]'>
              <div className='text-[#000000] text-[12px] font-bold leading-[120%] tracking-[0] uppercase '>
                Products & Services
              </div>
              <div className='flex gap-[32px]'>
                <div className='flex gap-[8px] flex-col '>
                  <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                    Plastic cards
                  </div>
                  <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                    Organic cards
                  </div>
                  <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                    RFID/Chip cards
                  </div>
                  <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                    Special formats
                  </div>
                </div>
                <div className='flex gap-[8px] flex-col '>
                  <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                    Personalization
                  </div>
                  <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                    Printer & Accessories
                  </div>
                  <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                    Services
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
              <div className='text-[#000000] text-[12px] font-bold leading-[120%] tracking-[0] uppercase '>
                company
              </div>
              <div className='flex gap-[32px]'>
                <div className='flex gap-[8px] flex-col '>
                  <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                    About us
                  </div>
                  <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                    Jobs & Career
                  </div>
                  <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                    Downloads
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-[16px] flex-col'>
          <Socialmedia />
        </div>
      </div>
      <div className='py-[40px] justify-between px-[235px] border-b border-b-[2px] border-t-[#FACC15] flex'>
        <div className='flex gap-[16px]'>
          <div className='font-normal text-[#6D727B] text-[16px] leading-[140%] tracking-[0]'>
            Copyright © 2024 by GERMANCARD Technologies GmbH
          </div>
          <div className='font-normal text-[#6D727B] text-[16px] leading-[140%] tracking-[0]'>
            |
          </div>
          <div className='font-normal text-[#6D727B] text-[16px] leading-[140%] tracking-[0]'>
            Privacy Policy
          </div>
          <div className='font-normal text-[#6D727B] text-[16px] leading-[140%] tracking-[0]'>
            Cookies
          </div>
        </div>
        <div className='flex gap-[4px] items-center'>
          <div className='font-normal text-[#6D727B] text-[16px] leading-[140%] tracking-[0]'>
            Designed by Startify
          </div>
          <UnionIcon />
          <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
            Mateusz Madura
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
