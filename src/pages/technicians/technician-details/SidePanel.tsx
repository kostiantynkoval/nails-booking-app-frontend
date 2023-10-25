import React from 'react';
import { getDayOfWeek } from "../../../utils/dateTimeUtils";

const mockTimeSlots = [
  {
    id: '1',
    date: '2023-10-25',
    startTime: '1:00 PM',
    endTime: '3:30 PM'
  },
  {
    id: '2',
    date: '2023-10-29',
    startTime: '12:30 PM',
    endTime: '12:45 PM'
  },
  {
    id: '3',
    date: '2023-10-28',
    startTime: '2:00 PM',
    endTime: '4:00 PM'
  },
  {
    id: '4',
    date: '2023-10-29',
    startTime: '1:00 PM',
    endTime: '5:00 PM'
  },

]

export const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          500 UAH
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {
            mockTimeSlots.map(({id, date, startTime, endTime}) => (
              <li key={id} className="flex items-center justify-between mb-2">
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {getDayOfWeek(date)}
                </p>
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {startTime} - {endTime}
                </p>
              </li>
            ))
          }
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md">Book an Appointment</button>
    </div>
  );
};