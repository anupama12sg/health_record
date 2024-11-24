"use client"

import lighthouse from '@lighthouse-web3/sdk';
import { MerkleTree } from 'merkletreejs';
import { useState } from "react";
import * as SHA256 from 'crypto-js/sha256';
import { insert } from './services/db';
import { ethers } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  const [firstName, setfirstName] = useState()
  const [middle, setmiddleName] = useState()
  const [last, setlastName] = useState()
  const [dateOfBirth, setDOB] = useState()
  const [gender, setGender] = useState('Male')
  const [streetAddress, setStreetAddress] = useState()
  const [city, setCity] = useState()
  const [stateName, setStateName] = useState()
  const [zipCode, setZipCode] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [emailAddress, setEmailAddress] = useState()
  const [maritalStatus, setMaritalStatus] = useState('Single')
  const [bloodGroup, setBloodGroup] = useState()
  const [doctorName, setDoctorName] = useState()
  const [medicalHistory, setMedicalHistory] = useState()
  const [ipfs, setIpfs] = useState()

  const handleSubmit = async () => {
    const patient = {
      fullName: `${firstName} ${middle} ${last}`,
      dateOfBirth,
      gender,
      streetAddress,
      city,
      stateName,
      zipCode,
      phoneNumber,
      emailAddress,
      maritalStatus,
      bloodGroup,
      doctorName,
      medicalHistory
    }
    const apiKey = process.env.NEXT_PUBLIC_LIGHT_HOUSE_API_KEY;
    const uploadResponse = await lighthouse.uploadText(
      JSON.stringify(patient),
      apiKey,
      firstName
    );

    console.log(uploadResponse);
    console.log(patient);
    setIpfs(uploadResponse.data.Hash);
    //const dbResponse= await insert ("patient", uploadResponse.data.Hash);
    //console.log("db response ", dbResponse);
  }

  // pass the array of patient ids
  const createMerkleTree = async () => {
    const leaves = patientIds.map(id => SHA256(id));
    console.log("Patient Tree leaves ", leaves);
    const patientTree = new MerkleTree(leaves, SHA256);
    console.log("Merkle tree ", patientTree);
    const root = patientTree.getRoot().toString('hex');

    const dbResponse = await insert();
    console.log("dbResponse ", dbResponse);

    return root;
  }

  // const verifyPatientProof = async(patientId) => {
  //   const leaf = SHA256(patientId);
  //   const proof = 
  // }

  return (
    <>
      <div className="max-w-lg mx-auto p-6 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4 text-center">New Patient Registration</h1>

        <div className="flex justify-center">
          <ConnectButton />
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name *</label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="First"
                className="w-1/3 mt-1 p-2 border border-gray-300 rounded-md" onChange={(e) => { setfirstName(e.target.value) }}
                required
              />
              <input
                type="text"
                placeholder="Middle"
                className="w-1/3 mt-1 p-2 border border-gray-300 rounded-md" onChange={(e) => { setmiddleName(e.target.value) }}
                required
              />
              <input
                type="text"
                placeholder="Last"
                className="w-1/3 mt-1 p-2 border border-gray-300 rounded-md" onChange={(e) => { setlastName(e.target.value) }}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
            <input
              type="date"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              onChange={(e) => { setDOB(e.target.value) }}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender *</label>
            <select className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setGender(e.target.value) }}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address *</label>
            <input
              type="text"
              placeholder="Street Address"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setStreetAddress(e.target.value) }}
              required
            />
            <input
              type="text"
              placeholder="City"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setCity(e.target.value) }}
              required
            />
            <input
              type="text"
              placeholder="State"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setStateName(e.target.value) }}
              required
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setZipCode(e.target.value) }}
              required
            />
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
            <label className="block text-sm font-medium text-gray-700">Marital Status *</label>
            <select className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setMaritalStatus(e.target.value) }} >
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Blood Group *</label>
            <input
              type="text"
              placeholder="Blood Group"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setBloodGroup(e.target.value) }}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
            <input
              type="text"
              placeholder="Doctor Name"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setDoctorName(e.target.value) }}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Medical History</label>
            <textarea
              placeholder="Medical History"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={(e) => { setMedicalHistory(e.target.value) }}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Declaration:</label>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                className="mt-0 mr-2 border-gray-300 rounded-md"
                required
              />
              <span className="text-gray-700">I hereby, declare that the details given above are true and correct.</span>
            </div>
          </div>

          <div className="flex justify-center">
            <button onClick={handleSubmit}
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
        {ipfs ? <p>{ipfs}</p> : <></>}
      </div>
    </>

  );





}
