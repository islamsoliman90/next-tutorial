import React from "react";

export default async function getAllUsers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!data.ok) throw new Error("No users found");
  return data.json();
}
