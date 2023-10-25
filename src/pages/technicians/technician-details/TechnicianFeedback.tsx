import React, { useState } from 'react';
import avatar from '../../../assets/images/avatar_400x400.jpg';
import { AiFillStar } from "react-icons/ai";
import { FeedbackForm } from "./FeedbackForm";

const mockCourses = [
  {
    id: '1',
    startDate: '23 June, 2008',
    endDate: '30 August, 2008',
    name: 'Some Nail Extension Courses',
    location: 'Zaporizhzhya, Ukraine'
  },
  {
    id: '2',
    startDate: '5 September, 2011',
    endDate: '5 October, 2011',
    name: 'Some Pedicure Courses',
    location: 'Dnipro, Ukraine'
  },
  {
    id: '3',
    startDate: '24 August, 2019',
    endDate: '11 October, 2019',
    name: 'Some Nail Design Art Courses',
    location: 'Gdansk, Poland'
  }
];

export const TechnicianFeedback = () => {
  const [isFeedbackFormOpen, setIsFeedbackFormOpen] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] text-headingColor font-bold mb-[30px]">
          All reviews (292)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="Feedback author avatar" className="w-full"/>
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Greatful customer
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                Date 11.11
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                Good services, highly recommended!!!
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {
              [1,2,3,4,5].map(index => <AiFillStar key={index} fill="#0067FF" />)
            }
          </div>
        </div>
      </div>
      {
        isFeedbackFormOpen ? (
          <FeedbackForm />
          ) : (
          <div onClick={() => setIsFeedbackFormOpen(true)} className="text-center">
            <button className="btn">Give feedback</button>
          </div>
        )
      }
    </div>
  );
};