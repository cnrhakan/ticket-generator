import { useRef } from "react";
import FormInput from "./FormInput";
import Ticket from "./Ticket";
import { useFormik } from "formik";
import * as yup from "yup";

function Form({ userData, setUserData, setShowTicket, showTicket }) {
  const validationSchema = yup.object({
    fileInfo: yup
      .mixed()
      .required("File is required")
      .test(
        "fileSize",
        "File too large, please upload a photo under 500KB",
        (value) => {
          return value && value.size <= 500 * 1024;
        }
      ),
    userInfo: yup.string().required("Name is required"),
    emailInfo: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    githubInfo: yup.string().required("GitHub is required"),
  });

  const formik = useFormik({
    initialValues: userData,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUserData(values);
      setShowTicket(true);
      console.log(userData, values);
    },
  });
  const fileInputRef = useRef();

  const removeImageButton = (event) => {
    event.preventDefault();
    formik.setFieldValue("fileInfo", null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const changeImageButton = (event) => {
    event.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
      fileInputRef.current.click();
    }
  };

  return (
    <>
      {showTicket ? (
        <Ticket userData={userData} values={formik.values} />
      ) : (
        <form
          className="flex flex-col max-w-[75%] mx-auto"
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="upload-avatar" className="font-bold text-white mb-1">
            Upload Avatar
          </label>

          <input
            type="file"
            id="upload-avatar"
            name="fileInfo"
            className="hidden"
            ref={fileInputRef}
            onChange={(e) => {
              const file = e.currentTarget.files[0];
              formik.setFieldValue("fileInfo", file);
            }}
          />

          {formik.values.fileInfo ? (
            <div className="cursor-pointer flex flex-col items-center justify-center h-[8rem] border border-dashed rounded-xl bg-purple-950 text-neutral-500 px-4 py-2 gap-2">
              <img
                src={URL.createObjectURL(formik.values.fileInfo)}
                alt="Uploaded Avatar"
                className="border border-neutral-500 rounded-xl bg-neutral-200 h-16 w-16 object-cover"
              />
              <div className="flex justify-center gap-2">
                <button
                  className="text-sm text-neutral-200 hover:text-white rounded-md px-3 py-1 bg-neutral-500 cursor-pointer"
                  onClick={removeImageButton}
                >
                  Remove image
                </button>
                <button
                  className="text-sm text-neutral-200 hover:text-white rounded-md px-3 py-1 bg-neutral-500 cursor-pointer"
                  onClick={changeImageButton}
                >
                  Change image
                </button>
              </div>
            </div>
          ) : (
            <label
              htmlFor="upload-avatar"
              className="cursor-pointer flex flex-col items-center justify-center h-[8rem] border border-dashed rounded-xl bg-purple-950 text-neutral-500 px-4 py-2 gap-2"
            >
              <img
                src="/images/icon-upload.svg"
                className="p-3 border border-neutral-500 rounded-xl bg-neutral-300  h-16 w-16"
                alt="Upload Icon"
              />
              <p className="text-sm">Drag and drop or click to upload</p>
            </label>
          )}

          <div className="flex items-center gap-2 mb-3">
            <span>
              <img src="/images/icon-info.svg" alt="" />
            </span>{" "}
            <span className="text-neutral-500">
              Upload your photo (JPH,or PNG, max size: 500KB).
            </span>
          </div>
          {formik.errors.fileInfo && formik.touched.fileInfo && (
            <p className="text-red-500">{formik.errors.fileInfo}</p>
          )}
          <FormInput
            label="Full Name"
            type="text"
            name="userInfo"
            value={formik.values.userInfo}
            onChange={formik.handleChange}
            error={formik.errors.userInfo}
            touched={formik.touched.userInfo}
          />
          <FormInput
            label="Email address"
            type="email"
            name="emailInfo"
            value={formik.values.emailInfo}
            onChange={formik.handleChange}
            error={formik.errors.emailInfo}
            touched={formik.touched.emailInfo}
          />
          <FormInput
            label="GitHub username"
            type="text"
            name="githubInfo"
            value={formik.values.githubInfo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.githubInfo}
            touched={formik.touched.githubInfo}
          />
          <button className="cursor-pointer bg-orange-500 text-purple-950 p-3 rounded-xl font-bold">
            Generate My Ticket
          </button>
        </form>
      )}
    </>
  );
}

export default Form;
