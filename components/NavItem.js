import { Box } from "@chakra-ui/react"

const CustomButton = ({ children }) => {
    return (
        <Box
            as='button'
            height='35px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='15px'
            borderRadius='5px'
            fontSize='14px'
            fontWeight='light'
            fontFamily='consolas'
            bg='gray.600'
            borderColor='gray.600'
            color='teal.200'
            opacity='0.8'
            _hover={{ 
                bg: 'grey.800',
                boxShadow:
                '0 0 1px 2px rgba(50, 50, 50, .75), 0 1px 10px rgba(100, 100, 100, .75)',
                opacity: '1',
                color: 'teal.100'
            }}
            _active={{
                bg: 'gray.400',
                transform: 'scale(1.1)',
                borderColor: 'gray.400',
            }}
            _focus={{
                boxShadow:
                '0 0 1px 2px rgba(50, 50, 50, .75), 0 1px 10px rgba(100, 100, 100, .75)',
            }}
            boxShadow=
                '0 0 0 0 rgba(70, 70, 70, .8), 0 1px 5px 0 rgba(100, 100, 100, .85)'
        >
            {children}
        </Box>
    )
}

const Navitem = ({ children }) => {
    return (
        <CustomButton>
            {children}
        </CustomButton>
    )
}

export default Navitem