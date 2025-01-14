const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-sec text-white">
      <div className="max-w-lg mx-auto p-8  rounded-2xl border-2 border-transparent bg-clip-padding bg-gradient-to-tl from-[#B9C2EF] via-[#B9C2EF] to-transparent">
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-pry text-xs font-semibold">Your Email</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="w-full p-3 rounded-lg text-pry bg-transparent border border-[#414141] focus:outline-none focus:border-[#F28908] "
              placeholder="Your Email"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="textarea" className="text-pry text-xs font-semibold">Send me a message</label>
            <textarea
              name="textarea"
              id="textarea"
              rows={5}
              className="w-full p-3 rounded-lg text-pry bg-transparent border border-[#414141] focus:outline-none focus:border-[#F28908] "
              placeholder="Send me a message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-40 self-start mt-2 bg-sec text-white font-semibold p-3 rounded-md border hover:bg-white hover:text-pry hover:border-white transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
