import { Container, InfoChip } from "components";
import { BsCalendarWeek } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function ViewEvent({ event }) {
  return (
    <Container className="">
      <div className="flex flex-col lg:flex-row justify-between max-w-5xl mx-auto py-20">
        <div className="mb-8 lg:mb-0 lg:w-2/5 -mx-4 md:mx-0">
          <img src={"/cake.png"} alt={"event"} />
        </div>
        <div className="lg:order-first lg:w-2/5">
          <h1 className="text-3xl lg:text-5xl mb-4 font-bold">{event.eventName}</h1>
          <p className="text-secondary-light mb-12 text-lg">
            hosted by <span className="font-bold">{event.hostName}</span>
          </p>
          <InfoChip Icon={BsCalendarWeek}>
            <span className="font-bold">
              {event?.startDate?.toLocaleString()}
            </span>{" "}
            to{" "}
            <span className="font-bold">
              {event?.endDate?.toLocaleString()}
            </span>
          </InfoChip>
          <InfoChip Icon={HiOutlineLocationMarker}>
            <span className="font-bold">{event?.location}</span>
          </InfoChip>
        </div>
      </div>
    </Container>
  );
}
