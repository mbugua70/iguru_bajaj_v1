import ParentRouter from "./components/parentrouter";

import { DataProvider } from "./context_offline/offline_context";

const App = () => {
  return (
    <>
      {/* for importing parentRouter component below */}
      <DataProvider>
        <ParentRouter />
      </DataProvider>
    </>
  );
};

export default App;
