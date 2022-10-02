import {
    Container,
    Input,
    EventHero,
    Button,
    CustomDateTimePicker,
  } from "components";
  import { useCallback, useMemo, useState } from "react";
  import { Link } from "react-router-dom";

  export default function CreateEvent({form , onFormFieldChange}) {
    const [errors, setErrors] = useState({});
    const onFieldValueChange = (key, val) => {
      onFormFieldChange({
        ...form,
        [key]: val,
      });
      if (!!val) {
        setErrors({ ...errors, [key]: null });
      } else {
        setErrors({ ...errors, [key]: "This field is required" });
      }
    };
    const onSave = useCallback(
      (e) => {
        e.preventDefault();
        let err = {};
        Object.keys(form).forEach((field) => {
          if (!form?.[field]) {
            err[field] = "This field is required";
          }
        });
        if(Object.keys(err).length > 0 ){
          setErrors(err);
          return
        }
        
      },
      [form]
    );
    const formFields = useMemo(() => {
      return {
        eventName: {
          Component: Input,
          label: "Event Name",
        },
        hostName: {
          Component: Input,
          label: "Host Name",
        },
        startDate: {
          Component: CustomDateTimePicker,
          label: "Start Date",
          maxDate: form?.["endDate"] ? form?.["endDate"] : undefined,
        },
        endDate: {
          Component: CustomDateTimePicker,
          label: "End Date",
          minDate: form?.["startDate"] ? form?.["startDate"] : undefined,
        },
        location: {
            Component: Input,
            label: "Location",
          },
        photo: {
          Component: Input,
          type: "file",
          label: "Photo",
          accept: "image/png, image/jpeg",
        },
      };
    }, [form]);
    return (
      <>
        <EventHero imgAltText={"Event Photo"} imgUrl={"/cake.png"} />
        <Container>
          <div className="max-w-sm mx-auto">
            <h1 className="text-4xl font-bold my-8">Create Event</h1>
            <form onSubmit={onSave} className="flex flex-col">
              {/* <Input id="firstName" label="Event Name" />
              <Input id="lastName" label="Host Name" />
              <Input id="startDate" type="date" label="Start Date/Time" />
              <Input id="endDate" type="date" label="End Date/Time" />
              <DateTimePicker />
              <Input id="location" label="Location" />
              <Input id="photo" type="file" label="Photo" /> */}
              {Object.keys(formFields).map((key, i) => {
                const { Component, additionalProps, ...rest } = formFields[key];
                return (
                  <Component
                    key={i}
                    {...rest}
                    id={key}
                    onChange={(val) => onFieldValueChange(key, val)}
                    value={form?.[key] ? form[key] : ""}
                    error={errors?.[key]}
                  />
                );
              })}
              <Button additionalClasses={"ml-auto"} type="submit">
                <Link className="text-white" to="/event">🎉 Create my event</Link>
              </Button>
            </form>
          </div>
        </Container>
      </>
    );
  }
  