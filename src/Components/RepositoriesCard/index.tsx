import {
  Card,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useAppSelector } from '../../Hooks/useRedux';
import { RootStateProps } from '../../Redux/store';
import { RepoProps } from '../../Models/Repo';

import {
  MdOutlineArrowUpward,
  MdOutlineArrowDownward,
  MdStarOutline,
} from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RepositoriesCard = () => {
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const { githubState, requestsState } = useAppSelector(
    (state: RootStateProps) => state
  );

  const sortRepos = (a: RepoProps, b: RepoProps) => {
    if (order === 'asc') {
      return a.stargazers_count - b.stargazers_count;
    } else {
      return b.stargazers_count - a.stargazers_count;
    }
  };

  const repos = [...(githubState.repos || [])];
  repos.sort(sortRepos);

  return (
    <>
      {requestsState.getUserRepos === 'pending' && (
        <Stack>
          <Skeleton height="120px" />
          <Skeleton height="120px" />
          <Skeleton height="120px" />
        </Stack>
      )}
      {requestsState.getUserRepos === 'rejected' && (
        <Stack>
          <Text>Erro ao carregar repositórios</Text>
        </Stack>
      )}
      {requestsState.getUserRepos === 'fulfilled' && (
        <>
          <Heading size="md" mb="4" mt={16}>
            Repositórios ({githubState.repos?.length}){' '}
            <Icon
              as={
                order === 'asc' ? MdOutlineArrowUpward : MdOutlineArrowDownward
              }
              w="20px"
              h="20px"
              me="6px"
              color="green.400"
              onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
            />
          </Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {repos.map((repo: RepoProps) => (
              <Link to={`/repositories/${repo.name}`}>
                <Card>
                  <CardHeader>
                    <Heading size="md">{repo.name}</Heading>
                  </CardHeader>
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
                        <Text fontSize="sm" my="auto" fontWeight="500">
                          {repo.stargazers_count}
                        </Text>
                      </Flex>
                    </Flex>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default RepositoriesCard;
