import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
// import { useRef, useState } from 'react';
import "../components/Button.css";
import { ContactFormSchema } from "../validations/YupValidations";
import { useState } from "react";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      description: "",
    },
    validationSchema: ContactFormSchema,
    onSubmit: (values) => {
      setLoading(true);
      emailjs
        .send(
          "service_99f5gyk",
          "template_tsx4cso",
          values,
          "9w88iaI221xtgRlcq"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            formik.resetForm();
          },
          (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
          }
        );
      formik.resetForm();
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#050816] mt-10 lg:pt-28">
      <div className="bg-[#100D25] p-8 rounded-lg shadow-lg  mt-28 md:mt-0">
        <h2 className="text-3xl font-bold mb-4 text-center">Get in touch</h2>
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
            className="btnSignIn bg-[#050816]  hover: drop-shadow-2xl shadow-inner w-40 text-slate-50 font-bold text-lg transition-all duration-500 hover:scale-105 py-2 px-5 rounded-md  hover:bg-[#151040] mt-5"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
