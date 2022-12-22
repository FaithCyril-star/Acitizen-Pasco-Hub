import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

class Footer extends React.Component{
  render (){
    
    return (
  <Container
    as="footer"
    role="contentinfo"
    py={{
      base: '12',
      md: '16',
    }} 
  >
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/faith-cyril/"
            aria-label="LinkedIn"
            target="_blank"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="https://github.com/FaithCyril-star"  target="_blank" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Created by Faith Cyril.
      </Text>
    </Stack>
  </Container>
)}}

export default Footer;