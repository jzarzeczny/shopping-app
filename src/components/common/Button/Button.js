function Button({ children, source, clickFunc, form, listData }) {
  return (
    <button
      onClick={clickFunc}
      form={form}
      type={`${form ? "submit" : "button"}`}
      className={`button ${"button" + source}`}
    >
      {children}
    </button>
  );
}

export default Button;
