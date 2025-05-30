import CallIcon from "@/assets/icons/call";
import NavigatorIcon from "@/assets/icons/navigator";
import ArrowDown from "@/assets/icons/arrow-down";
import EmailIcon from "@/assets/icons/email";
import GermarnCard from "@/assets/icons/germarn-card";

const TopComponent = () => {
  return (
    <div className='w-full flex flex-col gap-[40px]'>
      {/* top bar */}
      <div className='w-full h-[40px] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[240px] bg-[#F4F5F7] flex justify-between items-center'>
        <div className='gap-[16px] flex items-center h-[20px] '>
          <div className='flex gap-[8px] items-center'>
            <div className='text-[#6D727B] text-[14px] font-medium leading-[140%] tracking-[0]'>
              Company
            </div>
            <ArrowDown />
          </div>
          <div className='flex gap-[8px]'>
            <div className='text-[#6D727B] text-[14px] font-medium leading-[140%] tracking-[0]'>
              Downloads
            </div>
          </div>
          <div className='flex gap-[8px]'>
            <div className='text-[#6D727B] text-[14px] font-medium leading-[140%] tracking-[0]'>
              Contact us
            </div>
          </div>
        </div>
        <div className='gap-[16px] flex items-center h-[20px] '>
          <div className='text-[#6D727B] text-[14px] font-medium leading-[140%] tracking-[0]'>
            Monday - Friday 8:30 AM - 5:30 PM
          </div>
          <div className='text-[#6D727B] text-[14px] font-medium leading-[140%] tracking-[0]'>
            |
          </div>

          <div className='flex gap-[8px]'>
            <EmailIcon />
            <div className='text-[#6D727B] text-[14px] font-medium leading-[140%] tracking-[0]'>
              office@germancard.de
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[40px] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[240px]  flex justify-between items-center'>
        <GermarnCard />
        <button className='max-w-[267px] w-max h-[40px] bg-yellow-300 rounded flex items-center gap-2 pt-[10px] pr-4 pb-[10px] pl-4'>
          <CallIcon />
          <div className='text-[#000000] text-[14px] font-semibold leading-[140%] tracking-[0]'>
            Call now +49 (0) 2273 60149 0
          </div>
        </button>
      </div>
      <div className='w-full h-[40px] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[240px]  flex justify-between items-center'>
        <div className='gap-[24px] flex items-center h-[22px] '>
          <div className='flex gap-[8px] items-center'>
            <div className='text-[#000000] text-[16px] font-semibold leading-[140%] tracking-[0]'>
              Plastic cards
            </div>
            <ArrowDown />
          </div>
          <div className='flex gap-[8px] items-center'>
            <div className='text-[#000000] text-[16px] font-semibold leading-[140%] tracking-[0]'>
              Organic cards
            </div>
            <ArrowDown />
          </div>
          <div className='flex gap-[8px] items-center'>
            <div className='text-[#000000] text-[16px] font-semibold leading-[140%] tracking-[0]'>
              RFID/Chip cards
            </div>
            <ArrowDown />
          </div>
        </div>
        <div className='gap-[24px] flex items-center h-[22px] '>
          <div className='flex gap-[8px] items-center'>
            <div className='text-[#000000] text-[16px] font-medium leading-[140%] tracking-[0]'>
              Special formats
            </div>
            <ArrowDown />
          </div>
          <div className='flex gap-[8px] items-center'>
            <div className='text-[#000000] text-[16px] font-medium leading-[140%] tracking-[0]'>
              Personalization
            </div>
            <ArrowDown />
          </div>
          <div className='flex gap-[8px] items-center'>
            <div className='text-[#000000] text-[16px] font-medium leading-[140%] tracking-[0]'>
              Printer & Accessories
            </div>
            <ArrowDown />
          </div>
          <div className='flex gap-[8px] items-center'>
            <div className='text-[#000000] text-[16px] font-medium leading-[140%] tracking-[0]'>
              Service
            </div>
            <ArrowDown />
          </div>
          <div>|</div>
          <div>
            <NavigatorIcon />
          </div>
        </div>
      </div>

      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-[96px]  bg-[#E3EDF9] flex justify-start pl-[134px] items-center'>
        <div className='max-w-[525px] flex gap-[48px] py-[96px]'>
          <div className='flex flex-col gap-[24px]'>
            <div className='font-normal text-[#000000] text-[44px] leading-[120%] tracking-[0]'>
              Privacy Policy
            </div>
            <div className='text-[#000000] text-[16px] font-medium leading-[140%] tracking-[0]'>
              Details the methods we use to collect, handle, and safeguard your
              personal information, ensuring your privacy and data security
              while using our website.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopComponent;
