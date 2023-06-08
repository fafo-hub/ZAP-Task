import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form } from "../Forms/Script";

export const About = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  return (
    <div>
      <h2> {state.firstName} </h2>
      <Form className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" onSubmit={handleSubmit(saveData)}>
        <fieldset className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <legend className="sm:mx-auto sm:w-full sm:max-w-sm mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">About</legend>
          <Field className="text-5xl" label="About Me (Optional)">
            <textarea
              className="mt-3 h-45 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("about")}
              id="about"
            />
          </Field>
          <div className="button-row">
            <Link
              className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              to="/education">
              {"<"} Previous
            </Link>
          </div>
          <Button className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next {">"}</Button>
        </fieldset>
      </Form>
    </div>
  );
};
