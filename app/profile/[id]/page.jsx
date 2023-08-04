"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const username = searchParams.get("name");
  const [posts, setPosts] = useState([]);

  const userID = params?.id;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`api/users/${userID}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (userID) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={username}
      desc={`Welcome to ${username} personlaized profile page. Explore ${username}'s exceptional prompts and be inspired by the power of their imagination `}
      data={posts}
    />
  );
};

export default MyProfile;
