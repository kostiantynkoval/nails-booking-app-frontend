import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routePaths";
import signupLogo from '../../assets/images/800x600_water.jpg';
import avatar from '../../assets/images/avatar_400x400.jpg';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

enum Role {
  DOCTOR = 'Doctor',
  PATIENT = 'Patient'
}

const initialFormData = {
  fullName: '',
  email: '',
  password: '',
  photo: null,
  gender: Gender.OTHER,
  role: Role.PATIENT,
}

//TODO Add enums for gender and roles

export const Signup = () => {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState<typeof initialFormData>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value,
      })
    )
  }

  const handleFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('file', file)
  }

  return (
    <section className="px-5 lg:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupLogo} alt="" className="w-full"/>
            </figure>
          </div>

          <div className="rounded-l-lg py-10 lg:pl-16">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066FF61] focus:outline-none
                                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                                placeholder:text-textColor cursor-pointer"
                  required={true}
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066FF61] focus:outline-none
                                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                                placeholder:text-textColor cursor-pointer"
                  required={true}
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066FF61] focus:outline-none
                                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                                placeholder:text-textColor cursor-pointer"
                  required={true}
                />
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select name="role" id="role" className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
                    <option value={Role.PATIENT}>Patient</option>
                    <option value={Role.DOCTOR}>Doctor</option>
                  </select>
                </label>
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select name="gender" id="gender" className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
                    <option value={Gender.MALE}>Male</option>
                    <option value={Gender.FEMALE}>Female</option>
                    <option value={Gender.OTHER}>Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex
                                   overflow-hidden items-center justify-center">
                  <img src={avatar} alt=""/>
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    name="photo"
                    id="customFile"
                    accept=".jpg, .png"
                    onChange={handleFileInputChange}
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px]
                                leading-6 overflow-hidden bg-[#0066FF46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-1">
                  Signup
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Already have an account? <Link to={RoutePaths.LOGIN} className="text-primaryColor font-medium ml-1">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};