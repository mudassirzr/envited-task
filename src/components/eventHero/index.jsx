export default function EventHero(props){
    return (
        <div>
            <img className="max-h-68 w-full object-cover" alt={props.imgAltText} src={props.imgUrl} />
        </div>
    )
}