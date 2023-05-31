import { Page, Text, Image, View, StyleSheet, Font } from '@react-pdf/renderer';

const Template2 = ({totalAmount, rows, phone, logo, notes, currencySymbol, formName, businessName, InvoiceNo, date, clientName, clientAddress, clientCity, clientZipcode, clientPhone, clientEmail, address, city, zipcode, owner, website}) => {

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
      fontFamily: 'Garet',
      padding: '20px 60px',
      color: '#000000',
      backgroundColor: '#FFFFFF',
    },
    header__section: {
      fontFamily: 'Garet',
      fontSize: 11,
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingBottom: 10,
      marginBottom: 40,
    },
    company__info: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      fontSize: 11
    },
    logo_wrapper: {
      width: '30',
      height: '30',
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
      fontSize: '13px',
      color: '#000000',
      family: 'Garet-Heavy',
    },
    billing__section: {
      fontSize: 11,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15
    },
    section__tag: {
      fontFamily: 'Garet-Heavy',
      textTransform: 'uppercase',
      fontSize: 11,
      marginBottom: 8
    },
    header__text: {
      fontFamily: 'Garet-Heavy',
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
      fontFamily: 'Garet-Heavy',
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '20px',
      padding: '10px 7px 10px 7px',
      borderTop: 1,
      borderTopColor: '#000000',
      borderTopStyle: 'solid',
      borderBottom: 1,
      borderBottomColor: '#000000',
      borderBottomStyle: 'solid',
    },
    invoice_item: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: '11px',
      padding: '15px 7px 15px 7px',
    },
    des__group: {
      width: '40%',
      textAlign: 'left',
    },
    total__section: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: 1,
      borderTopColor: '#000000',
      borderTopStyle: 'solid',
      borderBottom: 1,
      borderBottomColor: '#000000',
      borderBottomStyle: 'solid',
      fontSize: '11px',
      padding: '10px 7px 10px 7px',
      fontFamily: 'Garet-Heavy',
    },
    // notes
    note__section: {
      fontSize: '10px',
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
    address__group: {
      display: 'flex',
      flexDirection: 'row'
    }
  })
 
  return (  
    <Page size="A4" style={styles.body}>
      <View>
        <View style={styles.header__section}>
          <View style={styles.company__info}>
            {logo && <View style={styles.logo_wrapper}>
              <Image src={logo} style={styles.logo}/>
            </View>}
            {businessName && <Text style={styles.bizName}>{businessName}</Text>}
            {address && <Text>{address}</Text>}
            <View style={styles.address__group}>
              {city && <Text>{city}</Text>}
              {zipcode && <Text>, {zipcode}</Text>}
            </View>
            {phone && <Text>{phone}</Text>}
          </View>
          <View style={styles.header__text}>
            {formName && <Text style={styles.formName}>{formName}</Text>}
          </View>
        </View>
        <View style={styles.billing__section}>
          <View>
            {clientName && <Text style={styles.section__tag}>ISSUED TO:</Text>}
            {clientName && <Text style={styles.text}>{clientName}</Text>}
            {clientPhone && <Text style={styles.text}>{clientPhone}</Text>}
            {clientEmail && <Text style={styles.text}>{clientEmail}</Text>}
            <View style={styles.address__group}>
              {clientAddress && <Text>{clientAddress}</Text>}
              {clientCity && <Text>, {clientCity}</Text>}
              {clientZipcode && <Text>, {clientZipcode}</Text>}
            </View>
          </View>
          <View style={styles.invoice__details}>
            {InvoiceNo && <Text style={[styles.text, styles.section__tag]}>Invoice No:</Text>}
            {InvoiceNo && <Text style={[styles.text, styles.section__tag]}>{InvoiceNo}</Text>}
            <Text style={styles.text}>{date}</Text>
          </View>
        </View>
        <View style={styles.invoice__details__section}>
          <View style={styles.invoice_header}>
            <Text style={{width: '40%'}}>DESCRIPTION</Text>
            <Text style={{width: '20%', textAlign: 'center'}}>QTY</Text>
            <Text style={{width: '20%', textAlign: 'center'}}>PRICE</Text>
            <Text style={{width: '20%', textAlign: 'right'}}>TOTAL</Text>
          </View>
          {rows.map(({ id, description, details, rate, quantity, amount }) => (
            <View style={styles.invoice_item} key={id}>
              <View style={styles.des__group}>
                <Text style={{ marginBottom: '10' }}>{description}</Text>
                <Text style={{fontSize: '10', opacity: 0.8, width: '95%'}}>{details}</Text>
              </View>
              <Text style={{width: '20%', textAlign: 'center'}}>{quantity}</Text>
              <Text style={{width: '20%', textAlign: 'center'}}>{currencySymbol}{rate ? rate.toFixed(2) : '0.00'}</Text>
              <Text style={{width: '20%', textAlign: 'right'}}>{currencySymbol}{amount}</Text>
            </View>
          ))}
            <View style={styles.total__section}>
              <Text>Total</Text>
              <Text>{currencySymbol}{totalAmount}</Text>
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