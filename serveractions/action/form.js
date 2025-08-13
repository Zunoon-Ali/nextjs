"use server";

import fs from "fs/promises";

export const submitAction = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const address = formData.get("address");

  console.log(name, email, phone, address);

  await fs.writeFile(
    "test.txt",
    `Name is ${name}, Email is ${email}, Phone is ${phone}, Address is ${address}\n`,
    { flag: "a" } // Append instead of overwrite
  );
};
