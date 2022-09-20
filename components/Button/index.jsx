function Button({ children, className, icons, hrefs, onClick }) {

  let Btn = "a";

  if(!hrefs){
    Btn = "button";
  }

  return (
    <Btn href="#" className={className} onClick={onClick}>
      {children}
    </Btn>
  );
}

export default Button;
