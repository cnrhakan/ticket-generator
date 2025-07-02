function Ticket({ userData }) {
  return (
    <div className="mt-10 p-3 relative">
      <img src="/images/pattern-ticket.svg" className="w-full" />

      <img
        src="/images/logo-full.svg"
        alt=""
        className="absolute top-10 left-10"
      />
      <p className="text-neutral-300 absolute top-20 left-10 text-xl">
        {userData.date}
      </p>

      <div className="flex gap-4 absolute bottom-8 left-10">
        <img src={userData.fileInfo} alt="" className="w-20 h-20 rounded-xl" />
        <div className="mb-2 flex flex-col justify-end">
          <p className="text-neutral-50 text-2xl ">{userData.userInfo}</p>
          <div className="flex gap-1">
            <img
              src="/images/icon-github.svg"
              alt=""
              className="text-neutral-300 "
            />
            <span className="text-neutral-300 text-xl ">
              {userData.githubInfo}
            </span>
          </div>
        </div>
      </div>
      <p
        className="absolute  top-1/2 -translate-y-1/2  right-16 text-neutral-300"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        #
        {userData.date.split(".").map((e, index) => {
          return <span key={index}>{e}</span>;
        })}
      </p>
    </div>
  );
}
export default Ticket;
