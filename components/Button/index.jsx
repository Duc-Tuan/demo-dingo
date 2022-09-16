function Button({ children, className, icons, hrefs, onclick }) {

  let Btn = "a";

  if(!hrefs){
    Btn = "button";
  }

  return (
    <Btn href="#" className={className} onClick={onclick}>
      {children}
    </Btn>
  );
}

export default Button;
