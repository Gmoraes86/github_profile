import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useAppSelector } from '../../Hooks/useRedux';
import { RootStateProps } from '../../Redux/store';

const Summary = () => {
  const boxBg = useColorModeValue('white !important', '#111c44 !important');
  const mainText = useColorModeValue('gray.800', 'white');
  const secondaryText = useColorModeValue('gray.400', 'gray.400');

  const { githubState } = useAppSelector((state: RootStateProps) => state);

  return (
    <Flex
      borderRadius="20px"
      bg={boxBg}
      p="20px"
      alignItems="center"
      direction="column"
    >
      <Flex justify="space-between" w="100%" px="36px">
        <Flex flexDirection="column">
          <Text
            fontWeight="600"
            color={mainText}
            fontSize="xl"
            textAlign="center"
          >
            {githubState.user?.public_repos}
          </Text>
          <Text color={secondaryText} fontWeight="500">
            Repositórios Públicos
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text
            fontWeight="600"
            color={mainText}
            fontSize="xl"
            textAlign="center"
          >
            {githubState.user?.followers}
          </Text>
          <Text color={secondaryText} fontWeight="500">
            Seguidores
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text
            fontWeight="600"
            fontSize="xl"
            color={mainText}
            textAlign="center"
          >
            {githubState.user?.following}
          </Text>
          <Text color={secondaryText} fontWeight="500">
            Seguindo
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Summary;
