import { FaUserPlus } from "react-icons/fa";
import { MdListAlt } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const HowItWorks = () => {
    const steps = [
      {
        id: 1,
        icon: <FaUserPlus className="text-lime-500 w-12 h-12 mb-4" />,
        title: "Sign Up",
        description: "Create an account and join the community.",
      },
      {
        id: 2,
        icon: <MdListAlt className="text-lime-500 w-12 h-12 mb-4" />,
        title: "List Items",
        description: "Donate items you no longer need to others.",
      },
      {
        id: 3,
        icon: <AiOutlineSearch className="text-lime-500 w-12 h-12 mb-4" />,
        title: "Browse",
        description: "Find what you need from your local community.",
      },
    ];
  
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-800 w-[90%] rounded-lg shadow-xl mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-textPrimary-light dark:text-textPrimary-dark">
          How Ripple Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg"
            >
              {step.icon}
              <h3 className="text-lg font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HowItWorks;