import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const InvoicePDF = dynamic(() => import("./Preview"), {
  ssr: false,
})

const View = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, [])

  return ( 
    <div>
      <InvoicePDF />
    </div>
  );
}
 
export default View;