import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/gapskii.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mateus Gapski</strong>
              <time title='10 de Outubro às 10:15h' dateTime='2022-10-10 10:15:30'>Publicado há 1h</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!</p>
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