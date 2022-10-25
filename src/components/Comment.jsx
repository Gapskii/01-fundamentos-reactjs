import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {

  function handleDeleteComment(){
    onDeleteComment(content);
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
          <button type='submit'>
            <ThumbsUp /> 
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}