import { styled } from '../stitches.config'

export default function Footer() {
  const links = [
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/omatheusfc/',
      icon: 'ri-instagram-line',
      color: '#e1306c',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/MatheusFC2',
      icon: 'ri-github-line',
      color: '#777',

    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/matheus-freitas-campos-235305137/',
      icon: 'ri-linkedin-line',
      color: '#0077b5',

    },
    {
      title: 'Twitch',
      url: 'https://www.twitch.tv/omatheusfc',
      icon: 'ri-twitch-line',
      color: '#9146ff',

    },
    {
      title: 'Source',
      url: 'https://github.com/MatheusFC2/Portfolio',
      icon: 'ri-braces-line',
      color: '#f1f1f1',

    },
  ]

  return (
    <Container>
      {links.map((link, index) => {
        return (
          <Anchor
            css={{
              "&:hover": {
                color: link.color,
                "i::before": {
                  color: link.color,
                }
              }
            }}

            key={index} href={link.url} target="_blank">
            <Title>{link.title}</Title>
            <Icon className={link.icon} />
          </Anchor>
        )
      })}
    </Container>
  )
}

const Container = styled('footer', {
  background: '$background',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 0',
  zIndex: '1',
})

const Icon = styled('i', {
  color: '$primary',
  opacity: 1,
  marginLeft: '5px',
  marginTop: '1px',
  fontSize: '24px',
  '@bp2': { opacity: 0, fontSize: '16px' },
})

const Anchor = styled('a', {
  color: '$secondary',
  display: 'flex',
  fontSize: '15px',
  border: 0,
  marginLeft: '20px',
  textDecoration: 'none',
  textTransform: 'lowercase',
  transition: 'color $duration ease-in-out',
  '&:hover, &:focus': {
    opacity: 1,
  },
  [`&:hover ${Icon}`]: {
    transition: 'opacity $duration ease-in-out',
    opacity: 1,
  },
  '&:first-child': { margin: '0' },
})

const Title = styled('span', {
  display: 'none',
  '@bp2': { display: 'block' },
})
