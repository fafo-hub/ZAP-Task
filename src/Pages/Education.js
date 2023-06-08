import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms/Script";

export const Education = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/about");
  };

  return (
    <div>
      <Form className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" onSubmit={handleSubmit(saveData)}>
        <fieldset className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Field className="text-5xl" label="University">
            <div>
              <select
                className="mt-3 h-45 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("university", {
                  required: "University selection is required"
                })}
                id="university"
              >
                <option value="">Select an option</option>
                <option value="university1">OBAFEMI AWOLOWO UNIVERSITY</option>
                <option value="university2">UNIVERSITY OF IBADAN</option>
                <option value="university3">COVENENT UNIVERISTY</option>
                <option value="university4">UNIVERSITY OF LAGOS</option>
                <option value="university5">REDEEMERS UNIVERISTY</option>
              </select>
              {errors.university && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  {errors.university.message}
                </p>
              )}
            </div>
          </Field>
          <Field className="text-5xl" label="Degree">
            <div >
              <select
                className="h-95 mt-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("degree", {
                  required: "Degree selection is required"
                })}
                id="degree"
              >
                <option value="">Select an option</option>
                <option value="BSc">BSc</option>
                <option value="MSc">MSc</option>
                <option value="MBA">BMR:PT</option>
                <option value="BMR:PT">BMR:PT</option>
                <option value="MBCHB">MBCHB</option>
              </select>
              {errors.degree && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  {errors.degree.message}
                </p>
              )}
            </div>
          </Field>
          <legend className="sm:mx-auto sm:w-full sm:max-w-sm mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Education</legend>
          <div className="button-row">
            <Link
              className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              to="/">
              {"<"} Previous
            </Link>
          </div>
          <Button className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next {">"}</Button>
        </fieldset>
      </Form>
    </div>
  );
};
