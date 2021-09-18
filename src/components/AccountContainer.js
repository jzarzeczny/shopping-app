import React from "react";

export default function AccountContainer({ img, children }) {
  return (
    <main className="login__container">
      <img src={img} alt={img} />
      <section className="login__section">{children}</section>
    </main>
  );
}
