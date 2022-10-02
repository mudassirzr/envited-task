import { Button } from "components";
import { Outlet, Link, useLoaderData } from "react-router-dom";
export default function Hero(props) {
  return (
    <div className="lg:flex lg:h-screen lg:items-center lg:justify-between text-center lg:text-right">
      <div className="mt-10 mb-10 lg:w-2/5 lg:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6.5xl lg:leading-[4rem] font-semibold mb-3">
          Imagine if <br />{" "}
          <span className="bg-primary-gradient text-transparent bg-clip-text">
            Snapchat
          </span>{" "}
          <br />
          had events.
        </h1>
        <p className="text-md md:text-lg lg:text-2xl mb-10">
          Easily host and share events with your friends across any social
          media.
        </p>
        <div className="max-w-[320px] mx-auto lg:mr-0 lg:ml-auto">
          <Button additionalClasses={"hidden lg:block"} fullWidth={true}>
            <Link className="text-white" to="/create">🎉 Create my event</Link>
          </Button>
        </div>
      </div>
      <div className="mb-10 mx-auto lg:mx-0 w-1/2 lg:w-2/5 order-last lg:order-first">
        <img alt={"event screenshot"} src={"/landing.svg"} />
      </div>
      <Button
        additionalClasses={
          "lg:hidden max-w-fit sm:max-w-[50%] sm:w-full mx-auto"
        }
      >
        <Link className="text-white" to="/create">🎉 Create my event</Link>
      </Button>
    </div>
  );
}
