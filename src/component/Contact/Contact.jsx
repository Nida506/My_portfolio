import { AiOutlineDownload } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdArrowRoundForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const submitHandler = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      if (name && email && subject && message) {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    }, 1000);
  };
  return (
    <>
      {showToast && (
        <div className="toast toast-center toast-top border-none">
          <div
            className={`alert alert-info border-none ${
              name && email && subject && message
                ? "bg-[#1ea71e]"
                : "bg-red-400"
            } text-white font-manrope font-semibold`}
          >
            <span>
              {name && email && subject && message
                ? "Message Sent.."
                : "Fill all fields.."}
            </span>
          </div>
        </div>
      )}
      <div className="bg-gradientColor1 py-10 w-full flex justify-center items-center ">
        <div className="w-[85vw]  flex max-[900px]:flex-col max-[900px]:w-full max-[900px]:items-center  justify-center">
          <div className="max-[900px]:w-full  w-[40vw]  max-[900px]:px-3 mb-5">
            <h1 className="text-5xl max-[900px]:text-3xl  font-tektur font-semibold max-[900px]:text-center text-start">
              Let's{" "}
              <span className="bg-gradient-to-r from-[#8800FF] to-[#FF00C1] bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="font-manrope  py-2 max-[900px]:text-center text-start">
              <span className="text-[#686868]">Contact me at</span>{" "}
              <a
                href="mailto:nidawaheed506@gmail.com"
                className="font-semibold cursor-pointer"
              >
                {" "}
                nidawaheed506@gmail.com
              </a>
            </p>
            <p className="font-manrope pb-2 max-[900px]:text-center text-start">
              <span className="text-[#686868]">For more info , here's my</span>{" "}
              <a
                href="/nida_Waheed_CV.pdf"
                download
                className="font-semibold cursor-pointer"
              >
                {" "}
                resume
              </a>
            </p>

            <div className="flex items-center gap-4 pt-2 max-[900px]:justify-center text-start">
              <a href="https://www.linkedin.com/in/nidawah" target="_blank">
                {" "}
                <IoLogoLinkedin className="text-3xl text-[#8800FF]" />
              </a>
              <a href="https://github.com/Nida506" target="_blank">
                {" "}
                <FaSquareGithub className="text-3xl text-[#8800FF]" />
              </a>
            </div>
          </div>

          <div className="w-[45vw] max-[900px]:w-full max-[900px]:px-5">
            <form className="font-manrope">
              <div className="flex flex-col gap-3">
                {" "}
                <label>Name</label>
                <input
                  placeholder="Enter your name here..."
                  type="text"
                  className="rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3 mt-2">
                {" "}
                <label>Email</label>
                <input
                  placeholder="Enter your email here..."
                  type="email"
                  className="rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3 mt-2">
                {" "}
                <label>Subject</label>
                <input
                  placeholder="Enter your subject here..."
                  type="text"
                  className="rounded"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3 mt-2">
                {" "}
                <label>Message</label>
                <textarea
                  placeholder="Enter your message here..."
                  type="text"
                  className="rounded"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </form>

            <div className="flex justify-center mt-3 lg:justify-start">
              <button
                onClick={submitHandler}
                className="flex  items-center mt-4 gap-1 font-semi text-white bg-gradient-to-r from-[#8800FF] to-[#FF00C1] px-4 py-3 rounded-full"
              >
                <span>SUBMIT</span>
                <span>
                  <IoMdArrowRoundForward />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
