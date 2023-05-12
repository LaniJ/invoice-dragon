import { Page, Text, Image, View, StyleSheet, Font } from '@react-pdf/renderer';

const Template2 = ({totalAmount, rows, logo, notes, currencySymbol, formName, businessName, InvoiceNo, date, clientName, clientAddress, clientCity, clientZipcode, clientPhone, address, city, zipcode, owner}) => {

  Font.register({
    family: 'Inter-Regular',
    src: "/assets/Inter-Regular.ttf",
  });
  Font.register({
    family: 'Inter-Bold',
    src: "/assets/Inter-Bold.ttf",
  });

  Font.register({
    family: 'Roxborough',
    src: "/assets/Roxborough-CF.ttf",
  });

  const styles = StyleSheet.create({
    body: {
      fontFamily: 'Inter-Regular',
      padding: 40,
      color: '#000000',
      backgroundColor: '#F5F5EF',
      height: '100%'
    },
    header__section: {
      fontFamily: 'Roxborough',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 40
    },
    logo_wrapper: {
      width: '150',
      height: '150',
      marginTop: 30,
    },
    logo: {
      width: '100%',
      height: '100%',
    },
    formName: {
      fontSize: '40px',
      textTransform: 'uppercase',
    },
    bizName: {
      fontSize: '20px',
      fontFamily: 'Inter-Regular',
    },
    billing__section: {
      fontFamily: 'Inter-Regular',
      fontSize: 11,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 40
    },
    section__tag: {
      fontFamily: 'Inter-Bold',
      textTransform: 'uppercase',
      fontSize: 11,
      marginBottom: 8
    },
    header__text: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    invoice__details: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    text: {
      marginBottom: 3,
    },

    // invoice section
    invoice__details__section: {
      marginBottom: 20,
    },
    invoice_header: {
      fontSize: 11,
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '20px',
      padding: '10px 7px 10px 7px',
      borderTop: 0.5,
      borderTopColor: '#000000',
      borderTopStyle: 'solid',
      borderBottom: 0.5,
      borderBottomColor: '#000000',
      borderBottomStyle: 'solid',
      fontFamily: 'Inter-Bold',
    },
    invoice_item: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '15px 7px 15px 7px',
      fontSize: '11px',
      borderBottom: 0.5,
      borderBottomColor: '#000000',
      borderBottomStyle: 'solid',
    },
    des__group: {
      width: '55%',
      textAlign: 'left',
    },

    // total section
    total__section__wrapper: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
    total__section: {
      minWidth: '30%',
    },
    subtotal: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '11px',
      fontFamily: 'Inter-Bold',
      padding: '10px 7px 10 7px',
      marginTop: 10
    },
    total: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '18px',
      fontFamily: 'Inter-Bold',
      padding: '15px 7px',
      borderTop: 0.5,
      borderTopColor: '#000000',
      borderTopStyle: 'solid',
      marginTop: 5
    },
    // notes
    note__section: {
      fontSize: '12px',
      maxWidth: '60%'
    },
    // footer
    footer__section: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: 30,
      fontSize: '11px',
    },
    sender__info: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    owner: {
      fontFamily: 'Roxborough',
      fontSize: 14,
      marginTop: 5,
      marginBottom: 3,
    }

  })
 
  return (  
    <Page size="A4" style={styles.body}>
      <View>
        <View style={styles.header__section}>
          <View style={styles.logo_wrapper} >
            {/* <Text>Image Section</Text> */}
            <Image src={logo} style={styles.logo}/>
          </View>
          <View style={styles.header__text}>
            {formName && <Text style={styles.formName}>{formName}</Text>}
            {businessName && <Text style={styles.bizName}>{businessName}</Text>}
          </View>
        </View>
        <View style={styles.billing__section}>
          <View>
            <Text style={styles.section__tag}>BILLED TO:</Text>
            {clientName && <Text style={styles.text}>{clientName}</Text>}
            {clientPhone && <Text style={styles.text}>{clientPhone}</Text>}
            {clientAddress && <Text style={styles.text}>{clientAddress}, {clientCity}, {clientZipcode}</Text>}
            {/* <Text>{clientCity} {clientZipcode}</Text> */}
          </View>
          <View style={styles.invoice__details}>
            {InvoiceNo && <Text style={styles.text}>Invoice No. {InvoiceNo}</Text>}
            <Text style={styles.text}>{date}</Text>
          </View>
        </View>
        <View style={styles.invoice__details__section}>
          <View style={styles.invoice_header}>
            <Text style={[styles.table_header, {width: '55%'}]}>Item</Text>
            <Text style={[styles.table_header, {width: '15%', textAlign: 'center'}]}>Quantity</Text>
            <Text style={[styles.table_header, {width: '15%', textAlign: 'center'}]}>Unit Price</Text>
            <Text style={[styles.table_header, {width: '15%', textAlign: 'right'}]}>Total</Text>
          </View>
          {rows.map(({ id, description, details, rate, quantity, amount }) => (
            <View style={styles.invoice_item} key={id}>
              <View style={styles.des__group}>
                <Text style={[styles.item, { marginBottom: '10' }]}>{description}</Text>
                <Text style={{fontSize: '10', opacity: 0.8, width: '95%'}}>{details}</Text>
              </View>
              <Text style={[styles.item, {width: '15%', textAlign: 'center'}]}>{quantity}</Text>
              <Text style={[styles.item, {width: '15%', textAlign: 'center'}]}>{currencySymbol}{rate ? rate.toFixed(2) : '0.00'}</Text>
              <Text style={[styles.item, {width: '15%', textAlign: 'right'}]}>{currencySymbol}{amount}</Text>
            </View>
          ))}
          <View style={styles.total__section__wrapper}>
            <View style={styles.total__section}>
              <View style={styles.subtotal}>
                <Text>Subtotal</Text>
                <Text>{currencySymbol}{totalAmount}</Text>
              </View>
              <View style={styles.total}>
                <Text>Total</Text>
                <Text>{currencySymbol}{totalAmount}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.note__section}>
          <Text>{notes}</Text>
        </View>
        <View style={styles.footer__section}>
          <View>
            <Text style={styles.section__tag}>PAYMENT INFORMATION</Text>
            {clientName && <Text style={styles.text}>Briard Bank</Text>}
            {clientPhone && <Text style={styles.text}>Account Name: Samira Hadid</Text>}
            {clientAddress && <Text style={styles.text}>Account No.: 123-456-7890</Text>}
            <Text>Pay by: Due Date</Text>
            {/* <Text>{clientCity} {clientZipcode}</Text> */}
          </View>
          <View style={styles.sender__info}>
            <Text>____________________________</Text>
            <Text style={styles.owner}>{owner}</Text>
            <Text>{address}, {city}, {zipcode}</Text>
          </View>
          {/* <Text>Hello template 2 - footer__section</Text> */}
        </View>
      </View>
    </Page>
  );
}
 
export default Template2;