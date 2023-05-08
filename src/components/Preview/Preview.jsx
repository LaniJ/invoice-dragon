import styles from "./preview.module.scss";
import { Document, Page, Text, Image, View, StyleSheet, Font, PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from "react";

const PDF = ({ rows, currencySymbol, formName, logo, email, businessName, address, city, zipcode, phone, owner, clientName, clientEmail, clientAddress, clientCity, clientZipcode, clientPhone, date, InvoiceNo, clientWebsite, notes }) => {
  
  // Register fonts

  Font.register({
    family: 'League',
    src: "/assets/LeagueSpartan-Bold.ttf",
  });

  Font.register({
    family: 'Garet',
    src: "/assets/Garet-Book.ttf",
  });

  Font.register({
    family: 'Garet-Heavy',
    src: "/assets/Garet-Heavy.ttf",
  });

  const styles = StyleSheet.create({
    body: {
      // backgroundColor: 'lightgray',
      backgroundColor: '#FCFBF8',
      padding: 40,
      color:'#5d5955',
      fontFamily: 'Garet'
    },
    invoice_group: {
      flexGrow: 1
    },
    section: {
      // margin: 10,
      display: 'flex',
      flexDirection: 'row-reverse',
      padding: 10,
      flexGrow: 1,
      borderBottom: '0.5px solid #000000'
    },
    header_details: {
      paddingRight: '25'
    },
    bizName: {
      fontSize: '30px',
      fontFamily: 'League',
    },
    invoice_body: {
      marginBottom: 20
    },
    font: {
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: 1
    },
    invoice__details: {
      margin: '20px 0',
      fontFamily: 'Garet-Heavy'
    },
    invoice_header: {
      // display: 'flex',
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '20px',
      marginBottom: '20px',
      fontFamily: 'Garet-Heavy',
    },
    table_header: {
      fontSize: '12px',
      textTransform: 'uppercase',
    },
    item: {
      fontSize: '12px'
    },
    invoice_items: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '20px 0',
      fontSize: '18px',
    },
    total_section: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '0.5px solid #000000',
      borderBottom: '0.5px solid #000000',
      paddingTop: 20,
      paddingBottom: 20,
    },
    total_amount: {
      fontSize: '24px'
    },
    sub: {
      flexGrow: 1,
      flexDirection: 'row',
    },
    sub_section: {
      marginRight: '30'
    },
    des__group: {
      width: '55%',
      textAlign: 'left',
    },
    notes: {
      marginTop: 10,
      marginBottom: 30,
      fontSize: '10px',
      color:'#5d5955'
    },
    footer: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 50,
    }
    // template 3
    
  })


  const calculateTotal = () => {
    let sum = 0;
    rows.forEach(row => {
      sum += parseFloat(row.amount);
    })
    return sum.toFixed(2);
  }

  return ( 
    <Document
      author="Lani Juyi"
      keywords="invoice, receipt"
      subject={`${businessName} Invoice`}
      title="Invoice"
    >
      <Page size="A4" style={styles.body}>
        
        <View style={{display: 'flex', justifyContent: 'center'}}>
          {/* <Text wrap={false}>
            Hello World!
            Goodbye my lover
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, ratione ipsa. Sed, suscipit labore? Accusantium voluptatum ullam sunt ducimus rem!
            this is a new line.....
          </Text> */}

          {/* <Text>Invoice Template Preview</Text> */}
          <View style={styles.section}>
            <View style={styles.header_details}>
              {businessName && <Text style={styles.bizName}>{businessName}</Text>}

              <View style={styles.invoice__details}>
                {InvoiceNo && <Text style={styles.font}>Invoice No. {InvoiceNo}</Text>}
                <Text style={styles.font}>{date}</Text>
              </View>

              <Text style={styles.font}>Billed To:</Text>
              {clientName && <Text style={styles.font}>{clientName}</Text>}
              {clientAddress && <Text style={styles.font}>{clientAddress}</Text>}
              <Text style={styles.font}>{clientCity} {clientZipcode}</Text>
            </View>
          </View>
          <View style={styles.invoice_group}>
            <View style={styles.invoice_body}>
              <View style={styles.invoice_header}>
                <Text style={[styles.table_header, {width: '55%'}]}>DESCRIPTION</Text>
                <Text style={[styles.table_header, {width: '15%', textAlign: 'center'}]}>PRICE</Text>
                <Text style={[styles.table_header, {width: '15%', textAlign: 'center'}]}>QTY</Text>
                <Text style={[styles.table_header, {width: '15%', textAlign: 'right'}]}>AMOUNT</Text>
              </View>

              {rows.map(({ id, description, details, rate, quantity, amount }) => (
                <View style={styles.invoice_items} key={id}>
                  <View style={styles.des__group}>
                    <Text style={[styles.item, { marginBottom: '10', fontSize: '14' }]}>{description}</Text>
                    <Text style={{fontSize: '10', opacity: 0.7, width: '95%'}}>{details}</Text>
                  </View>
                  <Text style={[styles.item, {width: '15%', textAlign: 'center'}]}>{currencySymbol}{rate}</Text>
                  <Text style={[styles.item, {width: '15%', textAlign: 'center'}]}>{quantity}</Text>
                  <Text style={[styles.item, {width: '15%', textAlign: 'right'}]}>{currencySymbol}{amount}</Text>
                </View>
              ))}
            </View>
            <View style={styles.total_section}>
              {/* <View style={styles.sub}>
                <View style={styles.sub_section}>
                  <Text style={styles.table_header}>SUBTOTAL</Text>
                  <Text style={styles.item}>$500.00</Text>
                </View>
                <View>
                  <Text style={styles.table_header}>VAT</Text>
                  <Text style={styles.item}>$50.00</Text>
                </View>
              </View> */}
              {/* <View style={styles.total}> */}
                <Text style={styles.table_header}>TOTAL</Text>
                <Text style={styles.total_amount}>{currencySymbol}{calculateTotal()}</Text>
              {/* </View> */}
            </View>
            <Text style={styles.notes}>{notes}</Text>
            <View style={styles.footer}>
              <Text style={styles.item}>{owner}</Text>
              <Text style={styles.item}>____________________________</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
   );
}

const PDFView = ({ rows, currencySymbol, formName, logo, email, businessName, address, city, zipcode, phone, owner, clientName, clientAddress, clientEmail, clientCity, clientZipcode, clientPhone, date, InvoiceNo, clientWebsite, notes }) => {

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

        <h2>Invoice Template Preview</h2>
        <button onClick={saveInvoice}>Save to PDF</button>
      </div>
      
      <PDFViewer className={styles.full}>
        <PDF 
          rows={rows}
          email={email} 
          businessName={businessName}
          formName={formName}
          logo={logo}
          address={address}
          city={city}
          zipcode={zipcode}
          phone={phone}
          owner={owner}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          clientCity={clientCity}
          clientZipcode={clientZipcode}
          clientPhone={clientPhone}
          date={date}
          InvoiceNo={InvoiceNo}
          clientWebsite={clientWebsite}
          notes={notes}
          currencySymbol={currencySymbol}
          >
        </PDF>
      </PDFViewer>
    </>
   );
}
 
export default PDFView;
// export default PDF;