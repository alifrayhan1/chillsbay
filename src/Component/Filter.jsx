import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SelectForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(minDate.getDate() + 10);

  return (
    <form className="flex flex-col sm:flex-row bg-[#fbfcff] items-center sm:p-4 p-10 rounded-b-2xl sm:rounded-2xl justify-between w-full max-w-2xl space-x-4 space-y-2">
      {/* Location Select */}
      <div className="flex flex-col w-full sm:w-auto">
        <label htmlFor="location" className="text-sm font-medium text-gray-700">
          Location
        </label>
        <select
          id="location"
          className="border border-blue-200 rounded-md px-3 py-2 focus:border-blue-500 outline-none"
        >
          {["Oshodi", "Vegas", "Miami", "Angeles"].map((city) => (
            <option key={city} value={city.toLowerCase()}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Date Picker */}
      <div className="flex flex-col  w-full sm:w-auto">
        <label htmlFor="date" className="text-sm font-medium text-gray-700">
          Date
        </label>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          className="border border-blue-200 rounded-md px-3 py-2 w-full"
          dateFormat="MM/dd/yyyy"
          placeholderText="MM/DD/YYYY"
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>

      {/* Destination Select */}
      <div className="flex flex-col w-full sm:w-auto">
        <label
          htmlFor="destination"
          className="text-sm font-medium text-gray-700"
        >
          Destination
        </label>
        <select
          id="destination"
          className="border border-blue-200 rounded-md px-3 py-2 focus:border-blue-500 outline-none"
        >
          {["Oshodi", "Vegas", "Miami", "Angeles"].map((city) => (
            <option key={city} value={city.toLowerCase()}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md px-5 py-2  w-full sm:w-auto">
        Search
      </button>
    </form>
  );
};

export default SelectForm;
