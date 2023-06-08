import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Button, Form, Section, SectionRow } from "../Forms/Script";
import { useNavigate, Link } from "react-router-dom";

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const submitData = (data) => {
    if (Object.keys(data).length === 0) {
      console.log("empty");
    } else {
      navigate("/success");
      console.log("something dy");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
      <Form onSubmit={handleSubmit(submitData)}>
        <div className="container mx-auto lex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">User Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-bold">First Name</label>
                <p className="border border-gray-300 p-2 rounded">{state.firstName ? state.firstName : 'Nil'}</p>
              </div>
              <div>
                <label className="font-bold">Last Name</label>
                <p className="border border-gray-300 p-2 rounded">{state.lastName ? state.lastName : 'Nil'}</p>
              </div>
              <div>
                <label className="font-bold">Email</label>
                <p className="border border-gray-300 p-2 rounded">{state.email ? state.email : 'Nil'}</p>
              </div>
              <div>
                <label className="font-bold">University</label>
                <p className="border border-gray-300 p-2 rounded">{state.university ? state.university : 'Nil'}</p>
              </div>
              <div>
                <label className="font-bold">Degree</label>
                <p className="border border-gray-300 p-2 rounded">{state.degree ? state.degree : 'Nil'}</p>
              </div>
              <div>
                <label className="font-bold">About</label>
                <p className="border border-gray-300 p-2 rounded">{state.about ? state.about : 'Nil'}</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Button className="mt-5 flex items-center justify-center rounded-md bg-indigo-600 px-32 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</Button>
              <Link
                className="mt-5 flex items-center justify-center rounded-md bg-indigo-600 px-36 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                to="/about">
                {"<"} Go Back
              </Link>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
