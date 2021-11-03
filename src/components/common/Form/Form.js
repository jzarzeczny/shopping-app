import { useForm } from "react-hook-form";
import FormSelect from "./FormSelect/FormSelect";
import FormInput from "./FormInput/FormInput";

function Form({ inputFields, button }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
      <input className="button button--submit" type="submit" value={button} />
    </form>
  );
}

export default Form;
