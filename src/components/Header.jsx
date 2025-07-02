function Header({ userData, showTicket }) {
  return (
    <div className="mt-8 mb-8 flex flex-col items-center">
      <span className="mb-8">
        <img src="/images/logo-full.svg" alt="" />
      </span>

      {!showTicket ? (
        <>
          <h1 className="text-neutral-50 text-center font-bold text-4xl tracking-wider mb-5">
            Your Journey to Coding Conf <br /> 2025 Starts Here!
          </h1>
          <p className="text-neutral-400">
            Secure your spot at next year's biggest coding conference.
          </p>
        </>
      ) : (
        <>
          <h1
            className="text-neutral-50 text-center font-bold text-4xl tracking-wider mb-5"
            style={{ maxWidth: "25ch" }}
          >
            Congrats,{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))",
              }}
            >
              {userData.userInfo}
            </span>
            !
            <br />
            Your ticket is ready.
          </h1>
          <p className="text-neutral-400">
            We've emailed your ticket to{" "}
            <span className="text-orange-500"> {userData.emailInfo} </span>and
            will send updates in the run up to the event.
          </p>
        </>
      )}
    </div>
  );
}

export default Header;
