import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-8 gap-8">
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <div className="w-16 h-1 bg-blue-500 my-2 mx-auto md:mx-0"></div>
        <p className="text-gray-600 max-w-sm">
          Feel free to reach out to us for any inquiries or support. We’re here to help and will get back to you as soon as possible. You can contact us via email, phone, or by filling out the form below. We look forward to hearing from you!
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">READ MORE</button>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', phone: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <label className="block text-gray-700">Name <span className="text-red-500">*</span></label>
              <div className="flex gap-2">
                <Field name="firstName" placeholder="First Name" className="w-1/2 p-2 border rounded-lg" />
                <Field name="lastName" placeholder="Last Name" className="w-1/2 p-2 border rounded-lg" />
              </div>
              <label className="block text-gray-700">Email <span className="text-red-500">*</span></label>
              <Field name="email" placeholder="Email" className="w-full p-2 border rounded-lg" />
              <label className="block text-gray-700">Phone <span className="text-red-500">*</span></label>
              <Field name="phone" placeholder="Phone" className="w-full p-2 border rounded-lg" />
              <label className="block text-gray-700">Comment or Message <span className="text-red-500">*</span></label>
              <Field as="textarea" name="message" placeholder="Message" className="w-full p-2 border rounded-lg h-24" />
              <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
