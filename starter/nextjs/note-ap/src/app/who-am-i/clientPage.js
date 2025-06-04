"use client";

import updateUsername from "./updateUsername";

export default function ClientWhoAmIPage({ id, children }) {
  return (
    <div>
      {children}
      <form action={updateUsername}>
        <h2>Enter new username</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="hidden" name="id" value={id} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
