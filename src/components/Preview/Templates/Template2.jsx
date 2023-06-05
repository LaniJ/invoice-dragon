import { Page, Text, Image, View, StyleSheet, Font } from '@react-pdf/renderer';

const Template2 = ({totalAmount, rows, logo, notes, currencySymbol, formName, businessName, InvoiceNo, date, clientName, clientAddress, clientCity, clientZipcode, clientEmail, clientPhone, address, city, zipcode, phone, email, website}) => {

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
      marginBottom: 20
    },
    logo_wrapper: {
      marginTop: 30,
    },
    logo: {
      height: '100',
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
      marginBottom: 30
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
      marginTop: '15px',
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
      width: '40%',
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
    total__text: {
      marginRight: 15
    },
    // notes
    note__section: {
      fontSize: '12px',
      maxWidth: '60%'
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
      fontFamily: 'Inter-Bold',
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
          {logo && <View style={styles.logo_wrapper} >
            <Image src={logo} style={styles.logo}/>
          </View>}
          <View style={styles.header__text}>
            {formName && <Text style={styles.formName}>{formName}</Text>}
          </View>
        </View>
        <View style={styles.billing__section}>
          <View>
            {clientName && <Text style={styles.section__tag}>BILLED TO:</Text>}
            {clientName && <Text style={styles.text}>{clientName}</Text>}
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
            {InvoiceNo && <Text style={styles.text}>{formName} No. {InvoiceNo}</Text>}
            <Text style={styles.text}>{date}</Text>
          </View>
        </View>
        <View style={styles.invoice__details__section}>
          <View style={styles.invoice_header}>
            <Text style={[styles.table_header, {width: '40%'}]}>Item</Text>
            <Text style={[styles.table_header, {width: '20%', textAlign: 'center'}]}>Quantity</Text>
            <Text style={[styles.table_header, {width: '20%', textAlign: 'center'}]}>Unit Price</Text>
            <Text style={[styles.table_header, {width: '20%', textAlign: 'right'}]}>Total</Text>
          </View>
          {rows.map(({ id, description, details, rate, quantity, amount }) => (
            <View style={styles.invoice_item} key={id}>
              <View style={styles.des__group}>
                <Text style={[styles.item, { marginBottom: '10' }]}>{description}</Text>
                <Text style={{fontSize: '10', opacity: 0.8, width: '95%'}}>{details}</Text>
              </View>
              <Text style={[styles.item, {width: '20%', textAlign: 'center'}]}>{quantity}</Text>
              <Text style={[styles.item, {width: '20%', textAlign: 'center'}]}>
                <Text style={{fontFamily : 'Quicksand'}}>{currencySymbol}</Text>
                <Text>{rate ? rate.toFixed(2) : '0.00'}</Text>
              </Text>
              <Text style={[styles.item, {width: '20%', textAlign: 'right'}]}>
                <Text style={{fontFamily : 'Quicksand'}}>{currencySymbol}</Text>
                <Text>{amount}</Text>
              </Text>
            </View>
          ))}
          <View style={styles.total__section__wrapper}>
            <View style={styles.total__section}>
              <View style={styles.subtotal}>
                <Text>Subtotal</Text>
                <Text>{currencySymbol}{totalAmount}</Text>
              </View>
              <View style={styles.total}>
                <Text style={styles.total__text}>Total</Text>
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
 
export default Template2;