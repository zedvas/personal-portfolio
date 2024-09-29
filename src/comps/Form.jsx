export const Form = () => {
  return (
    <form>
      {/* <form ref={form} onSubmit={sendEmail}> */}

      <input
        type="text"
        name="from_name"
        placeholder="name"
        // value={formValues.from_name}
        // onChange={changeHandler}
      />
      <input
        type="email"
        name="from_email"
        placeholder="email"
        // value={formValues.email}
        // onChange={changeHandler}
      />
      <input
        type="text"
        name="message"
        placeholder="message"
        // value={formValues.message}
        // onChange={(e) => changeHandler(e)}
      />
      <button type="submit">submit</button>
    </form>
  );
};
