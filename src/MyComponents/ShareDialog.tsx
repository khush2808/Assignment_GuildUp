import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import React from 'react'
interface ShareDialogProps {
  isOpen: boolean
  onClose: () => void
  post: {
    id: number
    title: string
    body: string
  } | null
}

export default function ShareDialog({ isOpen, onClose, post }: ShareDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share this post</DialogTitle>
          <DialogDescription>
            {post ? `You're sharing: "${post.title}"` : 'Select a post to share'}
          </DialogDescription>
        </DialogHeader>
        <p className="py-4">
          This is where you would implement your sharing functionality.
          For now, we'll just display this message.
        </p>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}