import { useCallback, useMemo, useRef, useState } from "react";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const emailLength = useMemo(() => {
    console.log("Executou");
    return email.length * 1000;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <label>
          <span>Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" ? inputPasswordRef.current?.focus() : undefined
            }
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            ref={inputPasswordRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  );
};
