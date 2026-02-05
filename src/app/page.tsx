import { redirect } from "next/navigation";

function App() {
  const user = true;
  if (user) {
    redirect("/dashboard");
  }
  redirect("/auth/login");

  return <div>App</div>;
}

export default App;
