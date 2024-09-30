export const Form = () => {
  return (
    <form>
      {/* <form ref={form} onSubmit={sendEmail}> */}
      <label htmlFor="#name">name</label>
      <input
        type="text"
        name="from_name"
        id="name"
        // value={formValues.from_name}
        // onChange={changeHandler}
      />
      <label htmlFor="#email">email</label>
      <input
        type="email"
        name="from_email"
        id="email"
        // value={formValues.email}
        // onChange={changeHandler}
      />
      <label htmlFor="#message">message</label>
      <input
        type="text"
        name="message"
        id="message"
        // value={formValues.message}
        // onChange={(e) => changeHandler(e)}
      />
      <button type="submit">send</button>
    </form>
  );
};
