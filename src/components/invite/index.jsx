import { Button } from "components";

export default function Invite(props){
    return (
        <div className="p-3 flex items-center justify-between bg-white rounded-lg">
            <p><span className="font-bold">{props.responses}</span> responses &#8226; <a href="/">see guests</a></p>
            <Button>&#129309; Invite</Button>
        </div>
    )
}