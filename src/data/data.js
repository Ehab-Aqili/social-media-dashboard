const userData = [
  {
    id: 0,
    firstName: "Mohammad",
    lastName: "Mahmoud",
    image:
      "https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    imageCover:
      "https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gender: "Male",
    location: "Amman - Jordan",
    birthDate: "June 26, 1980",
    email: "charles5182@ummoh.com",
    phone: "33757005467",
    statusLogin: true,
    statusOnline: "online",
    friends: [{ fullName: "John Doe", email: "johndoe@example.com" }],
    friendsRequest: [
      { fullName: "Jane Smith", email: "janesmith@example.com" },
    ],
    post: [
      {
        id: 0,
        dataPost: {
          image:
            "https://www.allkindsoftherapy.com/wp-content/uploads/formidable/22/o_1ejko4nrg12b2d4k17hm1hi1ipg7-1.jpg",
          content: "This is my first post.",
          datePost: "2023-06-16",
        },
        likes: [
          {
            fullName: "Emily Johnson",
            email: "emilyjohnson@example.com",
            like: true,
          },
        ],
        comments: [
          {
            fullName: "David Brown",
            imageUser:
              "https://images.unsplash.com/photo-1558220829-f1856c69ee83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "davidbrown@example.com",
            comment: "Great post!",
            dateComment: "2023-06-17",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    firstName: "Sarah",
    lastName: "Johnson",
    image:
      "https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1852&q=80",
    imageCover:
      "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gender: "Female",
    location: "New York, USA",
    birthDate: "March 10, 1995",
    email: "sarahjohnson@example.com",
    phone: "1234567890",
    statusLogin: true,
    friends: [{ fullName: "Alex Smith", email: "alexsmith@example.com" }],
    friendsRequest: [
      { fullName: "Jessica Williams", email: "jessicawilliams@example.com" },
    ],
    post: [
      {
        id: 0,
        dataPost: {
          image:
            "https://media.istockphoto.com/id/1473669002/photo/summer-background-with-marble-podium-in-pool-water.jpg?s=612x612&w=0&k=20&c=GYplEqIviyjB4CCnwsniK0Tz0EgNqvmwVWLeWnlm8sY=",
          content: "Enjoying my vacation!",
          datePost: "2023-06-15",
        },
        likes: [
          {
            fullName: "Michael Davis",
            email: "michaeldavis@example.com",
            like: true,
          },
        ],
        comments: [
          {
            fullName: "Jennifer Brown",
            imageUser:
              "https://media.istockphoto.com/id/1180926773/photo/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-arms.jpg?s=2048x2048&w=is&k=20&c=VYn4tz2BDFfEs78jO_hvpUXZLwr64qSfn0VFE_v0U5U=",
            email: "jenniferbrown@example.com",
            comment: "Looks amazing!",
            dateComment: "2023-06-16",
          },
        ],
      },
      {
        id: 1,
        dataPost: {
          image:
            "https://media.istockphoto.com/id/1371940128/photo/multiracial-friends-taking-big-group-selfie-shot-smiling-at-camera-laughing-young-people.jpg?s=2048x2048&w=is&k=20&c=8wl2jK5Zfp3UgeI8REhfN267YMqYyFgl9SD91whOQrs=",
          content: "Feeling grateful.",
          datePost: "2023-06-14",
        },
        likes: [
          {
            fullName: "Daniel Wilson",
            email: "danielwilson@example.com",
            like: true,
          },
          {
            fullName: "Emily Thompson",
            email: "emilythompson@example.com",
            like: false,
          },
        ],
        comments: [
          {
            fullName: "John Anderson",
            imageUser:
              "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=2048x2048&w=is&k=20&c=YmjrR4r6G_4XUliPPK3PPLHrkqKLvSY2D3ZEQewLZ38=",
            email: "johnanderson@example.com",
            comment: "You deserve it!",
            dateComment: "2023-06-15",
          },
          {
            fullName: "Olivia Martinez",
            imageUser:
              "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=eskue6p9gwUVS2t0Kpuw6rd7Sgu5nKgxsMD6Aqaba8I=",
            email: "oliviamartinez@example.com",
            comment: "So happy for you!",
            dateComment: "2023-06-15",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    image:
      "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    imageCover:
      "https://images.unsplash.com/photo-1608605367293-2d8c9356d0fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1310&q=80",
    gender: "Male",
    location: "New York City, USA",
    birthDate: "January 1, 1995",
    email: "johndoe@example.com",
    phone: "1234567890",
    statusLogin: true,
    friends: [{ fullName: "Jane Smith", email: "janesmith@example.com" }],
    friendsRequest: [
      { fullName: "Mike Johnson", email: "mikejohnson@example.com" },
    ],
    post: [
      {
        id: 0,
        dataPost: {
          image:
            "https://plus.unsplash.com/premium_photo-1664701475272-953393050754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          content: "Hello from John!",
          datePost: "2023-06-16",
        },
        likes: [
          {
            fullName: "Emily Wilson",
            email: "emilywilson@example.com",
            like: true,
          },
        ],
        comments: [
          {
            fullName: "Sarah Davis",
            imageUser:
              "https://images.unsplash.com/photo-1482849297070-f4fae2173efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            email: "sarahdavis@example.com",
            comment: "Nice post!",
            dateComment: "2023-06-16",
          },
        ],
      },
      {
        id: 1,
        dataPost: {
          image:
            "https://plus.unsplash.com/premium_photo-1664701475272-953393050754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          content: "Enjoying nature!",
          datePost: "2023-06-15",
        },
        likes: [
          {
            fullName: "Michael Thompson",
            email: "michaelthompson@example.com",
            like: true,
          },
          {
            fullName: "Jessica Wilson",
            email: "jessicawilson@example.com",
            like: false,
          },
        ],
        comments: [
          {
            fullName: "Alex Johnson",
            imageUser:
              "https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            email: "alexjohnson@example.com",
            comment: "Beautiful scenery!",
            dateComment: "2023-06-15",
          },
          {
            fullName: "Olivia Brown",
            imageUser:
              "https://images.unsplash.com/photo-1514846117827-513efb7aa48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=393&q=80",
            email: "oliviabrown@example.com",
            comment: "I love nature!",
            dateComment: "2023-06-15",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    firstName: "Emily",
    lastName: "Johnson",
    image:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    imageCover:
      "https://images.unsplash.com/photo-1549937915-3dd443a3583f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    gender: "Female",
    location: "London, UK",
    birthDate: "March 10, 1990",
    email: "emilyjohnson@example.com",
    phone: "9876543210",
    statusLogin: true,
    friends: [{ fullName: "Michael Smith", email: "michaelsmith@example.com" }],
    friendsRequest: [
      { fullName: "Sophia Davis", email: "sophiadavis@example.com" },
    ],
    post: [
      {
        id: 0,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
          content: "Hello from Emily!",
          datePost: "2023-06-16",
        },
        likes: [
          { fullName: "John Doe", email: "johndoe@example.com", like: true },
        ],
        comments: [
          {
            fullName: "Sarah Thompson",
            imageUser:
              "https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1852&q=80",
            email: "sarahthompson@example.com",
            comment: "Nice to meet you!",
            dateComment: "2023-06-16",
          },
        ],
      },
      {
        id: 1,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1523898052899-241108586cf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          content: "Enjoying the beach!",
          datePost: "2023-06-15",
        },
        likes: [
          {
            fullName: "Jessica Wilson",
            email: "jessicawilson@example.com",
            like: true,
          },
          {
            fullName: "Michael Thompson",
            email: "michaelthompson@example.com",
            like: false,
          },
        ],
        comments: [
          {
            fullName: "Olivia Davis",
            imageUser:
              "https://images.unsplash.com/photo-1514846117827-513efb7aa48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=393&q=80",
            email: "oliviadavis@example.com",
            comment: "Looks like a wonderful place!",
            dateComment: "2023-06-15",
          },
          {
            fullName: "Alex Brown",
            imageUser:
              "https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            email: "alexbrown@example.com",
            comment: "I wish I could be there!",
            dateComment: "2023-06-15",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    firstName: "Sophia",
    lastName: "Wilson",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageCover:
      "https://images.unsplash.com/photo-1563991655280-cb95c90ca2fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gender: "Female",
    location: "New York, USA",
    birthDate: "January 5, 1995",
    email: "sophiawilson@example.com",
    phone: "1234567890",
    statusLogin: true,
    friends: [{ fullName: "John Smith", email: "johnsmith@example.com" }],
    friendsRequest: [
      { fullName: "Emily Johnson", email: "emilyjohnson@example.com" },
    ],
    post: [
      {
        id: 0,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          content: "Hello, everyone!",
          datePost: "2023-06-16",
        },
        likes: [
          {
            fullName: "Michael Davis",
            email: "michaeldavis@example.com",
            like: true,
          },
        ],
        comments: [
          {
            fullName: "Oliver Brown",
            imageUser:
              "https://images.unsplash.com/photo-1514846117827-513efb7aa48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=393&q=80",
            email: "oliverbrown@example.com",
            comment: "Nice to see you here!",
            dateComment: "2023-06-16",
          },
        ],
      },
      {
        id: 1,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          content: "Exploring the city!",
          datePost: "2023-06-15",
        },
        likes: [
          {
            fullName: "Jessica Thompson",
            email: "jessicathompson@example.com",
            like: true,
          },
          {
            fullName: "Michael Johnson",
            email: "michaeljohnson@example.com",
            like: false,
          },
        ],
        comments: [
          {
            fullName: "William Davis",
            imageUser:
              "https://images.unsplash.com/photo-1496346236646-50e985b31ea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "williamdavis@example.com",
            comment: "I love the architecture!",
            dateComment: "2023-06-15",
          },
          {
            fullName: "Emma Jones",
            imageUser:
              "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            email: "emmajones@example.com",
            comment: "What a vibrant city!",
            dateComment: "2023-06-15",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    firstName: "Sophia",
    lastName: "Anderson",
    image:
      "https://images.unsplash.com/photo-1492814580460-1f9a2a463cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageCover:
      "https://plus.unsplash.com/premium_photo-1667899358047-f2458452158c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gender: "Female",
    location: "London, UK",
    birthDate: "December 5, 1995",
    email: "sophiaanderson@example.com",
    phone: "1234567890",
    statusLogin: true,
    friends: [{ fullName: "Michael Smith", email: "michaelsmith@example.com" }],
    friendsRequest: [
      { fullName: "Olivia Davis", email: "oliviadavis@example.com" },
    ],
    post: [
      {
        id: 0,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          content: "Hello, everyone!",
          datePost: "2023-06-16",
        },
        likes: [
          {
            fullName: "Emily Johnson",
            email: "emilyjohnson@example.com",
            like: true,
          },
        ],
        comments: [
          {
            fullName: "David Brown",
            imageUser:
              "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "davidbrown@example.com",
            comment: "Nice to see you here!",
            dateComment: "2023-06-16",
          },
        ],
      },
      {
        id: 1,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          content: "Enjoying nature!",
          datePost: "2023-06-15",
        },
        likes: [
          {
            fullName: "Emily Johnson",
            email: "emilyjohnson@example.com",
            like: true,
          },
          {
            fullName: "Michael Smith",
            email: "michaelsmith@example.com",
            like: false,
          },
        ],
        comments: [
          {
            fullName: "Olivia Davis",
            imageUser:
              "https://images.unsplash.com/photo-1527108820736-fef23606c780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80",
            email: "oliviadavis@example.com",
            comment: "Beautiful scenery!",
            dateComment: "2023-06-15",
          },
          {
            fullName: "David Brown",
            imageUser:
              "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "davidbrown@example.com",
            comment: "Looks amazing!",
            dateComment: "2023-06-15",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    firstName: "Liam",
    lastName: "Wilson",
    image:
      "https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageCover:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    gender: "Male",
    location: "New York, USA",
    birthDate: "August 12, 1990",
    email: "liamwilson@example.com",
    phone: "1234567890",
    statusLogin: true,
    friends: [{ fullName: "Emma Johnson", email: "emmajohnson@example.com" }],
    friendsRequest: [
      { fullName: "James Davis", email: "jamesdavis@example.com" },
    ],
    post: [
      {
        id: 0,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1511963211013-83bba110595d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
          content: "Hello, everyone!",
          datePost: "2023-06-16",
        },
        likes: [
          {
            fullName: "Emily Johnson",
            email: "emilyjohnson@example.com",
            like: true,
          },
        ],
        comments: [
          {
            fullName: "David Brown",
            imageUser:
              "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "davidbrown@example.com",
            comment: "Nice to see you here!",
            dateComment: "2023-06-16",
          },
        ],
      },
      {
        id: 1,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1461468611824-46457c0e11fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          content: "Enjoying nature!",
          datePost: "2023-06-15",
        },
        likes: [
          {
            fullName: "Emily Johnson",
            email: "emilyjohnson@example.com",
            like: true,
          },
          {
            fullName: "Michael Smith",
            email: "michaelsmith@example.com",
            like: false,
          },
        ],
        comments: [
          {
            fullName: "Olivia Davis",
            imageUser:
              "https://images.unsplash.com/photo-1527108820736-fef23606c780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80",
            email: "oliviadavis@example.com",
            comment: "Beautiful scenery!",
            dateComment: "2023-06-15",
          },
          {
            fullName: "David Brown",
            imageUser:
              "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "davidbrown@example.com",
            comment: "Looks amazing!",
            dateComment: "2023-06-15",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    firstName: "Emma",
    lastName: "Johnson",
    image:
      "https://images.unsplash.com/photo-1501168296011-538e44c26981?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageCover:
      "https://images.unsplash.com/photo-1515940175183-6798529cb860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1329&q=80",
    gender: "Female",
    location: "London, UK",
    birthDate: "December 5, 1995",
    email: "sophiaanderson@example.com",
    phone: "1234567890",
    statusLogin: true,
    friends: [{ fullName: "Michael Smith", email: "michaelsmith@example.com" }],
    friendsRequest: [
      { fullName: "Olivia Davis", email: "oliviadavis@example.com" },
    ],
    post: [
      {
        id: 0,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1496240476075-8bbe454c971a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80",
          content: "Hello, everyone!",
          datePost: "2023-06-16",
        },
        likes: [
          {
            fullName: "Emily Johnson",
            email: "emilyjohnson@example.com",
            like: true,
          },
        ],
        comments: [
          {
            fullName: "David Brown",
            imageUser:
              "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "davidbrown@example.com",
            comment: "Nice to see you here!",
            dateComment: "2023-06-16",
          },
        ],
      },
      {
        id: 1,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1500999753436-5de4f76353f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          content: "Enjoying nature!",
          datePost: "2023-06-15",
        },
        likes: [
          {
            fullName: "Emily Johnson",
            email: "emilyjohnson@example.com",
            like: true,
          },
          {
            fullName: "Michael Smith",
            email: "michaelsmith@example.com",
            like: false,
          },
        ],
        comments: [
          {
            fullName: "Olivia Davis",
            imageUser:
              "https://images.unsplash.com/photo-1527108820736-fef23606c780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80",
            email: "oliviadavis@example.com",
            comment: "Beautiful scenery!",
            dateComment: "2023-06-15",
          },
          {
            fullName: "David Brown",
            imageUser:
              "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "davidbrown@example.com",
            comment: "Looks amazing!",
            dateComment: "2023-06-15",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    firstName: "Olivia",
    lastName: "Martin",
    image:
      "https://images.unsplash.com/photo-1478118330274-ff72cf1161a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageCover:
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gender: "Female",
    location: "Paris, France",
    birthDate: "January 15, 1992",
    email: "oliviamartin@example.com",
    phone: "1234567890",
    statusLogin: true,
    friends: [{ fullName: "Emma Johnson", email: "emmajohnson@example.com" }],
    friendsRequest: [
      { fullName: "James Davis", email: "jamesdavis@example.com" },
    ],
    post: [
      {
        id: 0,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1643473232037-08736b56178d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
          content: "Hello, everyone!",
          datePost: "2023-06-16",
        },
        likes: [
          {
            fullName: "Emily Johnson",
            email: "emilyjohnson@example.com",
            like: true,
          },
        ],
        comments: [
          {
            fullName: "David Brown",
            imageUser:
              "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "davidbrown@example.com",
            comment: "Nice to see you here!",
            dateComment: "2023-06-16",
          },
        ],
      },
      {
        id: 1,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1657609738160-96ea3f49ca69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          content: "Enjoying nature!",
          datePost: "2023-06-15",
        },
        likes: [
          {
            fullName: "Emily Johnson",
            email: "emilyjohnson@example.com",
            like: true,
          },
          {
            fullName: "Michael Smith",
            email: "michaelsmith@example.com",
            like: false,
          },
        ],
        comments: [
          {
            fullName: "Olivia Davis",
            imageUser:
              "https://images.unsplash.com/photo-1527108820736-fef23606c780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80",
            email: "oliviadavis@example.com",
            comment: "Beautiful scenery!",
            dateComment: "2023-06-15",
          },
          {
            fullName: "David Brown",
            imageUser:
              "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "davidbrown@example.com",
            comment: "Looks amazing!",
            dateComment: "2023-06-15",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    firstName: "Oliver",
    lastName: "Taylor",
    image:
      "https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageCover:
      "https://images.unsplash.com/photo-1623627484632-f041d1fb366d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    gender: "Male",
    location: "New York, USA",
    birthDate: "August 10, 1990",
    email: "olivertaylor@example.com",
    phone: "1234567890",
    statusLogin: true,
    friends: [{ fullName: "Emma Johnson", email: "emmajohnson@example.com" }],
    friendsRequest: [
      { fullName: "James Davis", email: "jamesdavis@example.com" },
    ],
    post: [
      {
        id: 0,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          content: "Hello, everyone!",
          datePost: "2023-06-16",
        },
        likes: [
          {
            fullName: "Emily Johnson",
            email: "emilyjohnson@example.com",
            like: true,
          },
        ],
        comments: [
          {
            fullName: "David Brown",
            imageUser:
              "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "davidbrown@example.com",
            comment: "Nice to see you here!",
            dateComment: "2023-06-16",
          },
        ],
      },
      {
        id: 1,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1652598908546-18a1de2edecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
          content: "Enjoying nature!",
          datePost: "2023-06-15",
        },
        likes: [
          {
            fullName: "Emily Johnson",
            email: "emilyjohnson@example.com",
            like: true,
          },
          {
            fullName: "Michael Smith",
            email: "michaelsmith@example.com",
            like: false,
          },
        ],
        comments: [
          {
            fullName: "Olivia Davis",
            imageUser:
              "https://images.unsplash.com/photo-1527108820736-fef23606c780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80",
            email: "oliviadavis@example.com",
            comment: "Beautiful scenery!",
            dateComment: "2023-06-15",
          },
          {
            fullName: "David Brown",
            imageUser:
              "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "davidbrown@example.com",
            comment: "Looks amazing!",
            dateComment: "2023-06-15",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    firstName: "David",
    lastName: "Smith",
    image:
      "https://images.unsplash.com/photo-1482235225574-c37692835cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxyYW5kb20lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    imageCover:
      "https://images.unsplash.com/photo-1528465424850-54d22f092f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gender: "Male",
    location: "New York, USA",
    birthDate: "March 25, 1995",
    email: "davidsmith@example.com",
    phone: "1234567890",
    statusLogin: true,
    friends: [
      { fullName: "Jessica Johnson", email: "jessicajohnson@example.com" },
    ],
    friendsRequest: [
      { fullName: "Michael Brown", email: "michaelbrown@example.com" },
    ],
    post: [
      {
        id: 0,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1686405556142-49e874f4870e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          content: "Hello, world!",
          datePost: "2023-06-16",
        },
        likes: [
          {
            fullName: "Sophia Wilson",
            email: "sophiawilson@example.com",
            like: true,
          },
        ],
        comments: [
          {
            fullName: "Oliver Johnson",
            imageUser:
              "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "oliverjohnson@example.com",
            comment: "Nice post!",
            dateComment: "2023-06-16",
          },
        ],
      },
      {
        id: 1,
        dataPost: {
          image:
            "https://images.unsplash.com/photo-1622720157683-a6aa955b66e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=845&q=80",
          content: "Exploring new places!",
          datePost: "2023-06-15",
        },
        likes: [
          {
            fullName: "Emma Thompson",
            email: "emmathompson@example.com",
            like: true,
          },
          {
            fullName: "Sophia Wilson",
            email: "sophiawilson@example.com",
            like: false,
          },
        ],
        comments: [
          {
            fullName: "Jessica Johnson",
            imageUser:
              "https://images.unsplash.com/photo-1473286835901-04adb1afab03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            email: "jessicajohnson@example.com",
            comment: "I love traveling too!",
            dateComment: "2023-06-15",
          },
          {
            fullName: "Michael Brown",
            imageUser:
              "https://images.unsplash.com/photo-1496345962527-29757c3a3d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            email: "michaelbrown@example.com",
            comment: "Amazing view!",
            dateComment: "2023-06-15",
          },
        ],
      },
    ],
  },
];

export default userData;
