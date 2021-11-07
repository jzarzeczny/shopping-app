import { useForm } from "react-hook-form";
import FormSelect from "./FormSelect/FormSelect";
import FormInput from "./FormInput/FormInput";

function Form({ inputFields, button, source, dataGetter }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => dataGetter(data);

  return (
    <form
      className={`form ${source ? "form--" + source : ""}`}
      onSubmit={handleSubmit(onSubmit)}
      id={source ? "form--" + source : ""}
    >
      {inputFields.map((field) => (
        <>
          {field.type === "select" ? (
            <FormSelect
              data={field}
              key={field.id}
              register={register}
              errors={errors}
            />
          ) : (
            <FormInput
              name={field.name}
              id={field.id}
              key={field.id}
              register={register}
              errors={errors}
            />
          )}
        </>
      ))}
      {button && (
        <input className="button button--submit" type="submit" value={button} />
      )}
    </form>
  );
}

export default Form;
