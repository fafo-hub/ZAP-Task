import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import { Button, Field, Form, Input } from "../Forms/Script";

export const Contact = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const watchPassword = watch("password");
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/education");
  };

  return (
    <div>

      <Form className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" onSubmit={handleSubmit(saveData)}>
        <fieldset className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <legend className="sm:mx-auto sm:w-full sm:max-w-sm mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Contact</legend>
          <Field className="text-5xl" label="First name" error={errors?.firstName}>
            <Input
              className="mt-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              {...register("firstName", {
                required: "First name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "First name must contain only alphabetic characters"
                },
                minLength: {
                  value: 3,
                  message: "First name must have at least 3 characters"
                }
              })}
              id="first-name"
            />
          </Field>
          <Field label="Last name" error={errors?.lastName}>
            <Input
              className="mt-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              {...register("lastName", {
                required: "Last name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Last name must contain only alphabetic characters"
                },
                minLength: {
                  value: 3,
                  message: "Last name must have at least 3 characters"
                }
              })}
              id="last-name"
            />
          </Field>
          <Field className="block text-sm font-medium leading-6 text-gray-900" label="Email" error={errors?.email}>
            <Input
              className="mt-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                  message: "Please enter a valid email address"
                }
              })}
              type="email"
              id="email"
            />
          </Field>
          <Field label="Password" error={errors?.password}>
            <Input
              className="mt-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must have at least 5 characters"
                }
              })}
              type="password"
              id="password"
            />
          </Field>
          <Field label="Confirm password" error={errors?.confirmPassword}>
            <Input
              className="mt-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("confirmPassword", {
                required: "Confirm the password",
                validate: (value) =>
                  value === watchPassword || "The passwords do not match"
              })}
              type="password"
              id="password-confirm"
            />
          </Field>
          <Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next {">"}</Button>
        </fieldset>
      </Form>

    </div>
  );
};
