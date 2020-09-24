import React from 'react'
import { Box, Heading, Flex, Link, Text, FlexProps } from '@chakra-ui/core'

interface MenuItem {
  link?: string
}

const MenuItems: React.FC<MenuItem> = ({ children, link }) => (
  <Link
    href={link}
    mt={{ base: 4, md: 0 }}
    mr={'36px'}
    display="block"
    fontWeight="medium"
    fontSize="md"
  >
    {children}
  </Link>
)

const Nav = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      zIndex="999"
      width="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX={{ base: '1.5em', xl: '15%' }}
      paddingY="1.5em"
      bg="rgba(255,255,255,.8)"
      color="black"
      textTransform="uppercase"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" color="orange.500">
          <Text display="inline" fontWeight="extrabold">
            Interior
          </Text>{' '}
          <Text display="inline" fontWeight="medium">
            Design
          </Text>
        </Heading>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="#FBA442"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
      >
        <MenuItems>Home</MenuItems>
        <MenuItems>About</MenuItems>
        <MenuItems>Services</MenuItems>
        <MenuItems>Gallery</MenuItems>
        <MenuItems>Blog</MenuItems>
        <MenuItems>Contact</MenuItems>
      </Box>
    </Flex>
  )
}

export default Nav
