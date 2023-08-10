const trainTimingsDetails = [
    {
      "TrainNo": 22661,
      "From": "Chennai",
      "Destination": "Rameshwaram",
      "Arrival": "12:48 AM",
      "Departure": "12:50 AM",
      "ServiceDays": "DAILY",
      "Stations": "Sivaganga,Manamadurai,Paramakkudi,Ramanathapuram,Mandapam"
    },
    {
      "TrainNo": 22535,
      "From": "Rameshwaram",
      "Destination": "Manduadih",
      "Arrival": "2:55 AM",
      "Departure": "3:00 AM",
      "ServiceDays": "THU",
      "Stations": "Trichirapalli,Tanjore,Kumbakonam, Mayiladuturai, Chidambaram,Cuddalore,Villupuram,Tambaram,,Nellore,Vijayawada, Warangal, Nagpur, Jabalpur,Banara"
    },
    {
      "TrainNo": 16618,
      "From": "Coimbatore",
      "Destination": "Rameshwaram",
      "Arrival": "2:10 AM",
      "Departure": "2:12 AM",
      "ServiceDays": "WED",
      "Stations": "Sivaganga,Manamadurai,Paramakkudi,Ramanathapuram,Mandapam"
    },
    {
      "TrainNo": 20681,
      "From": "Chennai",
      "Destination": "Senkottai",
      "Arrival": "3:18 AM",
      "Departure": "3:20 AM",
      "ServiceDays": "SUN, SAT, THU",
      "Stations": "Sivaganga,Aruppukkottai,Manamadurai,VirudhunagarSivakasi,Rajapalayam,Kadayanallur,Tenkasi Jn"
    },
    {
      "TrainNo": 16751,
      "From": "Chennai",
      "Destination": "Rameshwaram",
      "Arrival": "4:10 AM",
      "Departure": "4:12 AM",
      "ServiceDays": "DAILY",
      "Stations": "Sivaganga,Manamadurai,Paramakkudi,Ramanathapuram,Mandapam"
    },
    {
      "TrainNo": 12606,
      "From": "Karaikudi",
      "Destination": "Chennai",
      "Arrival": "",
      "Departure": "5:35 AM",
      "ServiceDays": "DAILY",
      "Stations": "Trichirapalli,Ariyalur,Vriddhachalam,Villupuram,Melmaruvathur,Chengalpattu Jn,Tambaram,Mambalam"
    },
    {
      "TrainNo": 6126,
      "From": "Karaikudi",
      "Destination": "Trichirapalli",
      "Arrival": "",
      "Departure": "7:05 AM",
      "ServiceDays": "DAILY",
      "Stations": "Kottaiyur,Chettinad,Tirumayam,Pudukkottai,Keeranur,Kumaramangalam"
    },
    {
      "TrainNo": 16849,
      "From": "Trichirapalli",
      "Destination": "Rameshwaram",
      "Arrival": "8:30 AM",
      "Departure": "8:32 AM",
      "ServiceDays": "DAILY",
      "Stations": "Sivaganga,Manamadurai,Paramakkudi,Ramanathapuram,Mandapam"
    },
    {
      "TrainNo": 6886,
      "From": "Virudhunagar",
      "Destination": "Karaikudi",
      "Arrival": "9:30 AM",
      "Departure": "",
      "ServiceDays": "EXCEPT SUN",
      "Stations": "Aruppukkottai,Manamadurai,Sivaganga,Kallal"
    },
    {
      "TrainNo": 6888,
      "From": "Karaikudi",
      "Destination": "Trichirapalli",
      "Arrival": "",
      "Departure": "9:40 AM",
      "ServiceDays": "EXCEPT SUN",
      "Stations": "Kottaiyur,Chettinad,Tirumayam,Pudukkottai,Keeranur,Kumaramangalam"
    },
    {
      "TrainNo": 20895,
      "From": "Rameshwaram",
      "Destination": "Bhuweneshwar",
      "Arrival": "11:40 AM",
      "Departure": "11:42 AM",
      "ServiceDays": "SUN",
      "Stations": "Trichirapalli,Tanjore,Kumbakonam, Mayiladuturai, Chidambaram,Cuddalore,Villupuram,TambaramNellore,Vijayawada,Visakhapatnam"
    },
    {
      "TrainNo": 6829,
      "From": "Trichirapalli",
      "Destination": "Manamadurai",
      "Arrival": "11:43 AM",
      "Departure": "11:45 AM",
      "ServiceDays": "DAILY",
      "Stations": "Kallal,Sivaganga"
    },
    {
      "TrainNo": 6830,
      "From": "Manamadurai",
      "Destination": "Trichirapalli",
      "Arrival": "3:18 PM",
      "Departure": "3:20 PM",
      "ServiceDays": "DAILY",
      "Stations": "Kottaiyur,Chettinad,Tirumayam,Pudukkottai,Keeranur,Kumaramangalam"
    },
    {
      "TrainNo": 6887,
      "From": "Trichirapalli",
      "Destination": "Karaikudi",
      "Arrival": "5:50 PM",
      "Departure": "",
      "ServiceDays": "EXCEPT SUN",
      "Stations": "Halt"
    },
    {
      "TrainNo": 16850,
      "From": "Rameshwaram",
      "Destination": "Trichirapalli",
      "Arrival": "5:53 PM",
      "Departure": "5:55 PM",
      "ServiceDays": "DAILY",
      "Stations": "Kottaiyur,Chettinad,Tirumayam,Pudukkottai,Keeranur,Kumaramangalam"
    },
    {
      "TrainNo": 6885,
      "From": "Karaikudi",
      "Destination": "Virudhunagar",
      "Arrival": "",
      "Departure": "6:05 PM",
      "ServiceDays": "EXCEPT SAT",
      "Stations": "Kallal,Sivaganga,Manamadurai,Aruppukkottai"
    },
    {
      "TrainNo": 20896,
      "From": "Bhuweneshwar",
      "Destination": "Rameshwaram",
      "Arrival": "6:25 PM",
      "Departure": "6:30 PM",
      "ServiceDays": "SAT",
      "Stations": "Sivaganga,Manamadurai,Paramakkudi,Ramanathapuram,Mandapam"
    },
    {
      "TrainNo": 16862,
      "From": "Kanniyakumari",
      "Destination": "Pondicherry",
      "Arrival": "8:00 PM",
      "Departure": "8:02 PM",
      "ServiceDays": "MON",
      "Stations": "Trichirapalli,Tanjore,Kumbakonam, Mayiladuturai, Chidambaram,Cuddalore,Villupuram"
    },
    {
      "TrainNo": 16861,
      "From": "Pondicherry",
      "Destination": "Kanniyakumari",
      "Arrival": "7:13 PM",
      "Departure": "7:15 PM",
      "ServiceDays": "SUN",
      "Stations": "Sivaganga,Aruppukkottai,Manamadurai,Virudhunagar,Satur,Kovilpatti,Tirunelveli,Nagercoil"
    },
    {
      "TrainNo": 6125,
      "From": "Trichirapalli",
      "Destination": "Karaikudi",
      "Arrival": "8:05 PM",
      "Departure": "",
      "ServiceDays": "DAILY",
      "Stations": ""
    },
    {
      "TrainNo": 16752,
      "From": "Rameshwaram",
      "Destination": "Chennai",
      "Arrival": "8:30 PM",
      "Departure": "8:32 PM",
      "ServiceDays": "DAILY",
      "Stations": "Trichirapalli,Tanjore,Kumbakonam, Mayiladuturai, Chidambaram,Cuddalore,Villupuram,Tambaram,Mambalam"
    },
    {
      "TrainNo": 22536,
      "From": "Manduadih",
      "Destination": "Rameshwaram",
      "Arrival": "6:25 PM",
      "Departure": "6:30 PM",
      "ServiceDays": "TUE",
      "Stations": "Sivaganga,Manamadurai,Paramakkudi,Ramanathapuram,Mandapam"
    },
    {
      "TrainNo": 20682,
      "From": "Senkottai",
      "Destination": "Chennai",
      "Arrival": "9:30 PM",
      "Departure": "9:32 PM",
      "ServiceDays": "SUN, SAT, THU",
      "Stations": "Trichirapalli,Ariyalur,Vriddhachalam,Villupuram,Tindivanam,Melmaruvathur,Chengalpattu Jn,Tambaram,Mambalam"
    },
    {
      "TrainNo": 16617,
      "From": "Rameshwaram",
      "Destination": "Coimbatore",
      "Arrival": "10:23 PM",
      "Departure": "10:25 PM",
      "ServiceDays": "WED",
      "Stations": "Trichirapalli,Karur,Erode,Tiruppur\n"
    },
    {
      "TrainNo": 12605,
      "From": "Chennai",
      "Destination": "Karaikudi",
      "Arrival": "10:35 PM",
      "Departure": "",
      "ServiceDays": "DAILY",
      "Stations": ""
    },
    {
      "TrainNo": 22662,
      "From": "Rameshwaram",
      "Destination": "Chennai",
      "Arrival": "11:18 PM",
      "Departure": "11:20 PM",
      "ServiceDays": "DAILY",
      "Stations": "Trichirapalli,Ariyalur,Vriddhachalam,Villupuram,Melmaruvathur,Chengalpattu Jn,Tambaram,Mambalam"
    }
   ]


export default trainTimingsDetails