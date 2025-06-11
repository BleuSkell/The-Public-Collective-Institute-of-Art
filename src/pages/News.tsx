import { useState } from "react";

function News() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Naam is verplicht.";
    }

    if (!email.trim()) {
      newErrors.email = "E-mailadres is verplicht.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Ongeldig e-mailadres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Aanmelding verstuurd:", { name, email });
      setSubmitted(true);
      setName("");
      setEmail("");
      setErrors({});
    }
  };

  return (
    <div>
      <h2>Nieuwsbrief Aanmelding</h2>

      {submitted && <p style={{ color: "green" }}>Bedankt voor je aanmelding!</p>}

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Naam:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>E-mailadres:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <button type="submit">Aanmelden</button>
      </form>
    </div>
  );
}

export default News;