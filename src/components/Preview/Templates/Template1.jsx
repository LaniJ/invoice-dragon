import { Page, Text, Image, View, StyleSheet, Font } from '@react-pdf/renderer';

const Template1 = ({ totalAmount, rows, logo, notes, currencySymbol, formName, businessName, InvoiceNo, date, clientName, clientAddress, clientCity, clientZipcode, clientEmail, clientPhone, address, phone, email, city, zipcode, website }) => {

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

  Font.register({
    family: 'Quicksand',
    src: "/assets/Quicksand-Medium.ttf",
  });
  Font.register({
    family: 'Quicksand-Light',
    src: "/assets/Quicksand-Light.ttf",
  });

  const styles = StyleSheet.create({
    body: {
      backgroundColor: '#FCFBF8',
      padding: 40,
      paddingTop: 30,
      color: '#4C3D3D',
      fontFamily: 'Garet',
    },
    invoice_group: {
      flexGrow: 1
    },
    section: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      flexGrow: 1,
      borderBottom: '0.5px solid #000000',

    },
    logo_wrapper: {
      marginTop: 30,
    },
    logo: {
      height: '100',
    },
    header_details: {
      paddingRight: '20'
    },
    bizName1: {
      fontSize: '40px',
      fontFamily: 'League',
    },
    bizName: {
      fontSize: '20px',
      fontFamily: 'League',
      marginBottom: 5
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '0.5px solid #000000',
      borderBottom: '0.5px solid #000000',
      paddingTop: 10,
      paddingBottom: 10,
    },
    total_amount: {
      fontSize: '24px',
    },
    sub: {
      flexGrow: 1,
      flexDirection: 'row',
    },
    sub_section: {
      marginRight: '30'
    },
    des__group: {
      width: '40%',
      textAlign: 'left',
    },
    notes: {
      marginTop: 10,
      marginBottom: 30,
      fontSize: '10px',
      color: '#4C3D3D'
    },
    footer: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 50,
    },
    address__group: {
      display: 'flex',
      flexDirection: 'row'
    }
  })

  return (
    <Page size="A4" style={styles.body}>
      <View style={{ display: 'flex', justifyContent: 'center' }}>
        <View style={styles.section}>
          <View style={styles.header_details}>
            {businessName && <Text style={styles.bizName1}>{businessName}</Text>}

            <View style={styles.invoice__details}>
              {(formName && InvoiceNo) && <Text style={styles.font}>{formName} No. {InvoiceNo}</Text>}
              <Text style={styles.font}>{date}</Text>
            </View>

            {clientName && <Text style={styles.font}>Billed To:</Text>}
            {clientName && <Text style={styles.font}>{clientName}</Text>}
            {clientPhone && <Text style={styles.font}>{clientPhone}</Text>}
            {clientEmail && <Text style={styles.font}>{clientEmail}</Text>}
            <View style={styles.address__group}>
              {clientAddress && <Text style={styles.font}>{clientAddress}</Text>}
              {clientCity && <Text style={styles.font}>
                {clientAddress && <Text>, </Text>}<Text>{clientCity}</Text>
              </Text>}
              {clientZipcode && <Text style={styles.font}>
                {(clientAddress || clientCity) && <Text>, </Text>}
                <Text>{clientZipcode}</Text>
              </Text>}
            </View>
          </View>
          {logo && <View style={styles.logo_wrapper}>
            <Image src={logo} style={styles.logo} />
          </View>}
        </View>
        <View style={styles.invoice_group}>
          <View style={styles.invoice_body}>
            <View style={styles.invoice_header}>
              <Text style={[styles.table_header, { width: '40%' }]}>DESCRIPTION</Text>
              <Text style={[styles.table_header, { width: '20%', textAlign: 'center' }]}>PRICE</Text>
              <Text style={[styles.table_header, { width: '20%', textAlign: 'center' }]}>QTY</Text>
              <Text style={[styles.table_header, { width: '20%', textAlign: 'right' }]}>AMOUNT</Text>
            </View>

            {rows.map(({ id, description, details, rate, quantity, amount }) => (
              <View style={styles.invoice_items} key={id}>
                <View style={styles.des__group}>
                  <Text style={[styles.item, { marginBottom: '10', fontSize: '14' }]}>{description}</Text>
                  <Text style={{ fontSize: '10', opacity: 0.8, width: '95%' }}>{details}</Text>
                </View>
                <Text style={[styles.item, { width: '20%', textAlign: 'center' }]}>
                  <Text style={{ fontFamily: 'Quicksand-Light' }}>{currencySymbol}</Text>
                  <Text>{rate ? rate.toFixed(2) : '0.00'}</Text>
                </Text>
                <Text style={[styles.item, { width: '20%', textAlign: 'center' }]}>{quantity}</Text>
                <Text style={[styles.item, { width: '20%', textAlign: 'right' }]}>
                  <Text style={{ fontFamily: 'Quicksand-Light' }}>{currencySymbol}</Text>
                  <Text>{amount}</Text>
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.total_section}>
            <Text style={styles.table_header}>TOTAL</Text>
            <Text style={styles.total_amount}>
              <Text style={{ fontFamily: 'Quicksand' }}>{currencySymbol}</Text>
              <Text>{totalAmount}</Text>
            </Text>
          </View>
          {notes && <Text style={styles.notes}>{notes}</Text>}
          <View wrap={false} style={styles.footer}>
            <View>
              <Text style={styles.bizName}>{businessName}</Text>
              <View style={styles.address__group}>
                {address && <Text style={styles.item}>{address}</Text>}
                {city && <Text style={styles.item}>{address && <Text>, </Text>}<Text>{city}</Text></Text>}
                {zipcode && <Text style={styles.item}>
                  {(address || city) && <Text>, </Text>}
                  <Text>{zipcode}</Text>
                </Text>}
              </View>
              <Text style={styles.item}>{website}</Text>
              <Text style={styles.item}>{email}</Text>
              <Text style={styles.item}>{phone}</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
}

export default Template1;