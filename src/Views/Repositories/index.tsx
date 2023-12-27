/* eslint-disable react-hooks/exhaustive-deps */
import {
  Heading,
  Icon,
  Card,
  CardHeader,
  CardFooter,
  Flex,
  CardBody,
  Text,
  Badge,
} from '@chakra-ui/react';
import { MdStarOutline } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux';
import { RootStateProps } from '../../Redux/store';
import { useEffect } from 'react';
import { getRepoDetails } from '../../Redux/github/actions';
import { useParams } from 'react-router-dom';

const Repositories = () => {
  const { githubState } = useAppSelector((state: RootStateProps) => state);
  const dispatch = useAppDispatch();

  const { repo } = useParams();

  useEffect(() => {
    if (repo) {
      dispatch(getRepoDetails(githubState.user?.login + '/' + repo));
    }
  }, []);

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">{githubState.repoDetails?.full_name}</Heading>
        </CardHeader>
        <CardBody>
          <Text>Descrição: {githubState.repoDetails?.description}</Text>
        </CardBody>
        <CardFooter>
          <Flex>
            <Flex me="25px">
              <Icon
                as={MdStarOutline}
                w="20px"
                h="20px"
                me="6px"
                color="green.400"
              />
              <Text>Estrelas: {githubState.repoDetails?.stargazers_count}</Text>
            </Flex>
            <Flex me="125px">
              <Badge p={2}>
                <Text as="h3">{githubState.repoDetails?.language}</Text>
              </Badge>
            </Flex>
            <Flex me="125px">
              <a
                target="_blank"
                href={`https://github.com/${githubState.repoDetails?.owner?.login}/${repo}`}
              >
                Ver no github
              </a>
            </Flex>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

export default Repositories;
