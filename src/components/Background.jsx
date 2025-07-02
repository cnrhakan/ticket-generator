function Background(props) {
  return (
    <div
      className=" relative min-h-screen flex flex-col items-center bg-cover bg-no-repeat bg-center pb-12"
      style={{ backgroundImage: 'url("/images/background-desktop.png")' }}
    >
      <div
        className="absolute bg-cover bg-no-repeat bg-center top-10 right-0 w-84 h-64 "
        style={{
          backgroundImage: 'url("/images/pattern-squiggly-line-top.svg")',
        }}
      ></div>
      <div
        className="absolute bg-cover bg-no-repeat bg-center bottom-0 left-0 w-164 h-84 "
        style={{
          backgroundImage:
            'url("/images/pattern-squiggly-line-bottom-desktop.svg")',
        }}
      ></div>
      <div className="z-10 max-w-[75%] mx-auto">{props.children}</div>
    </div>
  );
}

export default Background;
