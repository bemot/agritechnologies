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

Font.register({
  family: "RobotoRegular",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
});

Font.register({
  family: "RobotoLight",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#A5E5E3",
  },
  section1: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontFamily: "RobotoRegular",
  },
  section2: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontFamily: "RobotoLight",
  },
});

// Create Document Component
const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section1}>
          <Text>Технології</Text>
        </View>
        <View style={styles.section2}>
          <Text>Операції</Text>
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
