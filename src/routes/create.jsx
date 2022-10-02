import { Container, Input } from "components";

export default function CreateEvent (props) {
    return (
        <Container>
            <h1 className="text-4xl font-bold my-5">Create Event</h1>
            <form>
                <Input id='firstName' label="Event Name" />
                <Input id='lastName' label="Host Name" />
                <Input id='startDate' type='date' label="Start Date/Time" />
                <Input id='endDate' type='date' label="End Date/Time" />
                <Input id='location' label="Location" />
                <Input id='photo' type='file' label="Photo" />

            </form>
        </Container>
    )
}