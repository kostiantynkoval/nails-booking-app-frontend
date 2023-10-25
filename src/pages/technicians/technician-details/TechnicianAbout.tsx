import React from 'react';

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

export const TechnicianAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-baseline gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Maiia Beauty
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid animi aperiam
          aspernatur assumenda autem consequuntur distinctio doloremque, doloribus eius enim laborum natus
          nesciunt optio perspiciatis possimus recusandae repudiandae vero. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Aut cum deserunt, distinctio laboriosam pariatur rerum soluta tempora vero?
          Amet animi consequuntur dicta facilis inventore necessitatibus odit sequi ullam ut veniam?
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
        <ul className="pt-4 md:p-5">
          {
            mockCourses.map(({id, name, startDate, location}) => (
              <li key={id} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5mb-[30px] mb-3">
                <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {startDate} - {}
              </span>
                  <p className="text-[16px] leading-6 font-medium text-textColor">
                    {name}
                  </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                  {location}
                </p>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#FFF9EA]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              Date 1 - Date 2
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Nails Extension Technician
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Mississauga, Ontario
            </p>
          </li>
          <li className="p-4 rounded bg-[#FFF9EA]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              Date 1 - Date 2
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Nails Extension Technician
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Mississauga, Ontario
            </p>
          </li>
        </ul>
      </div>

    </div>
  );
};