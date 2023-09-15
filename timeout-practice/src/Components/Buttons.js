const Buttons = ({ start, status, pause, resume, reset }) => {
  return (
    <div className="buttons">
      {status === 0 && <button onClick={start}>start</button>}
      {status === 1 && (
        <>
          <button onClick={pause}>pause</button>
          <button onClick={reset}>reset</button>
        </>
      )}

      {status === 2 && (
        <>
          <button onClick={resume}>resume</button>
          <button onClick={reset}>reset</button>
        </>
      )}
    </div>
  );
};

export default Buttons;
