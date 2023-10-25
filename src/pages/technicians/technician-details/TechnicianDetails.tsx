import React, { useState } from 'react';
import {AiFillStar} from "react-icons/ai";
import {TechnicianAbout} from "./TechnicianAbout";
import avatar from '../../../assets/images/avatar_400x400.jpg';
import { TechnicianFeedback } from "./TechnicianFeedback";
import { SidePanel } from "./SidePanel";

enum Tabs {
  ABOUT = 'About',
  FEEDBACK = 'Feedback'
}

export const TechnicianDetails = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.ABOUT);
  const setActiveTabCallback = (tabName: Tabs) => () => setActiveTab(tabName)
  const activeTabClass = 'border-b border-solid border-primaryColor';
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img className="w-full" src={avatar} alt=""/>
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 text-[12px] leading-4
                                  lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Manicurist
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Maiia Beauty
                </h3>
                <div className="flex items-center gap-[6px]">
                  <div className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor" >
                    <AiFillStar fill="rgb(245 158 11)"/>
                    <span>4.8</span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">(293)</span>
                  </div>
                </div>
                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae.
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={setActiveTabCallback(Tabs.ABOUT)}
                className={`${activeTab === Tabs.ABOUT && activeTabClass} py-2 px-5 mt-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                {Tabs.ABOUT}
              </button>
              <button
                onClick={setActiveTabCallback(Tabs.FEEDBACK)}
                className={`${activeTab === Tabs.FEEDBACK && activeTabClass} py-2 px-5 mt-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                {Tabs.FEEDBACK}
              </button>
            </div>

            <div className="mt-[50px]">
              {
                activeTab === Tabs.ABOUT && <TechnicianAbout/>
              }
              {
                activeTab === Tabs.FEEDBACK && <TechnicianFeedback/>
              }
            </div>
          </div>
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};