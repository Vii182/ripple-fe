"use client"
import { useState } from "react";
import { addUser } from "../functions/api";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    area: "",
    email: "",
    avatar_url: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(formData)
      .then(() => {
        alert("Account Created Successfully! Please Login >.<");
        redirect("/login");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to create account. Please try again.");
      });
  };

  return (
    <section className="bg-transparent flex items-center justify-center h-screen px-4">
      <div className="w-full max-w-md p-6 bg-white dark:bg-border-dark rounded-lg shadow-lg">
        <h2 className="text-4xl font-Quicksand font-bold text-lime-500 mb-6 text-center">
          SIGN UP
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="area"
            placeholder="Location (e.g., Cambridge, UK)"
            value={formData.area}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="url"
            name="avatar_url"
            placeholder="Avatar URL"
            value={formData.avatar_url}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full p-2 bg-lime-500 text-white font-bold rounded-lg hover:bg-lime-600"
          >
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
