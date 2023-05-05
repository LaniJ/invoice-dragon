import styles from "./preview.module.scss";
import { Document, Page, Text, Image, View, StyleSheet, Font, PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from "react";
// import form from '../../assets/Roboto'

const PDF = ({ rows, currencySymbol, formName, logo, email, businessName, address, city, zipcode, phone, owner, clientName, clientEmail, clientAddress, clientCity, clientZipcode, clientPhone, date, InvoiceNo, clientWebsite, notes }) => {
  
  // Register font
  // Font.register({ family: 'Roboto', src: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" });
  // Font.register({ family: 'Roboto', src: "../../assets/regular.ttf" });

  const styles = StyleSheet.create({
    body: {
      // backgroundColor: 'lightgray',
      backgroundColor: '#FCFBF8',
      padding: 40,
      color:'#5d5955'
    },
    invoice_group: {
      flexGrow: 1
    },
    section: {
      // margin: 10,
      display: 'flex',
      flexDirection: 'row-reverse',
      textAlign: 'right',
      padding: 10,
      flexGrow: 1,
      // backgroundColor: 'teal',
      borderBottom: '0.5px solid #000000'
      // fontFamily: 'Roboto'
    },
    bizName: {
      fontSize: '30px',
      // marginBottom: '20px'
    },
    invoice_body: {
      // flexGrow: 1,
      // justifyContent: 'space-between',
      // height: '60%'
      marginBottom: 100
    },
    font: {
      fontSize: '10px',
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    invoice__details: {
      margin: '20px 0'
    },
    invoice_header: {
      // display: 'flex',
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '20px',
      marginBottom: '40px',

    },
    table_header: {
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontWeight: 500
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
      borderTop: '0.5px solid #000000',
      borderBottom: '0.5px solid #000000',
      paddingTop: 20,
      paddingBottom: 20,
      marginTop: '30px'
      // alignSelf: 'flex-end',
      // height: '5%'
    },
    sub: {
      flexGrow: 1,
      flexDirection: 'row',
    },
    sub_section: {
      marginRight: '30'
    },
    notes: {
      marginTop: 10,
      fontSize: '10px',
      color:'#5d5955'
    },
    footer: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30
    }
    // template 3
    
  })

  const invoiceData = [
    {
      id: 1,
      description: 'Service 1',
      price: '$100.00',
      qty: '2',
      amount: '$200.00'
    },
    {
      id: 2,
      description: 'Service 2',
      price: '$100.00',
      qty: '2',
      amount: '$200.00'
    },
    {
      id: 3,
      description: 'Service 3',
      price: '$100.00',
      qty: '2',
      amount: '$200.00'
    },
    {
      id: 4,
      description: 'Service 4',
      price: '$100.00',
      qty: '2',
      amount: '$200.00'
    }
  ]

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
            <View>
              {businessName && <Text style={styles.bizName}>{businessName}</Text>}

              <View style={styles.invoice__details}>
                {InvoiceNo && <Text style={styles.font}>InvoiceNo: {InvoiceNo}</Text>}
                <Text style={styles.font}>Date {date}</Text>
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
                <Text style={styles.table_header}>DESCRIPTION</Text>
                <Text style={styles.table_header}>PRICE</Text>
                <Text style={styles.table_header}>QTY</Text>
                <Text style={styles.table_header}>AMOUNT</Text>
              </View>


              {/* {invoiceData.map(({ id, description, price, qty, amount }) => (
                <View style={styles.invoice_items} key={id}>
                  <Text style={styles.item}>{description}</Text>
                  <Text style={styles.item}>{price}</Text>
                  <Text style={styles.item}>{qty}</Text>
                  <Text style={styles.item}>{amount}</Text>
                </View>
              ))} */}
              
              {rows.map(({ id, description, details, rate, quantity, amount }) => (
                <View style={styles.invoice_items} key={id}>
                  <Text style={styles.item}>{description}</Text>
                  {/* <Text style={styles.item}>{details}</Text> */}
                  <Text style={styles.item}>{currencySymbol}{rate}</Text>
                  <Text style={styles.item}>{quantity}</Text>
                  <Text style={styles.item}>{currencySymbol}{amount}</Text>
                </View>
              ))}
            </View>
            <View style={styles.total_section}>
              <View style={styles.sub}>
                <View style={styles.sub_section}>
                  <Text style={styles.table_header}>SUBTOTAL</Text>
                  <Text style={styles.item}>$500.00</Text>
                </View>
                <View>
                  <Text style={styles.table_header}>VAT</Text>
                  <Text style={styles.item}>$50.00</Text>
                </View>
                
              </View>
              <View>
                <Text style={styles.table_header}>TOTAL</Text>
                <Text style={styles.item}>{currencySymbol}{calculateTotal()}</Text>
              </View>
            </View>
            <Text style={styles.notes}>{notes}</Text>
            <View style={styles.footer}>
              <Text style={styles.item}>{owner}</Text>
              <Text style={styles.item}>Signature</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
   );
}

const PDFView = ({ rows, formName, logo, email, businessName, address, city, zipcode, phone, owner, clientName, clientAddress, clientEmail, clientCity, clientZipcode, clientPhone, date, InvoiceNo, clientWebsite, notes }) => {

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
          >
        </PDF>
      </PDFViewer>
    </>
   );
}
 
export default PDFView;
// export default PDF;