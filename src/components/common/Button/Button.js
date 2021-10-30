function Button({ children, source, clickFunc }) {
  return (
    <button onClick={clickFunc} className={`button ${"button" + source}`}>
      {children}
    </button>
  );
}

export default Button;
