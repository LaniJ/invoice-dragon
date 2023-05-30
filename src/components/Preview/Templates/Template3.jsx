import { Page, Text, Image, View, StyleSheet, Font } from '@react-pdf/renderer';

const Template2 = ({totalAmount, rows, email, phone, logo, notes, currencySymbol, formName, businessName, InvoiceNo, date, clientName, clientAddress, clientCity, clientZipcode, clientPhone, clientEmail, address, city, zipcode, owner, website}) => {

  Font.register({
    family: 'Poppins-Regular',
    src: "/assets/Poppins-Regular.ttf",
  });
  Font.register({
    family: 'Poppins-Bold',
    src: "/assets/Poppins-Bold.ttf",
  });
  Font.register({
    family: 'Poppins-Medium',
    src: "/assets/Poppins-Medium.ttf",
  });
  Font.register({
    family: 'Poppins-Light',
    src: "/assets/Poppins-Light.ttf",
  });

  const styles = StyleSheet.create({
    body: {
      fontFamily: 'Poppins-Light',
      padding: 40,
      color: '#000000',
      backgroundColor: '#FFFFFF',
    },
    header__section: {
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottom: 1,
      borderBottomColor: 'rgba(0,0,0,0.3)',
      borderBottomStyle: 'solid',
    },
    logo_wrapper: {
      width: '50',
      height: '50',
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
    },
    billing__section: {
      fontSize: 11,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 40
    },
    section__tag: {
      fontFamily: 'Poppins-Medium',
      textTransform: 'uppercase',
      fontSize: 11,
      marginBottom: 8
    },
    header__text: {
      fontFamily: 'Poppins-Bold',
      fontSize: 14,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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
      fontFamily: 'Poppins-Bold',
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '20px',
      padding: '10px 7px 10px 7px',
      color: '#FFFFFF',
      backgroundColor: '#032e31',
    },
    invoice_item: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: '11px',
    },
    col__colour1: {
      backgroundColor: '#e4e4e4',
      padding: '15px 7px 15px 7px',
    },
    col__colour2: {
      backgroundColor: '#F5F6F6',
      padding: '15px 7px 15px 7px',
    },
    des__group: {
      width: '55%',
      textAlign: 'left',
      backgroundColor: '#e4e4e4',
      padding: '15px 7px 15px 7px',
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
      padding: '10px 7px 10 7px',
      marginTop: 10
    },
    total: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '11px',
      fontFamily: 'Poppins-Bold',
      padding: '15px 7px',
      backgroundColor: '#032e31',
      color: '#FFFFFF',
      borderTop: 0.5,
      borderTopColor: '#000000',
      borderTopStyle: 'solid',
    },
    // notes
    note__section: {
      fontSize: '12px',
      maxWidth: '50%'
    },
    // footer
    footer__section: {
      display: 'flex',
      flexDirection: 'row-reverse',
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
      fontSize: 14,
      marginTop: 5,
      marginBottom: 3,
    },
    divider: {
      width: 30,
      marginTop: 10,
      marginBottom: 5,
      borderBottom: 5,
      borderBottomColor: 'lightgray',
    },
    address__group: {
      display: 'flex',
      flexDirection: 'row'
    }
  })
 
  return (  
    <Page size="A4" style={styles.body}>
      <View>
        <View style={styles.header__section}>
          {formName && <Text style={styles.formName}>{formName}</Text>}
          <View style={styles.header__text}>
            {businessName && <Text style={styles.bizName}>{businessName} </Text>}
            {logo && <View style={styles.logo_wrapper} >
              <Image src={logo} style={styles.logo}/>
            </View>}
          </View>
        </View>
        <View style={styles.billing__section}>
          <View>
            {clientName && <Text style={styles.section__tag}>INVOICE TO:</Text>}
            {clientName && <Text style={[styles.text, {fontFamily: 'Poppins-Bold', fontSize: 14}]}>{clientName}</Text>}
            {clientPhone && <Text style={styles.text}>{clientPhone}</Text>}
            {clientEmail && <Text style={styles.text}>{clientEmail}</Text>}
            {/* {clientAddress && <Text style={styles.text}>{clientAddress}, {clientCity}, {clientZipcode}</Text>} */}
            <View style={styles.address__group}>
              {clientAddress && <Text>{clientAddress}</Text>}
              {clientCity && <Text>, {clientCity}</Text>}
              {clientZipcode && <Text>, {clientZipcode}</Text>}
            </View>
          </View>
          <View style={styles.invoice__details}>
            <Text style={styles.section__tag}>TOTAL DUE</Text>
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14}}>{currencySymbol}{totalAmount}</Text>
            <Text style={styles.divider}></Text>
            {InvoiceNo && <Text style={styles.text}>Invoice No. {InvoiceNo}</Text>}
            <Text style={styles.text}>{date}</Text>
          </View>
        </View>
        <View style={styles.invoice__details__section}>
          <View style={styles.invoice_header}>
            <Text style={{width: '55%'}}>Item</Text>
            <Text style={{width: '15%', textAlign: 'center'}}>Quantity</Text>
            <Text style={{width: '15%', textAlign: 'center'}}>Price</Text>
            <Text style={{width: '15%', textAlign: 'right'}}>Total</Text>
          </View>
          {rows.map(({ id, description, details, rate, quantity, amount }) => (
            <View style={styles.invoice_item} key={id}>
              <View style={styles.des__group}>
                <Text style={{ marginBottom: '10' }}>{description}</Text>
                <Text style={{fontSize: '10', opacity: 0.8, width: '95%', minWidth: '80%'}}>{details}</Text>
              </View>
              <Text style={[styles.col__colour1, {minWidth: '15%', textAlign: 'center'}]}>{quantity}</Text>
              <Text style={[styles.col__colour2, {minWidth: '15%', textAlign: 'center'}]}>{currencySymbol}{rate ? rate.toFixed(2) : '0.00'}</Text>
              <Text style={[styles.col__colour2, {minWidth: '15%', textAlign: 'right'}]}>{currencySymbol}{amount}</Text>
            </View>
          ))}
          <View style={styles.total__section__wrapper}>
            <View style={styles.total__section}>
              {/* <View style={styles.subtotal}>
                <Text>Subtotal</Text>
                <Text>{currencySymbol}{totalAmount}</Text>
              </View> */}
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
        <View wrap={false} style={styles.footer__section}>
          <View style={styles.sender__info}>
            <Text>____________________________</Text>
            <Text style={styles.owner}>{owner}</Text>
            <View style={styles.address__group}>
              {address && <Text>{address}</Text>}
              {city && <Text>, {city}</Text>}
              {zipcode && <Text>, {zipcode}</Text>}
            </View>
            <Text>{website}</Text>
          </View>
        </View>
      </View>
    </Page>
  );
}
 
export default Template2;