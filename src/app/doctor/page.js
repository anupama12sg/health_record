import Image from "next/image";

export default function Home() {
    return (


        <div className="max-w-lg mx-auto p-6 shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Doctor Registration Form</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Designation</label>
                    <input
                        type="text"
                        placeholder="Designation"
                        className="w-1/3 mt-1 p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="First"
                            className="w-1/3 mt-1 p-2 border border-gray-300 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Middle"
                            className="w-1/3 mt-1 p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Last"
                            className="w-1/3 mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                        type="date"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <select className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Medical License Number</label>
                    <input
                        type="text"
                        placeholder="Medical License Number"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Area of Specialization</label>
                    <input
                        type="text"
                        placeholder="Area of Specialization"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                    <input
                        type="number"
                        placeholder="Years of Experience"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    ></input>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Declaration:</label>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            className="mt-0 mr-2 border-gray-300 rounded-md"
                        />
                        <span className="text-gray-700">I hereby, declare that the information provided is true and accurate to the best of my knowledge.</span>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    );





}