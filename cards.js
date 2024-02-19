// You can add new scenarios, but make sure that there is exactly...
// * 1 hackerCard per scenario
// * 3 playerCards per scenario

var scenarios = [
  {
    hackerCard: {
      description: "Con của bạn đang học lớp 2. Một hôm, con đi học về với khuôn mặt đầy lo lắng và buồn bã. Khi bạn hỏi lí do, con nói: 'Bố mẹ bạn con nói trẻ con được bố mẹ nhặt từ bãi rác về nuôi. Nếu như con không ngoan sẽ bị mang ra đó trả lại. Con sợ quá mẹ ơi, mẹ có đem con ra bãi rác nếu con không ngoan không?' Bạn sẽ chọn phương án nào dưới đây:",
      power: 3,
    },
    playerCards: [
      {
        description: "Nói với con rằng con là con do bố và mẹ sinh ra, là kết quả của tình yêu giữa bố và mẹ. Con đừng lo lắng vì bố mẹ sẽ không đưa con đi đâu cả.",
        power: 4,
      },
      {
        description: "Nói với con rằng con không phải nhặt từ bãi rác đâu, một con cò mang con đến cho bố mẹ, bố mẹ sẽ không trả con lại đâu.",
        power: 2,
      },
      {
        description: "Khẳng định điều con nói là đúng và dặn dò con nên ngoan ngoãn nếu không bố mẹ sẽ đem con ra bãi rác trả lại.",
        power: 2,
      }
    ]
  },
  {
    hackerCard: {
      description: "Dấu hiệu nào sau đây ở con gái đánh dấu sự chính thức dậy thì?",
      power: 3,
    },
    playerCards: [
      {
        description: "Có kinh nguyệt.",
        power: 4,
      },
      {
        description: "Nổi mụn trứng cá.",
        power: 2,
      },
      {
        description: "Ngực to nhanh.",
        power: 2,
      }
    ]
  },
  {
    hackerCard: {
      description: "Dấu hiệu nào sau đây ở con trai đánh dấu sự chính thức dậy thì?",
      power: 3,
    },
    playerCards: [
      {
        description: "Xuất hiện mộng tinh.",
        power: 4,
      },
      {
        description: "Cơ thể béo nhanh.",
        power: 2,
      },
      {
        description: "Vỡ giọng.",
        power: 2,
      }
    ]
  },
  {
    hackerCard: {
      description: "Lắng nghe cơ thể, ăn khi cảm thấy đói và duy trì thói quen ăn uống có lợi cho sức khoẻ, tham gia thể dục thể thao giúp:",
      power: 3,
    },
    playerCards: [
      {
        description: "Trẻ vị thành niên tăng chiều cao tối đa, thể trạng và sức khoẻ tốt.",
        power: 4,
      },
      {
        description: "Thừa cân, béo phì và có nguy cơ ảnh hưởng xấu đến sức khoẻ sinh sản khi trưởng thành.",
        power: 2,
      },
      {
        description: "Không giúp ích gì.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "Dấu hiệu nào sau đây KHÔNG PHẢI là biểu hiện đặc trưng của bạo lực tinh thân?",
      power: 2,
    },
    playerCards: [
      {
        description: "Bắt luyện tập, lao động quá sức.",
        power: 3,
      },
      {
        description: "Dùng vũ khí gây thương tích.",
        power: 3,
      },
      {
        description: "Thao túng, hành hạ về mặt cảm xúc",
        power: 1,
      }
    ]
  },

  {
    hackerCard: {
      description: "Khi biết học sinh sử dụng mạng xã hội, giáo viên cấp 3 nên nhắc nhở điều gì?",
      power: 2,
    },
    playerCards: [
      {
        description: "Không tùy tiện kết bạn với người lạ, không vào các trang web đen, đường link lạ... để phòng ngừa rủi ro.",
        power: 3,
      },
      {
        description: "Tự kiểm soát bản thân vì Internet và mạng xã hội rất dễ gây nghiện.",
        power: 3,
      },
      {
        description: "Không cần nhắc gì, vì học sinh cấp 3 đã đủ lớn để tự biết những điều này.",
        power: 1,
      }
    ]
  },

  {
    hackerCard: {
      description: "Thầy/cô sẽ làm gì để thúc đẩy bình đẳng giới trong lớp học, nhà trường?",
      power: 2,
    },
    playerCards: [
      {
        description: "Khuyến khích học sinh LGBT phát huy tối đa khả năng, năng lực của bản thân.",
        power: 3,
      },
      {
        description: "Tạo cơ hội, tổ chức diễn đàn để các HS và GV có cái nhìn đúng hơn về LGBT.",
        power: 3,
      },
      {
        description: "Đối xử bất bình đẳng giữa các học sinh.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "Chọn đáp án đúng nhất. Sử dụng bao cao su trong quan hệ tình dục nhằm:",
      power: 2,
    },
    playerCards: [
      {
        description: "Ngăn ngừa mang thai và phá thai ở tuổi vị thành niên.",
        power: 2,
      },
      {
        description: "Không có tác dụng.",
        power: 1,
      },
      {
        description: "Phòng tránh các bệnh lây truyền qua đường tình dục và phòng tránh mang thai ngoài ý muốn.",
        power: 3,
      }
    ]
  },
  {
    hackerCard: {
      description: "Quá trình thụ thai dễ diễn ra ở thời điểm:",
      power: 3,
    },
    playerCards: [
      {
        description: "Vào ngày thứ 13 đến 15 của chu kì kinh nguyệt.",
        power: 4,
      },
      {
        description: "Vào ngày thứ 26 đến 28 của chu kỳ kinh nguyệt.",
        power: 2,
      },
      {
        description: "Vào ngày có kinh của chu kỳ kinh nguyệt.",
        power: 2,
      }
    ]
  },
  {
    hackerCard: {
      description: "Sử dụng thuốc giảm cân ở tuổi vị thành niên gây ra những tác hại cho cơ thể:",
      power: 2,
    },
    playerCards: [
      {
        description: "Tổn thương gan và hệ thống tiêu hoá, gây suy thận.",
        power: 3,
      },
      {
        description: "Tăng huyết áp, tăng nhịp tim.",
        power: 3,
      },
      {
        description: "Không gây tổn thương gì.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "Khi nhận biết học sinh bị các bạn trong lớp chống đối, cô lập, nói xấu,..., GV nên phản ứng như thế nào?",
      power: 3,
    },
    playerCards: [
      {
        description: "Thấy chưa đáng lo ngại vì cho rằng đó là những hành động trẻ con.",
        power: 2,
      },
      {
        description: "Im lặng, coi như không biết vì đây không phải là học sinh của lớp mình chủ nhiệm.",
        power: 2,
      },
      {
        description: "Theo dõi các biểu hiện, tìm hiểu nguyên nhân, quan tâm và giúp đỡ học sinh.",
        power: 4,
      }
    ]
  },
  {
    hackerCard: {
      description: "Để sử dụng thiết bị công nghệ và internet an toàn, chúng ta cần hướng dẫn học sinh không nên làm điều nào sau đây:",
      power: 3,
    },
    playerCards: [
      {
        description: "Không truy cập những trang web đen, hoặc trang không đáng tin cậy.",
        power: 4,
      },
      {
        description: "Cho phép mọi người thoải mái sử dụng điện thoại, máy tính của mình.",
        power: 2,
      },
      {
        description: "Sử dụng mật khẩu khó đoán và thay đổi mật khẩu định kỳ.",
        power: 4,
      }
    ]
  },
  {
    hackerCard: {
      description: "Hành vi nào sau đây không phải là biểu hiện của bạo lực kinh tế?",
      power: 3,
    },
    playerCards: [
      {
        description: "Để thể hiện tính ga lăng thì con trai phải trả tiền cho cả nhóm.",
        power: 2,
      },
      {
        description: "Bắt người khác cống nạp tiền tiêu vặt cho mình.",
        power: 2,
      },
      {
        description: "Chủ động mời bạn đi ăn nhân dịp vui vẻ và tự trả tiền cho cả hai.",
        power: 4,
      }
    ]
  }
];