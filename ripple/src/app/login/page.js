import LoginForm from "@/components/Users/Login";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="bg-transparent flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg min-h-[300px] p-6 bg-white dark:bg-border-dark rounded-lg shadow-lg">
        <h2 className="text-4xl font-Quicksand font-bold text-lime-500 mb-6 text-center">
          LOGIN
        </h2>
        <LoginForm />
        <p className="mt-4 text-center text-gray-700 dark:text-textPrimary-dark">
          Don’t have an account?{" "}
        </p>
        <Link href="/signup">
          <p className="text-lime-500 hover:underline text-center">Create Account</p>
        </Link>
        <p className="text-sm text-textSecondary-light text-center mt-10 dark:text-textSecondary-dark">By creating an account with ripple, you agree to our terms & conditions and privacy policy.</p>
      </div>
    </section>
  );
};

export default LoginPage;
