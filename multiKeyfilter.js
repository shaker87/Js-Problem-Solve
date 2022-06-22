var items = [
    {
        "AcceptedDate": "Jun 13, 22 | 15:47",
        "AppliedDate": "Jun 13, 22 | 15:47",
        "Email": "tarek1@gmail.com",
        "Institution": "unset",
        "Name": "Tarek",
        "Phone": "+88001814555010",
        "Type": "Physical",
        "UID": "LffSP34wwncRiycKGaOx4sdJIlt1",
        "VideoPermission": "Allowed",
        "avatarURL": "https://f002.backblazeb2.com/file/Edutech-Assets/DefaultAvatar.png",
        "customID": "ID-239",
        "key": "LffSP34wwncRiycKGaOx4sdJIlt1"
    },
    {
        "AcceptedDate": "Jun 13, 22 | 14:21",
        "AppliedDate": "Jun 13, 22 | 14:21",
        "Email": "tausif@gmail.com",
        "Institution": "unset",
        "Name": "Tausif",
        "Phone": "+88001715223399",
        "Type": "Physical",
        "UID": "UdBJAHHFbuOD16s7OewI9SvaMsD2",
        "VideoPermission": "Allowed",
        "avatarURL": "https://f002.backblazeb2.com/file/Edutech-Avatars/UdBJAHHFbuOD16s7OewI9SvaMsD2-avatar.png",
        "customID": "ID-234",
        "key": "UdBJAHHFbuOD16s7OewI9SvaMsD2"
    },
    {
        "AcceptedDate": "Jun 13, 22 | 15:46",
        "AppliedDate": "Jun 13, 22 | 15:46",
        "Email": "Sahed@gmail.com",
        "Institution": "unset",
        "Name": "Sahed",
        "Phone": "+8801188990077",
        "Type": "Physical",
        "UID": "fL7EvPRetQYZdn91oFVY7Q1wZlU2",
        "VideoPermission": "Allowed",
        "avatarURL": "https://f002.backblazeb2.com/file/Edutech-Assets/DefaultAvatar.png",
        "customID": "ID-999",
        "key": "fL7EvPRetQYZdn91oFVY7Q1wZlU2"
    },
    {
        "AcceptedDate": "Jun 13, 22 | 15:48",
        "AppliedDate": "Jun 13, 22 | 15:48",
        "Email": "atik1@gmail.com",
        "Institution": "unset",
        "Name": "Atik",
        "Phone": "+88001866568978",
        "Type": "Physical",
        "UID": "l6d2RIrT7iYjUSoqBV2oUhjJuEB2",
        "VideoPermission": "Allowed",
        "avatarURL": "https://f002.backblazeb2.com/file/Edutech-Assets/DefaultAvatar.png",
        "customID": "ID-240",
        "tMod": "500",
        "key": "l6d2RIrT7iYjUSoqBV2oUhjJuEB2"
    },
    {
        "AcceptedDate": "Jun 13, 22 | 15:45",
        "AppliedDate": "Jun 13, 22 | 15:45",
        "Email": "salamun@gmail.com",
        "Institution": "unset",
        "Name": "Salamun",
        "Phone": "+8801778866554",
        "Type": "Physical",
        "UID": "qWErWkylU9dWNghpN89A8riQqeh2",
        "VideoPermission": "Allowed",
        "avatarURL": "https://f002.backblazeb2.com/file/Edutech-Assets/DefaultAvatar.png",
        "customID": "ID-112",
        "key": "qWErWkylU9dWNghpN89A8riQqeh2"
    },
    {
        "AcceptedDate": "Jun 14, 22 | 16:24",
        "AppliedDate": "Jun 14, 22 | 16:24",
        "Email": "mehraz@gmail.com",
        "Institution": "unset",
        "Name": "Mehraz",
        "Phone": "%2B8801828384788",
        "Type": "Live",
        "UID": "WnduKWbErzSwgMw2L1PNqeDRoZz1",
        "VideoPermission": "Allowed",
        "avatarURL": "https://i.imgur.com/XqL3xLp.png",
        "tutionStartForce": "Aug 2022",
        "key": "WnduKWbErzSwgMw2L1PNqeDRoZz1"
    }
]
  
  var searchItems = ["WnduKWbErzSwgMw2L1PNqeDRoZz1","qWErWkylU9dWNghpN89A8riQqeh2"]
  
  var filteredData = items.filter(item => searchItems.includes(item.key))
  
  console.log(filteredData)