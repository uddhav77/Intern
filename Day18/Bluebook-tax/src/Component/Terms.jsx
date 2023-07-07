import React, { useState } from "react";
import { GrNotes } from "react-icons/gr";
import Calculate from "./Calculate";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

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

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const navigate = useNavigate();

  const taxCalculate = () => {
    const parsedCapacity = parseInt(capacity);
    if (parsedCapacity === 110) {
      return 1000;
    } else if (parsedCapacity < 110) {
      return 1500;
    } else if (parsedCapacity <= 150) {
      return 2000;
    } else if (parsedCapacity <= 200) {
      return 2500;
    } else if (parsedCapacity <= 350) {
      return 3000;
    } else {
      return 5000;
    }
  };
  console.log(capacity, taxCalculate())

  // const calculateTaxAmount = (startYear, endYear) => {
  //   const calculatedTax = taxCalculate();

  //   const start = dayjs(startYear, "YYYY");
  //   const end = dayjs(endYear, "YYYY");
  //   const difference = end.diff(start, "year");

  //   return calculatedTax * (difference + 1);
  // };

  const onSubmit = (data) => {
    // const startYear = parseInt(data.dateFrom);
    // const endYear = parseInt(data.dateTo);

    // setRenewFrom(data.dateFrom);
    // setRenewTo(data.dateTo);

    // const calculatedTax = calculateTaxAmount(startYear, endYear);
    // setTax(calculatedTax);

    // navigate(/tax-result/${calculatedTax});
    console.log(data);
    const calculatedTax = taxCalculate(parseInt(data.capacity));
    const date1 = dayjs(data.date, "YYYY-MM-DD" );
    const date2 = dayjs(data.dates, "YYYY-MM-DD");

    const diff = {
        days: date2.diff(date1, "day"),
    };
    console.log(diff)

    let taxValue = 0;
    if (diff.days < 365 ) {
      taxValue = calculatedTax;
    }else if (diff.days === 365 || diff.days <= 455 ) {
      taxValue = calculatedTax;
    } else if ( diff.days > 455 ) {
      taxValue = calculatedTax * 2;
    } else {
      taxValue = calculatedTax * 3;
    }

    setTax(taxValue);
    setRenewFrom(data.date);
    setRenewTo(data.dates);
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
      <div>Total Tax: {tax}</div>
    </div>
  );
};

export default Terms;