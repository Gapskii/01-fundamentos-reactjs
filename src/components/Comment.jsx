import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount (likeCount + 1)
  } 

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gapskii.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mateus Gapski</strong>
              <time title='10 de Outubro às 10:15h' dateTime='2022-10-10 10:15:30'>Publicado há 1h</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          {content}
        </div>

        <footer>
          <button type='submit' onClick={handleLikeComment}>
            <ThumbsUp /> 
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}