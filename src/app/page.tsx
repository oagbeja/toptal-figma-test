import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down";
import EmailIcon from "@/assets/icons/email";
import GermarnCard from "@/assets/icons/germarn-card";
import CallIcon from "@/assets/icons/call";
import NavigatorIcon from "@/assets/icons/navigator";
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

export default function Home() {
  return (
    <div className='flex flex-col gap-[96px] bg-white w-full h-auto'>
      {/* hero */}
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
                Details the methods we use to collect, handle, and safeguard
                your personal information, ensuring your privacy and data
                security while using our website.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className='flex flex-col self-center gap-[48px] max-w-[1072px]'>
        <div className='gap-[24px] w-full flex flex-col'>
          <div className='font-normal text-[#343434] text-[44px] leading-[120%] tracking-[0]'>
            1. Data protection at a glance
          </div>
          <div className='flex flex-col gap-[16px] pl-[48px]'>
            <div className='font-normal text-[#343434] text-[32px] leading-[120%] tracking-[0]'>
              General information
            </div>
            <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
              The following notes provide a simple overview of what happens to
              your personal data when you visit this website. Personal data is
              all data with which you can be personally identified. Detailed
              information on the subject of data protection can be found in our
              privacy policy listed under this text.
            </div>
          </div>
          <div className='flex flex-col gap-[16px] pl-[48px]'>
            <div className='font-normal text-[#343434] text-[32px] leading-[120%] tracking-[0]'>
              Data collection on this website
            </div>
            <div className='pl-[24px] flex flex-col gap-[16px]'>
              <div className='font-normal text-[#343434] text-[24px] leading-[120%] tracking-[0]'>
                Who is responsible for the data collection on this website?
              </div>
              <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                The data processing on this website is carried out by the
                website operator. His contact details can be found in the
                section "Note on the responsible body" in this privacy policy.
              </div>
            </div>
            <div className='pl-[24px] flex flex-col gap-[16px]'>
              <div className='font-normal text-[#343434] text-[24px] leading-[120%] tracking-[0]'>
                How do we gather your data?
              </div>
              <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                On the one hand, your data is collected by the fact that you
                provide it to us. Here it can be e.g. B. data that you enter in
                a contact form. Other data is collected automatically or after
                your consent when you visit the website by our IT systems. These
                are mainly technical data (e.g. B. Internet browser, operating
                system or time of page view). This data is collected
                automatically as soon as you enter this website.
              </div>
            </div>
            <div className='pl-[24px] flex flex-col gap-[16px]'>
              <div className='font-normal text-[#343434] text-[24px] leading-[120%] tracking-[0]'>
                For what purposes do we use your data?
              </div>
              <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                Part of the data is collected to ensure an error-free provision
                of the website. Other data can be used to analyze your user
                behavior.
              </div>
            </div>
            <div className='pl-[24px] flex flex-col gap-[16px]'>
              <div className='font-normal text-[#343434] text-[24px] leading-[120%] tracking-[0]'>
                What rights do you have with regard to your data?
              </div>
              <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
                You have the right at any time to receive information free of
                charge about the origin, recipient and purpose of your stored
                personal data. You also have the right to request the correction
                or deletion of this data. If you have given your consent to data
                processing, you can revoke this consent at any time for the
                future. In addition, you have the right to request the
                restriction of the processing of your personal data under
                certain circumstances. Furthermore, you have a right of appeal
                to the competent supervisory authority.
                <p>&nbsp;</p>
                <p>
                  For this and for further questions about data protection, you
                  can contact us at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='gap-[24px] w-full flex flex-col'>
          <div className='font-normal text-[#343434] text-[44px] leading-[120%] tracking-[0]'>
            2. Hosting
          </div>
          <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
            We host the contents of our website with the following provider:
          </div>
          <div className='flex flex-col gap-[16px] pl-[48px]'>
            <div className='font-normal text-[#343434] text-[24px] leading-[120%] tracking-[0]'>
              External hosting
            </div>
            <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
              This website is hosted externally. The personal data collected on
              this website is stored on the servers of the hoster / hoster.
              These can include IP addresses, contact requests, meta and
              communication data, contract data, contact data, names, website
              access and other data generated via a website.
              <p>&nbsp;</p>
              The external hosting is carried out for the purpose of fulfilling
              the contract with our potential and existing customers (Art. 6
              para. 1 lit. b GDPR) and in the interest of a secure, fast and
              efficient provision of our online offer by a professional provider
              (Art. 6 para. 1 lit. f DSGVO). If a corresponding consent has been
              requested, the processing is carried out exclusively on the basis
              of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as
              the consent requires the storage of cookies or access to
              information in the user's terminal device (e.g. B. Device
              fingerprinting) within the meaning of the TTDSG. The consent can
              be revoked at any time. Our hoster will or will only process your
              data to the extent necessary to fulfill its performance
              obligations and follow our instructions regarding this data.
              <p>&nbsp;</p>
              We use the following hoster(s):
              <br />
              Vultr Frankfurt
              <br />
              319 Clematis Street - Suite 900
              <br />
              West Palm Beach, FL 33401
            </div>
          </div>
        </div>

        <div className='gap-[24px] w-full flex flex-col'>
          <div className='font-normal text-[#343434] text-[44px] leading-[120%] tracking-[0]'>
            3. General information and mandatory information
          </div>
          <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
            We host the contents of our website with the following provider:
          </div>
          <div className='flex flex-col gap-[16px] pl-[48px]'>
            <div className='font-normal text-[#343434] text-[24px] leading-[120%] tracking-[0]'>
              Data privacy
            </div>
            <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
              The operators of these pages take the protection of your personal
              data very seriously. We treat your personal data confidentially
              and in accordance with the statutory data protection regulations
              and this data protection declaration.<p>&nbsp;</p> When you use
              this website, various personal data are collected. Personal data
              is data with which you can be personally identified. This privacy
              policy explains what data we collect and what we use it for. She
              also explains how and for what purpose this is done.<p>&nbsp;</p>{" "}
              We would like to point out that the data transmission on the
              Internet (e.g. B. when communicating by e-mail) may have security
              gaps. A complete protection of the data against access by third
              parties is not possible.
            </div>
          </div>
          <div className='flex flex-col gap-[16px] pl-[48px]'>
            <div className='font-normal text-[#343434] text-[24px] leading-[120%] tracking-[0]'>
              Note on the responsible authority
            </div>
            <div className='font-medium text-[#343434] text-[16px] leading-[140%] tracking-[0]'>
              The authority responsible for data processing on this website is:
              <strong> GERMANCARD Technologies GmbH</strong>
              <br /> this represented d. d. Managing Director Mesut Yilmaz
              <br />
              Ottostr. 5<br />
              50170 Kerpen
              <br />
              GERMANY Phone: 02273601490
              <br />
              E-Mail: office@germancard.de
              <br />
              <p>&nbsp;</p> The responsible body is the natural or legal person
              who alone or jointly with others is responsible for the purposes
              and means of processing personal data (e.g. B. Names, e-mail
              addresses o. Ä.) decides.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

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
                printing company based in Kerpen near Cologne and have
                specialized in the production of plastic cards, RFID cards and
                customer cards in the form of a check card up to special
                formats.
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
    </div>
  );
}
