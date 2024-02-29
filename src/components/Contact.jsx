import { FaInstagram, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import { useFormik } from "formik";
import * as yup from "yup";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  function handleSend() {
    sendEmail();
  }

  const sendEmail = () => {
    emailjs
      .sendForm("service_0wb6a86", "template_eksqvlq", form.current, {
        publicKey: "kocGDdZ1CngtijpfM",
      })
      .then(
        () => {
          formik.resetForm();
          Swal.fire({
            title: "Success",
            text: "The message has been successfully sent.",
            icon: "success",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Sorry",
            text: "Something went wrong, try again later !",
          });
          console.log("FAILED...", error.text);
        },
      );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: handleSend,
    validationSchema: yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().required(),
    }),
  });

  const handleForm = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <>
      <section
        id="contact"
        className="contact flex h-full w-full flex-col justify-between px-6 py-10 dark:bg-slate-900 md:px-32 lg:flex-row lg:gap-x-32"
      >
        <div className="top flex flex-col items-start gap-y-3 lg:basis-6/12 lg:items-start lg:gap-y-10">
          <h1 className="border-b-2 border-b-primary p-1 text-center text-base font-bold dark:text-white lg:text-lg">
            CONTACT
          </h1>
          <p className="flex items-center text-xs dark:text-white lg:text-left lg:text-base">
            <IoMail className="mr-3" />
            iamenitiesofficial@gmail.com
          </p>
          <p className="flex items-center text-xs dark:text-white lg:text-left lg:text-base">
            <FaPhoneAlt className="mr-3" />
            +6281123123123
          </p>
          <p className="flex items-center text-xs dark:text-white lg:text-left lg:text-base">
            <FaLocationDot className="mr-3" />
            Jl. Tentara Pelajar, Kelurahan Wirasana, Purbalingga, Jawa Tengah
          </p>
          <div className="social-media flex gap-x-4">
            <FaFacebook className="h-5 w-5 cursor-pointer text-[#0566FF] transition-all duration-200 hover:opacity-70 lg:h-8 lg:w-8" />
            <FaInstagram className="h-5 w-5 cursor-pointer text-[#E4405F] transition-all duration-200 hover:opacity-70 lg:h-8 lg:w-8" />
          </div>
        </div>
        <hr className="my-5 lg:m-0 lg:hidden" />
        <div className="bottom lg:basis-6/12">
          <form
            ref={form}
            action=""
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-y-3"
          >
            <label htmlFor="name" className="flex flex-col">
              <span className="mb-2 text-xs dark:text-white lg:text-sm">
                Name
              </span>
              <input
                className="input-form bg-white text-xs focus:outline-none dark:bg-opacity-20 dark:text-white lg:text-sm"
                name="name"
                id="name"
                autoComplete="off"
                value={formik.values.name || ""}
                onChange={handleForm}
              />
              {formik.errors.name ? (
                <span className="p-1 text-xs text-red-500">
                  {formik.errors.name}
                </span>
              ) : null}
            </label>
            <label htmlFor="email" className="flex flex-col">
              <span className="mb-2 text-xs dark:text-white lg:text-sm">
                Email
              </span>
              <input
                className="input-form bg-white text-xs focus:outline-none dark:bg-opacity-20 dark:text-white lg:text-sm"
                name="email"
                id="email"
                value={formik.values.email || ""}
                autoComplete="off"
                onChange={handleForm}
              />
              {formik.errors.email ? (
                <span className="p-1 text-xs text-red-500">
                  {formik.errors.email}
                </span>
              ) : null}
            </label>
            <label htmlFor="email" className="flex flex-col">
              <span className="mb-2 text-xs dark:text-white lg:text-sm">
                Message
              </span>
              <textarea
                className="rounded-lg border-2 border-primary bg-white p-3 text-xs focus:outline-none dark:bg-opacity-20 dark:text-white lg:text-sm"
                name="message"
                id="message"
                value={formik.values.message || ""}
                cols="30"
                rows="10"
                onChange={handleForm}
              />
              {formik.errors.message ? (
                <span className="p-1 text-xs text-red-500">
                  {formik.errors.message}
                </span>
              ) : null}
            </label>
            <button
              type="submit"
              href=""
              className="btn mx-auto flex h-8 w-20 items-center justify-center rounded-full border-primary bg-primary transition-all duration-150 hover:opacity-80"
            >
              <span className="text-xs font-bold text-white lg:text-sm">
                Send
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
