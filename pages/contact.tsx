import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";
import { GetStaticProps, GetStaticPropsContext } from 'next';

export default function Contact() {

    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string().required('Your Name is required'),
        email: Yup.string().email('Invalid email address').required('Email Address is required'),
        message: Yup.string().required('Your Message is required'),
    });

    const exitModal = () => {
        setSubmitSuccess(false);
    }

    return (
        <div>
            <Navbar />
            <div>
                <div className="isolate overflow-hidden bg-gray-900">
                    <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="text-base font-semibold leading-7 text-indigo-400">Contact Us</h2>
                            <p className="mt-2 text-2xl lg:text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Have Questions? We&apos;re Here to Help!
                            </p>
                        </div>
                        <div className="relative mt-6">
                            <p className="mx-auto max-w-2xl text-base lg:text-lg leading-8 text-white">
                            Whether you&apos;re a student looking to build your portfolio, a freelancer seeking clients, or an agency ready to scale, we&apos;d love to hear from you.
                            </p>
                            <svg
                                viewBox="0 0 1208 1024"
                                className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
                            >
                                <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#blue-gradient)" />
                                <defs>
                                    <radialGradient id="blue-gradient">
                                        <stop stopColor="#4A90E2" />
                                        <stop offset={1} stopColor="#0066CC" />
                                    </radialGradient>
                                </defs>
                            </svg>

                        </div>
                    </div>
                    <div className="flow-root bg-white pb-24 sm:pb-32">
                        <div className="-mt-80">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-md p-8 bg-white rounded-3xl shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                                <h3 className="text-base font-semibold leading-7 text-[#1700ad]">Get in Touch</h3>
                                <Formik
                                initialValues={{ name: '', email: '', message: ''}}
                                validationSchema={validationSchema}
                                onSubmit={ async (values, { setSubmitting, resetForm }) => {
                                    console.log("Form values", values);
                                }}
                                >
                                {({ isSubmitting }) => (
                                    <Form className="mt-6 space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                        </label>
                                        <div className="mt-2">
                                        <Field
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            required
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                        </label>
                                        <div className="mt-2">
                                        <Field
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            required
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                        Message
                                        </label>
                                        <div className="mt-2">
                                        <Field
                                            as="textarea"
                                            name="message"
                                            id="message"
                                            rows="4"
                                            className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            required
                                        />
                                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="block w-full rounded-md bg-[#1700ad] px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Send Message'}
                                        </button>
                                    </div>
                                    </Form>
                                )}
                                </Formik>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
    return {
      props: {
        data: null,
      },
    };
  };