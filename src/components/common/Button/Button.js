function Button({ children, source }) {
  return <button className={`button ${"button" + source}`}>{children}</button>;
}

export default Button;
