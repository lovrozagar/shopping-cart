import { Link } from 'react-router-dom'

type TitleProps = {
  mode: boolean
  isActiveLink?: boolean
}

function Title({ mode, isActiveLink = false }: TitleProps) {
  // CUSTOM COLORS DO NOT WORK IN TEXT SHADOW, USING PRIMARY RED AND BLUE
  const textShadowRed = mode ? '5px 0px 20px #ef4444' : '5px 0px 60px #ef4444'
  const textShadowBlue = mode ? '5px 0px 20px #3b82f6' : '5px 0px 60px #3b82f6'
  const textH1 = 'px-1 text-3xl font-bold italic'

  return (
    <div className='overflow-hidden rounded-xl p-2'>
      {isActiveLink ? (
        <Link
          to='/'
          className='flex items-center rounded ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
        >
          <h1 className={textH1}>
            <span
              className='text-constant-red'
              style={{ textShadow: textShadowRed }}
            >
              C
            </span>
            <span style={{ textShadow: textShadowRed }}>ar</span>
            <span
              className='text-constant-blue'
              style={{ textShadow: textShadowBlue }}
            >
              Q
            </span>
            <span style={{ textShadow: textShadowBlue }}>uest</span>
          </h1>
        </Link>
      ) : (
        <h1 className={textH1}>
          <span
            className='text-constant-red'
            style={{ textShadow: textShadowRed }}
          >
            C
          </span>
          <span style={{ textShadow: textShadowRed }}>ar</span>
          <span
            className='text-constant-blue'
            style={{ textShadow: textShadowBlue }}
          >
            Q
          </span>
          <span style={{ textShadow: textShadowBlue }}>uest</span>
        </h1>
      )}
    </div>
  )
}

export default Title
