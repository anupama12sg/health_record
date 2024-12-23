"use client"

import Image from "next/image";
import lighthouse from '@lighthouse-web3/sdk'

import { useState } from "react";

export default function Home() {
    const [designation, setDesignation] = useState()
    const [firstName, setFirstName] = useState()
    const [middle, setMiddleName] = useState()
    const [last, setLastName] = useState()
    const [dateOfBirth, setDOB] = useState()
    const [gender, setGender] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [emailAddress, setEmailAddress] = useState()
    const [medicalLicenseNo, setMedicalLicenseNo] = useState()
    const [areaOfSpecialization, setAreaOfSpecialization] = useState()
    const [yearsOfExperience, setYearsOfExperience] = useState()

    const handleSubmit = async () => {
        const doctor = {
            fullName: `${firstName} ${middle} ${last}`,
            dateOfBirth,
            gender,
            phoneNumber,
            emailAddress,
            medicalLicenseNo,
            areaOfSpecialization,
            yearsOfExperience
        }
        const apiKey = process.env.NEXT_PUBLIC_LIGHT_HOUSE_API_KEY;
        const uploadResponse = await lighthouse.uploadText(
            JSON.stringify(doctor),
            apiKey, firstName

        );

        console.log(uploadResponse);
        console.log(doctor);
        const dbResponse = await insert("doctor", uploadResponse.data.Hash);
        console.log("db response ", dbResponse);
    }

    return (

        <div className="max-w-lg mx-auto p-6 shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Doctor Registration Form</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Designation *</label>
                    <input
                        type="text"
                        placeholder="Designation"
                        className="w-1/3 mt-1 p-2 border border-gray-300 rounded-md" onChange={(e) => { setDesignation(e.target.value) }}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="First"
                            className="w-1/3 mt-1 p-2 border border-gray-300 rounded-md" onChange={(e) => { setFirstName(e.target.value) }}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Middle"
                            className="w-1/3 mt-1 p-2 border border-gray-300 rounded-md" onChange={(e) => { setMiddleName(e.target.value) }}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last"
                            className="w-1/3 mt-1 p-2 border border-gray-300 rounded-md" onChange={(e) => { setLastName(e.target.value) }}
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
                    <input
                        type="date"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setDOB(e.target.value) }}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Gender *</label>
                    <select className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setGender(e.target.value) }} required>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setPhoneNumber(e.target.value) }}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setEmailAddress(e.target.value) }}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Medical License Number *</label>
                    <input
                        type="text"
                        placeholder="Medical License Number"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setMedicalLicenseNo(e.target.value) }}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Area of Specialization *</label>
                    <input
                        type="text"
                        placeholder="Area of Specialization"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setAreaOfSpecialization(e.target.value) }}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Years of Experience *</label>
                    <input
                        type="number"
                        placeholder="Years of Experience"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setYearsOfExperience(e.target.value) }}
                        required
                    ></input>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Declaration:</label>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            className="mt-0 mr-2 border-gray-300 rounded-md"
                            required
                        />
                        <span className="text-gray-700">I hereby, declare that the information provided is true and accurate to the best of my knowledge.</span>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        required
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    );
}
