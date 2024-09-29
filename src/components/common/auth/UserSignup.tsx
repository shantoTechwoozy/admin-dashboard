"use client";
import Logo from "@/components/common/Logo";
import KeepInput from "@/components/keep-react/KeepInput";
import { IconAuthentication } from "@/icons";
import { Button, toast } from "keep-react";
import { useState } from "react";

const UserSignup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.password !== user.rePassword) {
      toast.warning("Password is not matched");
    }
    // write server side logic in here
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <Logo isDark className=" flex items-center justify-center" />
      <div className="flex  items-center justify-center gap-5 overflow-hidden">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <p className="text-body-3 font-semibold capitalize">User register</p>

          <div className="flex gap-3">
            <KeepInput
              placeholder="Enter first name"
              value={user.firstName}
              name="firstName"
              onChange={handleInputChange}
              required
            />
            <KeepInput
              placeholder="Enter last name"
              value={user.lastName}
              name="lastName"
              onChange={handleInputChange}
            />
          </div>

          <KeepInput
            placeholder="Enter your email"
            name="email"
            type="email"
            onChange={handleInputChange}
            required
          />

          <KeepInput
            placeholder="Enter password"
            type="password"
            name="password"
            onChange={handleInputChange}
            required
          />

          <KeepInput
            placeholder="Retype your password"
            type="password"
            name="rePassword"
            onChange={handleInputChange}
            required
          />

          <Button className="w-full" type="submit">
            Register
          </Button>
        </form>

        <div>Or</div>

        <div className="flex flex-col gap-3 *:flex-1 *:gap-2">
          <Button className="bg-blue-500">
            <IconAuthentication.Facebook />
            Log In with Facebook
          </Button>

          <Button color="error">
            <IconAuthentication.Google />
            Log In with Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
