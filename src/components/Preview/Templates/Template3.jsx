import { Page, Text, Image, View, StyleSheet, Font } from '@react-pdf/renderer';

const Template3 = ({totalAmount, rows, email, phone, logo, logoUpdated, notes, currencySymbol, formName, businessName, InvoiceNo, date, clientName, clientAddress, clientCity, clientZipcode, clientPhone, clientEmail, address, city, zipcode, website}) => {

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

  Font.register({
    family: 'Quicksand',
    src: "/assets/Quicksand-Medium.ttf",
  });

  Font.register({
    family: 'Quicksand-Bold',
    src: "/assets/Quicksand-Bold.ttf",
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
    logo: {
      height: '50',
    },
    formName: {
      fontSize: '40px',
      maxWidth: '200px',
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
      width: '40%',
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
      fontSize: '11px',
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
            {(logoUpdated && logo) && <View>
              <Image src={logo} style={styles.logo}/>
            </View>}
          </View>
        </View>
        <View style={styles.billing__section}>
          <View>
            {clientName && <Text style={styles.section__tag}>{formName} TO:</Text>}
            {clientName && <Text style={[styles.text, {fontFamily: 'Poppins-Bold', fontSize: 14}]}>{clientName}</Text>}
            {clientPhone && <Text style={styles.text}>{clientPhone}</Text>}
            {clientEmail && <Text style={styles.text}>{clientEmail}</Text>}
            <View style={styles.address__group}>
              {clientAddress && <Text>{clientAddress}</Text>}
              {clientCity && <Text style={styles.font}>
                {clientAddress && <Text>, </Text>}
                <Text>{clientCity}</Text>
              </Text>}
              {clientZipcode && <Text style={styles.font}>
                {(clientAddress || clientCity )&& <Text>, </Text>}
                <Text>{clientZipcode}</Text>
              </Text>}
            </View>
          </View>
          <View style={styles.invoice__details}>
            <Text style={styles.section__tag}>TOTAL DUE</Text>
            <Text style={{fontSize: 14, fontFamily: 'Poppins-Bold'}}>
              <Text style={{fontFamily : 'Quicksand-Bold'}}>{currencySymbol}</Text>
              <Text>{totalAmount}</Text>
            </Text>
            <Text style={styles.divider}></Text>
            {InvoiceNo && <Text style={styles.text}>{formName} No. {InvoiceNo}</Text>}
            <Text style={styles.text}>{date}</Text>
          </View>
        </View>
        <View style={styles.invoice__details__section}>
          <View style={styles.invoice_header}>
            <Text style={{width: '40%'}}>Item</Text>
            <Text style={{width: '20%', textAlign: 'center'}}>Quantity</Text>
            <Text style={{width: '20%', textAlign: 'center'}}>Price</Text>
            <Text style={{width: '20%', textAlign: 'right'}}>Total</Text>
          </View>
          {rows.map(({ id, description, details, rate, quantity, amount }) => (
            <View style={styles.invoice_item} key={id}>
              <View style={styles.des__group}>
                <Text style={{ marginBottom: '10' }}>{description}</Text>
                <Text style={{fontSize: '10', opacity: 0.8, width: '95%', minWidth: '80%'}}>{details}</Text>
              </View>
              <Text style={[styles.col__colour1, {width: '20%', textAlign: 'center'}]}>{quantity}</Text>
              <Text style={[styles.col__colour2, {width: '20%', textAlign: 'center'}]}>
                <Text style={{fontFamily : 'Quicksand'}}>{currencySymbol}</Text>
                <Text>{rate ? rate.toFixed(2) : '0.00'}</Text>
              </Text>

              <Text style={[styles.col__colour2, {width: '20%', textAlign: 'right'}]}>
                <Text style={{fontFamily : 'Quicksand'}}>{currencySymbol}</Text>
                <Text>{amount}</Text>
              </Text>
            </View>
          ))}
          <View style={styles.total__section__wrapper}>
            <View style={styles.total__section}>
              <View style={styles.total}>
                <Text>Total</Text>
                <Text>
                  <Text style={{fontFamily : 'Quicksand-Bold'}}>{currencySymbol}</Text>
                  <Text>{totalAmount}</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.note__section}>
          <Text>{notes}</Text>
        </View>
        <View wrap={false} style={styles.footer__section}>
          <View style={styles.sender__info}>
            <Text style={styles.owner}>{businessName}</Text>
            <View style={styles.address__group}>
              {address && <Text>{address}</Text>}
              {city && <Text>
                {address && <Text>, </Text>}
                <Text>{city}</Text>
              </Text>}
              {zipcode && <Text>
                {(address || city ) && <Text>, </Text>}
                <Text>{zipcode}</Text>
              </Text>}
            </View>
            <Text>{phone}</Text>
            <Text>{email}</Text>
            <Text>{website}</Text>
          </View>
        </View>
      </View>
    </Page>
  );
}
 
export default Template3;