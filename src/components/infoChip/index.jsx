import {BsChevronRight} from 'react-icons/bs';

export default function infoChip (props) {
    const {children, Icon} = props
    return (
        <div className="flex items-center justify-between rounded-lg mb-6 text-lg">
            <div className="flex flex-1 items-center">
                <div className='p-4 rounded-lg shadow bg-white mr-4 text-primary'>
                    <Icon />
                </div>
                <span>
                    {children}
                </span>
            </div>
            <BsChevronRight className={'text-secondary-light ml-4'} size={'1.125em'} />
            
        </div>
    )
}