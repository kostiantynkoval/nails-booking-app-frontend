import React from 'react';
import { BsCameraVideo } from "react-icons/bs";
import avatar from '../../assets/images/avatar.jpg';
import lake from '../../assets/images/lake.webp';
import nature from '../../assets/images/nature.jpg';
import waterfall from '../../assets/images/waterfall.jpg';
import serviceImage1 from '../../assets/images/800x600_abstract.jpg';
import serviceImage2 from '../../assets/images/800x600_stars.jpg';
import serviceImage3 from '../../assets/images/800x600_water.jpg';
import avatarImage1 from '../../assets/images/Avatar_450x450.jpg';
import avatarImage2 from '../../assets/images/info_card_250x150.webp';
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routePaths";
import { ArrowLink } from "../../components/arrow-link/ArrowLink";
import { ServiceCard } from "../../components/service-card/ServiceCard";
import { technicians } from "../../__mock__/technicians";
import { serviceCards } from "../../__mock__/serviceCards";
import { TechicianCard } from "../../components/technician-card/TechicianCard";
import { FaqItem } from "../../components/faq-item/FaqItem";
import { faqList } from "../../__mock__/faqList";
import { Testimonials } from "../../components/testimonials/Testimonials";

export const Dashboard = () => {
  return (
    <>
      {/** Hero section */}
      <section className="hero-section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1
                  className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We get your nails shine bright!
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aliquid autem debitis
                  deserunt,
                  dolor ex fuga, ipsa laborum maiores minus numquam sint soluta vero voluptatum. Accusantium
                  blanditiis
                  dolorem iste labore magni minus, repellat sit ut vero voluptatibus. Delectus, perspiciatis!
                </p>
                <button className="btn">
                  Request an appointment
                </button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div className="px-4">
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    10+
                  </h2>
                  <div className="w-[140px] h-2 bg-yellowColor rounded-full mt-[-14px]"/>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div className="px-4">
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    2000+
                  </h2>
                  <div className="w-[140px] h-2 bg-purpleColor rounded-full mt-[-14px]"/>
                  <p className="text__para">Customers served</p>
                </div>

                <div className="px-4">
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <div className="w-[140px] h-2 bg-irisBlueColor rounded-full mt-[-14px]"/>
                  <p className="text__para">Customers Satisfaction</p>
                </div>
              </div>

            </div>

            <div className="flex gap-[30px] justify-end">
              <div className="max-w-[300px]">
                <img src={nature} alt="Nature" className="w-full"/>
              </div>
              <div className="mt-[30px]">
                <img src={lake} alt="Lake" className="w-full mb-[30px]"/>
                <img src={waterfall} alt="Waterfall" className="w-full"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Links grid section */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best nail services
            </h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, architecto asperiores, atque
              autem deserunt dicta doloremque earum eos in iure iusto minus non, officiis quas quasi quos rem
              sapiente.
            </p>
          </div>
          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="px-5 py-[30px]">
              <div className="flex items-center justify-center">
                <img src={serviceImage1} alt="SomePic"/>
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find your master
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, architecto asperiores,
                  atque
                  autem deserunt dicta doloremque earum eos in iure iusto minus non, officiis quas quasi quos rem
                  sapiente.
                </p>
                <ArrowLink to={RoutePaths.TECHNICIANS}/>
              </div>
            </div>
            <div className="px-5 py-[30px]">
              <div className="flex items-center justify-center">
                <img src={serviceImage2} alt="SomePic"/>
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, architecto asperiores,
                  atque
                  autem deserunt dicta doloremque earum eos in iure iusto minus non, officiis quas quasi quos rem
                  sapiente.
                </p>
                <ArrowLink to={RoutePaths.TECHNICIANS}/>
              </div>
            </div>
            <div className="px-5 py-[30px]">
              <div className="flex items-center justify-center">
                <img src={serviceImage3} alt="SomePic"/>
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book an Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, architecto asperiores,
                  atque
                  autem deserunt dicta doloremque earum eos in iure iusto minus non, officiis quas quasi quos rem
                  sapiente.
                </p>
                <ArrowLink to={RoutePaths.TECHNICIANS}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** About Section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img className="block w-full max-w-[630px]" src={avatarImage1} alt=""/>
              <div
                className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                <img src={avatarImage2} alt=""/>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">Proud to be one of the best in Ontario</h2>
              <p className="text__para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda
                aut consectetur delectus dicta dolorum, eaque eius enim error!
              </p>
              <p className="text__para mt-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda
                aut consectetur delectus dicta dolorum, eaque eius enim error, exercitationem id, ipsam maiores nemo
                nisi
                non perferendis recusandae sed veritatis?
              </p>
              <Link to={RoutePaths.BASE}>
                <button className="btn">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/**  Services section 2 */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our services</h2>
            <p className="text__para text-center">
              World class care for everyone. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {
              serviceCards.map((item, index) => (
                <ServiceCard key={item.id} countNumber={index + 1} {...item} />
              ))
            }
          </div>
        </div>
      </section>

      {/** Feature Section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get nail care anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your technician here and contact their office
                </li>
                <li className="text__para">
                  3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto enim error expedita
                  fugit impedit in magni voluptatem!
                </li>
              </ul>
              <Link to={RoutePaths.BASE}>
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">{/* z-10 */}
              <img className="block w-full max-w-[630px]" src={avatarImage1} alt=""/>
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
                                md:left-5 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]"> {/* z-20 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p
                      className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                      <BsCameraVideo/>
                    </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px]
                                  leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img className="w-10 h-10 rounded-full" src={avatar} alt=""/>
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    John Doe
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Our great Technicians section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great technicians</h2>
            <p className="text__para text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {
              technicians.map(technician => <TechicianCard key={technician.id} {...technician}/>)
            }
          </div>
        </div>
      </section>

      {/** FAQ section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img className="max-w-[592px] block w-full" src={nature} alt=""/>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions from our beloved customers</h2>
              <ul className="mt-[38px]">
                {
                  faqList.map((item, index) => <FaqItem key={index} {...item}/>)
                }
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/** Testimonial Section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our customers say</h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolores ipsam nihil quo quos, ullam voluptatem.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>
    </>
  );
};