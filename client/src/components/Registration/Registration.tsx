import "./login.css";
export default function Registration() {
  return (
    <form className="form absolute">
      <h1 className=" text-center font-semibold text-gray-600 text-2xl">
        Login
      </h1>
      <div className="flex">
        <label>
          <input required placeholder="" type="text" className="input" />
          <span>first name</span>
        </label>

        <label>
          <input required placeholder="" type="text" className="input" />
          <span>last name</span>
        </label>
      </div>

      <label>
        <input required placeholder="" type="email" className="input" />
        <span>email</span>
      </label>

      <label>
        <input required placeholder="" type="password" className="input" />
        <span>password</span>
      </label>
      <label>
        <input required placeholder="" type="password" className="input" />
        <span>confirm password</span>
      </label>

      <button className="fancy">
        <span className="top-key"></span>
        <span className="text">submit</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>
  );
}
