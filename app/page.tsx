import TodosList from "../components//TodosList";

const Home = () => {
  return (
    <>
      <p className="text-cyan-800 text-center">Task list</p>
      {/* @ts-ignore */}
      <TodosList />
    </>
  );
};

export default Home;
