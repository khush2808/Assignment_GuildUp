"use client"

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Share } from 'lucide-react'
import React from 'react'
interface PostProps {
  post: {
    id: number
    title: string
    body: string
  }
  onShare: () => void
}

export default function Post({ post, onShare }: PostProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{post.body}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant={isLiked ? "default" : "outline"}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`mr-2 h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          {isLiked ? 'Liked' : 'Like'}
        </Button>
        <Button variant="outline" onClick={onShare}>
          <Share className="mr-2 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}