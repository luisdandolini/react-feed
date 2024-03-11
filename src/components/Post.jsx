import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito banaca, hein? 👏',
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(new Date(publishedAt), 'd MMM yyyy HH:mm', {
    locale: ptBr,
    addSuffix: true
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr
  });

  function handleCreateNewCommet(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText('');
  }

  function handleNewCommnentChange(event) {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOStrign}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map((item, index) => {
            if (item.type === 'paragraph') {
              return <p key={index}>{item.content}</p>
            }

            if (item.type === 'link') {
              return <a className={styles.link} key={index} href={item.content} target="_blank" rel="noreferrer">{item.content}</a>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewCommet} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
          name='comment'
          onChange={handleNewCommnentChange}
          value={newCommentText}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment} />
        })}
      </div>
    </article>
  );
}