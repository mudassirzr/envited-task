export default function Button(props) {
  const { variant = "primary", size='md', fullWidth = false, additionalClasses='', ...rest } = props;
  const variants = {
    primary: "bg-primary-gradient text-white",
  };
  const sizes = {
    sm: 'py-1 px-3',
    md: 'py-2 px-4',
    lg: 'p-4 px-6'
  }
  return (
    <button {...rest} className={`${variants[variant]} ${sizes[size]} font-bold rounded-large ${fullWidth?'w-full':''} ${additionalClasses}`}>
      {props.children}
    </button>
  );
}
