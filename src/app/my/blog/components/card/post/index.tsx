import { forwardRef } from "react";
import { CardProps } from "../card.entity";

const PostCard = forwardRef<HTMLDivElement, CardProps>
  (({ ...props }, ref): JSX.Element => {
  return (
    <div ref={ref} {...props}>
      Post Card
    </div>
  )
})

PostCard.displayName = 'PostCard';

export default PostCard