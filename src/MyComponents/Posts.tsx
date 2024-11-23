"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Post from './Post'
import Loader from './Loader'
import ShareDialog from './ShareDialog'
import React from 'react'
interface PostData {
  id: number
  title: string
  body: string
}

export default function Posts() {
  const [posts, setPosts] = useState<PostData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)
  const [currentSharePost, setCurrentSharePost] = useState<PostData | null>(null)

  const fetchPosts = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPosts(data) // Limiting to 10 posts for this example
			setIsLoading(false)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } 
  }

  const handleShare = (post: PostData) => {
    setCurrentSharePost(post)
    setIsShareDialogOpen(true)
  }

  return (
    <div className="container mx-auto p-4">
      <Button onClick={fetchPosts} className="mb-4">Add Posts</Button>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="space-y-4">
          {posts.map(post => (
            <Post key={post.id} post={post} onShare={() => handleShare(post)} />
          ))}
        </div>
      )}
      <ShareDialog 
        isOpen={isShareDialogOpen} 
        onClose={() => setIsShareDialogOpen(false)}
        post={currentSharePost}
      />
    </div>
  )
}