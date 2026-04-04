export interface Interest {
  id: number
  title: string
  category: "Phim" | "Trò chơi"
  image: string
  description?: string
}

export const interests: Interest[] = [
  {
    id: 1,
    title: "SUITS",
    category: "Phim",
    image: "https://i.pinimg.com/474x/8c/88/88/8c888877f8b6195c5abd7b349169ad1e.jpg", // placeholder for legal drama
    description: "Bộ phim về luật sư tài ba và những vụ án gay cấn."
  },
  {
    id: 2,
    title: "The Walking Dead",
    category: "Phim",
    image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608872251/the-walking-dead-9781608872251_hr.jpg", // placeholder for post-apocalypse
    description: "Hành trình sinh tồn trong thế giới hậu tận thế."
  },
  {
    id: 3,
    title: "Resident Evil 7",
    category: "Trò chơi",
    image: "https://i.redd.it/xq7xyf70ln271.jpg", // placeholder for horror
    description: "Trải nghiệm kinh dị sinh tồn đỉnh cao tại dinh thự Baker."
  },
  {
    id: 4,
    title: "Resident Evil 8",
    category: "Trò chơi",
    image: "https://preview.redd.it/is-this-offical-cover-art-for-resident-evil-village-hinting-v0-s9d3rknrmng61.png?auto=webp&s=72fbcb8f3caabc8b4d8f4c328e74458f211dc763", // placeholder for castle/village horror
    description: "Cuộc phiêu lưu kinh hoàng tại ngôi làng và lâu đài ma quái."
  },
  {
    id: 5,
    title: "Liên Minh Huyền Thoại",
    category: "Trò chơi",
    image: "https://static0.polygonimages.com/wordpress/wp-content/uploads/sharedimages/2024/12/mixcollage-24-dec-2024-11-21-pm-8173.jpg", // placeholder for gaming
    description: "Đấu trường trực tuyến với những trận chiến nảy lửa."
  }
]
