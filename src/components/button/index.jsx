export default function Button(props) {
  const { variant = "primary", fullWidth = false, additionalClasses='' } = props;
  const variants = {
    primary: "bg-primary-gradient text-white",
  };
  return (
    <button className={`${variants[variant]} p-4 px-6 font-bold rounded-large ${fullWidth?'w-full':''} ${additionalClasses}`}>
      {props.children}
    </button>
  );
}
