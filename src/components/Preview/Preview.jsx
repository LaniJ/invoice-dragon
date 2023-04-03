import styles from "./preview.module.scss";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from "react";

const PDF = ({ email, businessName, onPreviewToggle }) => {
  

  const styles = StyleSheet.create({
    body: {
      backgroundColor: 'lightgray'
    }
  })
  return ( 
    <Document
      author="Lani Juyi"
      keywords="invoice, receipt"
      subject={`${businessName} Invoice`}
      title="Invoice"
    >
      <Page size="A4" style={styles.body}>
        
        <View style={{display: 'flex', justifyContent: 'center'}}>
          <Text wrap={false}>
            Hello World!
            Goodbye my lover
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, ratione ipsa. Sed, suscipit labore? Accusantium voluptatum ullam sunt ducimus rem!
            this is a new line.....
          </Text>

          <Text>Invoice Template Preview</Text>
          {businessName && <Text>Biz name should be here --- {businessName}</Text>}
          {email && <Text>email should be here --- {email}</Text>}
        </View>
      </Page>
    </Document>
   );
}

const PDFView = ({ email, businessName, onPreviewToggle }) => {

  const toggleViews = () => {
    onPreviewToggle();
  }
  const saveInvoice = () => {
    console.log('saved');
  }

  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, [])
  
  return ( 
    <>
      <div className={styles.preview__wrapper}>
        <button onClick={toggleViews}>Edit</button>

        <h2>Invoice Template Preview</h2>
        <button onClick={saveInvoice}>Save to PDF</button>
      </div>
      
      <PDFViewer className={styles.full}>
        <PDF email={email} businessName={businessName}></PDF>
      </PDFViewer>
    </>
   );
}
 
export default PDFView;
// export default PDF;