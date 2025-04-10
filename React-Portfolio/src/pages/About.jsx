import profilePic from '../images/profile.jpg';

export default function About() {
  return (
    <section className="flex">
      {/* Left Content */}
      <div className="w-1/2 h-full p-8 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold mb-6">Hello, I'm Daniel Gonzalez</h2>
        <p className="text-xl">
          I'm a web developer passionate about building beautiful and
          responsive user interfaces. With a keen eye for design and a love
          for coding, I strive to create seamless and engaging user
          experiences.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-1/2">
        <img
          src={profilePic}
          alt="Profile"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </section>
  );
}
