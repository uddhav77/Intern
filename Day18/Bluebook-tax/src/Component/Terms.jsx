import React, { useState } from "react";
import { GrNotes } from "react-icons/gr";
import Calculate from "./Calculate";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Terms = () => {
  const [capacity, setCapacity] = useState("");
  const [renewFrom, setRenewFrom] = useState("");
  const [renewTo, setRenewTo] = useState("");
  const [tax, setTax] = useState(0);

  const schema = yup.object().shape({
    vehicleType: yup.string().required("Vehicle Type is Required"),
    yearBuilt: yup.string().required("Year Built is Required"),
    vehicleCC: yup.string().required("Vehicle cc is Required"),
    dateFrom: yup.string().required("Please Enter Date"),
    dateTo: yup.string().required("Please Enter Date"),
  });

  const taxCalculate = () => {
    const parsedCapacity = parseInt(capacity);
    if (parsedCapacity === 110) {
      return 1000;
    } else if (parsedCapacity < 110) {
      return 1500;
    } else if (parsedCapacity < 150) {
      return 2000;
    } else if (parsedCapacity < 200) {
      return 2500;
    } else if (parsedCapacity < 350) {
      return 3000;
    } else {
      return 5000;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const calculatedTax = taxCalculate();

    const startYear = parseInt(data.dateFrom);
    const endYear = parseInt(data.dateTo);

    setRenewFrom(data.dateFrom);
    setRenewTo(data.dateTo);

    if (endYear - startYear === 1) {
      setTax(calculatedTax);
    } else if (endYear - startYear === 2) {
      setTax(calculatedTax * 2);
    } else {
      setTax(calculatedTax * 3);
    }
  };

  return (
    <div className="">
      <div className="flex gap-4">
        <div className="bg-purple-300 rounded-full h-8 w-8 flex justify-center items-center">
          <GrNotes className="" />
        </div>
        <div className="text-purple-500 font-bold flex items-center text-lg">
          TERMS AND CONDITIONS
        </div>
      </div>

      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div className="">
            <input
              type="text"
              name="vehicleType"
              placeholder="Vehicle type"
              className="w-full p-[10px] rounded-lg border"
              list="vehicles"
              {...register("vehicleType")}
            />
            <div className="text-red-600">
              {errors.vehicleType && <p>{errors.vehicleType.message}</p>}
            </div>
            <datalist id="vehicles">
              <option value="2 wheelers">2 wheelers</option>
              <option value="4 wheelers">4 wheelers</option>
            </datalist>
          </div>

          <div>
            <input
              type="text"
              name="yearBuilt"
              placeholder="Year of Manufacture(YYYY) AD"
              className="w-full p-[10px] rounded-lg border"
              {...register("yearBuilt")}
            />
            <div className="text-red-600">
              {errors.yearBuilt && <p>{errors.yearBuilt.message}</p>}
            </div>
          </div>

          <div>
            <input
              type="text"
              name="vehicleCC"
              placeholder="Vehicle Cubic Capacity (CC)"
              className="w-full p-[10px] rounded-lg border"
              {...register("vehicleCC")}
              onChange={(event) => {
                setCapacity(event.target.value);
              }}
            />
            <div className="text-red-600">
              {errors.vehicleCC && <p>{errors.vehicleCC.message}</p>}
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <p className="text-[10px] text-gray-500">Last Renewal From(AD)</p>
          <div>
            <input
              type="date"
              name="dateFrom"
              className="w-full border p-[10px] rounded-lg text-gray-400"
              {...register("dateFrom")}
              onChange={(event) => {
                setRenewFrom(event.target.value);
              }}
            />
            <div className="text-red-600">
              {errors.dateFrom && <p>{errors.dateFrom.message}</p>}
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <p className="text-[10px] text-gray-500">Last Renewal To(AD)</p>
          <div>
            <input
              type="date"
              name="dateTo"
              className="w-full border p-[10px] rounded-lg text-gray-400"
              {...register("dateTo")}
              onChange={(event) => {
                setRenewTo(event.target.value);
              }}
            />
            <div className="text-red-600">
              {errors.dateTo && <p>{errors.dateTo.message}</p>}
            </div>
          </div>
        </div>

        <div className="flex gap-1 mt-4">
          <div className="">
            <input
              type="checkbox"
              className="w-8 h-4"
              {...register("thirdPartyInsurance")}
            />
          </div>
          <div className="text-[12px] flex items-center text-gray-500">
            Get Third Party Insurance
          </div>
        </div>

        <div className="mt-8">
          <Calculate />
        </div>
      </form>
      <div>Total Amount (TAX): {tax}</div>
    </div>
  );
};

export default Terms;
