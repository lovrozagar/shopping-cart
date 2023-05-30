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
    <div>
      {isActiveLink ? (
        <Link to='/' className='flex items-center'>
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
