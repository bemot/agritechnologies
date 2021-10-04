import React from "react";
import history from "../../history";
import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#A5E5E3",
  },
  section: {
    magin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Technologies</Text>
        </View>
        <View style={styles.section}>
          <Text>Operations</Text>
        </View>
      </Page>
    </Document>
  );
};

// Create Document Component
const TechnologieListReport = () => {
  console.log("pdfing...");
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
};

export default TechnologieListReport;
