const busTimings = [
  {
    "From": "Tanjavure",
    "To": "Devakottai",
    "Time": "12:00 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "12:00 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "12:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "12:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "12:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "12:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "12:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "12:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "12:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "12:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "12:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "12:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "12:02 PM",
    "Destination": "Dindigul",
    "Service": "DKT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "12:02 PM",
    "Destination": "Dindigul",
    "Service": "DKT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "12:02 PM",
    "Destination": "Dindigul",
    "Service": "DKT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "12:02 PM",
    "Destination": "Dindigul",
    "Service": "DKT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "12:02 PM",
    "Destination": "Dindigul",
    "Service": "DKT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "12:03 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Thondi",
    "Time": "12:05 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "12:05 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Thiruvadanai",
    "Time": "12:05 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "12:05 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "12:05 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Gandarvakottai",
    "Time": "12:05 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tanjavure",
    "Time": "12:05 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "12:05 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Dindigul",
    "To": "Devakottai",
    "Time": "12:10 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "12:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "12:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "12:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "12:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "12:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Sayalkudi",
    "To": "Aranthanki",
    "Time": "12:12 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Sayalkudi",
    "To": "Pattukottai",
    "Time": "12:12 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Sayalkudi",
    "To": "Aavdamm",
    "Time": "12:12 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Srirangam",
    "To": "Devakottai",
    "Time": "12:12 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "12:15 AM",
    "Destination": "Valinokkam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Valinokkam",
    "Time": "12:15 AM",
    "Destination": "Valinokkam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "12:15 AM",
    "Destination": "Valinokkam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "12:15 AM",
    "Destination": "Valinokkam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "12:15 AM",
    "Destination": "Valinokkam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "12:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "12:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "12:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "12:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "12:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "12:17 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "12:17 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "12:17 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "12:17 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "12:17 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivaganga",
    "Time": "12:20 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "12:20 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "12:20 PM",
    "Destination": "Pattukottai",
    "Service": "SELVI",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Peravoorani",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Peravoorani",
    "Time": "12:20 PM",
    "Destination": "Pattukottai",
    "Service": "SELVI",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Peravoorani",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "12:20 PM",
    "Destination": "Pattukottai",
    "Service": "SELVI",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Peravoorani",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "12:20 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "12:20 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "12:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "12:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "12:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "12:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "12:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "12:20 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "12:20 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "12:20 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "12:20 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "12:20 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "12:20 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Naththam",
    "Time": "12:20 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "12:20 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "12:20 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Dindigul",
    "Time": "12:20 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "12:25 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "12:25 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "12:25 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "12:25 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "12:25 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "12:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "12:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "12:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "12:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "12:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "12:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "12:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "12:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "12:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "12:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "12:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "12:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "12:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "12:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "12:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "12:32 PM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "12:32 PM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "12:32 PM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "12:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "12:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "12:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "12:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "12:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "12:35 PM",
    "Destination": "Paramakudi",
    "Service": "RT",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "12:35 PM",
    "Destination": "Paramakudi",
    "Service": "RT",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "12:35 PM",
    "Destination": "Paramakudi",
    "Service": "RT",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "12:35 PM",
    "Destination": "Paramakudi",
    "Service": "RT",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "12:35 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Karur",
    "Time": "12:35 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "12:35 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "12:35 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Dindigul",
    "To": "Aranthanki",
    "Time": "12:40 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "12:40 PM",
    "Destination": "Devakottai",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "12:40 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Nagai",
    "To": "Kundrakudi",
    "Time": "12:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Nagai",
    "To": "Madurai",
    "Time": "12:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Nagai",
    "To": "Thiruppathur",
    "Time": "12:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Nagai",
    "To": "Melur",
    "Time": "12:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Nagai",
    "To": "Pillaiyar Patti",
    "Time": "12:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "12:40 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Dindigul",
    "Time": "12:40 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "12:40 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "12:40 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Naththam",
    "Time": "12:40 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Madurai",
    "Time": "12:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Kundrakudi",
    "Time": "12:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Pillaiyar Patti",
    "Time": "12:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Thiruppathur",
    "Time": "12:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Melur",
    "Time": "12:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "12:45 PM",
    "Destination": "Devakottai",
    "Service": "Government(PP)",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "12:45 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "SUP",
    "To": "Nachiyaruram",
    "Time": "12:47 PM",
    "Destination": "Sivaganga",
    "Service": "KBL",
    "stops": "Nachiyaruram, Thiruppathur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "SUP",
    "To": "Sivaganga",
    "Time": "12:47 PM",
    "Destination": "Sivaganga",
    "Service": "KBL",
    "stops": "Nachiyaruram, Thiruppathur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "12:50 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "12:50 PM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "12:50 PM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "12:50 PM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "12:50 PM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "12:50 PM",
    "Destination": "Devakottai",
    "Service": "ALAGAR",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "12:50 PM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "12:50 PM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "12:50 PM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "12:50 PM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "12:50 PM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "12:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "12:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "12:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "12:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "12:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "12:55 PM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "12:55 PM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvetriyur",
    "Time": "12:55 PM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "12:55 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "12:55 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thondi",
    "Time": "12:55 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "12:55 PM",
    "Destination": "Trichy",
    "Service": "Government(1 to 4)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "12:55 PM",
    "Destination": "Trichy",
    "Service": "Government(1 to 4)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "12:55 PM",
    "Destination": "Singampunari",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Singampunari",
    "Time": "12:55 PM",
    "Destination": "Singampunari",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "12:55 PM",
    "Destination": "Singampunari",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "12:55 PM",
    "Destination": "Singampunari",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Coimbatore",
    "Time": "12:55 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "12:55 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "12:55 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "12:55 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "12:55 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "12:57 PM",
    "Destination": "Devakottai",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Sivaganga",
    "Time": "1:00 PM",
    "Destination": "Sivaganga",
    "Service": "ROYAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kallal",
    "Time": "1:00 PM",
    "Destination": "Sivaganga",
    "Service": "ROYAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "1:00 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "1:00 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "1:00 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "1:00 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "1:00 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "1:00 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "1:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "1:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "1:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "1:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "1:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "1:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "1:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "1:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "1:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "1:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "1:00 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Karur",
    "Time": "1:00 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Erode",
    "Time": "1:00 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "1:00 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "1:00 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "SP Pattanam",
    "To": "Thiruppathur",
    "Time": "1:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "SP Pattanam",
    "To": "Pillaiyar Patti",
    "Time": "1:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "SP Pattanam",
    "To": "Kundrakudi",
    "Time": "1:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "SP Pattanam",
    "To": "Melur",
    "Time": "1:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "SP Pattanam",
    "To": "Madurai",
    "Time": "1:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "1:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "1:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "1:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "1:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "1:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "1:05 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Kumli",
    "To": "Devakottai",
    "Time": "1:05 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "1:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "1:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "1:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "1:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "1:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "1:05 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "1:05 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "1:05 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "1:05 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "1:05 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "1:07 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "1:07 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "1:07 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "1:10 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "1:10 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "1:10 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "1:10 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "1:10 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "1:10 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "1:10 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "1:10 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "1:10 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karur",
    "To": "Thiruvadanai",
    "Time": "1:12 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karur",
    "To": "Ramnad",
    "Time": "1:12 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karur",
    "To": "RS Mangalam",
    "Time": "1:12 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karur",
    "To": "Rameshwaram",
    "Time": "1:12 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karur",
    "To": "Devakottai",
    "Time": "1:12 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "1:13 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "1:15 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "1:15 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "1:15 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "1:15 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "1:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "1:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "1:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "1:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "1:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "1:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "1:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "1:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "1:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "1:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ponnamaravathy",
    "Time": "1:15 AM",
    "Destination": "Ponnamaravathy",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "1:15 AM",
    "Destination": "Ponnamaravathy",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "1:15 AM",
    "Destination": "Ponnamaravathy",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "1:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "1:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "1:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "1:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Sivaganga",
    "To": "Aranthanki",
    "Time": "1:20 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "1:20 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "1:20 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "1:20 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "1:20 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Trichy",
    "Time": "1:20 PM",
    "Destination": "Trichy",
    "Service": "Government(1 to 7)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Pudukottai",
    "Time": "1:20 PM",
    "Destination": "Trichy",
    "Service": "Government(1 to 7)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "1:20 PM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "1:20 PM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "1:20 PM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "1:20 PM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "1:20 PM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Avudaiyar Koil",
    "Time": "1:25 PM",
    "Destination": "Avudaiyar Koil",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Embal",
    "Time": "1:25 PM",
    "Destination": "Avudaiyar Koil",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "1:25 PM",
    "Destination": "Mudhukulathur",
    "Service": "AGAMATHIYA",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Mudhukulathur",
    "Time": "1:25 PM",
    "Destination": "Mudhukulathur",
    "Service": "AGAMATHIYA",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "1:25 PM",
    "Destination": "Mudhukulathur",
    "Service": "AGAMATHIYA",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "1:25 PM",
    "Destination": "Mudhukulathur",
    "Service": "AGAMATHIYA",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "1:25 PM",
    "Destination": "Mudhukulathur",
    "Service": "AGAMATHIYA",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Keeranur",
    "Time": "1:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Pudukottai",
    "Time": "1:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Trichy",
    "Time": "1:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Kanadukaththan",
    "Time": "1:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Tirumayam",
    "Time": "1:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "1:30 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "1:30 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thondi",
    "Time": "1:30 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "1:30 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Sayalkudi",
    "To": "Tanjavure",
    "Time": "1:30 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Sayalkudi",
    "To": "Kanadukaththan",
    "Time": "1:30 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Sayalkudi",
    "To": "Pudukottai",
    "Time": "1:30 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Sayalkudi",
    "To": "Tirumayam",
    "Time": "1:30 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Sayalkudi",
    "To": "Gandarvakottai",
    "Time": "1:30 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "1:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "1:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "1:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "1:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "1:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "1:32 PM",
    "Destination": "Madurai",
    "Service": "KR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "1:32 PM",
    "Destination": "Madurai",
    "Service": "KR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "1:32 PM",
    "Destination": "Madurai",
    "Service": "KR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "1:32 PM",
    "Destination": "Madurai",
    "Service": "KR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "1:32 PM",
    "Destination": "Madurai",
    "Service": "KR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Kallal",
    "Time": "1:35 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Sivaganga",
    "Time": "1:35 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "1:35 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "1:35 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "1:35 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "1:35 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "1:35 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "1:35 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "1:35 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "1:35 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "1:35 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "1:35 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "1:35 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Nachiyaruram",
    "Time": "1:35 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "1:35 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "1:35 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "1:35 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "1:37 PM",
    "Destination": "Pudupattinam",
    "Service": "NNL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudupattinam",
    "Time": "1:37 PM",
    "Destination": "Pudupattinam",
    "Service": "NNL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "1:40 PM",
    "Destination": "Aranthanki",
    "Service": "APPASH",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "1:40 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "1:40 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "1:40 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Kalaiyar Kovil",
    "Time": "1:42 PM",
    "Destination": "Kalaiyar Kovil",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "1:42 PM",
    "Destination": "Kalaiyar Kovil",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "1:42 PM",
    "Destination": "Mannarkudi",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "1:42 PM",
    "Destination": "Mannarkudi",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Mannarkudi",
    "Time": "1:42 PM",
    "Destination": "Mannarkudi",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "1:42 PM",
    "Destination": "Mannarkudi",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Gandarvakottai",
    "Time": "1:42 PM",
    "Destination": "Mannarkudi",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "1:45 PM",
    "Destination": "Madurai",
    "Service": "KANNATHAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "1:45 PM",
    "Destination": "Madurai",
    "Service": "KANNATHAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "1:45 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "1:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "1:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "1:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "1:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "1:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thondi",
    "To": "Pudukottai",
    "Time": "1:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Trichy",
    "Time": "1:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Kanadukaththan",
    "Time": "1:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Keeranur",
    "Time": "1:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Tirumayam",
    "Time": "1:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "1:45 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "1:45 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "1:45 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "1:45 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "1:45 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "1:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "1:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "1:50 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "1:50 PM",
    "Destination": "Oriyur",
    "Service": "BHARATHI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Oriyur",
    "Time": "1:50 PM",
    "Destination": "Oriyur",
    "Service": "BHARATHI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "1:50 PM",
    "Destination": "Oriyur",
    "Service": "BHARATHI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "1:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "1:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "1:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "1:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "1:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "1:50 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "1:50 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tanjavure",
    "Time": "1:50 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Gandarvakottai",
    "Time": "1:50 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "1:50 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Kundrakudi",
    "Time": "1:50 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Dindigul",
    "Time": "1:50 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Naththam",
    "Time": "1:50 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Thiruppathur",
    "Time": "1:50 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Pillaiyar Patti",
    "Time": "1:50 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "1:52 PM",
    "Destination": "Devakottai",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "1:55 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "1:55 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "1:55 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "1:55 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Coimbatore",
    "Time": "1:55 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "1:55 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "1:55 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Karur",
    "Time": "1:55 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "1:55 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "2:00 PM",
    "Destination": "Paramakudi",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "2:00 PM",
    "Destination": "Paramakudi",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "2:00 PM",
    "Destination": "Paramakudi",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "2:00 PM",
    "Destination": "Paramakudi",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "2:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "2:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "2:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "2:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "2:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "2:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "2:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "2:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Konapattu",
    "Time": "2:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "2:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "2:00 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Palani",
    "Time": "2:00 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Naththam",
    "Time": "2:00 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Dindigul",
    "Time": "2:00 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "2:00 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "2:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Nachiyaruram",
    "Time": "2:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "2:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "2:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "2:05 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "2:05 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "2:05 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "2:05 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "2:05 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Thiruvadanai",
    "Time": "2:05 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Devakottai",
    "Time": "2:05 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Ramnad",
    "Time": "2:05 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "RS Mangalam",
    "Time": "2:05 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karur",
    "To": "Devakottai",
    "Time": "2:05 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karur",
    "To": "RS Mangalam",
    "Time": "2:05 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karur",
    "To": "Ramnad",
    "Time": "2:05 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karur",
    "To": "Rameshwaram",
    "Time": "2:05 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karur",
    "To": "Thiruvadanai",
    "Time": "2:05 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "2:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "2:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "2:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "2:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "2:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "2:08 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "2:10 PM",
    "Destination": "Tiruchendur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tiruchendur",
    "Time": "2:10 PM",
    "Destination": "Tiruchendur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "2:10 PM",
    "Destination": "Tiruchendur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "2:10 PM",
    "Destination": "Tiruchendur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "2:10 PM",
    "Destination": "Tiruchendur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "2:10 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "2:10 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "2:10 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Pudukottai",
    "To": "Devakottai",
    "Time": "2:10 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "2:10 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "2:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "2:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "2:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "2:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "2:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "2:10 PM",
    "Destination": "Madurai",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "2:10 PM",
    "Destination": "Madurai",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "2:10 PM",
    "Destination": "Madurai",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "2:10 PM",
    "Destination": "Madurai",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "2:10 PM",
    "Destination": "Madurai",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "2:17 PM",
    "Destination": "Devakottai",
    "Service": "KBL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "2:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "2:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "2:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "2:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "2:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivakasi",
    "Time": "2:18 PM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "2:18 PM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "2:18 PM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "2:18 PM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "2:18 PM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Avudaiyar Koil",
    "Time": "2:20 PM",
    "Destination": "Avudaiyar Koil",
    "Service": "NNL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Embal",
    "Time": "2:20 PM",
    "Destination": "Avudaiyar Koil",
    "Service": "NNL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Ponnamaravathy",
    "To": "Devakottai",
    "Time": "2:20 PM",
    "Destination": "Devakottai",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "2:22 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "2:22 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "2:22 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "2:22 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "2:22 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Thiruvadanai",
    "Time": "2:23 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Devakottai",
    "Time": "2:23 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Ramnad",
    "Time": "2:23 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "RS Mangalam",
    "Time": "2:23 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "2:23 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Dindigul",
    "Time": "2:23 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "2:23 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "2:23 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Naththam",
    "Time": "2:23 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "2:25 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "2:25 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "2:25 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "2:25 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "2:25 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "2:25 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "2:25 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "2:28 PM",
    "Destination": "Paramakudi",
    "Service": "SELVI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "2:28 PM",
    "Destination": "Paramakudi",
    "Service": "SELVI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "2:28 PM",
    "Destination": "Paramakudi",
    "Service": "SELVI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "2:28 PM",
    "Destination": "Paramakudi",
    "Service": "SELVI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "2:30 PM",
    "Destination": "Devakottai",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "2:30 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Gandarvakottai",
    "Time": "2:30 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "2:30 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "2:30 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tanjavure",
    "Time": "2:30 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "2:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "2:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "2:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "2:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "2:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Elayankudi",
    "Time": "2:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Kalaiyar Kovil",
    "Time": "2:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Paramakudi",
    "Time": "2:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Kallal",
    "Time": "2:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Pudukottai",
    "To": "Thondi",
    "Time": "2:35 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Pudukottai",
    "To": "Devakottai",
    "Time": "2:35 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Pudukottai",
    "To": "Thiruvadanai",
    "Time": "2:35 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "2:35 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "2:35 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "2:40 PM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "2:40 PM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kamudi",
    "Time": "2:40 PM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "2:40 PM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "2:40 PM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "2:40 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "2:40 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Mudhukulathur",
    "Time": "2:40 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "2:40 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "2:40 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "2:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "2:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "2:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "2:40 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "2:40 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "2:40 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "2:40 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "2:40 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "2:40 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Karur",
    "Time": "2:40 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "2:40 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "2:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "2:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "2:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "2:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "2:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Dindigul",
    "Time": "2:42 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Naththam",
    "Time": "2:42 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Erode",
    "Time": "2:42 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "2:42 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "2:42 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "2:45 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "2:45 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "2:45 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "2:45 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "2:45 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "2:45 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "2:45 AM",
    "Destination": "Dindigul",
    "Service": "DKT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "2:45 AM",
    "Destination": "Dindigul",
    "Service": "DKT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "2:45 AM",
    "Destination": "Dindigul",
    "Service": "DKT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "2:45 AM",
    "Destination": "Dindigul",
    "Service": "DKT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "2:45 AM",
    "Destination": "Dindigul",
    "Service": "DKT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Embal",
    "Time": "2:50 PM",
    "Destination": "Avudaiyar Koil",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Avudaiyar Koil",
    "Time": "2:50 PM",
    "Destination": "Avudaiyar Koil",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Nachiyaruram",
    "Time": "2:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "2:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "2:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "2:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "2:55 PM",
    "Destination": "Trichy",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "2:55 PM",
    "Destination": "Trichy",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "2:55 PM",
    "Destination": "Trichy",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "2:55 PM",
    "Destination": "Trichy",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "2:55 PM",
    "Destination": "Trichy",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "2:55 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "2:55 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "2:55 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "2:55 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "2:55 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Nachiyaruram",
    "Time": "2:55 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "2:55 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "3:00 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "3:00 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "3:00 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "3:00 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "3:00 AM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvetriyur",
    "Time": "3:00 AM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "3:00 AM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "3:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "3:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "3:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "3:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "3:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "3:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "3:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "3:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "3:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "3:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "3:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "3:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "3:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "3:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "3:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Devakottai",
    "Time": "3:05 PM",
    "Destination": "Devakottai",
    "Service": "LATHA",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Pudukottai",
    "To": "SR Pattanam",
    "Time": "3:05 PM",
    "Destination": "SR Pattanam",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Kallupatti",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tanjavure",
    "Time": "3:05 PM",
    "Destination": "Chidambaram",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure, Kumbakonam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "3:05 PM",
    "Destination": "Chidambaram",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure, Kumbakonam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Gandarvakottai",
    "Time": "3:05 PM",
    "Destination": "Chidambaram",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure, Kumbakonam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kumbakonam",
    "Time": "3:05 PM",
    "Destination": "Chidambaram",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure, Kumbakonam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Chidambaram",
    "Time": "3:05 PM",
    "Destination": "Chidambaram",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure, Kumbakonam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "3:05 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "3:05 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "3:05 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Palani",
    "Time": "3:05 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "3:05 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "3:08 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "3:10 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "3:10 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "3:10 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "3:10 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Mudhukulathur",
    "Time": "3:10 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "3:10 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "3:10 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "3:10 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "3:10 PM",
    "Destination": "Aranthanki",
    "Service": "SELVI",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Erwadi",
    "Time": "3:10 PM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "3:10 PM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "3:10 PM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "3:10 PM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "3:10 PM",
    "Destination": "Thuraiyur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thuraiyur",
    "Time": "3:10 PM",
    "Destination": "Thuraiyur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "3:10 PM",
    "Destination": "Thuraiyur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "3:10 PM",
    "Destination": "Thuraiyur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Kothamanagalam",
    "Time": "3:10 PM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Kanadukaththan",
    "Time": "3:10 PM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Rayavaram",
    "Time": "3:10 PM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Kadiyapatti",
    "Time": "3:10 PM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "3:10 PM",
    "Destination": "Madurai",
    "Service": "PRP",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "3:10 PM",
    "Destination": "Madurai",
    "Service": "PRP",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "3:10 PM",
    "Destination": "Madurai",
    "Service": "PRP",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "3:10 PM",
    "Destination": "Madurai",
    "Service": "PRP",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "3:10 PM",
    "Destination": "Madurai",
    "Service": "PRP",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Dindigul",
    "To": "Devakottai",
    "Time": "3:13 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "3:15 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "3:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "3:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "3:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "3:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "3:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "3:18 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Theni",
    "Time": "3:18 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "3:18 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "3:18 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "3:18 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "3:20 PM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "3:20 PM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "3:20 PM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "3:20 PM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "3:20 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Coimbatore",
    "Time": "3:20 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "3:20 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Naththam",
    "Time": "3:20 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Dindigul",
    "Time": "3:20 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pattukottai",
    "Time": "3:25 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Aranthanki",
    "Time": "3:25 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Aavdamm",
    "Time": "3:25 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "3:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "3:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "3:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "3:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "3:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "3:25 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "3:25 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "3:25 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "3:25 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "3:25 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "3:26 PM",
    "Destination": "Ramnad",
    "Service": "Government(1 to 7)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "3:26 PM",
    "Destination": "Ramnad",
    "Service": "Government(1 to 7)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "3:26 PM",
    "Destination": "Ramnad",
    "Service": "Government(1 to 7)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "3:26 PM",
    "Destination": "Ramnad",
    "Service": "Government(1 to 7)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "3:28 PM",
    "Destination": "Karankadu",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "3:28 PM",
    "Destination": "Karankadu",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "3:28 PM",
    "Destination": "Karankadu",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "3:28 PM",
    "Destination": "Karankadu",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Karankadu",
    "Time": "3:28 PM",
    "Destination": "Karankadu",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "3:30 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "3:30 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "3:30 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "3:30 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "3:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "3:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "3:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "3:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "3:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "3:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "3:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "3:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "3:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "3:35 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "3:35 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "3:35 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "3:35 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "3:35 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "3:35 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "3:35 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "3:35 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "3:35 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "3:35 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "3:35 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "3:35 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "3:35 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "3:35 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "3:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "3:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "3:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "3:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "3:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "3:40 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "3:40 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "3:40 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "3:40 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Pudukottai",
    "Time": "3:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Trichy",
    "Time": "3:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Kanadukaththan",
    "Time": "3:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Keeranur",
    "Time": "3:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Tirumayam",
    "Time": "3:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "3:40 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "3:40 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Dindigul",
    "Time": "3:40 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Naththam",
    "Time": "3:40 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "3:40 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "3:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "3:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "3:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "3:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "3:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "3:42 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Nachiyaruram",
    "Time": "3:42 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "3:42 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "3:42 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppuna Vasal",
    "Time": "3:44 PM",
    "Destination": "Thiruppuna Vasal",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "3:44 PM",
    "Destination": "Thiruppuna Vasal",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "3:44 PM",
    "Destination": "Thiruppuna Vasal",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "3:45 AM",
    "Destination": "Ramnad",
    "Service": "LAKKI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "3:45 AM",
    "Destination": "Ramnad",
    "Service": "LAKKI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "3:45 AM",
    "Destination": "Ramnad",
    "Service": "LAKKI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "3:45 AM",
    "Destination": "Ramnad",
    "Service": "LAKKI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Erode",
    "To": "Devakottai",
    "Time": "3:45 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Tirumayam",
    "Time": "3:45 PM",
    "Destination": "Salem",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Pudukottai",
    "Time": "3:45 PM",
    "Destination": "Salem",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Salem",
    "Time": "3:45 PM",
    "Destination": "Salem",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Trichy",
    "Time": "3:45 PM",
    "Destination": "Salem",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "3:46 PM",
    "Destination": "Pudukottai",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "3:46 PM",
    "Destination": "Pudukottai",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "3:46 PM",
    "Destination": "Pudukottai",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Oriyur",
    "Time": "3:50 PM",
    "Destination": "Oriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Thiruvadanai",
    "Time": "3:50 PM",
    "Destination": "Oriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "3:50 PM",
    "Destination": "Oriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tanjavure",
    "Time": "3:50 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "3:50 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "3:50 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "3:50 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Gandarvakottai",
    "Time": "3:50 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "3:53 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "3:53 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "3:53 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "3:53 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "3:53 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "3:55 PM",
    "Destination": "Paramakudi",
    "Service": "LAKSHMI",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "3:55 PM",
    "Destination": "Paramakudi",
    "Service": "LAKSHMI",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "3:55 PM",
    "Destination": "Paramakudi",
    "Service": "LAKSHMI",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "3:55 PM",
    "Destination": "Paramakudi",
    "Service": "LAKSHMI",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "3:55 PM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "3:55 PM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "3:55 PM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "3:55 PM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "3:55 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "3:55 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "3:55 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "3:55 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "3:55 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "3:57 PM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "3:57 PM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "3:57 PM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "3:57 PM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "3:57 PM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Devakottai",
    "Time": "3:58 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "4:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "4:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "4:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "4:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "4:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "4:00 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "4:00 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "4:00 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Sivaganga",
    "Time": "4:00 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "4:05 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "4:05 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "4:05 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "4:05 PM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "4:05 PM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "4:05 PM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "4:05 PM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "4:05 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "4:05 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tanjavure",
    "Time": "4:05 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Gandarvakottai",
    "Time": "4:05 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "4:05 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "4:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "4:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "4:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "4:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "4:05 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "4:05 PM",
    "Destination": "Kumuli",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai, Theni",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "4:05 PM",
    "Destination": "Kumuli",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai, Theni",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kumuli",
    "Time": "4:05 PM",
    "Destination": "Kumuli",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai, Theni",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "4:05 PM",
    "Destination": "Kumuli",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai, Theni",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "4:05 PM",
    "Destination": "Kumuli",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai, Theni",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "4:05 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivakasi",
    "Time": "4:05 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "4:05 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "4:05 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "4:05 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "4:10 AM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "4:10 AM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvetriyur",
    "Time": "4:10 AM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "4:10 PM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "4:10 PM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "4:10 PM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "4:10 PM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "4:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "4:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "4:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "4:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "4:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "4:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Konapattu",
    "Time": "4:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "4:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "4:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "4:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "4:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "4:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "4:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "4:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "4:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Palani",
    "Time": "4:10 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "4:10 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "4:10 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "4:10 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "4:10 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tiruppuvanam",
    "Time": "4:10 AM",
    "Destination": "Tiruppuvanam",
    "Service": "SPS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "4:10 AM",
    "Destination": "Tiruppuvanam",
    "Service": "SPS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivaganga",
    "Time": "4:10 AM",
    "Destination": "Tiruppuvanam",
    "Service": "SPS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "4:10 AM",
    "Destination": "Tiruppuvanam",
    "Service": "SPS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "4:13 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "4:13 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "4:13 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "4:13 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "4:13 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "4:13 AM",
    "Destination": "Naththam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "4:13 AM",
    "Destination": "Naththam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "4:13 AM",
    "Destination": "Naththam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "4:13 AM",
    "Destination": "Naththam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Kallal",
    "Time": "4:15 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Paramakudi",
    "Time": "4:15 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Elayankudi",
    "Time": "4:15 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Kalaiyar Kovil",
    "Time": "4:15 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "4:15 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Erode",
    "To": "Devakottai",
    "Time": "4:15 AM",
    "Destination": "Thiruvadanai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Erode",
    "To": "Thiruvadanai",
    "Time": "4:15 AM",
    "Destination": "Thiruvadanai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "4:15 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "4:15 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "4:15 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "4:15 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "4:15 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "4:18 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Chidambaram",
    "To": "Paramakudi",
    "Time": "4:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Chidambaram",
    "To": "Kallal",
    "Time": "4:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Chidambaram",
    "To": "Kalaiyar Kovil",
    "Time": "4:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Chidambaram",
    "To": "Elayankudi",
    "Time": "4:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Sivaganga",
    "To": "Aranthanki",
    "Time": "4:20 PM",
    "Destination": "Aranthanki",
    "Service": "KBL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "4:20 AM",
    "Destination": "RS Mangalam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "4:20 AM",
    "Destination": "RS Mangalam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "4:20 AM",
    "Destination": "RS Mangalam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "4:20 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "4:25 PM",
    "Destination": "Vedharnayam",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "4:25 PM",
    "Destination": "Vedharnayam",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Vedharnayam",
    "Time": "4:25 PM",
    "Destination": "Vedharnayam",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "4:25 PM",
    "Destination": "Vedharnayam",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "4:25 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Palani",
    "To": "Devakottai",
    "Time": "4:25 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "4:25 PM",
    "Destination": "Pudukottai",
    "Service": "AGASTIYA",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "4:25 PM",
    "Destination": "Pudukottai",
    "Service": "AGASTIYA",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "4:25 PM",
    "Destination": "Pudukottai",
    "Service": "AGASTIYA",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "4:25 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "4:25 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Nachiyaruram",
    "Time": "4:25 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "4:25 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivaganga",
    "Time": "4:30 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "4:30 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Embal",
    "Time": "4:30 AM",
    "Destination": "Avudaiyar Koil",
    "Service": "KBL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Avudaiyar Koil",
    "Time": "4:30 AM",
    "Destination": "Avudaiyar Koil",
    "Service": "KBL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "4:30 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Tiruppur",
    "To": "Ramnad",
    "Time": "4:30 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tiruppur",
    "To": "Thiruvadanai",
    "Time": "4:30 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tiruppur",
    "To": "RS Mangalam",
    "Time": "4:30 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tiruppur",
    "To": "Devakottai",
    "Time": "4:30 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Sivaganga",
    "To": "Devakottai",
    "Time": "4:30 PM",
    "Destination": "Devakottai",
    "Service": "ROYAL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "4:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "4:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "4:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "4:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "4:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "4:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "4:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "4:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "4:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "4:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "4:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "4:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "4:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "4:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "4:30 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "4:30 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "4:30 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "4:30 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "4:30 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "4:30 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Samayapuram",
    "To": "Thiruvadanai",
    "Time": "4:32 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Samayapuram",
    "To": "Ramnad",
    "Time": "4:32 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Samayapuram",
    "To": "Devakottai",
    "Time": "4:32 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Samayapuram",
    "To": "RS Mangalam",
    "Time": "4:32 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Samayapuram",
    "To": "Rameshwaram",
    "Time": "4:32 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "4:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "4:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "4:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "4:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "4:32 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Coimbatore",
    "To": "Thiruvadanai",
    "Time": "4:35 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Coimbatore",
    "To": "Thondi",
    "Time": "4:35 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Coimbatore",
    "To": "Devakottai",
    "Time": "4:35 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Theni",
    "To": "Devakottai",
    "Time": "4:35 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "SR.Pattanam",
    "To": "Pudukottai",
    "Time": "4:35 PM",
    "Destination": "Pudukottai",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "SR.Pattanam",
    "To": "Tirumayam",
    "Time": "4:35 PM",
    "Destination": "Pudukottai",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "SR.Pattanam",
    "To": "Kanadukaththan",
    "Time": "4:35 PM",
    "Destination": "Pudukottai",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "4:35 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "4:35 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "4:35 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "4:35 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "4:35 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "4:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "4:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "4:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Erwadi",
    "Time": "4:40 PM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "RS Mangalam",
    "Time": "4:40 PM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Devakottai",
    "Time": "4:40 PM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Thiruvadanai",
    "Time": "4:40 PM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "4:40 AM",
    "Destination": "Paramakudi",
    "Service": "RT",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "4:40 AM",
    "Destination": "Paramakudi",
    "Service": "RT",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "4:40 AM",
    "Destination": "Paramakudi",
    "Service": "RT",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "4:40 AM",
    "Destination": "Paramakudi",
    "Service": "RT",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "4:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "4:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "4:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "4:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "4:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "4:40 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "4:40 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "4:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "4:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "4:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "4:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "4:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "4:41 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tiruppur",
    "To": "Devakottai",
    "Time": "4:43 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "4:45 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "4:45 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "4:45 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "4:45 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Peravoorani",
    "To": "Devakottai",
    "Time": "4:45 PM",
    "Destination": "Devakottai",
    "Service": "DR",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "4:45 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "4:45 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "4:50 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "4:50 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "4:50 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "4:50 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "4:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "4:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "4:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "4:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "4:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "4:50 AM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "4:50 AM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "4:50 AM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "4:50 AM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "4:50 AM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "4:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "4:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "4:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "4:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "4:50 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Nachiyaruram",
    "Time": "4:50 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "4:50 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Aavdamm",
    "Time": "4:52 PM",
    "Destination": "Nagoor",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Aranthanki",
    "Time": "4:52 PM",
    "Destination": "Nagoor",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Nagoor",
    "Time": "4:52 PM",
    "Destination": "Nagoor",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Pattukottai",
    "Time": "4:52 PM",
    "Destination": "Nagoor",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kundrakudi",
    "Time": "4:52 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Thiruppathur",
    "Time": "4:52 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pillaiyar Patti",
    "Time": "4:52 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "4:55 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "4:55 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "4:55 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "4:55 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "4:55 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Chennai",
    "To": "Ramnad",
    "Time": "4:55 AM",
    "Destination": "Keelakarai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Chennai",
    "To": "Thiruvadanai",
    "Time": "4:55 AM",
    "Destination": "Keelakarai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Chennai",
    "To": "Devakottai",
    "Time": "4:55 AM",
    "Destination": "Keelakarai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Chennai",
    "To": "Keelakarai",
    "Time": "4:55 AM",
    "Destination": "Keelakarai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Chennai",
    "To": "RS Mangalam",
    "Time": "4:55 AM",
    "Destination": "Keelakarai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "4:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "4:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "4:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "4:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "4:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "4:56 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "4:56 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "4:56 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "4:56 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "4:56 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Elayankudi",
    "Time": "5:00 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Kallal",
    "Time": "5:00 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Paramakudi",
    "Time": "5:00 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Kalaiyar Kovil",
    "Time": "5:00 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Meemisal",
    "Time": "5:00 AM",
    "Destination": "Meemisal",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "5:00 AM",
    "Destination": "Meemisal",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "5:00 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Thiruvadanai",
    "Time": "5:00 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Thondi",
    "Time": "5:00 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "5:00 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Erwadi",
    "Time": "5:00 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "5:00 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "5:00 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "5:00 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "5:00 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tanjavure",
    "Time": "5:00 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "5:00 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Gandarvakottai",
    "Time": "5:00 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "5:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "5:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "5:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "5:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "5:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "5:00 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "5:00 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "5:00 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Palani",
    "Time": "5:00 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "5:00 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "KKL",
    "To": "Madurai",
    "Time": "5:03 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "KKL",
    "To": "Pillaiyar Patti",
    "Time": "5:03 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "KKL",
    "To": "Thiruppathur",
    "Time": "5:03 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "KKL",
    "To": "Melur",
    "Time": "5:03 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "KKL",
    "To": "Kundrakudi",
    "Time": "5:03 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kattumavadi",
    "Time": "5:05 PM",
    "Destination": "Pattukottai",
    "Service": "SELVI",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Kattumavadi",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "5:05 PM",
    "Destination": "Pattukottai",
    "Service": "SELVI",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Kattumavadi",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "5:05 PM",
    "Destination": "Pattukottai",
    "Service": "SELVI",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Kattumavadi",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "5:05 PM",
    "Destination": "Paramakudi",
    "Service": "AVR",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "5:05 PM",
    "Destination": "Paramakudi",
    "Service": "AVR",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "5:05 PM",
    "Destination": "Paramakudi",
    "Service": "AVR",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "5:05 PM",
    "Destination": "Paramakudi",
    "Service": "AVR",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tiruvetriyur",
    "To": "Trichy",
    "Time": "5:05 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tiruvetriyur",
    "To": "Pudukottai",
    "Time": "5:05 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "5:07 AM",
    "Destination": "Mudhukulathur",
    "Service": "AGAMATHIYA",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "5:07 AM",
    "Destination": "Mudhukulathur",
    "Service": "AGAMATHIYA",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Mudhukulathur",
    "Time": "5:07 AM",
    "Destination": "Mudhukulathur",
    "Service": "AGAMATHIYA",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "5:07 AM",
    "Destination": "Mudhukulathur",
    "Service": "AGAMATHIYA",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "5:07 AM",
    "Destination": "Mudhukulathur",
    "Service": "AGAMATHIYA",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "5:10 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "5:10 PM",
    "Destination": "Devakottai",
    "Service": "NNS",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "5:10 AM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "5:10 AM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "5:10 AM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "5:10 AM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "5:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "5:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "5:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "5:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "5:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "5:10 AM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "5:10 AM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "5:10 AM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "5:10 AM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "5:10 AM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ervadi",
    "To": "Melur",
    "Time": "5:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Ervadi",
    "To": "Madurai",
    "Time": "5:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Ervadi",
    "To": "Kundrakudi",
    "Time": "5:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Ervadi",
    "To": "Thiruppathur",
    "Time": "5:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Ervadi",
    "To": "Pillaiyar Patti",
    "Time": "5:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "5:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "5:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "5:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "5:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "5:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Meemisal",
    "Time": "5:15 PM",
    "Destination": "Meemisal",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "5:15 PM",
    "Destination": "Meemisal",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "5:15 PM",
    "Destination": "Devakottai",
    "Service": "NNS",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "5:15 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Chidambaram",
    "To": "Devakottai",
    "Time": "5:15 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "5:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "5:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "5:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "5:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "5:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "5:15 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "5:15 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Naththam",
    "Time": "5:15 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Dindigul",
    "Time": "5:15 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "5:15 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "5:15 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Dindigul",
    "Time": "5:15 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "5:15 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Naththam",
    "Time": "5:15 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "5:15 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "5:17 PM",
    "Destination": "Devakottai",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "5:17 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "5:17 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "5:17 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "5:17 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "5:17 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "5:20 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "5:20 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "5:20 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Sivaganga",
    "To": "Aranthanki",
    "Time": "5:20 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Sivaganga",
    "To": "Pattukottai",
    "Time": "5:20 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Sivaganga",
    "To": "Aavdamm",
    "Time": "5:20 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "5:20 AM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "5:20 AM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvetriyur",
    "Time": "5:20 AM",
    "Destination": "Thiruvetriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "5:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "5:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "5:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "5:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "5:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "5:21 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "5:21 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "5:21 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "5:21 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "5:21 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "5:25 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "5:25 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "5:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "5:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "5:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "5:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "5:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "5:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "5:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "5:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "5:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "5:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "5:28 PM",
    "Destination": "Devakottai",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "5:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "5:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "5:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "5:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "5:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "5:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "5:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "5:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "5:30 PM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "5:30 PM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "5:30 PM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "5:30 PM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "5:30 PM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "5:30 AM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "5:30 AM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "5:30 AM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "5:30 AM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "5:30 AM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thondi",
    "Time": "5:33 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "5:33 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "5:33 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "5:33 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "5:33 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "5:33 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "5:33 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "5:33 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Kundrakudi",
    "Time": "5:33 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Pillaiyar Patti",
    "Time": "5:33 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Madurai",
    "Time": "5:33 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Melur",
    "Time": "5:33 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Thiruppathur",
    "Time": "5:33 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "5:35 PM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kamudi",
    "Time": "5:35 PM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "5:35 PM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "5:35 PM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "5:35 PM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "5:35 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "5:35 PM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "5:35 PM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "5:35 PM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "5:35 PM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "5:35 PM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "5:35 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "5:35 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "5:35 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Palani",
    "Time": "5:35 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "5:35 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Kumbakonam",
    "To": "RS Mangalam",
    "Time": "5:37 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Kumbakonam",
    "To": "Thiruvadanai",
    "Time": "5:37 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Kumbakonam",
    "To": "Devakottai",
    "Time": "5:37 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Kumbakonam",
    "To": "Ramnad",
    "Time": "5:37 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "5:40 AM",
    "Destination": "Madurai",
    "Service": "KANNATHAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "5:40 AM",
    "Destination": "Madurai",
    "Service": "KANNATHAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "5:40 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "5:40 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Mudhukulathur",
    "Time": "5:40 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "5:40 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "5:40 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "5:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "5:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "5:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "5:40 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thondi",
    "Time": "5:40 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "5:40 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "5:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "5:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "5:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "5:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "5:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "5:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "5:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "5:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "5:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "5:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "5:40 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "5:40 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thirunelveli",
    "Time": "5:40 PM",
    "Destination": "Thirunelveli",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "5:40 PM",
    "Destination": "Thirunelveli",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "5:40 PM",
    "Destination": "Thirunelveli",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "5:40 PM",
    "Destination": "Thirunelveli",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "5:40 PM",
    "Destination": "Thirunelveli",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "5:43 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "5:43 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "5:43 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "5:43 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "5:43 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "5:45 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "5:45 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "5:45 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Rayavaram",
    "To": "Thiruvadanai",
    "Time": "5:45 PM",
    "Destination": "Oriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rayavaram",
    "To": "Oriyur",
    "Time": "5:45 PM",
    "Destination": "Oriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rayavaram",
    "To": "Devakottai",
    "Time": "5:45 PM",
    "Destination": "Oriyur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "5:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "5:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "5:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "5:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "5:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "5:46 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "5:46 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "5:46 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "5:46 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "5:46 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Coimbatore",
    "To": "Devakottai",
    "Time": "5:47 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "5:49 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "5:50 AM",
    "Destination": "Oriyur",
    "Service": "BHARATHI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "5:50 AM",
    "Destination": "Oriyur",
    "Service": "BHARATHI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Oriyur",
    "Time": "5:50 AM",
    "Destination": "Oriyur",
    "Service": "BHARATHI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "5:50 AM",
    "Destination": "Trichy",
    "Service": "NNL",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "5:50 AM",
    "Destination": "Trichy",
    "Service": "NNL",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "5:50 AM",
    "Destination": "Trichy",
    "Service": "NNL",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Konapattu",
    "Time": "5:50 AM",
    "Destination": "Trichy",
    "Service": "NNL",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "5:50 AM",
    "Destination": "Trichy",
    "Service": "NNL",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "5:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "5:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "5:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "5:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "5:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "5:52 PM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "5:52 PM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "5:52 PM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "5:52 PM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "5:52 PM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Embal",
    "Time": "5:55 PM",
    "Destination": "Avudaiyar Koil",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Avudaiyar Koil",
    "Time": "5:55 PM",
    "Destination": "Avudaiyar Koil",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "5:55 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "5:55 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "5:55 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "5:55 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "5:55 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "5:55 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Karur",
    "Time": "5:55 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "5:55 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tiruppur",
    "Time": "5:55 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "5:55 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "5:57 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivaganga",
    "Time": "5:57 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "5:57 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "5:58 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tiruppur",
    "Time": "5:58 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "5:58 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "5:58 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "5:58 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "6:00 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "6:00 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "6:00 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "6:00 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Sivaganga",
    "Time": "6:00 PM",
    "Destination": "Sivaganga",
    "Service": "ROYAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kallal",
    "Time": "6:00 PM",
    "Destination": "Sivaganga",
    "Service": "ROYAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Erode",
    "To": "Aranthanki",
    "Time": "6:00 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Avudaiyar Koil",
    "Time": "6:00 AM",
    "Destination": "Avudaiyar Koil",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Embal",
    "Time": "6:00 AM",
    "Destination": "Avudaiyar Koil",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "6:00 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "6:00 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "6:00 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Mudhukulathur",
    "Time": "6:00 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Kalaiyar Kovil",
    "Time": "6:00 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Elayankudi",
    "Time": "6:00 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Devakottai",
    "Time": "6:00 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Paramakudi",
    "Time": "6:00 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "6:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "6:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "6:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "6:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "6:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Gandarvakottai",
    "Time": "6:00 PM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Tanjavure",
    "Time": "6:00 PM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Pudukottai",
    "Time": "6:00 PM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Kumbakonam",
    "Time": "6:00 PM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Kanadukaththan",
    "Time": "6:00 PM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "6:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "6:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "6:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "6:02 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "6:02 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "6:02 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "6:02 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "6:02 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "6:02 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Naththam",
    "Time": "6:02 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Dindigul",
    "Time": "6:02 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Palani",
    "Time": "6:02 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "6:02 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "6:05 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "6:05 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "6:05 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "6:05 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "6:05 PM",
    "Destination": "Thiruvadanai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "6:05 PM",
    "Destination": "Thiruvadanai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "6:05 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Thiruvadanai",
    "Time": "6:05 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Thondi",
    "Time": "6:05 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tiruppur",
    "To": "Devakottai",
    "Time": "6:05 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "6:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "6:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "6:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "6:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "6:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "6:05 PM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "6:05 PM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:05 PM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Rangiyam",
    "To": "Pudhuvayal",
    "Time": "6:10 PM",
    "Destination": "Pudhuvayal",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Sakkottai",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Ramnad",
    "Time": "6:10 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Devakottai",
    "Time": "6:10 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "RS Mangalam",
    "Time": "6:10 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Rameshwaram",
    "Time": "6:10 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Thiruvadanai",
    "Time": "6:10 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Coimbatore",
    "To": "Devakottai",
    "Time": "6:10 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tanjavure",
    "Time": "6:10 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Gandarvakottai",
    "Time": "6:10 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "6:10 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "6:10 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "6:10 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "6:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "6:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "6:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "6:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "6:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "6:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "6:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "6:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "6:10 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Nachiyaruram",
    "Time": "6:10 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "6:10 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "6:10 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "6:11 PM",
    "Destination": "Trichy",
    "Service": "Government(1 to 4)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "6:11 PM",
    "Destination": "Trichy",
    "Service": "Government(1 to 4)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "6:15 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "6:15 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "6:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "6:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "6:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Rameshwaram",
    "Time": "6:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "6:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "6:15 PM",
    "Destination": "Aranthanki",
    "Service": "Latha",
    "stops": "Pallathur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Karur",
    "Time": "6:15 AM",
    "Destination": "Erode",
    "Service": "Government(1-2-3)",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "6:15 AM",
    "Destination": "Erode",
    "Service": "Government(1-2-3)",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "6:15 AM",
    "Destination": "Erode",
    "Service": "Government(1-2-3)",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "6:15 AM",
    "Destination": "Erode",
    "Service": "Government(1-2-3)",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Erode",
    "Time": "6:15 AM",
    "Destination": "Erode",
    "Service": "Government(1-2-3)",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivaganga",
    "Time": "6:15 AM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:15 AM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:15 AM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "6:15 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:15 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:15 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "6:15 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "6:15 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "6:17 AM",
    "Destination": "Samayapuram",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai,Keeranur, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "6:17 AM",
    "Destination": "Samayapuram",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai,Keeranur, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "6:17 AM",
    "Destination": "Samayapuram",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai,Keeranur, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "6:17 AM",
    "Destination": "Samayapuram",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai,Keeranur, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Samayapuram",
    "Time": "6:17 AM",
    "Destination": "Samayapuram",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai,Keeranur, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:18 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivaganga",
    "Time": "6:18 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:18 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "6:20 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "SR Pattanam",
    "Time": "6:20 AM",
    "Destination": "SR Pattanam",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Kallupatti",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "6:20 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:20 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "6:20 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "6:20 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:20 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "6:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "6:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "6:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "6:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "6:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:21 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "6:21 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "6:21 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "6:21 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:21 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "6:25 AM",
    "Destination": "Madurai",
    "Service": "SORNAVAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "6:25 AM",
    "Destination": "Madurai",
    "Service": "SORNAVAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Aavdamm",
    "Time": "6:25 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pattukottai",
    "Time": "6:25 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Aranthanki",
    "Time": "6:25 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "6:25 PM",
    "Destination": "Devakottai",
    "Service": "KR",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "6:25 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "6:25 PM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "6:25 PM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "6:25 PM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "6:25 PM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "6:25 PM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "6:25 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tanjavure",
    "Time": "6:25 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "6:25 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Gandarvakottai",
    "Time": "6:25 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "6:25 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "6:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "6:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "6:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "6:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "6:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "6:27 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "6:27 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "6:27 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "6:27 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "6:27 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "6:28 PM",
    "Destination": "Ramnad",
    "Service": "Government(1 to 7)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "6:28 PM",
    "Destination": "Ramnad",
    "Service": "Government(1 to 7)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "6:28 PM",
    "Destination": "Ramnad",
    "Service": "Government(1 to 7)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "6:28 PM",
    "Destination": "Ramnad",
    "Service": "Government(1 to 7)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "6:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "6:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "6:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "6:30 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "6:30 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "6:30 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "6:30 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "6:30 PM",
    "Destination": "Aranthanki",
    "Service": "SELVI",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "6:30 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "6:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "6:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "6:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "6:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "6:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "6:32 PM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "6:32 PM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "6:32 PM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "6:32 PM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "6:32 PM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "6:33 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "6:33 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "6:33 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "6:33 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "6:33 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Elayankudi",
    "Time": "6:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Kallal",
    "Time": "6:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Paramakudi",
    "Time": "6:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Kalaiyar Kovil",
    "Time": "6:35 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "6:35 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "6:35 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "6:35 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "6:35 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "6:35 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "6:35 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "6:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "6:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "6:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "6:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "6:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:36 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "6:36 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Theni",
    "Time": "6:36 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "6:36 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:36 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "6:37 AM",
    "Destination": "Pudupattinam",
    "Service": "NNL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudupattinam",
    "Time": "6:37 AM",
    "Destination": "Pudupattinam",
    "Service": "NNL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "6:40 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "6:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "6:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "6:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "6:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "6:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Pudukottai",
    "Time": "6:40 PM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Tanjavure",
    "Time": "6:40 PM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Gandarvakottai",
    "Time": "6:40 PM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Kumbakonam",
    "Time": "6:40 PM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Kanadukaththan",
    "Time": "6:40 PM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "6:40 PM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:40 PM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "6:40 PM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:40 PM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "6:40 PM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "6:42 PM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "6:42 PM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:42 PM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "6:42 PM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:42 PM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Palani",
    "Time": "6:43 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:43 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:43 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "6:43 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "6:43 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Avudaiyar Koil",
    "Time": "6:45 AM",
    "Destination": "Avudaiyar Koil",
    "Service": "NNL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Embal",
    "Time": "6:45 AM",
    "Destination": "Avudaiyar Koil",
    "Service": "NNL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "6:45 PM",
    "Destination": "Devakottai",
    "Service": "LAKKI",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "6:45 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "6:45 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "6:45 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "6:45 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tiruvetriyur",
    "To": "Keeranur",
    "Time": "6:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tiruvetriyur",
    "To": "Tirumayam",
    "Time": "6:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tiruvetriyur",
    "To": "Kanadukaththan",
    "Time": "6:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tiruvetriyur",
    "To": "Trichy",
    "Time": "6:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tiruvetriyur",
    "To": "Pudukottai",
    "Time": "6:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Nachiyaruram",
    "Time": "6:45 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "6:45 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "6:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "6:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "6:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "6:47 AM",
    "Destination": "Madurai",
    "Service": "KR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "6:47 AM",
    "Destination": "Madurai",
    "Service": "KR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "6:47 AM",
    "Destination": "Madurai",
    "Service": "KR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "6:47 AM",
    "Destination": "Madurai",
    "Service": "KR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "6:47 AM",
    "Destination": "Madurai",
    "Service": "KR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Mudhukulathur",
    "Time": "6:50 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "6:50 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "6:50 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "6:50 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "6:50 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Pattukottai",
    "Time": "6:50 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Aavdamm",
    "Time": "6:50 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Aranthanki",
    "Time": "6:50 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "6:50 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Rameshwaram",
    "Time": "6:50 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "RS Mangalam",
    "Time": "6:50 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Devakottai",
    "Time": "6:50 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Ramnad",
    "Time": "6:50 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Thiruvadanai",
    "Time": "6:50 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "6:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "6:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "6:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "6:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "6:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "6:50 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Nachiyaruram",
    "Time": "6:50 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "6:50 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "6:50 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Thiruvadanai",
    "Time": "6:55 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Thondi",
    "Time": "6:55 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "6:55 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "6:55 AM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "6:55 AM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "6:55 AM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "6:55 AM",
    "Destination": "Ramnad",
    "Service": "KSS",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "6:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "6:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "6:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "6:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "6:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "6:55 AM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "6:55 AM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "6:55 AM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "6:55 AM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "6:55 AM",
    "Destination": "Trichy",
    "Service": "Government(PP)",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Pudhuvayal",
    "To": "Vempathur",
    "Time": "6:55 AM",
    "Destination": "Vempathur",
    "Service": "ALAGARMA",
    "stops": "Vempathur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "6:55 AM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kundrakudi, Pillaiyar Patti, Tirumayam, Pudukottai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "6:55 AM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kundrakudi, Pillaiyar Patti, Tirumayam, Pudukottai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "6:55 AM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kundrakudi, Pillaiyar Patti, Tirumayam, Pudukottai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "6:55 AM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kundrakudi, Pillaiyar Patti, Tirumayam, Pudukottai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:55 AM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kundrakudi, Pillaiyar Patti, Tirumayam, Pudukottai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "6:57 PM",
    "Destination": "Thiruppathur",
    "Service": "KBL",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Nachiyaruram",
    "Time": "6:57 PM",
    "Destination": "Thiruppathur",
    "Service": "KBL",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "6:58 AM",
    "Destination": "Aranthanki",
    "Service": "APPASH",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "6:58 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Mudhukulathur",
    "Time": "6:58 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "6:58 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "6:58 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "6:58 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "6:58 AM",
    "Destination": "Devakottai",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "6:58 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "6:58 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "6:58 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "6:58 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "6:58 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "7:00 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "7:00 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "7:00 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "7:00 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kamudi",
    "Time": "7:00 AM",
    "Destination": "Kamudi",
    "Service": "Sivaganga",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "7:00 AM",
    "Destination": "Kamudi",
    "Service": "Sivaganga",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "7:00 AM",
    "Destination": "Kamudi",
    "Service": "Sivaganga",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "7:00 AM",
    "Destination": "Kamudi",
    "Service": "Sivaganga",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "7:00 AM",
    "Destination": "Kamudi",
    "Service": "Sivaganga",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "7:00 PM",
    "Destination": "Peravoorani",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Peravoorani",
    "Time": "7:00 PM",
    "Destination": "Peravoorani",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "PLI",
    "To": "Thiruvadanai",
    "Time": "7:00 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "PLI",
    "To": "Devakottai",
    "Time": "7:00 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "PLI",
    "To": "Thondi",
    "Time": "7:00 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "7:00 AM",
    "Destination": "Paramakudi",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "7:00 AM",
    "Destination": "Paramakudi",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "7:00 AM",
    "Destination": "Paramakudi",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "7:00 AM",
    "Destination": "Paramakudi",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "7:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "7:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "7:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "7:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "7:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "7:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "7:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "7:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "7:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "7:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:00 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "7:00 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "7:00 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "7:00 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:00 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "7:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "7:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "7:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "7:05 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "7:05 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "7:05 PM",
    "Destination": "Thiruvannamalai",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "7:05 PM",
    "Destination": "Thiruvannamalai",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvannamalai",
    "Time": "7:05 PM",
    "Destination": "Thiruvannamalai",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "7:05 PM",
    "Destination": "Thiruvannamalai",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "7:05 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "7:05 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Naththam",
    "Time": "7:05 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "7:05 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Dindigul",
    "Time": "7:05 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "TV Malai",
    "To": "Kundrakudi",
    "Time": "7:05 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "TV Malai",
    "To": "Pillaiyar Patti",
    "Time": "7:05 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "TV Malai",
    "To": "Thiruppathur",
    "Time": "7:05 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "TV Malai",
    "To": "Madurai",
    "Time": "7:05 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "TV Malai",
    "To": "Melur",
    "Time": "7:05 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "7:07 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "7:07 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "7:07 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "7:07 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "7:07 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "7:07 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "7:07 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "7:07 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "7:07 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "7:07 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Ponnamaravathy",
    "To": "Devakottai",
    "Time": "7:09 AM",
    "Destination": "Devakottai",
    "Service": "KBL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "7:09 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "7:09 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "7:09 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "7:09 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "7:09 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Mudhukulathur",
    "Time": "7:10 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "7:10 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "7:10 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "7:10 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "7:10 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "7:10 AM",
    "Destination": "Perumaruth",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Perumaruth",
    "Time": "7:10 AM",
    "Destination": "Perumaruth",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "7:10 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "7:10 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "7:10 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "7:10 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "7:10 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "7:10 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "7:10 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Rayavaram",
    "Time": "7:10 AM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kadiyapatti",
    "Time": "7:10 AM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kothamanagalam",
    "Time": "7:10 AM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "7:10 AM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "7:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "7:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "7:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "7:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "7:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "7:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "7:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "7:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "7:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "7:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Salem",
    "To": "Ramnad",
    "Time": "7:13 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Salem",
    "To": "Devakottai",
    "Time": "7:13 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Salem",
    "To": "RS Mangalam",
    "Time": "7:13 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Salem",
    "To": "Thiruvadanai",
    "Time": "7:13 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "7:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "7:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "7:15 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "7:15 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "7:15 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Aranthanki",
    "Time": "7:15 PM",
    "Destination": "Peravoorani",
    "Service": "DR",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Peravoorani",
    "Time": "7:15 PM",
    "Destination": "Peravoorani",
    "Service": "DR",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "7:15 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "7:15 AM",
    "Destination": "Devakottai",
    "Service": "AGAMATHIYA",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "7:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "7:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "7:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "7:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "7:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "7:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "7:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "7:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "7:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "7:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "7:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "7:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "7:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "7:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "7:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Mudhukulathur",
    "Time": "7:20 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Kallal",
    "Time": "7:20 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Paramakudi",
    "Time": "7:20 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Elayankudi",
    "Time": "7:20 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Kalaiyar Kovil",
    "Time": "7:20 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "7:20 PM",
    "Destination": "Devakottai",
    "Service": "ALAGAR",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "7:20 AM",
    "Destination": "Devakottai",
    "Service": "ALAGAR",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "7:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "7:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "7:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "7:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "7:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "7:20 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "7:20 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Karur",
    "Time": "7:20 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tiruppur",
    "Time": "7:20 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "7:20 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:20 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "7:20 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "7:20 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:20 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "7:20 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivakasi",
    "Time": "7:21 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:21 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:21 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "7:21 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "7:21 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "7:22 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:22 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "7:22 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:22 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "7:22 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "7:23 AM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "7:23 AM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "7:23 AM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "7:23 AM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "7:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "7:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "7:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "7:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Dindigul",
    "To": "Aranthanki",
    "Time": "7:25 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "7:25 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "7:25 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "7:25 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "7:25 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "7:25 PM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Pudukottai",
    "Time": "7:25 AM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Gandarvakottai",
    "Time": "7:25 AM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Kumbakonam",
    "Time": "7:25 AM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Kanadukaththan",
    "Time": "7:25 AM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Tanjavure",
    "Time": "7:25 AM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "7:28 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "7:28 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "7:28 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "7:28 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "7:28 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "7:30 PM",
    "Destination": "Madurai",
    "Service": "KANNATHAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "7:30 PM",
    "Destination": "Madurai",
    "Service": "KANNATHAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Mudhukulathur",
    "Time": "7:30 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "7:30 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "7:30 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "7:30 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "7:30 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Thiruvadanai",
    "Time": "7:30 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Devakottai",
    "Time": "7:30 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "RS Mangalam",
    "Time": "7:30 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Ramnad",
    "Time": "7:30 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Rameshwaram",
    "Time": "7:30 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "7:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "7:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "7:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "7:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "7:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "7:30 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "7:30 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "7:30 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "7:30 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "7:30 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "7:32 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "7:32 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "7:32 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Srirangam",
    "To": "Thiruvadanai",
    "Time": "7:33 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Srirangam",
    "To": "Devakottai",
    "Time": "7:33 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Srirangam",
    "To": "Thondi",
    "Time": "7:33 PM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "7:35 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "7:35 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "7:35 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Rayavaram",
    "To": "Devakottai",
    "Time": "7:35 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "SR.Pattanam",
    "To": "Pudukottai",
    "Time": "7:35 AM",
    "Destination": "Pudukottai",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "SR.Pattanam",
    "To": "Kanadukaththan",
    "Time": "7:35 AM",
    "Destination": "Pudukottai",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "SR.Pattanam",
    "To": "Tirumayam",
    "Time": "7:35 AM",
    "Destination": "Pudukottai",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "7:35 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "7:35 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:35 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "7:35 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:35 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:35 AM",
    "Destination": "Paramakudi",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivaganga",
    "Time": "7:35 AM",
    "Destination": "Paramakudi",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:35 AM",
    "Destination": "Paramakudi",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "7:35 AM",
    "Destination": "Paramakudi",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "7:35 AM",
    "Destination": "Nagercoil",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai, Tirunelveli",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:35 AM",
    "Destination": "Nagercoil",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai, Tirunelveli",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:35 AM",
    "Destination": "Nagercoil",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai, Tirunelveli",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "7:35 AM",
    "Destination": "Nagercoil",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai, Tirunelveli",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Nagercoil",
    "Time": "7:35 AM",
    "Destination": "Nagercoil",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai, Tirunelveli",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Devakottai",
    "Time": "7:36 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "7:36 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "7:36 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "7:36 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "7:36 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "7:36 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "7:36 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "7:36 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "7:36 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "7:36 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "7:36 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "7:37 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Thondi",
    "Time": "7:37 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Thiruvadanai",
    "Time": "7:37 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "7:37 PM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram, Tiruppur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Mettupalayam",
    "Time": "7:37 PM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram, Tiruppur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:37 PM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram, Tiruppur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tiruppur",
    "Time": "7:37 PM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram, Tiruppur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "7:37 PM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram, Tiruppur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "7:37 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "7:37 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "7:37 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "7:37 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "7:37 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "7:40 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "7:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "7:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "7:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudhuvayal",
    "Time": "7:40 PM",
    "Destination": "Pudhuvayal",
    "Service": "KBL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Sakkottai",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "7:40 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "7:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "7:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "7:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "7:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "7:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "7:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "7:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "7:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "7:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "7:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Thiruppathur",
    "Time": "7:40 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Kundrakudi",
    "Time": "7:40 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Pillaiyar Patti",
    "Time": "7:40 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Ponnamaravathy",
    "To": "Devakottai",
    "Time": "7:41 PM",
    "Destination": "Devakottai",
    "Service": "KBL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "7:42 AM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "7:42 AM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "7:42 AM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "7:42 AM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "7:45 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "7:45 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "7:45 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "7:45 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "7:45 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "7:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "7:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "7:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "7:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "7:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "7:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "7:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "7:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "7:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "7:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "7:45 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "7:45 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Nachiyaruram",
    "Time": "7:45 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "7:45 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "7:45 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "7:45 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Nachiyaruram",
    "Time": "7:45 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "7:45 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "7:46 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "7:46 AM",
    "Destination": "Kodaikanal",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kodaikanal",
    "Time": "7:46 AM",
    "Destination": "Kodaikanal",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:46 AM",
    "Destination": "Kodaikanal",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:46 AM",
    "Destination": "Kodaikanal",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "7:46 AM",
    "Destination": "Kodaikanal",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Nachiyaruram",
    "Time": "7:47 AM",
    "Destination": "Thiruppathur",
    "Service": "KBL",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "7:47 AM",
    "Destination": "Thiruppathur",
    "Service": "KBL",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Sivaganga",
    "Time": "7:50 AM",
    "Destination": "Sivaganga",
    "Service": "ROYAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kallal",
    "Time": "7:50 AM",
    "Destination": "Sivaganga",
    "Service": "ROYAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Sivaganga",
    "To": "Aranthanki",
    "Time": "7:50 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "7:50 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "7:50 AM",
    "Destination": "Devakottai",
    "Service": "NNS",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "7:50 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "7:50 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "7:50 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "7:50 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "7:50 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "7:50 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:50 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:50 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "7:50 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "7:50 AM",
    "Destination": "Madurai",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:50 AM",
    "Destination": "Madurai",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:50 AM",
    "Destination": "Madurai",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "7:50 AM",
    "Destination": "Madurai",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "7:50 AM",
    "Destination": "Madurai",
    "Service": "SOMU",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "7:55 AM",
    "Destination": "Thiruvarur",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Thiruvarur",
    "Time": "7:55 AM",
    "Destination": "Thiruvarur",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "7:55 AM",
    "Destination": "Thiruvarur",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "7:55 AM",
    "Destination": "Thiruvarur",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "7:55 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Nagoor",
    "To": "Elayankudi",
    "Time": "7:55 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Nagoor",
    "To": "Mudhukulathur",
    "Time": "7:55 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Nagoor",
    "To": "Kalaiyar Kovil",
    "Time": "7:55 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Nagoor",
    "To": "Devakottai",
    "Time": "7:55 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Nagoor",
    "To": "Paramakudi",
    "Time": "7:55 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "7:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "7:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "7:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "7:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "7:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kundrakudi",
    "Time": "7:55 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pillaiyar Patti",
    "Time": "7:55 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Thiruppathur",
    "Time": "7:55 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "7:55 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "7:55 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:55 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "7:55 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:55 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "7:55 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "7:55 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "7:55 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "7:55 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "7:55 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "7:57 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "7:57 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "7:57 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "7:57 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "7:57 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "8:00 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "8:00 PM",
    "Destination": "Devakottai",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "8:00 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "8:00 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "8:00 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "8:00 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "8:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "8:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "8:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "8:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "8:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "8:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "8:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "8:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "8:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "8:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "8:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "8:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "8:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "8:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "8:00 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tiruchendur",
    "Time": "8:05 AM",
    "Destination": "Tiruchendur",
    "Service": "Paramakudi",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "8:05 AM",
    "Destination": "Tiruchendur",
    "Service": "Paramakudi",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "8:05 AM",
    "Destination": "Tiruchendur",
    "Service": "Paramakudi",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "8:05 AM",
    "Destination": "Tiruchendur",
    "Service": "Paramakudi",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "8:05 AM",
    "Destination": "Tiruchendur",
    "Service": "Paramakudi",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "8:05 AM",
    "Destination": "Devakottai",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Keeranur",
    "Time": "8:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Tirumayam",
    "Time": "8:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Pudukottai",
    "Time": "8:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Trichy",
    "Time": "8:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Kanadukaththan",
    "Time": "8:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:05 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "8:05 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "8:05 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Palani",
    "Time": "8:05 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "8:05 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "8:05 AM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "8:05 AM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "8:05 AM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "8:05 AM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:05 AM",
    "Destination": "Dindigul",
    "Service": "SMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "KNPTU",
    "To": "Thiruvadanai",
    "Time": "8:06 PM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "KNPTU",
    "To": "RS Mangalam",
    "Time": "8:06 PM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "KNPTU",
    "To": "Devakottai",
    "Time": "8:06 PM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "KNPTU",
    "To": "Ramnad",
    "Time": "8:06 PM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:06 AM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "8:06 AM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "8:06 AM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "8:07 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "8:07 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "8:07 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "8:07 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "8:07 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Sivaganga",
    "To": "Aavdamm",
    "Time": "8:10 AM",
    "Destination": "Nagoor",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Sivaganga",
    "To": "Aranthanki",
    "Time": "8:10 AM",
    "Destination": "Nagoor",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Sivaganga",
    "To": "Nagoor",
    "Time": "8:10 AM",
    "Destination": "Nagoor",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Sivaganga",
    "To": "Pattukottai",
    "Time": "8:10 AM",
    "Destination": "Nagoor",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "8:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "8:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "8:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "8:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "8:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "8:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "8:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "8:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "8:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "8:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "8:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "8:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "8:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "8:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "8:12 AM",
    "Destination": "SP Pattanam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Thondi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thondi",
    "Time": "8:12 AM",
    "Destination": "SP Pattanam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Thondi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "SP Pattanam",
    "Time": "8:12 AM",
    "Destination": "SP Pattanam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Thondi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "8:12 AM",
    "Destination": "SP Pattanam",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Thondi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thondi",
    "To": "Keeranur",
    "Time": "8:12 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Trichy",
    "Time": "8:12 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Tirumayam",
    "Time": "8:12 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Pudukottai",
    "Time": "8:12 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Kanadukaththan",
    "Time": "8:12 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "8:12 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "8:12 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "8:12 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "8:12 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "8:12 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "8:13 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "8:15 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "8:15 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "8:15 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "8:15 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "8:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "8:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "8:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "8:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "8:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Gandarvakottai",
    "Time": "8:15 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "8:15 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "8:15 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "8:15 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Tanjavure",
    "Time": "8:15 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "8:15 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "8:15 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "8:15 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "8:15 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "8:15 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "8:18 AM",
    "Destination": "Thiruvetriyur",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvetriyur",
    "Time": "8:18 AM",
    "Destination": "Thiruvetriyur",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "8:18 AM",
    "Destination": "Thiruvetriyur",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "8:19 AM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "8:19 AM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "8:19 AM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "8:19 AM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:19 AM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "8:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "8:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "8:20 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "8:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "8:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "8:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "8:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "8:20 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "8:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "8:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "8:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "8:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "8:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "8:20 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "8:20 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:20 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "8:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "8:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "8:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "8:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "8:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Karur",
    "Time": "8:22 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "8:22 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "8:22 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "8:22 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tiruppur",
    "Time": "8:22 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "8:23 AM",
    "Destination": "Rameshwaram",
    "Service": "Government(1 to 9)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "8:23 AM",
    "Destination": "Rameshwaram",
    "Service": "Government(1 to 9)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "8:23 AM",
    "Destination": "Rameshwaram",
    "Service": "Government(1 to 9)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "8:23 AM",
    "Destination": "Rameshwaram",
    "Service": "Government(1 to 9)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "8:23 AM",
    "Destination": "Rameshwaram",
    "Service": "Government(1 to 9)",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Paramakudi",
    "Time": "8:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kallal",
    "Time": "8:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kalaiyar Kovil",
    "Time": "8:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Elayankudi",
    "Time": "8:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "8:25 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "8:25 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "8:25 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "8:25 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "8:25 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "8:25 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "8:25 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "8:25 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "8:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "8:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "8:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "8:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "8:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "8:26 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "8:26 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "8:26 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "8:26 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "8:26 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "8:28 PM",
    "Destination": "Paramakudi",
    "Service": "SELVI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "8:28 PM",
    "Destination": "Paramakudi",
    "Service": "SELVI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "8:28 PM",
    "Destination": "Paramakudi",
    "Service": "SELVI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "8:28 PM",
    "Destination": "Paramakudi",
    "Service": "SELVI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "8:28 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "8:28 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "8:28 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "8:28 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "8:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "8:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "8:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "8:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "8:30 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "8:30 PM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram, Tiruppur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:30 PM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram, Tiruppur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Mettupalayam",
    "Time": "8:30 PM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram, Tiruppur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tiruppur",
    "Time": "8:30 PM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram, Tiruppur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "8:30 PM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram, Tiruppur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Thiruvadanai",
    "Time": "8:31 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "RS Mangalam",
    "Time": "8:31 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Devakottai",
    "Time": "8:31 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Erwadi",
    "Time": "8:31 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "8:33 PM",
    "Destination": "Dindigul",
    "Service": "VMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "8:33 PM",
    "Destination": "Dindigul",
    "Service": "VMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:33 PM",
    "Destination": "Dindigul",
    "Service": "VMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "8:33 PM",
    "Destination": "Dindigul",
    "Service": "VMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "8:33 PM",
    "Destination": "Dindigul",
    "Service": "VMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "8:33 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "8:33 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "8:33 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "8:34 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "8:34 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Naththam",
    "Time": "8:34 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "8:34 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Dindigul",
    "Time": "8:34 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "8:35 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "8:35 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "8:35 PM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "8:35 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "8:35 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "8:35 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Nachiyaruram",
    "Time": "8:35 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "8:35 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "8:35 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Subrmaniyapuram",
    "Time": "8:37 PM",
    "Destination": "Subrmaniyapuram",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruppathur",
    "To": "Aranthanki",
    "Time": "8:37 PM",
    "Destination": "Subrmaniyapuram",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "KRNKD",
    "To": "Trichy",
    "Time": "8:37 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "KRNKD",
    "To": "Keeranur",
    "Time": "8:37 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "KRNKD",
    "To": "Tirumayam",
    "Time": "8:37 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "KRNKD",
    "To": "Kanadukaththan",
    "Time": "8:37 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "KRNKD",
    "To": "Pudukottai",
    "Time": "8:37 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivaganga",
    "Time": "8:40 AM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "8:40 AM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "8:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "8:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "8:40 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "8:40 PM",
    "Destination": "Devakottai",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "8:40 AM",
    "Destination": "Paramakudi",
    "Service": "AVR",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "8:40 AM",
    "Destination": "Paramakudi",
    "Service": "AVR",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "8:40 AM",
    "Destination": "Paramakudi",
    "Service": "AVR",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "8:40 AM",
    "Destination": "Paramakudi",
    "Service": "AVR",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Gandarvakottai",
    "Time": "8:40 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tanjavure",
    "Time": "8:40 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "8:40 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "8:40 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "8:40 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Kundrakudi",
    "Time": "8:40 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Thiruppathur",
    "Time": "8:40 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Pillaiyar Patti",
    "Time": "8:40 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "8:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "8:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "8:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "8:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "8:42 PM",
    "Destination": "Vellur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "8:42 PM",
    "Destination": "Vellur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "8:42 PM",
    "Destination": "Vellur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Vellur",
    "Time": "8:42 PM",
    "Destination": "Vellur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thuraiyur",
    "Time": "8:42 AM",
    "Destination": "Thuraiyur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "8:42 AM",
    "Destination": "Thuraiyur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "8:42 AM",
    "Destination": "Thuraiyur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "8:42 AM",
    "Destination": "Thuraiyur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "8:42 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "8:42 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "8:42 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "8:42 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "8:42 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "8:44 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "8:44 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "8:44 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "8:44 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "8:44 PM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "8:45 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "8:45 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "8:45 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "8:45 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "8:45 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "8:45 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "8:45 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvetriyur",
    "Time": "8:45 PM",
    "Destination": "Thiruvetriyur",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "8:45 PM",
    "Destination": "Thiruvetriyur",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "8:45 PM",
    "Destination": "Thiruvetriyur",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Devakottai",
    "Time": "8:45 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "RS Mangalam",
    "Time": "8:45 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Erwadi",
    "Time": "8:45 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Thiruvadanai",
    "Time": "8:45 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "8:45 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Karur",
    "Time": "8:45 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "8:45 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Erode",
    "Time": "8:45 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "8:45 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "8:45 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tiruppur",
    "Time": "8:45 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "8:45 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Karur",
    "Time": "8:45 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "8:45 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "8:47 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "8:47 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "8:47 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "8:47 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "8:47 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "8:50 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "8:50 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "8:50 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "8:50 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "8:50 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "8:50 PM",
    "Destination": "Devakottai",
    "Service": "NNS",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "8:50 PM",
    "Destination": "Trichy",
    "Service": "AGASTIYA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "8:50 PM",
    "Destination": "Trichy",
    "Service": "AGASTIYA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "8:50 PM",
    "Destination": "Trichy",
    "Service": "AGASTIYA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "8:50 PM",
    "Destination": "Trichy",
    "Service": "AGASTIYA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "8:50 PM",
    "Destination": "Trichy",
    "Service": "AGASTIYA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "8:50 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "8:50 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "8:50 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Konapattu",
    "Time": "8:50 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "8:50 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Konapattu, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "8:50 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "8:50 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:50 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "8:52 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Kumbakonam",
    "To": "Mudhukulathur",
    "Time": "8:55 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Kumbakonam",
    "To": "Kallal",
    "Time": "8:55 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Kumbakonam",
    "To": "Paramakudi",
    "Time": "8:55 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Kumbakonam",
    "To": "Elayankudi",
    "Time": "8:55 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Kumbakonam",
    "To": "Kalaiyar Kovil",
    "Time": "8:55 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "8:55 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Vembathur",
    "To": "Pudhuvayal",
    "Time": "8:55 PM",
    "Destination": "Pudhuvayal",
    "Service": "KBL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Sakkottai",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Keeranur",
    "Time": "8:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Pudukottai",
    "Time": "8:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Tirumayam",
    "Time": "8:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Kanadukaththan",
    "Time": "8:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Trichy",
    "Time": "8:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "8:55 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Theni",
    "Time": "8:55 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "8:55 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:55 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "8:55 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Nachiyaruram",
    "Time": "8:55 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "8:55 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Nachiyaruram",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "8:56 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "8:56 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "8:56 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "8:56 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "8:56 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "8:57 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "8:57 AM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "8:57 AM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "8:57 AM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "8:57 AM",
    "Destination": "Paramakudi",
    "Service": "TMTL",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "8:58 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "8:58 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "8:58 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "8:58 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "8:58 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Pudukottai",
    "Time": "9:00 AM",
    "Destination": "Trichy",
    "Service": "Government(1 to 7)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Trichy",
    "Time": "9:00 AM",
    "Destination": "Trichy",
    "Service": "Government(1 to 7)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Kanadukaththan",
    "Time": "9:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Pudukottai",
    "Time": "9:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Trichy",
    "Time": "9:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Keeranur",
    "Time": "9:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Tirumayam",
    "Time": "9:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "9:00 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "9:00 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "9:00 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "9:00 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "9:00 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "9:00 PM",
    "Destination": "Ponnamaravathy",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "9:00 PM",
    "Destination": "Ponnamaravathy",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Ponnamaravathy",
    "Time": "9:00 PM",
    "Destination": "Ponnamaravathy",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Palani",
    "Time": "9:00 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thondi",
    "To": "Thiruppathur",
    "Time": "9:00 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thondi",
    "To": "Pillaiyar Patti",
    "Time": "9:00 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thondi",
    "To": "Dindigul",
    "Time": "9:00 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thondi",
    "To": "Naththam",
    "Time": "9:00 AM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Kumbakonam",
    "To": "Erwadi",
    "Time": "9:02 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Kumbakonam",
    "To": "Devakottai",
    "Time": "9:02 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Kumbakonam",
    "To": "Thiruvadanai",
    "Time": "9:02 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Kumbakonam",
    "To": "RS Mangalam",
    "Time": "9:02 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Devakottai",
    "Time": "9:03 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "9:04 AM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "9:04 AM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "9:04 AM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "9:04 AM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "9:04 AM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "9:05 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "9:05 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "9:05 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:05 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Devakottai",
    "Time": "9:05 AM",
    "Destination": "Devakottai",
    "Service": "LATHA",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "9:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "9:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "9:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "9:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "9:05 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivaganga",
    "Time": "9:10 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "9:10 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:10 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "9:10 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:10 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thondi",
    "Time": "9:10 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "9:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "9:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "9:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "9:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "9:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tiruppur",
    "Time": "9:10 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "9:10 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "9:10 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Karur",
    "Time": "9:10 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "9:10 AM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "9:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "9:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "9:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "9:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "9:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "9:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "9:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "9:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "9:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "9:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "9:12 AM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "9:12 AM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "9:12 AM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "9:12 AM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "9:12 AM",
    "Destination": "Madurai",
    "Service": "BHAVANI",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "PLI",
    "To": "Elayankudi",
    "Time": "9:15 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "PLI",
    "To": "Paramakudi",
    "Time": "9:15 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "PLI",
    "To": "Kallal",
    "Time": "9:15 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "PLI",
    "To": "Kalaiyar Kovil",
    "Time": "9:15 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Dindigul",
    "To": "Aavdamm",
    "Time": "9:15 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Dindigul",
    "To": "Pattukottai",
    "Time": "9:15 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Dindigul",
    "To": "Aranthanki",
    "Time": "9:15 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "9:15 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "9:15 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "9:15 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "9:15 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:15 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "9:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "9:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "9:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "9:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "9:15 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "9:15 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "9:15 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Erode",
    "Time": "9:15 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Karur",
    "Time": "9:15 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "9:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "9:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "9:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "9:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "9:15 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "9:15 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Coimbatore",
    "Time": "9:15 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "9:15 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "9:15 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "9:15 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "9:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "9:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "9:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "9:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "9:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "9:17 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "9:17 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "9:17 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "9:17 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "9:17 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "9:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "9:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "9:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "9:20 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "9:20 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "9:20 AM",
    "Destination": "Thiruvadanai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Thiruvadanai",
    "Time": "9:20 AM",
    "Destination": "Thiruvadanai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Tanjavure",
    "Time": "9:20 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "9:20 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Gandarvakottai",
    "Time": "9:20 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "9:20 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "9:20 PM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Kanadukaththan",
    "Time": "9:20 PM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Rayavaram",
    "Time": "9:20 PM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Kothamanagalam",
    "Time": "9:20 PM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Kadiyapatti",
    "Time": "9:20 PM",
    "Destination": "Rayavaram",
    "Service": "MKG",
    "stops": "Kanadukaththan,  Kothamanagalam, Kadiyapatti",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "9:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "9:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "9:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "9:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "9:20 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Oriyur",
    "To": "Madurai",
    "Time": "9:20 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Melur",
    "Time": "9:20 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Pillaiyar Patti",
    "Time": "9:20 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Thiruppathur",
    "Time": "9:20 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Oriyur",
    "To": "Kundrakudi",
    "Time": "9:20 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Thiruppathur",
    "Time": "9:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Melur",
    "Time": "9:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Madurai",
    "Time": "9:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Kundrakudi",
    "Time": "9:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Pillaiyar Patti",
    "Time": "9:20 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "9:21 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "9:22 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "9:22 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "9:22 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Erode",
    "Time": "9:22 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Karur",
    "Time": "9:22 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "9:23 AM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Sivaganga",
    "Time": "9:23 AM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "9:23 AM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "9:25 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:25 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "9:25 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "9:25 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "9:25 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "9:25 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "9:25 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "9:25 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "9:25 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "9:25 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "9:25 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "9:25 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "9:25 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "9:25 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "9:25 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "9:28 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "9:28 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Dindigul",
    "Time": "9:28 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "9:28 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Naththam",
    "Time": "9:28 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "9:30 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "9:30 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:30 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:30 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "9:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "9:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "9:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "9:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "9:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "9:30 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "9:30 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Nachiyaruram",
    "Time": "9:30 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "9:30 PM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "9:30 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Palani",
    "Time": "9:30 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "9:30 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "9:30 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "9:30 PM",
    "Destination": "Palani",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "9:30 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivakasi",
    "Time": "9:30 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "9:30 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "9:30 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "9:30 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Peravoorani",
    "To": "Devakottai",
    "Time": "9:32 AM",
    "Destination": "Devakottai",
    "Service": "DR",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:35 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "9:35 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Pudukottai",
    "Time": "9:35 PM",
    "Destination": "Trichy",
    "Service": "Government(1 to 7)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Trichy",
    "Time": "9:35 PM",
    "Destination": "Trichy",
    "Service": "Government(1 to 7)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "9:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "9:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "9:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "9:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "9:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Mudhukulathur",
    "Time": "9:40 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "9:40 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "9:40 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "9:40 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "9:40 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "9:40 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "9:40 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "9:40 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "9:40 PM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "9:40 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "9:40 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "9:40 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:40 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "9:40 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "9:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "9:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "9:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "9:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "9:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "9:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "9:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "9:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "9:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "9:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "9:40 AM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "9:40 AM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "9:40 AM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "9:40 AM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "9:40 AM",
    "Destination": "Madurai",
    "Service": "ALAGARMA",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "9:42 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "9:42 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "9:42 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "9:42 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "9:42 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "9:45 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "9:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "9:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "9:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "9:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Kundrakudi",
    "Time": "9:45 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Thiruppathur",
    "Time": "9:45 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Pillaiyar Patti",
    "Time": "9:45 PM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "9:45 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "9:45 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "9:45 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "9:45 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "9:45 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "9:47 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivakasi",
    "Time": "9:47 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "9:47 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "9:47 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "9:47 AM",
    "Destination": "Sivakasi",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "9:50 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "9:50 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "9:50 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "9:50 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "9:50 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "9:50 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Mudhukulathur",
    "Time": "9:50 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "9:50 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "9:50 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "9:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "9:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "9:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "9:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "9:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "9:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "9:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "9:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "9:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "9:50 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Pillaiyar Patti",
    "Time": "9:50 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Dindigul",
    "Time": "9:50 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Thiruppathur",
    "Time": "9:50 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Naththam",
    "Time": "9:50 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Coimbatore",
    "Time": "9:50 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Dindigul",
    "To": "Devakottai",
    "Time": "9:55 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rayavaram",
    "To": "Devakottai",
    "Time": "9:55 AM",
    "Destination": "Oriyur",
    "Service": "SELVI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rayavaram",
    "To": "Oriyur",
    "Time": "9:55 AM",
    "Destination": "Oriyur",
    "Service": "SELVI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rayavaram",
    "To": "Thiruvadanai",
    "Time": "9:55 AM",
    "Destination": "Oriyur",
    "Service": "SELVI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Pudukottai",
    "Time": "9:55 AM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Gandarvakottai",
    "Time": "9:55 AM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Kumbakonam",
    "Time": "9:55 AM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Kanadukaththan",
    "Time": "9:55 AM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Tanjavure",
    "Time": "9:55 AM",
    "Destination": "Kumbakonam",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "NAGR",
    "To": "Thiruppathur",
    "Time": "9:55 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "NAGR",
    "To": "Pillaiyar Patti",
    "Time": "9:55 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "NAGR",
    "To": "Sivaganga",
    "Time": "9:55 PM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "9:57 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "9:57 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "9:57 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "9:57 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "9:57 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "9:57 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Naththam",
    "Time": "9:57 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "9:57 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Dindigul",
    "Time": "9:57 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Coimbatore",
    "Time": "9:57 PM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "9:57 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "9:57 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "9:57 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "9:57 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "9:57 AM",
    "Destination": "Madurai",
    "Service": "NNL",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "9:58 AM",
    "Destination": "Devakottai",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kamudi",
    "Time": "10:00 AM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "10:00 AM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "10:00 AM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "10:00 AM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "10:00 AM",
    "Destination": "Kamudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "10:00 PM",
    "Destination": "Aranthanki",
    "Service": "PVT",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Madurai",
    "To": "NAGAI",
    "Time": "10:00 AM",
    "Destination": "NAGAI",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aavdamm",
    "Time": "10:00 AM",
    "Destination": "NAGAI",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Pattukottai",
    "Time": "10:00 AM",
    "Destination": "NAGAI",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "10:00 AM",
    "Destination": "NAGAI",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm, Pattukottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "10:00 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "10:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "10:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "10:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "10:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "10:00 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "R S Mangalam",
    "To": "Keeranur",
    "Time": "10:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "R S Mangalam",
    "To": "Tirumayam",
    "Time": "10:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "R S Mangalam",
    "To": "Trichy",
    "Time": "10:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "R S Mangalam",
    "To": "Pudukottai",
    "Time": "10:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "R S Mangalam",
    "To": "Kanadukaththan",
    "Time": "10:00 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "10:02 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thondi",
    "Time": "10:02 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "10:02 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "10:02 AM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "10:02 AM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "10:02 AM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "10:02 AM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "10:02 AM",
    "Destination": "Dindigul",
    "Service": "DCT",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "10:05 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "A KOVIL",
    "To": "Devakottai",
    "Time": "10:05 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "A KOVIL",
    "To": "Thiruvadanai",
    "Time": "10:05 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "A KOVIL",
    "To": "Erwadi",
    "Time": "10:05 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "A KOVIL",
    "To": "RS Mangalam",
    "Time": "10:05 AM",
    "Destination": "Erwadi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "10:05 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tiruppur",
    "Time": "10:05 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Karur",
    "Time": "10:05 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "10:05 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "10:05 PM",
    "Destination": "Tiruppur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Ramnad",
    "To": "Kanadukaththan",
    "Time": "10:05 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Gandarvakottai",
    "Time": "10:05 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Tirumayam",
    "Time": "10:05 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Pudukottai",
    "Time": "10:05 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Tanjavure",
    "Time": "10:05 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "10:05 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "10:05 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "10:05 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "10:05 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "10:05 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Aranthanki",
    "Time": "10:10 AM",
    "Destination": "Aranthanki",
    "Service": "KBL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "10:10 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "10:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "10:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "10:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "10:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "10:10 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "10:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "10:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "10:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "10:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "10:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "10:10 PM",
    "Destination": "Madurai",
    "Service": "PRP",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "10:10 PM",
    "Destination": "Madurai",
    "Service": "PRP",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "10:10 PM",
    "Destination": "Madurai",
    "Service": "PRP",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "10:10 PM",
    "Destination": "Madurai",
    "Service": "PRP",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "10:10 PM",
    "Destination": "Madurai",
    "Service": "PRP",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "10:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "10:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "10:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "10:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "10:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "10:12 AM",
    "Destination": "VASA",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "VASA",
    "Time": "10:12 AM",
    "Destination": "VASA",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "10:12 AM",
    "Destination": "VASA",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "10:15 PM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Tanjavure",
    "To": "Devakottai",
    "Time": "10:15 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Kumbakonam",
    "To": "Ramnad",
    "Time": "10:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Kumbakonam",
    "To": "Devakottai",
    "Time": "10:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Kumbakonam",
    "To": "RS Mangalam",
    "Time": "10:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Kumbakonam",
    "To": "Rameshwaram",
    "Time": "10:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Kumbakonam",
    "To": "Thiruvadanai",
    "Time": "10:15 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thondi",
    "To": "Keeranur",
    "Time": "10:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Pudukottai",
    "Time": "10:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Trichy",
    "Time": "10:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Kanadukaththan",
    "Time": "10:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Tirumayam",
    "Time": "10:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "10:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "10:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "10:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "10:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "10:15 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "10:17 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "10:17 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Keeranur",
    "Time": "10:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Kanadukaththan",
    "Time": "10:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Tirumayam",
    "Time": "10:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Pudukottai",
    "Time": "10:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Mudhukulathur",
    "To": "Trichy",
    "Time": "10:17 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "10:17 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "10:17 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "10:17 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "10:17 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "10:17 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "10:20 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "10:20 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "10:20 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "10:20 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Embal",
    "Time": "10:20 AM",
    "Destination": "Avudaiyar Koil",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Avudaiyar Koil",
    "Time": "10:20 AM",
    "Destination": "Avudaiyar Koil",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "10:20 AM",
    "Destination": "Devakottai",
    "Service": "PRP",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "10:20 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Karur",
    "Time": "10:20 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "10:20 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "10:20 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Erode",
    "Time": "10:20 PM",
    "Destination": "Erode",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Karur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "10:25 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "10:25 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "10:25 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "10:25 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "10:25 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "10:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "10:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "10:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "10:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "10:25 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "10:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "10:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "10:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "10:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "10:25 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "10:25 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "10:25 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "10:25 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "10:25 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "10:25 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "10:27 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "10:27 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "10:27 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "10:27 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "10:27 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "10:30 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "10:30 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "10:30 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Embal",
    "Time": "10:30 AM",
    "Destination": "Embal",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Sakkottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "10:30 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "10:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "10:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "10:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "10:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "10:30 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "10:30 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "10:30 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "10:30 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "10:30 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "10:30 PM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "10:30 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "10:30 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Theni",
    "Time": "10:30 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "10:30 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "10:30 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "10:33 AM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai, Kalaiyar Kovil",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Sivaganga",
    "Time": "10:33 AM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai, Kalaiyar Kovil",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "10:33 AM",
    "Destination": "Sivaganga",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai, Kalaiyar Kovil",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "10:35 AM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "10:35 AM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "10:35 AM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "10:35 AM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "10:35 AM",
    "Destination": "Trichy",
    "Service": "PLA",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Oriyur",
    "To": "Madurai",
    "Time": "10:35 AM",
    "Destination": "Madurai",
    "Service": "NR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Oriyur",
    "To": "Melur",
    "Time": "10:35 AM",
    "Destination": "Madurai",
    "Service": "NR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Oriyur",
    "To": "Pillaiyar Patti",
    "Time": "10:35 AM",
    "Destination": "Madurai",
    "Service": "NR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Oriyur",
    "To": "Kundrakudi",
    "Time": "10:35 AM",
    "Destination": "Madurai",
    "Service": "NR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Oriyur",
    "To": "Thiruppathur",
    "Time": "10:35 AM",
    "Destination": "Madurai",
    "Service": "NR",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "10:40 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Ramnad",
    "Time": "10:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "RS Mangalam",
    "Time": "10:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Rameshwaram",
    "Time": "10:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Thiruvadanai",
    "Time": "10:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruppathur",
    "To": "Devakottai",
    "Time": "10:40 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "10:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "10:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "10:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "10:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "10:40 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "10:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "10:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "10:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "10:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "10:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Kallal",
    "To": "Madurai",
    "Time": "10:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Kallal",
    "To": "Melur",
    "Time": "10:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Kallal",
    "To": "Pillaiyar Patti",
    "Time": "10:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Kallal",
    "To": "Kundrakudi",
    "Time": "10:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Kallal",
    "To": "Thiruppathur",
    "Time": "10:40 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "10:42 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Pillaiyar Patti",
    "Time": "10:43 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Kundrakudi",
    "Time": "10:43 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Ramnad",
    "To": "Thiruppathur",
    "Time": "10:43 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "10:44 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "10:45 AM",
    "Destination": "Elayankudi",
    "Service": "LAKSHMI",
    "stops": "Kallal, Kalaiyar Kovil",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "10:45 AM",
    "Destination": "Elayankudi",
    "Service": "LAKSHMI",
    "stops": "Kallal, Kalaiyar Kovil",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "10:45 AM",
    "Destination": "Elayankudi",
    "Service": "LAKSHMI",
    "stops": "Kallal, Kalaiyar Kovil",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "10:45 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "10:45 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "10:45 PM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "PM"
  },
  {
    "From": "Thuraiyur",
    "To": "RS Mangalam",
    "Time": "10:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thuraiyur",
    "To": "Rameshwaram",
    "Time": "10:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thuraiyur",
    "To": "Thiruvadanai",
    "Time": "10:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thuraiyur",
    "To": "Ramnad",
    "Time": "10:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thuraiyur",
    "To": "Devakottai",
    "Time": "10:45 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "10:45 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Pudukottai",
    "Time": "10:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Keeranur",
    "Time": "10:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Trichy",
    "Time": "10:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Tirumayam",
    "Time": "10:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Thondi",
    "To": "Kanadukaththan",
    "Time": "10:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "10:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "10:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "10:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "10:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "10:45 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Aranthanki",
    "Time": "10:45 AM",
    "Destination": "Aranthanki",
    "Service": "Latha",
    "stops": "Pallathur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "10:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "10:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "10:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "10:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "10:45 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Paramakudi",
    "Time": "10:50 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kalaiyar Kovil",
    "Time": "10:50 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Kallal",
    "Time": "10:50 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Mudhukulathur",
    "Time": "10:50 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Elayankudi",
    "Time": "10:50 PM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi, Paramakudi",
    "Route": "Kallal",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "10:50 PM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "10:50 PM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "10:50 PM",
    "Destination": "Madurai",
    "Service": "Government(1-2-3)",
    "stops": "Thiruppathur, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Aranthanki",
    "To": "Madurai",
    "Time": "10:50 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Kundrakudi",
    "Time": "10:50 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Thiruppathur",
    "Time": "10:50 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Melur",
    "Time": "10:50 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Aranthanki",
    "To": "Pillaiyar Patti",
    "Time": "10:50 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "10:50 AM",
    "Destination": "Dindigul",
    "Service": "UMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "10:50 AM",
    "Destination": "Dindigul",
    "Service": "UMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "10:50 AM",
    "Destination": "Dindigul",
    "Service": "UMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "10:50 AM",
    "Destination": "Dindigul",
    "Service": "UMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "10:50 AM",
    "Destination": "Dindigul",
    "Service": "UMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Paramakudi",
    "Time": "10:55 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Kallal",
    "Time": "10:55 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Elayankudi",
    "Time": "10:55 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Tanjavure",
    "To": "Kalaiyar Kovil",
    "Time": "10:55 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Rangiyam",
    "To": "Avudaiyar Koil",
    "Time": "10:55 AM",
    "Destination": "Avudaiyar Koil",
    "Service": "KBL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Rangiyam",
    "To": "Embal",
    "Time": "10:55 AM",
    "Destination": "Avudaiyar Koil",
    "Service": "KBL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Embal",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Aranthanki",
    "Time": "10:55 AM",
    "Destination": "Aranthanki",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "10:55 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "10:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "10:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "10:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "10:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "10:55 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "10:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "10:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "10:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "10:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "10:55 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "11:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "11:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "11:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "11:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "11:00 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "M Palayam",
    "To": "Ramnad",
    "Time": "11:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "M Palayam",
    "To": "RS Mangalam",
    "Time": "11:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "M Palayam",
    "To": "Thiruvadanai",
    "Time": "11:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "M Palayam",
    "To": "Rameshwaram",
    "Time": "11:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "M Palayam",
    "To": "Devakottai",
    "Time": "11:00 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "11:00 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "11:00 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Tanjavure",
    "Time": "11:00 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Gandarvakottai",
    "Time": "11:00 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "11:00 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "11:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "11:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "11:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "11:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "11:00 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "11:00 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "11:00 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "11:00 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "11:00 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "11:00 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "11:02 AM",
    "Destination": "Devakottai",
    "Service": "ALAGAR",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "11:05 AM",
    "Destination": "Madurai",
    "Service": "KANNATHAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "11:05 AM",
    "Destination": "Madurai",
    "Service": "KANNATHAL",
    "stops": "Kallal",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "11:05 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "11:05 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "11:05 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "11:05 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "11:05 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "11:05 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "11:05 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "11:06 AM",
    "Destination": "Thiruvetriyur",
    "Service": "BHARATHI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvetriyur",
    "Time": "11:06 AM",
    "Destination": "Thiruvetriyur",
    "Service": "BHARATHI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "11:06 AM",
    "Destination": "Thiruvetriyur",
    "Service": "BHARATHI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "11:06 AM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "11:06 AM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Coimbatore",
    "Time": "11:06 AM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "11:06 AM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "11:06 AM",
    "Destination": "Coimbatore",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam, Dindigul, Ottanchathiram, Tarapuram",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "11:10 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "11:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "11:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "11:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "11:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "11:10 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kundrakudi",
    "Time": "11:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Melur",
    "Time": "11:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Madurai",
    "Time": "11:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Pillaiyar Patti",
    "Time": "11:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Pattukottai",
    "To": "Thiruppathur",
    "Time": "11:10 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Vedharnayam",
    "To": "Pillaiyar Patti",
    "Time": "11:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Vedharnayam",
    "To": "Melur",
    "Time": "11:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Vedharnayam",
    "To": "Madurai",
    "Time": "11:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Vedharnayam",
    "To": "Thiruppathur",
    "Time": "11:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Vedharnayam",
    "To": "Kundrakudi",
    "Time": "11:10 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "11:12 AM",
    "Destination": "Devakottai",
    "Service": "KR",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "11:13 AM",
    "Destination": "Devakottai",
    "Service": "NNL",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "11:15 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "11:15 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "11:15 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Erode",
    "To": "Devakottai",
    "Time": "11:15 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "11:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "11:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "11:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "11:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "11:15 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "11:15 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "11:15 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "11:15 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Theni",
    "Time": "11:15 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "11:15 PM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "11:17 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "11:17 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Mudhukulathur",
    "Time": "11:17 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "11:17 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "11:17 AM",
    "Destination": "Mudhukulathur",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, Kalaiyar Kovil,Elayankudi, Paramakudi",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "11:20 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "11:20 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "11:20 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "11:20 AM",
    "Destination": "Ramnad",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Dindigul",
    "To": "Devakottai",
    "Time": "11:20 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "11:20 AM",
    "Destination": "Pudukottai",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "11:20 AM",
    "Destination": "Pudukottai",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "11:20 AM",
    "Destination": "Pudukottai",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "11:20 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "11:20 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "11:20 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "11:20 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "11:20 AM",
    "Destination": "Dindigul",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kallal",
    "Time": "11:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Paramakudi",
    "Time": "11:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Elayankudi",
    "Time": "11:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kalaiyar Kovil",
    "Time": "11:25 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Dindigul",
    "To": "Devakottai",
    "Time": "11:25 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "11:25 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kanadukaththan",
    "Time": "11:25 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Keeranur",
    "Time": "11:25 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Tirumayam",
    "Time": "11:25 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "11:25 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "11:25 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "11:25 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "11:25 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "11:25 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "11:25 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Thiruppathur",
    "Time": "11:27 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Madurai",
    "Time": "11:27 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Kundrakudi",
    "Time": "11:27 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Pillaiyar Patti",
    "Time": "11:27 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Thiruvadanai",
    "To": "Melur",
    "Time": "11:27 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "11:30 AM",
    "Destination": "Devakottai",
    "Service": "Government(PP)",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "11:30 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "11:30 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "11:30 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "11:30 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "11:30 PM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "11:30 PM",
    "Destination": "Chidambaram",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure, Kumbakonam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Gandarvakottai",
    "Time": "11:30 PM",
    "Destination": "Chidambaram",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure, Kumbakonam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Kumbakonam",
    "Time": "11:30 PM",
    "Destination": "Chidambaram",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure, Kumbakonam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Tanjavure",
    "Time": "11:30 PM",
    "Destination": "Chidambaram",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure, Kumbakonam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Paramakudi",
    "To": "Chidambaram",
    "Time": "11:30 PM",
    "Destination": "Chidambaram",
    "Service": "Government",
    "stops": "Kanadukaththan,  Pudukottai, Gandarvakottai,Tanjavure, Kumbakonam",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "11:30 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tanjavure",
    "Time": "11:30 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "11:30 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "11:30 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Gandarvakottai",
    "Time": "11:30 AM",
    "Destination": "Tanjavure",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Gandarvakottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Pudhuvayal",
    "To": "Tiruppuvanam",
    "Time": "11:30 AM",
    "Destination": "Tiruppuvanam",
    "Service": "MASANIAMM",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pudhuvayal",
    "To": "Sivaganga",
    "Time": "11:30 AM",
    "Destination": "Tiruppuvanam",
    "Service": "MASANIAMM",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pudhuvayal",
    "To": "Pillaiyar Patti",
    "Time": "11:30 AM",
    "Destination": "Tiruppuvanam",
    "Service": "MASANIAMM",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pudhuvayal",
    "To": "Thiruppathur",
    "Time": "11:30 AM",
    "Destination": "Tiruppuvanam",
    "Service": "MASANIAMM",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Sivaganga",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "11:32 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kundrakudi",
    "Time": "11:32 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "11:32 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "11:32 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pillaiyar Patti",
    "Time": "11:32 AM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "11:35 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pattukottai",
    "Time": "11:35 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aavdamm",
    "Time": "11:35 AM",
    "Destination": "Pattukottai",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki, Aavdamm",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "11:35 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "11:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "11:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "11:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "11:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "11:35 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "11:38 AM",
    "Destination": "Thiruvadanai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Thiruvadanai",
    "Time": "11:38 AM",
    "Destination": "Thiruvadanai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Keeranur",
    "Time": "11:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Tirumayam",
    "Time": "11:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Kanadukaththan",
    "Time": "11:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Trichy",
    "Time": "11:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Paramakudi",
    "To": "Pudukottai",
    "Time": "11:40 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "11:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "11:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "11:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "11:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "11:40 PM",
    "Destination": "Madurai",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruvadanai",
    "Time": "11:42 AM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "RS Mangalam",
    "Time": "11:42 AM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Devakottai",
    "Time": "11:42 AM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Ramnad",
    "Time": "11:42 AM",
    "Destination": "Ramnad",
    "Service": "BHAVANI",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Melur",
    "Time": "11:42 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Madurai",
    "Time": "11:42 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Nachiyaruram",
    "Time": "11:42 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Thiruppathur",
    "Time": "11:42 AM",
    "Destination": "Madurai",
    "Service": "NNS",
    "stops": "Nachiyaruram, Thiruppathur, SS Kottai, Melur",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Embal",
    "Time": "11:45 AM",
    "Destination": "Embal",
    "Service": "NNL",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Sakkottai",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "11:45 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Kanadukaththan",
    "Time": "11:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Pudukottai",
    "Time": "11:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Tirumayam",
    "Time": "11:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Trichy",
    "Time": "11:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Devakottai",
    "To": "Keeranur",
    "Time": "11:45 PM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "SR.Pattanam",
    "To": "Kanadukaththan",
    "Time": "11:45 AM",
    "Destination": "Pudukottai",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "SR.Pattanam",
    "To": "Pudukottai",
    "Time": "11:45 AM",
    "Destination": "Pudukottai",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "SR.Pattanam",
    "To": "Tirumayam",
    "Time": "11:45 AM",
    "Destination": "Pudukottai",
    "Service": "NNL",
    "stops": "Kanadukaththan, Tirumayam",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Thirunelveli",
    "To": "Devakottai",
    "Time": "11:48 AM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "11:48 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Theni",
    "Time": "11:48 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Madurai",
    "Time": "11:48 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "11:48 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Melur",
    "Time": "11:48 AM",
    "Destination": "Theni",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, SS Kottai, Melur, Madurai",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Elayankudi",
    "Time": "11:50 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kalaiyar Kovil",
    "Time": "11:50 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Paramakudi",
    "Time": "11:50 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Pattukottai",
    "To": "Kallal",
    "Time": "11:50 AM",
    "Destination": "Paramakudi",
    "Service": "Government",
    "stops": "Kallal, Kalaiyar Kovil, Elayankudi",
    "Route": "Kallal",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Aranthanki",
    "Time": "11:50 AM",
    "Destination": "Peravoorani",
    "Service": "TR",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Devakottai",
    "To": "Peravoorani",
    "Time": "11:50 AM",
    "Destination": "Peravoorani",
    "Service": "TR",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "RS Mangalam",
    "Time": "11:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Devakottai",
    "Time": "11:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Thiruvadanai",
    "Time": "11:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Rameshwaram",
    "Time": "11:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Trichy",
    "To": "Ramnad",
    "Time": "11:50 AM",
    "Destination": "Rameshwaram",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai, RS Mangalam, Ramnad",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "11:50 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Karur",
    "Time": "11:50 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "11:50 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "11:50 PM",
    "Destination": "Karur",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy",
    "Route": "Pudukottai",
    "AM_PM": "PM"
  },
  {
    "From": "Karaikudi",
    "To": "Trichy",
    "Time": "11:50 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pudukottai",
    "Time": "11:50 AM",
    "Destination": "Trichy",
    "Service": "Government(1-2-3)",
    "stops": "Pudukottai",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Keeranur",
    "Time": "11:50 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "11:50 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "11:50 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "11:50 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Kanadukaththan",
    "Time": "11:50 AM",
    "Destination": "Trichy",
    "Service": "Government",
    "stops": "Kanadukaththan, Tirumayam, Pudukottai, Keeranur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "11:50 AM",
    "Destination": "Dindigul",
    "Service": "IMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Naththam",
    "Time": "11:50 AM",
    "Destination": "Dindigul",
    "Service": "IMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Dindigul",
    "Time": "11:50 AM",
    "Destination": "Dindigul",
    "Service": "IMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "11:50 AM",
    "Destination": "Dindigul",
    "Service": "IMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "11:50 AM",
    "Destination": "Dindigul",
    "Service": "IMS",
    "stops": "Kundrakudi, Pillaiyar Patti, Thiruppathur, Singampunari, Kottampatti, Naththam",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Pillaiyar Patti",
    "Time": "11:54 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Thiruppathur",
    "Time": "11:54 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Kundrakudi",
    "Time": "11:54 AM",
    "Destination": "Thiruppathur",
    "Service": "Government",
    "stops": "Kundrakudi, Pillaiyar Patti",
    "Route": "Thiruppathur",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "Aranthanki",
    "Time": "11:55 AM",
    "Destination": "K Pattinam",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Karaikudi",
    "To": "K Pattinam",
    "Time": "11:55 AM",
    "Destination": "K Pattinam",
    "Service": "Government",
    "stops": "Kottaiyur, Kandanur, Puduvayal, Kallur, Puthupatti, Aranthanki",
    "Route": "Aranthanki",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Devakottai",
    "Time": "11:55 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Thiruvadanai",
    "Time": "11:55 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Madurai",
    "To": "Thondi",
    "Time": "11:55 AM",
    "Destination": "Thondi",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar, Devakottai,Thiruvadanai",
    "Route": "Devakottai",
    "AM_PM": "AM"
  },
  {
    "From": "Palani",
    "To": "Devakottai",
    "Time": "11:55 PM",
    "Destination": "Devakottai",
    "Service": "Government",
    "stops": "Amaravathi Pudur, Ram Nagar",
    "Route": "Devakottai",
    "AM_PM": "PM"
  },
  {
    "From": "Rameshwaram",
    "To": "Karur",
    "Time": "11:55 AM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Tiruppur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Trichy",
    "Time": "11:55 AM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Tiruppur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Pudukottai",
    "Time": "11:55 AM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Tiruppur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Tirumayam",
    "Time": "11:55 AM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Tiruppur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  },
  {
    "From": "Rameshwaram",
    "To": "Mettupalayam",
    "Time": "11:55 AM",
    "Destination": "Mettupalayam",
    "Service": "Government",
    "stops": "Tirumayam,  Pudukottai, Trichy, Tiruppur",
    "Route": "Pudukottai",
    "AM_PM": "AM"
  }
 ]

export default busTimings