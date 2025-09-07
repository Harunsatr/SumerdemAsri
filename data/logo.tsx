import { chakra, HTMLChakraProps, Box, Text, Stack } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => (
  <Stack direction="row" align="center" spacing={3}>
    <Box boxSize="28px" minW={0} ml={9}>
      <chakra.img
      src="/static/images/LogoSumberdem.png"
      alt="Logo"
      objectFit="contain"
      width="110%"
      height="120%"
      {...props}
      boxSize="200%"
      />
    </Box>
    <Box>
      <Text fontWeight="bold" fontSize="md" lineHeight="1.1">
        DESA SUMBERDEM
      </Text>
      <Text fontSize="sm" color="white.700" fontWeight="normal">
        WONOSARI - MALANG
      </Text>
    </Box>
  </Stack>
)