import { useLocation } from "react-router-dom";
import { CreateEvent,ViewEvent } from "components";
import { useCallback, useState } from "react";
import App from "../App";
export default function CommonComponent(props) {
  const [form, onFormFieldChange] = useState({
    eventName: "",
    hostName: "",
    startDate: "",
    endDate: "",
    photo: "",
  });
  const location = useLocation();
  console.log(location,'location')
  const renderComponent = useCallback(()=>{
    
    switch(location.pathname){
        case '/create':
            return <CreateEvent form={form} onFormFieldChange={onFormFieldChange} />
        case '/event':
            return <ViewEvent event={form} />
        default:
            <App />
    }
  }, [location, form])

  return renderComponent()
}
