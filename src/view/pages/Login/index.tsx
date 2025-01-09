import { useState } from "react";
import { TextFieldType } from "../../../app/enum/TextField";
import useMessage from "../../../app/hooks/useMessage";
import Button from "../../components/Button";
import Message from "../../components/Messages";
import TextField from "../../components/TextField";

const Login = () => {
  const { messages } = useMessage();
  // const { login } = useAuthentication();
  // const navigate = useNavigate();

  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  //#region login
  const handleOnEmailChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setEmail(value);
  };

  const handleOnPasswordChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setPassword(value);
  };

  const handleLogin = async () => {
    // try {
    //   if (!email || !password) return;
    //   clearMessages();
    //   const response = await loginWithEmailAndPassword(email, password);
    //   login({ ...response, permissions: [] });
    //   navigate('/arealogada');
    // } catch (error) {
    //   console.error(error);
    // }
  };
  //#endregion

  return (
    <div className="flex flex-wrap justify-center items-center h-full">
      <div className="flex flex-wrap bg-white p-8 rounded-lg shadow-lg w-full max-w-md gap-8">
        <h2 className="w-full text-2xl font-bold mb-6 text-center">Login</h2>
        <Message messages={messages} />
        <TextField
          id="email"
          label="Email"
          type={TextFieldType.Email}
          placeholder="Informe seu email"
          value={email || ""}
          onChange={handleOnEmailChange}
        />
        <TextField
          id="password"
          label="Senha"
          type={TextFieldType.Password}
          placeholder="Informe sua senha"
          value={password || ""}
          onChange={handleOnPasswordChange}
        />
        <div className="w-full flex items-center justify-end">
          <Button onClick={handleLogin} label="Entrar" />
        </div>
      </div>
    </div>
  );
};

export default Login;
