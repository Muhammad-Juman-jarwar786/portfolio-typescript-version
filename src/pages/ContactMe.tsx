import { useFormik } from 'formik';
// import { useRef, useState } from 'react';
import '../components/Button.css';
import { ContactFormSchema } from '../validations/YupValidations';

const ContactMe = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      description: '',
    },
    validationSchema: ContactFormSchema,
    onSubmit: (values) => {
      formik.resetForm();
      console.log(values);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#050816]">
      <div className="bg-[#100D25] p-8 rounded-lg shadow-lg  mt-28 md:mt-0">
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-4 w-[80vw] lg:w-[40vw]"
        >
          <div className="pt-5">
            <label htmlFor="name" className="block text-lg font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What's your good name?"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-4 mt-4 bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 outline-none rounded-md shadow-sm "
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 italic">{formik.errors.name}</p>
            )}
          </div>
          <div className="pt-5">
            <label htmlFor="name" className="block text-lg font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="xyz@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-4 mt-4 bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 outline-none rounded-md shadow-sm "
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 italic">{formik.errors.email}</p>
            )}
          </div>
          <div className="pt-5">
            <label htmlFor="name" className="block text-lg font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="xyz@gmail.com"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-4 mt-4 bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 outline-none rounded-md shadow-sm "
            />
            {formik.touched.subject && formik.errors.subject && (
              <p className="text-red-500 italic">{formik.errors.subject}</p>
            )}
          </div>
          <div className="pt-5">
            <label
              htmlFor="description"
              className="block text-lg font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Description goes here"
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-4 mt-4 outline-none bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 italic">{formik.errors.description}</p>
            )}
          </div>
          <button
            type="submit"
            className="btnSignIn bg-[#151030] hover: drop-shadow-lg text-slate-50 font-bold text-lg transition-all duration-500 hover:scale-105 py-2 px-4 rounded-md shadow-md hover:bg-[#151040] mt-5"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
