import React, { useState } from "react";

const PatientForm = () => {
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!patientName.trim() || !email.trim()) {
      console.log("Both fields are required");
      return;
    }

    // Log values
    console.log({
      patientName,
      email,
    });

    // Reset fields
    setPatientName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Patient Name:</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientForm;