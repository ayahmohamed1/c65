import styles from './FallingEmojis.module.css'

const EMOJIS = ['❤️', '🌎', '✨', '✨', '❤️', '🌎', '✨', '❤️']

export default function FallingEmojis() {
  return (
    <div className={styles.background} aria-hidden="true">
      {EMOJIS.map((emoji, index) => (
        <span
          key={index}
          className={styles.emoji}
          style={{
            '--left': `${8 + index * 12}%`,
            '--duration': `${14 + (index % 4) * 3}s`,
            '--delay': `${-index * 2.1}s`,
            '--drift': `${index % 2 === 0 ? 35 : -35}px`,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  )
}
