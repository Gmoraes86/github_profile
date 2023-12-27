import {
  Container,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useAppSelector } from '../../Hooks/useRedux';
import { RootStateProps } from '../../Redux/store';

const ProfileCard = () => {
  const boxBg = useColorModeValue('white !important', '#111c44 !important');
  const mainText = useColorModeValue('gray.800', 'white');
  const secondaryText = useColorModeValue('gray.400', 'gray.400');

  const { githubState } = useAppSelector((state: RootStateProps) => state);

  return (
    <Flex
      borderRadius="20px"
      p="20px"
      alignItems="center"
      direction="column"
      border="solid 1px #e2e8f0"
    >
      <Container bgColor="blue.500" borderRadius="20px" w="100%" />
      <Flex flexDirection="column" mb="30px">
        <Image
          src={githubState.user?.avatar_url}
          border="5px solid red"
          mx="auto"
          borderColor={boxBg}
          width="68px"
          height="68px"
          mt="-38px"
          borderRadius="50%"
        />
        <Text
          fontWeight="600"
          color={mainText}
          textAlign="center"
          fontSize="xl"
        >
          {githubState.user?.name}
        </Text>
        <Text
          color={secondaryText}
          textAlign="center"
          fontSize="sm"
          fontWeight="500"
        >
          {githubState.user?.email}
        </Text>
        <Text
          color={secondaryText}
          textAlign="center"
          fontSize="sm"
          fontWeight="500"
        >
          {githubState.user?.location}
        </Text>
        <Text
          color={secondaryText}
          textAlign="center"
          fontSize="sm"
          fontWeight="500"
        >
          {githubState.user?.company}
        </Text>
        <Text
          color={secondaryText}
          textAlign="center"
          fontSize="sm"
          fontWeight="500"
        >
          {githubState.user?.bio}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileCard;
