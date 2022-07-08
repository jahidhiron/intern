import React from 'react';

const SignIn = () => {
  return (
    <section className="mt-24">
      <div className="container mx-auto">
        <div class="w-[700px] mx-auto">
          <h2 className=" text-center text-[green] text-2xl">SignIn</h2>
          <form>
            <div className="mt-3">
              <label class="">
                <span className="text-[green]">email</span>
              </label>
              <input
                className=" w-full border   mt-3 p-1"
                type="email"
                name="email"
                placeholder="enter your email"
              />
            </div>
            <div className="mt-3">
              <label class="">
                <span className="text-[green]">password</span>
              </label>
              <input
                className=" w-full border   mt-3 p-1"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <input
              className="btn w-full text-[white] pt-2 pb-2 bg-[green] mt-5"
              type="submit"
              value="SignIn"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
