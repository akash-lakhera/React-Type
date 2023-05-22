import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Auth(props: any) {
  const nav = useNavigate();
  let user = localStorage.getItem("name");
  console.log(user);
  console.log(user != "");
  let display: any = props.children;
 
  useEffect(() => {
    if (user != "") {
      display = props.children;
    } else {
      nav("/", { replace: true });
    }

    return () => {};
  }, []);

  return <>{display}</>;
}
export default Auth;
