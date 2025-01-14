
const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-sec text-white">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p>If you would like to work together or ask questions, feel free to reach out!</p>
      <form className="mt-4">
        <input type="text" placeholder="Your Name" className="p-2 w-full mb-4" />
        <input type="email" placeholder="Your Email" className="p-2 w-full mb-4" />
        <textarea placeholder="Your Message" className="p-2 w-full mb-4"></textarea>
        <button type="submit" className="bg-sec1 text-white p-2 w-full">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
