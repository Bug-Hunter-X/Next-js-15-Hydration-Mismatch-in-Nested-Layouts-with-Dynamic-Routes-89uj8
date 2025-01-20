// bugSolution.js
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';

function MyLayout({ children }) {
  const pathname = usePathname();
  // ... existing layout code
  return (
    <div>
      <h1>Layout for {pathname}</h1>
      {children}
    </div>
  );
}

export default function Page() {
  const pathname = usePathname();
  // Fetching data based on pathname, for example
  const data = fetchData(pathname);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MyLayout>
        <ChildComponent data={data} />
      </MyLayout>
    </Suspense>
  );
}

function ChildComponent({ data }) {
  // Now the child component always re-renders whenever data changes
  return <p>Child Component data: {JSON.stringify(data)}</p>;
}

function fetchData(pathname) {
  // Simulate fetching data based on the pathname
  // ... (replace with your actual data fetching logic)
  const data = { path: pathname };
  return data;
}
