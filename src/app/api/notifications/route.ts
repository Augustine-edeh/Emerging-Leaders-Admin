import { NextResponse } from "next/server";

export async function GET() {
  // Simulated notifications response
  const notifications = [
    {
      section: "Today",
      items: [
        {
          id: 1,
          avatar: "/avatars/user1.png",
          title: "Demi Wikison accepted admin invite",
          datetime: "Jun 16, 2025 | 09:23 am",
          unread: true,
        },
        {
          id: 2,
          avatar: "/avatars/user2.png",
          title: "New comment on your post",
          datetime: "Jun 16, 2025 | 08:15 am",
          unread: false,
        },
      ],
    },

    {
      section: "Yesterday",
      items: [
        {
          id: 3,
          avatar: "/avatars/user3.png",
          title: "Alex Johnson mentioned you in a comment",
          datetime: "Jun 15, 2025 | 05:45 pm",
          unread: true,
        },
      ],
    },

    {
      section: "Fri Jun 13, 2025",
      items: [
        {
          id: 4,
          avatar: "/avatars/user4.png",
          title: "System update completed",
          datetime: "Jun 13, 2025 | 02:30 pm",
          unread: false,
        },
      ],
    },
  ];

  return NextResponse.json({ notifications });
}
