import usePurchases from './src/hooks/usePurchases';
import AppNav from './src/navigation/AppNav';
import { PurchasesContext } from './src/context/PurchasesContext';
export default function App() {
  const { data, loading } = usePurchases();
  return (
    <PurchasesContext.Provider value={{ data, loading }}>
      <AppNav></AppNav>
    </PurchasesContext.Provider>
  );
}
