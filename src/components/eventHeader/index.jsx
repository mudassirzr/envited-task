export default function EventHeader(props) {
  return (
    <div className="py-4">
      <h1 className="text-3xl font-semibold mb-2">{props.eventTitle}</h1>
      <h2 className="text-secondary-light text-sm font-light mb-2">Hosted by <span className="font-semibold">{props.hostedBy}</span></h2>
    </div>
  );
}
