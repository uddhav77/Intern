import React from  "react";
import { useForm } from "react-hook-form";

const Signin = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    }
  return (
    <>
    <div className="flex justify-center mt-14">
      <div className="bg-gradient-to-t from-indigo-600 via-purple-300 to-purple-200 flex justify-center w-2/5 text-white p-10 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <div className="text-center text-[36px] font-medium">
                NDLE
            </div>
            <div className="text-center">
                Login to your account
            </div>
            </div>

            <div className="flex flex-col gap-4 mt-10 text-black">
                <div className="">
                    <input type="email" {...register("email",{required: true})} name="email" placeholder="Enter your email" className="rounded-lg w-[400px] p-2" />
                    <div className="text-red-600">{errors.email?.type === "required" && "Email is required"}</div>
                </div>
                <div>
                    <input type="password" {...register("password", {required: true, minLength:4})} name="password" placeholder=" ******** "  className="rounded-lg w-[400px] p-2" />
                    <div className="text-red-600">
                    {errors.password?.type === "required" && "Password is required"}
                    {errors.password?.type === "minLength" && "Password must be atleast of 4 digits"}
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <div className="flex gap-2">
                    <input type="checkbox" />
                    <div>Remember Me</div>
                </div>
                <div>
                    Forget Password?
                </div>
            </div>

            <div className="flex mt-8 justify-center">
                <button type="submit"  className="bg-white hover:bg-blue-100 p-2 rounded-lg w-1/2 text-black text-xl font-medium"> Login </button>
            </div>

            <div className="text-center mt-2">Don't have an account? Sign up</div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Signin;
