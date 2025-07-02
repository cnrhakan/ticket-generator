import { useRef } from "react";
import FormInput from "./FormInput";
import Ticket from "./Ticket";

function Form({ userData, setUserData, generateTicket, showTicket }) {
  const fileInputRef = useRef();
  const getUserData = (event, type) => {
    if (type === "file") {
      setUserData((prev) => ({
        ...prev,
        [event.target.name]: URL.createObjectURL(event.target.files[0]),
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const removeImageButton = (event) => {
    event.preventDefault();
    setUserData((prev) => ({ ...prev, fileInfo: "" }));
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
        <Ticket userData={userData} />
      ) : (
        <form
          className="flex flex-col max-w-[75%] mx-auto"
          onSubmit={generateTicket}
        >
          <label htmlFor="upload-avatar" className="font-bold text-white mb-1">
            Upload Avatar
          </label>

          <input
            type="file"
            id="upload-avatar"
            className="hidden"
            name="fileInfo"
            ref={fileInputRef}
            onChange={(e) => getUserData(e, "file")}
          />

          {userData.fileInfo ? (
            <div className="cursor-pointer flex flex-col items-center justify-center h-[8rem] border border-dashed rounded-xl bg-purple-950 text-neutral-500 px-4 py-2 gap-2">
              <img
                src={userData.fileInfo}
                className="border border-neutral-500 rounded-xl bg-neutral-200 h-16 w-16 object-cover"
                alt="Uploaded Avatar"
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
          <FormInput
            label="Full Name"
            type="text"
            onChange={(e) => getUserData(e, "text")}
            name="userInfo"
          ></FormInput>
          <FormInput
            label="Email Address"
            type="email"
            name="emailInfo"
            onChange={(e) => getUserData(e, "email")}
          ></FormInput>
          <FormInput
            label="GitHub username"
            type="text"
            name="githubInfo"
            onChange={(e) => getUserData(e, "text")}
          ></FormInput>
          <button className="cursor-pointer bg-orange-500 text-purple-950 p-3 rounded-xl font-bold">
            Generate My Ticket
          </button>
        </form>
      )}
    </>
  );
}

export default Form;
